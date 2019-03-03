<?php

namespace App\Http\Requests;


use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class TodoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
    //  */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // logger($this);
        return [
            'title'=>'required | max:10'
        ];
    }

    public function messages()
    {
        return [

        ];
    }


    public function attributes()
    {
        return [
            'title' => 'Todo',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        // logger($validator);
        // $response['data']=[];
        // $response['status'] = 'NG';
        // $response['summary'] = 'Failed validation.';
        // $response['errors'] = $validator->errors()->toArray();

        // throw new HttpResponseException(
        //     response()->json($response,422)
        // );


        $errors = (new ValidationException($validator))->errors();
        // $test_error = $errors['title'][0];
        // logger($test_error);
        throw new HttpResponseException(response()->json(['errors' => $errors
        ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY));


    }

}




<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
        logger($this);
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

    //バリデーションエラーの場合、json形式でレスポンスする
    public function response(array $errors)
    {
        $response['status'] = 'error';
        $response['message'] = $errors;

        return \Response::json($response,200);
    }

}




<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TodoRequest;
use App\Todo;

class TodoController extends Controller
{

    public function getTodos(){
        $todos = Todo::all();

        return $todos;
    }

    public function create(TodoRequest $request){
        logger('【TodoController create】');
        logger($request);

        $todo = new Todo;
        $todo->title = $request->title;
        $todo->save();

        return response()->json([
            'title'=>$request->title
        ]);
    }


    public function edit(Request $request){
        logger($request->id);

        $todo = Todo::find($request->id);
        $todo->title = $request->new_title;
        $todo->save();
    }

    public function delete(Request $request){
        logger($request);
        $todo = Todo::find($request->id);
        $todo->delete();
    }


}

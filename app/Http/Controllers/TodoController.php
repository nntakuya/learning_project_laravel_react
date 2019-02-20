<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function getTodos(){
        $todos = Todo::all();

        return $todos;
    }

    public function create(Request $request){
        logger('【TodoController create】');
        // logger($request->title);

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


    // public function addTodo(Request $request){
    //
    //
    //     $todo = new Todo;
    //     $todo->title = $request->title;
    //     $todo->save();
    //
    //     $todos = Todo::all();
    //     return $todos;
    // }
    //
    // public function deleteTodo(Request $request){
    //     $todo = Todo::find($request->id);
    //     $todo->delete();
    //
    //     $todos = Todo::all();
    //     return $todos;
    //
    // }


}

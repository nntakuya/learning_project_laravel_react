<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware'=>'api'],function(){
    //デモのルーティング
    Route::get('get','TodoController@getTodos');
    Route::post('add','TodoController@addTodo');
    Route::post('del','TodoController@deleteTodo');

    //アプリ用ルーティング
    Route::get('getTodos','TodoController@getTodos');
    Route::post('createTodo','TodoController@create');
    Route::post('editTodo','TodoController@edit');
    Route::post('deleteTodo','TodoController@delete');
});

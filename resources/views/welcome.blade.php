<!DOCTYPE html>
<html lang="js">
    <head>
        <meta charset="utf-8">
        {{-- headタグに"csrf_token()"をする理由を調べる --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <title>React Test</title>
    </head>

    <body>
        <div id="app">
            <div class="container">
                <h3 class="mt-5">Todo 管理システム</h3>
                <div id="todoApp"></div>
            </div>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

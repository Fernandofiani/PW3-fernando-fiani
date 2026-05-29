<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
use App\Http\Controllers\GameController;

Route::get('/buscar/{nome}', [GameController::class, 'search']);
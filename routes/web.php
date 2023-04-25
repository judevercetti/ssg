<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BlogController::class, 'index']);
Route::get('/blog/{id}', [BlogController::class, 'show']);
Route::post('/blog/comment', [BlogController::class, 'comment']);
Route::post('/blog/like', [BlogController::class, 'like']);

Route::get('/blogpost', function () {
    return Inertia::render('Userside/ArticleScreen');
});


Route::get('/uploadarticle', [BlogController::class, 'displayUploadArticle']);
Route::post('/uploadarticle', [BlogController::class, 'store']);
Route::get('/category/{category}', [BlogController::class, 'dispayCategoryBlogs']);

Auth::routes();

Route::get('/home', [BlogController::class, 'index'])->name('home');
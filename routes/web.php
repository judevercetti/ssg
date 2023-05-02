<?php

use App\Http\Controllers\AdminBlogController;
use App\Http\Controllers\AdminVideoController;
use App\Http\Controllers\AdvertiseRequestController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\SubscriptionController;
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
Route::get('/about-us', fn()=>Inertia::render('AboutUs'));
Route::get('/contact-us', fn()=>Inertia::render('ContactUs'));
Route::get('/advertise', fn()=>Inertia::render('Advertise'));
Route::post('/advertise', [AdvertiseRequestController::class, 'store']);
Route::get('/terms-of-use', fn() => Inertia::render('TermsOfUse'));
Route::get('/privacy-policy', fn()=>Inertia::render('PrivacyPolicy'));


Route::post('/subscribe', [SubscriptionController::class, 'store']);
Route::get('/search', [BlogController::class, 'search']);
Route::post('/comment', [BlogController::class, 'comment']);
Route::post('/like', [BlogController::class, 'like']);

Route::middleware('admin')->group(function () {
    Route::get('/admin', fn()=>redirect('/admin/blog'));
    Route::resource('/admin/ssgtv', AdminVideoController::class);
    Route::resource('/admin/blog', AdminBlogController::class)->only('index', 'show', 'store', 'update', 'destroy');
});


Auth::routes();
Route::get('/home', [BlogController::class, 'index'])->name('home');

Route::get('/category/{category}', [BlogController::class, 'dispayCategoryBlogs']);
Route::get('/{id}', [BlogController::class, 'show']);
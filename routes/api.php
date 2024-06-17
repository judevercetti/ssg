<?php

use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', function (Request $request) {
    $perPage = 1;
    $page = $request->input('page', 1);

    $categories = BlogCategory::whereNotIn('name', ['Editorial', 'Politics', 'World', 'Regional', 'Africa'])
        ->has('twoBlog')
        ->with('twoBlog')->latest()
        ->skip(($page - 1) * $perPage)
        ->take($perPage)
        ->get();

    return response()->json($categories);
});

Route::get('/categories/{category}/posts', fn(BlogCategory $category) => response()->json($category->blog));
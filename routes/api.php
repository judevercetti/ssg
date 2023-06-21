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

// Route::get('/categories/{slug}', function ($slug) {
//     $category = BlogCategory::where('slug', $slug)->firstOrFail();

//     $blogs = Blog::where('category_id', $category->id)
//         ->orderBy('created_at', 'desc')
//         ->paginate(2);

//     return response()->json([
//         'category' => $category,
//         'posts' => $blogs,
//     ]);
// });

Route::get('/categories', function (Request $request) {
    $perPage = 1; // Number of posts per page
    $page = $request->input('page', 1);

    $categories = BlogCategory::with('twoBlog')->latest()
        ->skip(($page - 1) * $perPage)
        ->take($perPage)
        ->get();

    return response()->json($categories);
});

Route::get('/categories/{category}/posts', fn(BlogCategory $category) => response()->json($category->blog));
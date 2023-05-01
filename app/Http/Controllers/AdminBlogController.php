<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminBlogController extends Controller
{
    public function index()
    {
        $posts = Blog::latest()->get();
        $categories = BlogCategory::all();

        return Inertia::render('AdminBlog', [
            'posts' => $posts,
            'categories' => $categories,
        ]);
    }

    public function show($blog)
    {
        $post = Blog::where('slug', $blog)->first();
        $categories = BlogCategory::all();

        if ($post) {
            return Inertia::render('AdminBlogDetail', ['postData' => $post, 'categories' => $categories]);
        }

        return Inertia::render('AdminBlogDetail', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category' => 'required',
            'content' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $value = $request->input('title') . ' ' . Str::random();
        $slug = Str::slug($value . '-');

        $file = $request->file('image');
        $filename = $slug . '.' . $file->extension();
        $path = $file->storeAs('/images/blog', $filename, ['disk' => 'public_uploads']);

        $blog = Blog::create([
            'title' => $request->input('title'),
            'slug' => $slug,
            'description' => $request->input('description'),
            'category' => $request->input('category'),
            'content' => $request->input('content'),
            'uploadedby' => auth()->id(),
            'imageurl' => $path
        ]);

        return redirect('/admin/blog');
    }

    public function update(Request $request, $slug)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category' => 'required',
            'content' => 'required',
            // 'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $blog = Blog::where('slug', $slug)->first();
        $blog->title = $request->input('title');
        $blog->content = $request->input('content');
        $blog->description = $request->input('description');
        $blog->category = $request->input('category');

        // $file = $request->file('image');
        // if ($file) {
        //     $filename = $slug . '.' . $file->extension();
        //     $path = $file->storeAs('/images/blog', $filename, ['disk' => 'public_uploads']);
        //     $blog->imageurl = $path;
        // }

        $blog->save();
    }


    public function destroy($slug)
    {
        Blog::where('slug', $slug)->delete();
        return redirect('/admin/blog');
    }
}
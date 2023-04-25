<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\BlogComment;
use App\Models\BlogCommentLike;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        //
    
        $latest = Blog::latest()->first();
        $latests = Blog::latest()->limit(4)->get();
        $trending_posts = Blog::latest()->limit(4)->get();
        //$categories = BlogCategory::all();

        
        
        $blog_category = BlogCategory::with(['blog'=> function($query){$query->limit(4);}])->get();
        //return Response($entertainment);
        return Inertia::render('Userside/Home', [
            'latest' =>$latest,
            'latests' =>$latests,
            'blog_category'=> $blog_category,
            'trending_posts'=> $trending_posts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $title = $request->input('articleTitle');
        $description = $request->input('articleDescription');
        $category = $request->input('articleCategory');
        $content = $request->input('articleContent');
        $value = $title.' '. Str::random();
        $slug = Str::slug($value.'-');

        $file= $request->file('articleImage');
        $filename= $slug . '.'.$file->extension();;
        // $file-> move(public_path('/images/blogpictures'), $filename);
        
        $path = $file->storeAs('/images/blogpictures', $filename, ['disk'=>'public_uploads']);

        $blog = Blog::create([
            'title'=>$title,
            'slug'=>$slug,
            'description'=>$description,
            'category'=>$category,
            'content'=>$content,
            'uploadedby'=>1,
            'imageurl'=>$path
        ]);
        


    }
    
    public function show($blog)
    {
        //
        $blog= Blog::where('slug',$blog)->first();
        $categoryid = $blog->category;
        $category_name = BlogCategory::where('id',$categoryid)->first();
        $category = Blog::where('category',$categoryid)->latest()->limit(4)->get();
        $latests = Blog::latest()->limit(6)->get();
        $comments = $blog->blogComments;
        return Inertia::render('Userside/ArticleScreen', ['blog' => $blog, 'category_name'=> $category_name, 'category'=>$category, 'latests'=>$latests, 'comments'=>$comments]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        //
    }

    public function displayUploadArticle()
    {
        //
        $categories = BlogCategory::all();

        //return Response($category);
        return Inertia::render('Admins/UploadArticleScreen', ['categories'=>$categories]);

    }

    public function dispayCategoryBlogs(Request $request)
    {
        //
        $category = $request->category;

        $getid = BlogCategory::where('name',$category)->first()->id;

        $blogs = Blog::where('category',$getid)->get();
        return Inertia::render('Userside/CategoryScreen', ['blogs'=>$blogs, 'category'=>$category]);
       
    }

    public function comment(Request $request)
    {
        $comment = $request->input('body');
        $blog_id = $request->input('blog_id');
        $parent_id = $request->input('parent_id');
        $user = auth()->user()->id;
        $query = BlogComment::create([
            'blog_id' => $blog_id,
            'parent_id' => $parent_id,
            'user_id' => $user,
            'body' => $comment,
        ]);
    }

    public function like(Request $request)
    {
        $comment_id = $request->input('parent_id');
        $user_id = auth()->id();
        $like = BlogCommentLike::where('comment_id', $comment_id)->where('user_id', $user_id)->first();

        if ($like) {
            $like->delete();
        }
        else {   
            BlogCommentLike::create([
                'comment_id' => $comment_id,
                'user_id' => $user_id,
            ]);
        }
    }
}

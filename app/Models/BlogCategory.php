<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;

    protected $table = 'blog_category';

    public function blog()
    {
        return $this->hasMany(Blog::class, 'category')->latest();
    }

    public function twoBlog()
    {
        return $this->hasMany(Blog::class, 'category')->latest()->take(2);
    }

    public function videos()
    {
        return $this->hasMany(Video::class, 'category_id');
    }
}
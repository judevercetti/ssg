<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogComment extends Model
{
    use HasFactory;
    protected $table = 'blog_comment';

    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}

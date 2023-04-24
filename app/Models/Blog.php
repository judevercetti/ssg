<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = 'blog';

    protected $fillable = [
        'title',
        'description',
        'slug',
        'category',
        'content',
        'imageurl',
        'uploadedby'
    ];

   
    public function blogCategory(){
        return $this->belongsTo(BlogCategory::class);
    }

    public function blogComments()
    {
        return $this->hasMany(BlogComment::class);
    }
}

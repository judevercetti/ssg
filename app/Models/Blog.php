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
        'image_description',
        'uploadedby'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'uploadedby');
    }

    public function blogCategory()
    {
        return $this->belongsTo(BlogCategory::class);
    }

    public function blogComments()
    {
        return $this->hasMany(BlogComment::class)->with(['user:id,name', 'replies'])
            ->withCount('likes')
            ->whereNull('parent_id');
    }
}
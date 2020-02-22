<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    function user()
    {
        return $this->belongsTo(User::class);
    }
    function category()
    {
        return $this->belongsTo(Category::class,'cat_id');
    }
}

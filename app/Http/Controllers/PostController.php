<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Posts;

class PostController extends Controller
{
    public function all_post()
    {
        $category = Category::with('posts')->get();
        return $category;
    }
}

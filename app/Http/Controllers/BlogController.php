<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class BlogController extends Controller
{
    function get_all_blog_post()
    {
        $posts = Post::with('user','category')->get();
        return response()->json([
            'posts'=>$posts
        ],200);
    }
}

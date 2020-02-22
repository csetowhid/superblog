<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function all_post()
    {
        $posts = Post::all();
        return response()->json([
            'posts'=>$posts
        ],200);
    }
}

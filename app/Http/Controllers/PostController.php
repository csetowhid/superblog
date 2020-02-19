<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Posts;

class PostController extends Controller
{
    public function all_post()
    {
        $posts = Posts::with('user')->get();
        return $posts;
    }
}

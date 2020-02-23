<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function all_post()
    {
        $posts = Post::with('user','category')->get();
        return response()->json([
            'posts'=>$posts
        ],200);
    }
    function save(Request $request)
    {
    	$post=new Post();
    	$post->title=$request->title;
    	$post->description=$request->description;
    	$post->cat_id=$request->cat_id;
    	$post->save();
    }
}

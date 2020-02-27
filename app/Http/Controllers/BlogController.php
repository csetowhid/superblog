<?php

namespace App\Http\Controllers;

use App\Category;
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
    function getpost_ny_id($id)
    {
        $post = Post::with('user','category')->where('id',$id)->first();
        return response()->json([
            'post'=>$post
        ],200);
    }
    function get_all_category()
    {
        $categories = Category::all();
        return response()->json([
            'categories'=>$categories
        ],200);
    }
    function get_all_post_by_category($id)
    {
        $posts = Post::with('user','category')->where('cat_id',$id)->get();
        return response()->json([
            'posts'=>$posts
        ],200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function add_category(Request $request)
    {
        $this->validate($request,[
            'cat_name'=>'required|min:2|max:50'
        ]);
        $category = new Category();
        $category->cat_name=$request->cat_name;
        $category->save();
        return $request->all();
    }
    function all_category()
    {
        $category=Category::all();
        return response()->json([
            'categories'=>$category
        ],200);
    }
    function delete_category($id)
    {
        $category = Category::find($id);
        $category->delete();
    }
}

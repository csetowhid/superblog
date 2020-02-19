<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function psts()
    {
        return $this->hasMany(Posts::class);
    }
    
}

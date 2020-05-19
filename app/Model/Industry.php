<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    public function businesses()
    {
        return $this->hasMany(Businesses::class);
    }
}

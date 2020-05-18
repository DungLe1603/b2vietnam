<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    public function bussinesses() {
        return $this->hasMany(Business::class);
    }
}

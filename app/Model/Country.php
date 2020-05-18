<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public function bussinesses() {
        return $this->hasMany(Business::class);
    }
}

<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Translater extends Model
{
    public function user() {
        return $this->hasOne(User::class);
    }
}

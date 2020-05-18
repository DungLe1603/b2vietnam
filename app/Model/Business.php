<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    public function industry()
    {
        return $this->belongsTo(Industry::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}

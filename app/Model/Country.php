<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public function business() {
        return $this->belongsTo(Business::class);
    }
}

<?php

namespace App\Model;

use App\Model\User;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = [
        'name', 'industry_id','user_id','country_id','description','address','product',
        'business_type','date','tax_id', 'avatar'
    ];
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
        return $this->hasOne(User::class,'id');
    }
}

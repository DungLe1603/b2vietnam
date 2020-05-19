<?php

namespace App\Http\Services;

use App\Model\Business;
use App\Model\User;
use Illuminate\Http\Request;

class BusinessServices
{
    public static function sellerBusinesses()
    {
        return Business::where('business_type', 1);
    }

    public static function buyerBusiness() {
        return Business::where('business_type', 0);
    }

    public static function getBusinessByCountry($id)
    {
        return Business::where('country_id', $id);
    }

    public static function getBusinessByIndustry($id)
    {
        return Business::where('industry_id', $id);
    }

    public static function searchBusiness($search)
    {
        return Business::where('description', 'like', $search)->orWhere('product', 'like', $search);
    }
}

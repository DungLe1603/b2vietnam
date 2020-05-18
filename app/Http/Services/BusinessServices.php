<?php

namespace App\Http\Services;

use App\Model\Business;
use Illuminate\Http\Request;

class BusinessServices
{
    public static function sellBusinesses()
    {
        return Business::where('business_type', 1);
    }

    public static function buyBusiness() {
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

    public static function searchBusiness(Request $request)
    {
        $search = '%' . $request->data . '%';

        return Business::where('description', 'like', $search)->orWhere('product', 'like', $search);
    }
}

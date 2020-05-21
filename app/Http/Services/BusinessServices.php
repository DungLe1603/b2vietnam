<?php

namespace App\Http\Services;

use App\Model\Business;
use App\Model\Country;
use App\Model\Industry;
use App\Model\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BusinessServices
{
    public static function detail($id)
    {
        $business = Business::find($id);
        $business['avatar'] = Storage::disk('gcs')->url($business->avatar);
        $business['email'] = $business->user->email;

        return $business;
    }

    public static function sellerBusinesses()
    {
        return Business::where('business_type', 1);
    }

    public static function buyerBusiness()
    {
        return Business::where('business_type', 0);
    }

    public static function getBusinessByCountry($id)
    {
        return Business::where('country_id', $id);
    }

    public static function getBusinessByIndustry($id)
    {
        $businessIndustry = Business::where('industry_id', $id)->get();

        foreach ($businessIndustry as $item) {
            $item->avatar = Storage::disk('gcs')->url($item->avatar);
        }

        return $businessIndustry;
    }

    public static function getIndustryId($value)
    {
        $industry = Industry::where('name', 'like', '%' . $value . '%')->first();
        if ($industry == null) {
            return $industryId = '';
        }

        return $industry->id;
    }

    public static function getCountryId($value)
    {
        $country = Country::where('name', 'like', '%' . $value . '%')->first();
        if ($country == null) {
            return $countryId = '';
        }

        return $country->id;
    }

    public static function searchBusiness($search)
    {
        $industryId = self::getIndustryId($search);
        $countryId = self::getCountryId($search);

        return Business::where('description', 'like', '%' . $search . '%')->orWhere('product', 'like', '%' . $search . '%')
            ->orWhere('industry_id', 'like', $industryId)->orWhere('country_id', 'like', $countryId);
    }

//    public static function searchBusiness1($search, $choose)
//    {
//        $year = Carbon::now()->year;
//        switch ($choose) {
//            case 1:
//                return Business::whereYear('date', '>=', $year - 3)->where(function ($q) use ($search) {
//                    $q->where('description', 'like', '%' . $search . '%')->orWhere('product', 'like', '%' . $search . '%')->get();
//                });
//            case 2:
//                return Business::whereYear('date', '<=', $year - 3)->whereYear('date', '>=', $year - 5)->where(function ($q) use ($search) {
//                    $q->where('description', 'like', '%' . $search . '%')->orWhere('product', 'like', '%' . $search . '%')->get();
//                });
//            default:
//                return Business::whereYear('date', '<=', $year - 3)->where(function ($q) use ($search) {
//                    $q->where('description', 'like', '%' . $search . '%')->orWhere('product', 'like', '%' . $search . '%')->get();
//                });
//        }
//    }
}

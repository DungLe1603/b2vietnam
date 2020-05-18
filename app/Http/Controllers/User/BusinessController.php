<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Services\BusinessServices;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BusinessController extends Controller
{
    public function getSellBusiness(Request $request)
    {
        $businesses = BusinessServices::sellBusinesses()->get();

        return $this->sendResult(
            'Get Businesses Successful',
            compact('businesses'),
            Response::HTTP_OK
        );
    }

    public function getBuyBusiness(Request $request)
    {
        $businesses = BusinessServices::buyBusiness()->get();

        return $this->sendResult(
            'Get Businesses Successful',
            compact('businesses'),
            Response::HTTP_OK
        );
    }

    public function getBusinessByCountry($id)
    {
        $businesses = BusinessServices::getBusinessByCountry($id)->get();

        return $this->sendResult(
            'Get Businesses Successful',
            compact('businesses'),
            Response::HTTP_OK
        );
    }

    public function getBusinessByIndustry($id)
    {
        $businesses = BusinessServices::getBusinessByIndustry($id)->get();

        return $this->sendResult(
            'Get Businesses Successful',
            compact('businesses'),
            Response::HTTP_OK
        );
    }

    public function searchBusiness(Request $request)
    {
        $businesses = BusinessServices::searchBusiness($request)->get();

        return $this->sendResult(
            'Search Successfull',
            compact('businesses'),
            Response::HTTP_OK
        );
    }
}

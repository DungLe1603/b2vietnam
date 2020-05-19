<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Services\BusinessServices;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BusinessController extends Controller
{
    public function getSellerBusiness(Request $request)
    {
        $businesses = BusinessServices::sellerBusinesses()->get();

        return $this->sendResult(
            'Get Businesses Successful',
            compact('businesses'),
            Response::HTTP_OK
        );
    }

    public function getBuyerBusiness(Request $request)
    {
        $businesses = BusinessServices::buyerBusiness()->get();

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
        $search = '%' . $request->data . '%';
        $businesses = BusinessServices::searchBusiness($search)->get();

        return $this->sendResult(
            'Search Successfull',
            compact('businesses'),
            Response::HTTP_OK
        );
    }
}

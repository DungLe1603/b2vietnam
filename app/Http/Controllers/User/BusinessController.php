<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBusinessRequest;
use App\Http\Requests\SearchRequest;
use App\Http\Services\BusinessServices;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Model\User;
use Illuminate\Support\Facades\Storage;

class BusinessController extends Controller
{
    public function register(CreateBusinessRequest $request)
    {
        $avatar = $request->file('avatar')->getClientOriginalName();
        Storage::disk('gcs')->putFileAs('', $request->file('avatar'), $avatar);
        $data = $request->all();
        $userBusiness = User::create([
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ])->business()->create([
            'name' => $data['name'],
            'industry_id' => $data['industry_id'],
            'country_id' => $data['country_id'],
            'description' => $data['description'],
            'address' => $data['address'],
            'product' => $data['product'],
            'business_type' => $data['business_type'],
            'date' => $data['date'],
            'tax_id' => $data['tax_id'],
            'avatar' => $avatar,
        ]);

        return $this->sendResult(
            'User Business was successfully created.',
            compact('userBusiness'),
            Response::HTTP_OK
        );
    }

    public function show($id)
    {
        $business = BusinessServices::detail($id);

        return $this->sendResult(
            'Get Businesses Detail Successful',
            compact('business'),
            Response::HTTP_OK
        );
    }

    public function getBusinessByIndustry($id)
    {
        $businesses = BusinessServices::getBusinessByIndustry($id);

        return $this->sendResult(
            'Get Businesses Successful',
            compact('businesses'),
            Response::HTTP_OK
        );
    }

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

    public function searchBusiness(SearchRequest $request)
    {
        $search = $request->search;
        $businesses = BusinessServices::searchBusiness($search)->get();

        return $this->sendResult(
            'Search Successfull',
            compact('businesses'),
            Response::HTTP_OK
        );
    }
//    public function searchBusiness1(Request $request)
//    {
//        $search = $request->data;
//        $choose = $request->choose;
//        $businesses = BusinessServices::searchBusiness1($search, $choose)->get();
//
//        return $this->sendResult(
//            'Search Successfull',
//            compact('businesses'),
//            Response::HTTP_OK
//        );
//    }
}

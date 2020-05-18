<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Services\UserServices;
use App\Model\Business;
use App\User;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function loginBusiness(Request $request)
    {
        if (!Auth::attempt($request->all())) {
            return $this->sendError(
                'Wrong email or password.',
                [],
                Response::HTTP_BAD_REQUEST
            );
        }

        return $this->sendResult(
            'Successful login',
            [],
            Response::HTTP_OK
        );
    }

    public function logout(Request $request)
    {
        return $this->sendResult(
            'Successful Logout',
            [],
            Response::HTTP_OK
        );
    }
}

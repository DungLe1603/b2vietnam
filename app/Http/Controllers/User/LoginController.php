<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Services\UserServices;
use Illuminate\Support\Carbon;
use JWTAuth;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function loginBusiness(LoginRequest $request)
    {
        if (!Auth::attempt($request->all())) {
            return $this->sendError(
                'Wrong email or password.',
                [],
                Response::HTTP_BAD_REQUEST
            );
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        $access_token = $tokenResult->accessToken;

        return $this->sendResult(
            'Successful login',
            compact('access_token'),
            Response::HTTP_OK
        );
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return $this->sendResult(
            'Successful Logout',
            [],
            Response::HTTP_ACCEPTED
        );
    }
}

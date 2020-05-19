<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::namespace('User')->group(function () {
    Route::group(['prefix' => 'business'], function () {
       Route::post('login','LoginController@loginBusiness')->name('loginBusiness');
       Route::get('logout','LoginController@logout')->name('logout');
       Route::get('country/{id}','BusinessController@getBusinessByCountry')->name('getBusinessByCountry');
       Route::get('sellBusiness','BusinessController@getSellBusiness')->name('getSellBusiness');
       Route::get('buyBusiness','BusinessController@getBuyBusiness')->name('getBuyBusiness');
       Route::get('industry/{id}','BusinessController@getBusinessByIndustry')->name('getBusinessByIndustry');
       Route::post('search','BusinessController@searchBusiness')->name('searchBusiness');
    });
    Route::group(['prefix' => 'translator'], function () {
        Route::get('index','TranslatorController@index')->name('index');
        Route::post('search','TranslatorController@searchByLanguage')->name('searchByLanguage');
    });
});

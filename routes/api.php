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

Route::namespace('User')->group(function () {
    Route::post('business/login', 'LoginController@loginBusiness')->name('loginBusiness');
    Route::post('business/register', 'BusinessController@register')->name('register');
    Route::group(['prefix' => 'business', 'middleware' => ['api', 'auth:api']], function () {
        Route::get('logout', 'LoginController@logout')->name('logout');
        Route::get('show/{id}', 'BusinessController@show')->name('show');
        Route::get('country/{id}', 'BusinessController@getBusinessByCountry')->name('getBusinessByCountry');
        Route::get('sellBusiness', 'BusinessController@getSellerBusiness')->name('getSellBusiness');
        Route::get('buyBusiness', 'BusinessController@getBuyerBusiness')->name('getBuyerBusiness');
        Route::get('industry/{id}', 'BusinessController@getBusinessByIndustry')->name('getBusinessByIndustry');
        Route::post('search', 'BusinessController@searchBusiness')->name('searchBusiness');
    });
    Route::group(['prefix' => 'translator', 'middleware' => ['api', 'auth:api']], function () {
        Route::get('index', 'TranslatorController@index')->name('index');
        Route::get('show/{id}', 'TranslatorController@show')->name('show');
        Route::post('search', 'TranslatorController@searchByLanguage')->name('searchByLanguage');
    });
});

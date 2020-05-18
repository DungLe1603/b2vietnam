<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Services\TranslatorServices;
use App\Model\Language;
use App\Model\Translater;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TranslatorController extends Controller
{
    public function index()
    {
        $translators = TranslatorServices::listAllTranslators();

        return $this->sendResult(
            'List All Translators',
            compact('translators'),
            Response::HTTP_OK
        );
    }

    public function searchByLanguage(Request $request)
    {
        $translators = TranslatorServices::searchByLanguage($request)->get();

        return $this->sendResult(
            'Search Successfull',
            compact('translators'),
            Response::HTTP_OK
        );
    }
}

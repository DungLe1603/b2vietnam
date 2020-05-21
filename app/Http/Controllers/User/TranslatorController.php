<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Services\TranslatorServices;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TranslatorController extends Controller
{
    public function index()
    {
        $translaterService = TranslatorServices::listAllTranslators();

        return $this->sendResult(
            'List All Translators',
            compact('translaterService'),
            Response::HTTP_OK
        );
    }

    public function show($id) {

        $translator = TranslatorServices::show($id)->get();

        return $this->sendResult(
            'Info Translator',
            compact('translator'),
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

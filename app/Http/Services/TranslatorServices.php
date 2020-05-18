<?php

namespace App\Http\Services;

use App\Model\Language;
use App\Model\Translater;
use Illuminate\Http\Request;

class TranslatorServices
{
    public static function listAllTranslators()
    {
        return Translater::all();
    }

    public static function searchByLanguage(Request $request)
    {
        $search = '%' . $request->language . '%';
        $languageId = Language::where('name', 'like', $search)->first()->id;
        $languageId = '%'.$languageId.'%';

        return Translater::where('language_id', 'like', $languageId);
    }
}

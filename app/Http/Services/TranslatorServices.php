<?php

namespace App\Http\Services;

use App\Model\Language;
use App\Model\Translator;
use Illuminate\Http\Request;

class TranslatorServices
{
    public static function listAllTranslators($paginate = 2)
    {
        return Translator::paginate($paginate);
    }

    public static function show($id)
    {
        return Translator::where('id', $id);
    }

    public static function searchByLanguage(Request $request)
    {
        $search = $request->search;
        $language = Language::where('name', 'like', '%' . $search . '%')->first();
        if ($language == null) {
            $languageId = '';

            return Translator::where('language_id', 'like', $languageId);
        }
        $languageId = '%' . $language->id . '%';
        return Translator::where('language_id', 'like', $languageId);
    }
}

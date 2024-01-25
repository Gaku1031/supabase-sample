<?php

namespace App\Http\Controllers;

use App\Models\LanguageContent;
use App\Models\Language;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class LanguageController extends Controller
{
    public function getLanguageTotalHours(string $userId): JsonResponse
    {
        // $userId = Auth::id();
        $totalHours = LanguageContent::getLanguageTotalHours($userId);
        return response()->json($totalHours, Response::HTTP_OK);
    }

    public function getAllLanguageNames(): JsonResponse
    {
        $languageNames =  Language::getAllLanguageNames();
        return response()->json($languageNames, Response::HTTP_OK);
    }
}

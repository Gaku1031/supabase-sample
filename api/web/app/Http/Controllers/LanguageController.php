<?php

namespace App\Http\Controllers;

use App\Models\LanguageContent;
use App\Models\Language;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\LanguageNameResource;

class LanguageController extends Controller
{
    public function getLanguageTotalHours(string $userId): JsonResponse
    {
        $totalHours = LanguageContent::getLanguageTotalHours($userId);
        return response()->json($totalHours, Response::HTTP_OK);
    }

    public function getAllLanguageNames(): JsonResponse
    {
        $languageNames = Language::getAllLanguageNames();
        return LanguageNameResource::collection($languageNames)->response()->setStatusCode(Response::HTTP_OK);
    }
}

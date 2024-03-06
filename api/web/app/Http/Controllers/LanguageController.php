<?php

namespace App\Http\Controllers;

use App\Models\LanguageContent;
use App\Models\Language;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\LanguageNameResource;
use Illuminate\Http\Request;
use App\Repositories\LanguageRepository;

class LanguageController extends Controller
{ 
    protected $languageRepository;

    public function __construct(LanguageRepository $languageRepository)
    {
        $this->languageRepository = $languageRepository;
    }

    public function getLanguageTotalHours(string $userId): JsonResponse
    {
        $totalHours = LanguageContent::getLanguageTotalHours($userId);
        return response()->json($totalHours, Response::HTTP_OK);
    }

    public function createLanguage(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string',
        ]);
        $language = $this->languageRepository->create($validated);
        return response()->json($language, Response::HTTP_OK);
    }

    public function updateLanguage(Request $request, int $languageId): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string',
        ]);
        $language = $this->languageRepository->update($validated, $languageId);
        return response()->json($language, Response::HTTP_OK);
    }


    public function getAllLanguageNames(): JsonResponse
    {
        $languageNames = Language::getAllLanguageNames();
        return LanguageNameResource::collection($languageNames)->response()->setStatusCode(Response::HTTP_OK);
    }

    public function getLanguageName(int $languageId): JsonResponse
    {
        $language = Language::getLanguageName($languageId);
        return response()->json($language, Response::HTTP_OK);
    }
}

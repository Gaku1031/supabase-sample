<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\LanguageContent;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;

class ContentController extends Controller
{
    public function getContentTotalHours(string $userId)
    {
        // $userId = Auth::id();
        $contentRatio = LanguageContent::getContentTotalHours($userId);
        return response()->json($contentRatio, Response::HTTP_OK);
    }

    public function getAllContentNames(): JsonResponse
    {
        $contents = Content::getAllContentNames();
        return response()->json($contents, Response::HTTP_OK);
    }
}

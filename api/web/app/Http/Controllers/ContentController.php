<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\LanguageContent;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\ContentNameResource;

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
        return ContentNameResource::collection($contents)->response()->setStatusCode(Response::HTTP_OK);
    }
}

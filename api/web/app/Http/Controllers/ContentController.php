<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\LanguageContent;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\ContentNameResource;
use Illuminate\Http\Request;
use App\Repositories\ContentRepository;

class ContentController extends Controller
{   
    protected $contentRepository;
    public function __construct(ContentRepository $contentRepository)
    {
        $this->contentRepository = $contentRepository;
    }

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

    public function getContentName(int $contentId): JsonResponse
    {
        $content = Content::getContentName($contentId);
        return response()->json($content, Response::HTTP_OK);
    }

    public function createContent(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
        ]);
        $content = $this->contentRepository->create($validated);
        return response()->json($content, Response::HTTP_OK);
    }

    public function updateContent(Request $request, int $contentId)
    {
        $validated = $request->validate([
            'name' => 'required|string',
        ]);
        $content = $this->contentRepository->update($validated, $contentId);
        return response()->json($content, Response::HTTP_OK);
    }
}

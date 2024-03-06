<?php

namespace App\Http\Controllers;

use App\Models\LanguageContent;
use App\Services\StudyService;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class StudyController extends Controller
{
    protected $studyService;

    public function __construct(StudyService $studyService)
    {
        $this->studyService = $studyService;
    }

    public function getTodayTotalHours(string $userId)
    {
        $hours = LanguageContent::getTodayTotalHours($userId);
        return response()->json($hours, Response::HTTP_OK);
    }

    public function getMonthTotalHours(int $year, int $month, string $userId)
    {
        $hours = LanguageContent::getMonthTotalHours($userId, $year, $month);
        return response()->json($hours, Response::HTTP_OK);
    }

    public function getAllTotalHours(string $userId)
    {
        $hours = LanguageContent::getAllTotalHours($userId);
        return response()->json($hours, Response::HTTP_OK);
    }

    public function getHoursPerMonth(int $year, int $month, string $userId)
    {
        $dailyHours = $this->studyService->getMonthlyHours($year, $month, $userId);
        return response()->json($dailyHours, Response::HTTP_OK);
    }

    public function store(Request $request, string $userId)
    {
        $validated = $request->validate([
            'study_date' => 'required|date',
            'contents.*' => 'required|integer|exists:contents,id',
            'languages.*' => 'required|integer|exists:languages,id',
            'study_hours' => 'required|numeric|min:0',
        ]);
        $study = $this->studyService->store($validated, $userId);
        return response()->json($study, Response::HTTP_OK);
    }
}

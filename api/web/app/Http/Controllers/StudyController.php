<?php

namespace App\Http\Controllers;

use App\Models\LanguageContent;
use App\Services\StudyService;
use Symfony\Component\HttpFoundation\Response;

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
}

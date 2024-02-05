<?php

namespace App\Services;

use App\Models\LanguageContent;
use Illuminate\Support\Facades\DB;

class StudyService
{
  public function getMonthlyHours(int $year, int $month, string $userId)
  {
    $startDate = sprintf("%04d-%02d-01", $year, $month);
    $endDate = date("Y-m-t", strtotime($startDate));

    $dailyHours = LanguageContent::whereBetween('study_date', [$startDate, $endDate])
        ->where('user_id', $userId)
        ->groupBy(DB::raw('DATE(study_date)'))
        ->orderBy('study_date', 'asc')
        ->get([
            DB::raw('DATE(study_date) as study_date'),
            DB::raw('SUM(hour) as total_hours')
        ])
        ->pluck('total_hours', 'study_date');

    // 1ヶ月分の日付と対応する学習時間を配列で作成
    $daysInMonth = date('t', strtotime($startDate));
    $monthlyHours = [];
    for ($day = 1; $day <= $daysInMonth; $day++) {
        $date = $year . '-' . sprintf('%02d', $month) . '-' . sprintf('%02d', $day);
        $monthlyHours[] = $dailyHours->get($date, 0);
    }

    return $monthlyHours;
  }

  public function store(array $validated, string $userId)
  {
    $studyDate = $validated['study_date'];
    $contents = $validated['contents'];
    $languages = $validated['languages'];
    $totalStudyTime = $validated['study_hours'];

    $timePerContentLanguage = $totalStudyTime / (count($contents) * count($languages));

    foreach ($languages as $languageId) {
        foreach ($contents as $contentId) {
            // 学習記録の保存
            LanguageContent::create([
              'language_id' => $languageId,
              'content_id' => $contentId,
              'user_id' => $userId,
              'hour' => $timePerContentLanguage,
              'study_date' => $studyDate,
            ]);
        }
    }
  }
}

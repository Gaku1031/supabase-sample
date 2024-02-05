<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class LanguageContent extends Model
{
    use HasFactory;

    protected $table = 'language_content';

    protected $fillable = [
        'language_id',
        'content_id',
        'user_id',
        'hour',
        'study_date',
    ];

    public static function getLanguageTotalHours(string $userId)
    {
        $languageTotalHours = self::select(DB::raw('language_id, SUM(hour) as total_hour'))
            ->where('user_id', $userId)
            ->groupBy('language_id')
            ->get()
            ->pluck('total_hour')
            ->all();

        return $languageTotalHours;
    }

    public static function getContentTotalHours(string $userId)
    { 
        $contentTotalHours = self::select(DB::raw('content_id, SUM(hour) as total_hour'))
            ->where('user_id', $userId)
            ->groupBy('content_id')
            ->get()
            ->pluck('total_hour')
            ->all();

        return $contentTotalHours;
    }

    public static function getTodayTotalHours(string $userId)
    {
        return self::where('user_id', $userId)
                ->whereDate('study_date', now())
                ->sum('hour');
    }

    public static function getMonthTotalHours(string $userId, int $year, int $month)
    {
        return self::where('user_id', $userId)
                ->whereYear('study_date', $year)
                ->whereMonth('study_date', $month)
                ->sum('hour');
    }

    public static function getAllTotalHours(string $userId)
    {
        return self::where('user_id', $userId)
                ->sum('hour');
    }
}

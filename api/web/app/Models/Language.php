<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public static function getAllLanguageNames()
    {
        return Language::all(['id', 'name']);
    }

    public static function getLanguageName(int $languageId)
    {
        return Language::where('id', $languageId)->first();
    }
}

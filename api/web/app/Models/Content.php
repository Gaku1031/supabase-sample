<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public static function getAllContentNames()
    {
        return Content::all(['id', 'name']);
    }

    public static function getContentName(int $contentId)
    {
        return Content::where('id', $contentId)->first();
    }
}

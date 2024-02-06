<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\StudyController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/current-user/{id}', [UserController::class, 'getCurrentUser']);
Route::get('/users', [UserController::class, 'getAllUsers']);
Route::post('/users/delete/{id}', [UserController::class, 'deleteUser']);
Route::get('/languages', [LanguageController::class, 'getAllLanguageNames']);
Route::get('/languages/total-hours/{id}', [LanguageController::class, 'getLanguageTotalHours']);

Route::get('/contents', [ContentController::class, 'getAllContentNames']);
Route::get('/contents/total-hours/{id}', [ContentController::class, 'getContentTotalHours']);

Route::get('/total-hours/today/{id}', [StudyController::class, 'getTodayTotalHours']);
Route::get('/total-hours/month/{year}/{month}/{id}', [StudyController::class, 'getMonthTotalHours']);
Route::get('/total-hours/all/{id}', [StudyController::class, 'getAllTotalHours']);

Route::get('/hours/{year}/{month}/{id}', [StudyController::class, 'getHoursPerMonth']);

Route::post('/study/{id}', [StudyController::class, 'store']);

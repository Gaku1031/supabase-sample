<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('language_content', function (Blueprint $table) {
            $table->id();
            $table->foreignId('language_id')->constrained('languages');
            $table->foreignId('content_id')->constrained('contents');
            // user_idをstring型で定義し、外部キー制約を追加
            $table->string('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->float('hour');
            $table->date('study_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('language_content');
    }
};

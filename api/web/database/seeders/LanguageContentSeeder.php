<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LanguageContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'language_id' => 1,
                'content_id'  => 1,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 3.5,
                'study_date'  => '2023-01-01',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ],
            [
                'language_id' => 2,
                'content_id'  => 2,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 2.5,
                'study_date'  => '2023-01-01',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ],
            [
                'language_id' => 3,
                'content_id'  => 3,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 1.5,
                'study_date'  => '2023-01-01',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ],
            [
                'language_id' => 4,
                'content_id'  => 4,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 0.5,
                'study_date'  => '2023-01-01',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ],
            [
                'language_id' => 5,
                'content_id'  => 1,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 3.5,
                'study_date'  => '2023-01-02',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ],
            [
                'language_id' => 6,
                'content_id'  => 2,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 2.5,
                'study_date'  => '2023-01-02',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ],
            [
                'language_id' => 7,
                'content_id'  => 3,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 1.5,
                'study_date'  => '2023-01-02',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ],
            [
                'language_id' => 1,
                'content_id'  => 4,
                'user_id'     => '79494230-96db-413d-be78-00a3ce7b2927',
                'hour'        => 0.5,
                'study_date'  => '2023-01-02',
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now(),
            ]
        ];

        DB::table('language_content')->insert($data);
    }
}

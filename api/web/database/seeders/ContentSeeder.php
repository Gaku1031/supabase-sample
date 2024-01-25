<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Content;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Content::create([
            'name' => 'インプット課題',
        ]);
        Content::create([
            'name' => 'ドリル課題',
        ]);
        Content::create([
            'name' => 'POSSE課題',
        ]);
        Content::create([
            'name' => 'webapp',
        ]);
    }
}

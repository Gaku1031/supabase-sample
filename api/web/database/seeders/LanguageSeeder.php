<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Language;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Language::create([
            'name' => 'HTML',
        ]);
        Language::create([
            'name' => 'CSS',
        ]);
        Language::create([
            'name' => 'JavaScript',
        ]);
        Language::create([
            'name' => 'PHP',
        ]);
        Language::create([
            'name' => 'Laravel',
        ]);
        Language::create([
            'name' => 'React.js',
        ]);
        Language::create([
            'name' => 'Next.js',
        ]);
    }
}

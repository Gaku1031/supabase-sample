<?php

namespace App\Repositories;

use App\Models\Language;

class LanguageRepository
{
  public function create(array $validated)
  {
    return Language::create($validated);
  }

  public function update(array $validated, int $languageId)
  {
    $language = Language::find($languageId);
    $language->update($validated);
    return $language;
  }
}

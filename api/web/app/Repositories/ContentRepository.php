<?php

namespace App\Repositories;

use App\Models\Content;

class ContentRepository
{
  public function create(array $validated)
  {
    return Content::create($validated);
  }

  public function update(array $validated, int $contentId)
  {
    $content = Content::find($contentId);
    $content->update($validated);
    return $content;
  }
}

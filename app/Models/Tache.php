<?php

namespace App\Models;
use App\Models\Projet;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tache extends Model
{
    //

    // relations
    public function projet(): BelongsTo
    {
        return $this->belongsTo(Projet::class);
    }
}

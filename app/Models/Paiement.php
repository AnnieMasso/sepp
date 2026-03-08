<?php

namespace App\Models;
use App\Models\projet;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Paiement extends Model
{
    //

    // relations
    public function projet() : BelongsTo
    {
        return $this->belongsTo(Projet::class);
    }
}

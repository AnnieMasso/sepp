<?php

namespace App\Models;
use App\Models\Tache;
use App\Models\Paiement;
use App\Models\User;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Projet extends Model
{
    //

    // relations
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function tache(): HasMany
    {
        return $this->hasMany(Tache::class);
    }
    public function paiement(): HasMany
    {
        return $this->hasMany(Paiement::class);
    }
}

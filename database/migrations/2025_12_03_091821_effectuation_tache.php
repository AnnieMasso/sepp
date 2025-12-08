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
        //
        Schema::create('effectuation_tache', function(Blueprint $table){
            $table->id();
            $table->unsignedBigInteger('id_tache');
            $table->unsignedBigInteger('id_membre');
            $table->timestamps();
            $table->foreign('id_membre')->references('id')->on('users');
            $table->foreign('id_tache')->references('id')->on('tache');
            $table->engine('innodb');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
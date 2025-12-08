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
        Schema::create('utilisation_materiel', function (Blueprint $table){
            $table->id();
            $table->unsignedBigInteger('id_materiel');
            $table->unsignedBigInteger('id_tache');
            $table->timestamps();
            $table->foreign('id_tache')->references('id')->on('tache');
            $table->foreign('id_materiel')->references('id')->on('materiel');
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

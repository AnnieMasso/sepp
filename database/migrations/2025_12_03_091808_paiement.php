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
        Schema::create('paiement', function(Blueprint $table){
            $table->id();
            $table->integer('montant');
            $table->unsignedBigInteger('id_projet');
            $table->timestamps();
            $table->foreign('id_projet')->references('id')->on('projet');
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

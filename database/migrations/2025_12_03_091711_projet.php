<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Ramsey\Uuid\Type\Integer;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create("projet", function (Blueprint $table){
            $table->id();
            $table->string('nom');
            $table->text('description_projet');
            $table->integer('montant');
            $table->string('etat')->default('Non commencé');
            $table->unsignedBigInteger('id_client');
            $table->unsignedBigInteger('id_chef_projet');
            $table->timestamps();
            $table->foreign('id_client')->references('id')->on('users');
            $table->foreign('id_chef_projet')->references('id')->on('users');
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

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use PhpParser\Node\Expr\FuncCall;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('tache', function (Blueprint $table){
            $table->id();
            $table->string('nom');
            $table->integer('montant');
            $table->unsignedBigInteger('id_projet');
            $table->foreign('id_projet')->references('id')->on('projet');
            $table->timestamps();
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

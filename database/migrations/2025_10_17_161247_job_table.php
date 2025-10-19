<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('devjobs', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('company_name');
            $table->string('logo');
            $table->string('logoBackground');
            $table->string('position');
            $table->string('contract');
            $table->string('website');
            $table->text('description');
            $table->string('location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('devjobs');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\Rolejob;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('items_role', function (Blueprint $table) {
            $table->id();

            $table->foreignIdFor(Rolejob::class)
                ->constrained()
                ->onDelete('cascade');

            $table->text('content')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('items_role');
    }
};


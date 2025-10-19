<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/job/{id}', [App\Http\Controllers\DevJobController::class, 'showJobDetail'])
    ->name('devjobs.detail');





Route::get('/devjobs', [\App\Http\Controllers\DevJobController::class, 'showJobs'])->name('devjobs');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

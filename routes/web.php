<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use App\UserRules;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); 

// Route::get('/register', function(){
//     return Inertia::render('Register',[
//         'roles'=>UserRules::options(),
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/touslesprojets', function(){
    return Inertia::render('dashboardContains/TousLesProjets');
})->name('touslesprojets');

// route pour les nouveaux projets
Route::get('/nouveauprojet', function(){
    return Inertia::render('dashboardContains/NewProject');
})->name('nouveauprojet');

// route pour tous les chefs de projets

Route::get('tousleschefsdeprojet',function(){
    return Inertia::render('dashboardContains/TousLesChefs');
})->name('tousleschefsdeprojet');

require __DIR__.'/auth.php';

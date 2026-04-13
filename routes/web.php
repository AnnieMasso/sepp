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

Route::get('/dashboard/touslesprojets', function(){
    return Inertia::render('dashboardContains/TousLesProjets');
})->name('touslesprojets');

// route pour les nouveaux projets
Route::get('/dashboard/nouveauprojet', function(){
    return Inertia::render('dashboardContains/NewProject');
})->name('nouveauprojet');

// route pour tous les chefs de projets

Route::get('/tousleschefsdeprojet',function(){
    return Inertia::render('dashboardContains/TousLesChefs');
})->name('tousleschefsdeprojet');

// route pour le diagramme de gantt
Route::get('/dashbord/gantt', function(){
    return Inertia::render('dashboardContains/Gantt/Gantt');
})->name('gantt');

// route pour les details d'un projets

Route::get('dashboard/projet-X', function(){
    return Inertia::render('dashboardContains/DetailsProjet');
})->name('detailprojet');

// route pour les details des taches

Route::get('dashboard/projet-X/tache-X', function(){
    return Inertia::render('dashboardContains/DetailsTaches');
})->name('detailtache');

require __DIR__.'/auth.php';

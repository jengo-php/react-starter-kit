<?php

use App\Controllers\HomeController;
use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->set404Override(static function () {
    return inertia("NotFound");
});

$routes->get('/', [HomeController::class, 'index']);

<?php

namespace App\Controllers;

use Inertia\Inertia;

class HomeController extends BaseController
{
    public function index(): string
    {
        return Inertia::render("Home");
    }
}

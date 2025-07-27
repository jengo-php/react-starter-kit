<?php
namespace App\Inertia;

use Inertia\Inertia;

class HandleInertiaRequest
{
    public function init(): void
    {
        $this->shared();
    }

    private function shared(): void
    {
        $shared = [
            /* Any global props go here */
        ];

        foreach ($shared as $key => $value) {
            Inertia::share($key, $value);
        }
    }
}

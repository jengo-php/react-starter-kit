<?php

namespace App\Database\Seeds;

use App\Models\UserModel;
use CodeIgniter\Database\Seeder;
use CodeIgniter\Test\Fabricator;

class UsersSeeder extends Seeder
{
    public function run()
    {
        $users = (new Fabricator(UserModel::class))->make(100);

        $this->db->table("users")->insertBatch($users);
    }
}

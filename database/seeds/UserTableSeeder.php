<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'email' => 'admin@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'thientrankhh@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'info@stdsoftware.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'b@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'c@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'd@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'e@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'f@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'g@gmail.com',
                'password' => bcrypt('123456')
            ],
            [
                'email' => 'n@gmail.com',
                'password' => bcrypt('123456')
            ],
        ];

        DB::table('users')->insert($data);
    }
}

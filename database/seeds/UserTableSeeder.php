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
        
        $dataTest =[];
        for ($i=1; $i < 31; $i++) { 
            $user['email'] = 'email'. $i .'@gmail.com'; 
            $user['password'] = bcrypt('123123123'); 
            array_push($dataTest, $user);
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('users')->truncate();
        DB::table('users')->insert($dataTest);
    }
}

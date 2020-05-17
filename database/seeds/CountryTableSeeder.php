<?php

use Illuminate\Database\Seeder;

class CountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data =[
            [
                'name' => 'Viet Nam'
            ],
            [
                'name' => 'Japan'
            ],
            [
                'name' => 'English'
            ]
        ];

        DB::table('countries')->insert($data);
    }
}

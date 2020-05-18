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
                'name' => 'VietNam'
            ],
            [
                'name' => 'Japan'
            ],
            [
                'name' => 'England'
            ]
        ];

        DB::table('countries')->insert($data);
    }
}

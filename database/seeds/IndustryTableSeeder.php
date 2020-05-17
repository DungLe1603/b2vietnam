<?php

use Illuminate\Database\Seeder;

class IndustryTableSeeder extends Seeder
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
                'name' => 'IT'
            ],
            [
                'name' => 'Ceramic Industry'
            ],
            [
                'name' => 'Real Estate Industry'
            ],
            [
                'name' => 'Fashion and textile business'
            ],
            [
                'name' => 'Banking and financial sector'
            ],
            [
                'name' => 'Food production industry'
            ]
        ];

        DB::table('industries')->insert($data);
    }
}

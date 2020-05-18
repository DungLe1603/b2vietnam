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
                'name' => 'Information Technology'
            ],
            [
                'name' => 'Ceramic'
            ],
            [
                'name' => 'Real Estate'
            ],
            [
                'name' => 'Fashion and Textile'
            ],
            [
                'name' => 'Financial'
            ],
            [
                'name' => 'Food Production'
            ]
        ];

        DB::table('industries')->insert($data);
    }
}

<?php

use Illuminate\Database\Seeder;

class LanguageTableSeeder extends Seeder
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
                'name' => 'Vietnamese'
            ],
            [
                'name' => 'Japan'
            ],
            [
                'name' => 'English'
            ]
        ];

        DB::table('languages')->insert($data);
    }
}

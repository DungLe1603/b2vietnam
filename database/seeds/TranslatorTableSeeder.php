<?php

use Illuminate\Database\Seeder;

class TranslatorTableSeeder extends Seeder
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
                'name' => 'Tran Van A',
                'user_id' => 7,
                'address' => 'Da Nang',
                'language_id' => "[1,2]",
                'experience' => "2 year",
                'certification' => 'N2 degree in foreign language university',
                'description' => 'B1 degree English in foreign language university',
                'avatar' => 'img09.jpg'
            ],
            [
                'name' => 'Tran Van C',
                'user_id' => 8,
                'address' => 'Da Nang',
                'language_id' => "[1,3]",
                'experience' => "4 year",
                'certification' => 'B1 degree English in foreign language university',
                'description' => '',
                'avatar' => 'img10.jpg'
            ],
            [
                'name' => 'Tran Van B',
                'user_id' => 9,
                'address' => 'Ha Noi',
                'language_id' => "[2]",
                'experience' => "1 year",
                'certification' => 'N3 degree in foreign language university',
                'description' => '',
                'avatar' => 'img11.jpg'
            ],
            [
                'name' => 'Tran Van H',
                'user_id' => 10,
                'address' => 'Ho Chi Minh',
                'language_id' => "[2]",
                'experience' => "2 year",
                'certification' => 'N3 degree in foreign language university',
                'description' => 'B1 degree English in foreign language university',
                'avatar' => 'img12.jpg'
            ]
        ];

        DB::table('translators')->insert($data);
    }
}

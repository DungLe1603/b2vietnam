<?php

use Illuminate\Database\Seeder;

class TranslaterTableSeeder extends Seeder
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
                'language_id' => 2,
                'experience' => 4,
                'certification' => 'N2 degree in foreign language university',
                'other_info' => 'B1 degree English in foreign language university',
                'avatar' => 'img01.jpg'
            ],
            [
                'name' => 'Tran Van C',
                'user_id' => 8,
                'address' => 'Da Nang',
                'language_id' => 3,
                'experience' => 5,
                'certification' => 'B1 degree English in foreign language university',
                'other_info' => '',
                'avatar' => 'img01.jpg'
            ],
            [
                'name' => 'Tran Van B',
                'user_id' => 9,
                'address' => 'Ha Noi',
                'language_id' => 2,
                'experience' => 4,
                'certification' => 'N3 degree in foreign language university',
                'other_info' => '',
                'avatar' => 'img01.jpg'
            ],
            [
                'name' => 'Tran Van H',
                'user_id' => 10,
                'address' => 'Ho Chi Minh',
                'language_id' => 2,
                'experience' => 2,
                'certification' => 'N3 degree in foreign language university',
                'other_info' => 'B1 degree English in foreign language university',
                'avatar' => 'img01.jpg'
            ]
        ];

        DB::table('translaters')->insert($data);
    }
}

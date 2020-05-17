<?php

use Illuminate\Database\Seeder;

class BusinessTableSeeder extends Seeder
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
                'name' => 'ST United',
                'user_id' => 3,
                'industry_id' => 1,
                'country_id' => 1,
                'description' => 'Established on the early of 2016 and known as STD Software serves diverse global clients (Japanese, Australian, US) by offering mainstream services:
                IT outsourcing, software & website development, mobile applications.
                In 2019, STD Software was  acquired to become ST Software division in ST United beside other divisions:
                ST Digital and ST Incubator.',
                'address' => '14 An Thuong 18, Danang',
                'business_type' => 1,
                'product' => 'software',
                'date' => '2016-01-01',
                'avatar' => 'stunited.jpg',
            ],
            [
                'name' => 'BIDV',
                'user_id' => 4,
                'industry_id' => 5,
                'country_id' => 2,
                'description' => 'The success of BIDV is attributed to the solidarity,
                unanimity and relentless efforts of more than 26,000 employees, and the sharing, cooperation
                and companionship of financial institutions, businesses, customers and partners, both domestic and international.
                As a bank that stays true to its commitment of remaining professional,
                friendly and modern, BIDV has increasingly shone on the path to overcoming challenges and achieving success.',
                'address' => '15 An Thuong 18, Danang',
                'business_type' => 1,
                'product' => 'banking and finance',
                'date' => '1957-01-01',
                'avatar' => 'img01.jpg',
            ],
            [
                'name' => 'HOANG GIA TRADING PRODUCTION DEVELOPMENT INVESTMENT CO., LTD',
                'user_id' => 2,
                'industry_id' => 2,
                'country_id' => 1,
                'description' => 'As a trademark of Printing and Technology Media Joint Stock Company,
                MINHLONG1.NET is currently the leading unit in the field of manufacturing and providing business gifts in Vietnam.',
                'address' => '5 Bùi Tá Hán, An Phú, Quận 2, Hồ Chí Minh',
                'business_type' => 1,
                'product' => 'ceramics',
                'date' => '2016-01-01',
                'avatar' => 'img02.jpg',
            ],
            [
                'name' => 'Arico',
                'user_id' => 5,
                'industry_id' => 2,
                'country_id' => 1,
                'description' => 'Being the No. 1 bank of the Vietnamese banking system,
                providing modern and convenient banking products and services with international standards',
                'address' => '25-27, Trung Tam Road, Tan Tao Industrial Zone, Tan Tao A Ward, Binh Tan District, Ho Chi Minh City, Viet Nam',
                'business_type' => 1,
                'product' => 'banking and finance',
                'date' => '1988-01-01',
                'avatar' => 'img02.jpg',
            ],
            [
                'name' => 'ViettinBank',
                'user_id' => 6,
                'industry_id' => 2,
                'country_id' => 1,
                'description' => 'Being a Design and Build contractor in Food Industries is not an easy task.
                After many years working in this sector, we know that food processing technologies are changing rapidly year by year, day by day. Another thing in this field is that each plant has its own unique facility and technology requirement that come along with constrains in many factors such as: space,
                production management, automation, investment budget, safety, etc.',
                'address' => '5 Bùi Tá Hán, An Phú, Quận 2, Hồ Chí Minh',
                'business_type' => 1,
                'product' => 'food',
                'date' => '2000-01-01',
                'avatar' => 'img02.jpg',
            ]
        ];

        DB::table('business')->insert($data);
    }
}

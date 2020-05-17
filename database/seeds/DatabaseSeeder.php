<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(UserTableSeeder::class);
         $this->call(CountryTableSeeder::class);
         $this->call(IndustryTableSeeder::class);
         $this->call(LanguageTableSeeder::class);
         $this->call(BusinessTableSeeder::class);
         $this->call(TranslaterTableSeeder::class);
    }
}

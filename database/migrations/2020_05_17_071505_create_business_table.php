<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('industry_id');
            $table->unsignedBigInteger('country_id');
            $table->text('description');
            $table->string('address');
            $table->string('product');
            $table->boolean('business_type');
            $table->date("date",'YY-mm-dd');
            $table->string('avatar');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('industry_id')->references('id')->on('industries');
            $table->foreign('country_id')->references('id')->on('countries');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('business');
    }
}

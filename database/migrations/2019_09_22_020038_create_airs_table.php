<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAirsTable extends Migration 
{
	public function up()
	{
		Schema::create('airs', function(Blueprint $table) {
            $table->increments('id');
            $table->float('co2', 8, 2);
            $table->float('voc', 8, 2);
            $table->float('tem', 8, 2);
            $table->float('hum', 8, 2);
            $table->float('pm25', 8, 2);
            $table->float('ch2o', 8, 2);
            $table->nullabletimestamps();
        });
	}

	public function down()
	{
		Schema::drop('airs');
	}
}

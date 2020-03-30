<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLanjuOutsidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lanju_outsides', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('name',100);
            $table->bigInteger('device');
            $table->float('co2', 8, 2);
            $table->float('voc', 8, 2);
            $table->float('tem', 8, 2);
            $table->float('hum', 8, 2);
            $table->float('pm25', 8, 2);
            $table->float('ch2o', 8, 2);
            $table->nullabletimestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lanju_outsides');
    }
}

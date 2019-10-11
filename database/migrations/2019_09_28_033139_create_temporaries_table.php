<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemporariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temporaries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('devid');
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
        Schema::dropIfExists('temporaries');
    }
}

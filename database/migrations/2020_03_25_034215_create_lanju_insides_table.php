<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLanjuInsidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lanju_insides', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('DeviceID');
            $table->float('TEMP', 8, 2);
            $table->float('PM25', 8, 2);
            $table->float('CO2', 8, 2);
            $table->float('NOISE', 8, 2);
            $table->float('HUMI', 8, 2);
            $table->float('VOC', 8, 2);
            $table->float('CH2O',8,2);
            $table->float('LUX',8,2);
            $table->timestamp('SERVER_TIME',0);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lanju_insides');
    }
}

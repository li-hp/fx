<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLanjuWatersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lanju_waters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('device');
            $table->float('ph', 8, 2);
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
        Schema::dropIfExists('lanju_waters');
    }
}

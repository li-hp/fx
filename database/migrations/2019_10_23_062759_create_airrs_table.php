<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAirrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('airrs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('x');
            $table->float('y', 8, 2);
            $table->float('z', 8, 2);
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
        Schema::dropIfExists('airrs');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SeedLedStatusesData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $ledstatuses = [
            [
                'flag' => 'led',
                'data' => 0b111,
                'clientid' => 1,
                'ch1' => 1,
                'ch2' => 1,
                'ch3' => 0,
            ],
            [
                'flag' => 'con',
                'data' => 0b011,
                'clientid' => 1,
                'ch1' => 1,
                'ch2' => 0,
                'ch3' => 1,
            ],
        ];

        DB::table('led_statuses')->insert($ledstatuses);
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

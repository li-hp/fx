<?php

use App\Models\Temporary;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SeedTemporariesData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        $temporaries =[
            [
                "devid" => 1,
                'co2' => randomFloat(800, 1200),
                'voc' => randomFloat(220, 260),
                'tem' => randomFloat(20, 33),
                'hum' => randomFloat(45, 70),
                'pm25' => randomFloat(15, 60),
                'ch2o' => randomFloat(20, 60),
            ],
            [
                "devid" => 2,
                'co2' => randomFloat(800, 1200),
                'voc' => randomFloat(220, 260),
                'tem' => randomFloat(20, 33),
                'hum' => randomFloat(45, 70),
                'pm25' => randomFloat(15, 60),
                'ch2o' => randomFloat(20, 60),
            ],
            [
                "devid" => 3,
                'co2' => randomFloat(800, 1200),
                'voc' => randomFloat(220, 260),
                'tem' => randomFloat(20, 33),
                'hum' => randomFloat(45, 70),
                'pm25' => randomFloat(15, 60),
                'ch2o' => randomFloat(20, 60),
            ],
            [
                "devid" => 4,
                'co2' => randomFloat(800, 1200),
                'voc' => randomFloat(220, 260),
                'tem' => randomFloat(20, 33),
                'hum' => randomFloat(45, 70),
                'pm25' => randomFloat(15, 60),
                'ch2o' => randomFloat(20, 60),
            ],
            [
                "devid" => 5,
                'co2' => randomFloat(800, 1200),
                'voc' => randomFloat(220, 260),
                'tem' => randomFloat(20, 33),
                'hum' => randomFloat(45, 70),
                'pm25' => randomFloat(15, 60),
                'ch2o' => randomFloat(20, 60),
            ],
        ];
        DB::table('temporaries')->insert($temporaries);
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

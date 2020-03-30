<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\LanjuInside;
use Faker\Generator as Faker;

$factory->define(LanjuInside::class, function (Faker $faker) {
//    'DeviceID', 'TEMP', 'PM25', 'CO2', 'NOISE', 'HUMI', 'VOC', 'CH2O', 'LUX', 'CreateTime'
    $date_time = date('Y') .'-'.
        $faker->date('m-d') . ' '.
        $faker->time();

    $date_time2 = date('Y-m') .'-'.
        $faker->date('d') . ' '.
        $faker->time();

    $date_time3 = date('Y-m-d') . ' '.
        $faker->time();

    return [
        'DeviceID' => '62011711',
        'TEMP' => randomFloat(25, 29),
        'PM25' => randomFloat(15, 19),
        'CO2' => randomFloat(700, 800),
        'NOISE' => randomFloat(20, 40),
        'HUMI' => randomFloat(50, 80),
        'VOC' => randomFloat(0.1, 0.3),
        'CH2O' => randomFloat(0.2, 0.5),
        'LUX' => randomFloat(300, 900),
        'SERVER_TIME' => $date_time3,
    ];
});

<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Air::class, function (Faker $faker) {

    $date_time = $faker->date . ' ' . $faker->time;
    return [
        'co2' => round(randomFloat(800, 1200),2),
        'voc' => randomFloat(220, 260),
        'tem' => randomFloat(20, 33),
        'hum' => randomFloat(45, 70),
        'pm25' => randomFloat(15, 60),
        'ch2o' => randomFloat(20, 60),
        'created_at' => $date_time,
        'updated_at' => $date_time,
    ];
});

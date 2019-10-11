<?php

namespace App\Models;

class Air extends Model
{
    protected $fillable = ['co2', 'voc', 'tem', 'hum', 'pm25', 'ch2o'];
}

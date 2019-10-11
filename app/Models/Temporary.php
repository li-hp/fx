<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Temporary extends Model
{
    protected $fillable = ['devid', 'co2', 'voc', 'tem', 'hum', 'pm25', 'ch2o'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LanjuOutside extends Model
{

    protected $fillable = [
        'co2', 'voc', 'tem', 'hum', 'pm25', 'ch2o'
    ];
}

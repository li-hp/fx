<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LanjuInside extends Model
{
    protected $fillable = [
        'DeviceID', 'TEMP', 'PM25',
        'CO2', 'NOISE', 'HUMI',
        'VOC', 'CH2O', 'LUX',
        'SERVER_TIME'
        ];
}


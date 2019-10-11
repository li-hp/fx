<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LedStatus extends Model
{
    protected $fillable = [
        'id', 'flag', 'data', 'cliendid', 'ch1', 'ch2', 'ch3', 'remakes'
    ];
}

<?php

use Illuminate\Database\Seeder;
use App\Models\Air;

class AirsTableSeeder extends Seeder
{
    public function run()
    {
        $airs = factory(Air::class)
        ->times(50)
        ->make();
        
        // DB::table('temporaries')->insert($temporaries);
        Air::insert($airs->toArray());
    }

}


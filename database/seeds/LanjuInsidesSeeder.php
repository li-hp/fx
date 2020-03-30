<?php

use Illuminate\Database\Seeder;
use App\Models\LanjuInside;


class LanjuInsidesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        for ($i=0; $i<=10; $i++) {
            $lanju_inside = factory(LanjuInside::class)
                ->times(1000)
                ->make();

            LanjuInside::insert($lanju_inside->toArray());
        }

        // DB::table('temporaries')->insert($temporaries);
        // mysql占位符问题



    }
}

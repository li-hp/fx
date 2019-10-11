<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Air;

class AirPolicy extends Policy
{
    public function update(User $user, Air $air)
    {
        // return $air->user_id == $user->id;
        return true;
    }

    public function destroy(User $user, Air $air)
    {
        return true;
    }
}

<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class UserRepository
{
    public function getCurrentUser(string $userId)
    {
        $user = DB::table('users')
            ->where('id', $userId)
            ->first();
        return $user;
    }

    public function getAllUsers()
    {
        $users = DB::table('users')
            ->where('is_deleted', 0)
            ->get();
        return $users;
    }

    public function deleteUser(string $userId)
    {
        $user = DB::table('users')
            ->where('id', $userId)
            ->update(['is_deleted' => 1]);
        return $user;
    }
}

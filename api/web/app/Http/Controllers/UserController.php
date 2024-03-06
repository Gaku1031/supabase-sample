<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    public function getCurrentUser(string $userId)
    {
        $user = $this->userRepository->getCurrentUser($userId);
        return response()->json($user, Response::HTTP_OK);
    }

    public function getAllUsers()
    {
        $users = $this->userRepository->getAllUsers();
        return response()->json($users, Response::HTTP_OK);
    }

    public function deleteUser(string $userId)
    {
        $user = $this->userRepository->deleteUser($userId);
        return response()->json($user, Response::HTTP_OK);
    }
}

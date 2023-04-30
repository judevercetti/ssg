<?php

namespace App\Http\Controllers;

use App\Models\AdvertiseRequest;
use Illuminate\Http\Request;

class AdvertiseRequestController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'telephone' => 'required|string',
        ]);

        AdvertiseRequest::create([
            'name' => $request->name,
            'email' => $request->email,
            'telephone' => $request->telephone,
            'message' => $request->message,
        ]);

        return redirect()->back()->with('success', 'We have received you request, we shall be in contact soon');
    }
}

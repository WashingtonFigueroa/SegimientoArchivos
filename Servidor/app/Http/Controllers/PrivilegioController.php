<?php

namespace App\Http\Controllers;

use App\Privilegio;

class PrivilegioController extends Controller
{
    public function index()
    {
        return response()->json(Privilegio::with('departamento')->orderBy('ruta')->get(), 200);
    }
    public function store()
    {
        return response()->json(Privilegio::create(request()->all()), 201);
    }
    public function show($id)
    {
        return response()->json(Privilegio::find($id), 200);
    }
    public function update($id)
    {
        $privilegio = Privilegio::find($id);
        $privilegio->update(request()->all());
        return response()->json($privilegio, 200);
    }

    public function destroy($id)
    {
        $privilegio = Privilegio::find($id);
        $privilegio->delete();
        return response()->json(['exito' => 'El privilegio ' . $privilegio->ruta . ' fue eliminado exitosamente'], 200);
    }
}

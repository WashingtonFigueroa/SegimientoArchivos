<?php

namespace App\Http\Controllers;

use App\Respaldo;
use Illuminate\Http\Request;

class RespaldoController extends Controller
{
    public function index()
    {
        return response()->json(Respaldo::orderBy('id')->paginate(10), 200);
    }
    public function store()
    {
        return response()->json(Respaldo::create(request()->all()), 201);
    }
    public function show($id)
    {
        return response()->json(Respaldo::find($id), 200);
    }
    public function update($id)
    {
        $respaldo = Respaldo::find($id);
        $respaldo->update(request()->all());
        return response()->json($respaldo, 200);
    }

    public function destroy($id)
    {
        $respaldo = Respaldo::find($id);
        $respaldo->delete();
        return response()->json(['exito' => 'Respaldo ' . $respaldo->id . ' eliminado exitosamente'], 200);
    }

}

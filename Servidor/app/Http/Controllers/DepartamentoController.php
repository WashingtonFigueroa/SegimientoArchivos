<?php

namespace App\Http\Controllers;

use App\Departamento;

class DepartamentoController extends Controller
{
    public function index()
    {
        return response()->json(Departamento::orderBy('nombre')->paginate(10), 200);
    }
    public function store()
    {
        return response()->json(Departamento::create(request()->all()), 201);
    }
    public function show($id)
    {
        return response()->json(Departamento::find($id), 200);
    }
    public function update($id)
    {
        $departamento = Departamento::find($id);
        $departamento->update(request()->all());
        return response()->json($departamento, 200);
    }

    public function destroy($id)
    {
        $departamento = Departamento::find($id);
        $departamento->delete();
        return response()->json(['exito' => 'Departamento ' . $departamento->nombre . ' eliminado exitosamente'], 200);
    }
}

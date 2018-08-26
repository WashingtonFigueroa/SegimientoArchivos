<?php

namespace App\Http\Controllers;

use App\Departamento;
use App\Privilegio;
use Validator;

class DepartamentoController extends Controller
{
    public function index()
    {
        return response()->json(Departamento::orderBy('nombre')
            ->where('nombre', '!=', 'Administrador')
            ->paginate(10), 200);
    }
    public function lista_departamentos()
    {
        return response()->json(Departamento::orderBy('nombre')
            ->where('nombre', '!=', 'Administrador')
            ->get(), 200);
    }
    public function listaPrivilegios($departamento_id) {
        return response()->json(Privilegio::where('departamento_id', $departamento_id)->get(), 200);
    }
    public function store()
    {
        $validator = Validator::make(request()->all(), [
            'nombre' => 'required|unique:departamentos'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'mensaje' => 'El departamentos esta registrado'
            ], 500);
        } else {
            $departamento = Departamento::create(request()->all());
            //crear privilegios
            $rutas = ['departamento','usuario','privilegio','cliente','tipo_tramite','tramite','recorrido'];
            for ($i = 1; $i<=1; $i++) {
                foreach ($rutas as $ruta) {
                    \App\Privilegio::create([
                        'departamento_id' =>  $departamento->id,
                        'ruta' => $ruta,
                        'activo' => true
                    ]);
                }
            }
            return response()->json($departamento, 201);
        }
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

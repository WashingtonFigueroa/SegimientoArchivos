<?php

namespace App\Http\Controllers;

use App\Recorrido;
use App\TipoTramite;

class RecorridoController extends Controller
{
    public function index()
    {
        $recorridos = Recorrido::join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
                                ->select('recorridos.*', 'departamentos.nombre')
                                ->orderBy('recorridos.posicion')
                                ->get();
        return response()->json($recorridos, 200);
    }
    public function store()
    {
        return response()->json(Recorrido::create(request()->all()), 201);
    }
    public function show($id)
    {
        return response()->json(Recorrido::find($id), 200);
    }
    public function update($id)
    {
        $recorrido = Recorrido::find($id);
        $recorrido->update(request()->all());
        return response()->json($recorrido, 200);
    }

    public function destroy($id)
    {
        $recorrido = Recorrido::find($id);
        $recorrido->delete();
        return response()->json(['exito' => 'Paso ' . $recorrido->posicion . ' eliminado exitosamente'], 200);
    }
    public function update_recorridos($tipo_tramite_id) {
        $recorridos = request()->input('recorridos');
        TipoTramite::find($tipo_tramite_id)->recorridos()->delete();
        foreach ($recorridos as $recorrido) {
            Recorrido::create($recorrido);
        }
        return response()->json(['exito' => 'recorridos actualizados tipo de tramite id: ' . $tipo_tramite_id], 200);
    }
}

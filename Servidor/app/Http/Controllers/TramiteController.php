<?php

namespace App\Http\Controllers;

use App\TipoTramite;
use App\Tramite;
use http\Env\Response;

class TramiteController extends Controller
{
    public function index()
    {
        $tramites = Tramite::with('tipoTramite','cliente')
               ->join('recorridos', 'recorridos.id', 'tramites.recorrido_id')
               ->join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
               ->orderBy('tramites.id', 'desc')
               ->select('tramites.*', 'departamentos.nombre as departamento')
               ->paginate(10);
        return response()->json($tramites, 200);
    }
    public function store()
    {
        $recorrido_id = TipoTramite::find(request()->input('tipo_tramite_id'))
                                   ->recorridos()->orderBy('posicion')->first()->id;
        if (request()->hasFile('archivo')) {
            $path_archivo = request()->file('archivo')->store('archivos');
            $tramite = new Tramite();
            $tramite->cliente_id = request()->input('cliente_id');
            $tramite->tipo_tramite_id = request()->input('tipo_tramite_id');
            $tramite->archivo = $path_archivo;
            $tramite->estado = request()->input('estado');
            $tramite->fecha_inicio = request()->input('fecha_inicio');
            $tramite->recorrido_id = $recorrido_id;
            $tramite->observacion = request()->input('observacion');
            $tramite->permiso = request()->input('permiso');
            $tramite->save();
            return response()->json($tramite, 201);
        } else {
            return response()->json(['error' => 'No se subió ningún archivo'], 500);
        }
    }
    public function show($id)
    {
        return response()->json(Tramite::find($id), 200);
    }
    public function update($id)
    {
        $cliente = Tramite::find($id);
        $cliente->update(request()->all());
        return response()->json($cliente, 200);
    }

    public function destroy($id)
    {
        $cliente = Tramite::find($id);
        $cliente->delete();
        return response()->json(['exito' => 'Tramite ' . $cliente->nombres . ' eliminado exitosamente'], 200);
    }

    public function ver_archivo($id) {
        $archivo = Tramite::find($id)->archivo;
        return response()->file(storage_path('app/' . $archivo));
    }
}

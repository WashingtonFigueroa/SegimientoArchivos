<?php

namespace App\Http\Controllers;

use App\Tramite;

class TramiteController extends Controller
{
    public function index()
    {
        return response()->json(Tramite::with('tipoTramite','cliente')->orderBy('id')->paginate(10), 200);
    }
    public function store()
    {
        if (request()->hasFile('archivo')) {
            $path_archivo = request()->file('archivo')->store('archivos');
            $tramite = new Tramite();
            $tramite->cliente_id = request()->input('cliente_id');
            $tramite->tipo_tramite_id = request()->input('tipo_tramite_id');
            $tramite->archivo = request()->input('archivo');
            $tramite->estado = request()->input('estado');
            $tramite->fecha_inicio = request()->input('fecha_inicio');
            $tramite->recorrido_id = request()->input('recorrido_id');
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
}

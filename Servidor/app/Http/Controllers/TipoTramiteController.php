<?php

namespace App\Http\Controllers;

use App\TipoTramite;

class TipoTramiteController extends Controller
{
    public function index()
    {
        return response()->json(TipoTramite::orderBy('nombre')->paginate(10), 200);
    }
    public function store()
    {
        return response()->json(TipoTramite::create(request()->all()), 201);
    }
    public function show($id)
    {
        return response()->json(TipoTramite::find($id), 200);
    }
    public function update($id)
    {
        $tipo_tramite = TipoTramite::find($id);
        $tipo_tramite->update(request()->all());
        return response()->json($tipo_tramite, 200);
    }

    public function destroy($id)
    {
        $tipo_tramite = TipoTramite::find($id);
        $tipo_tramite->delete();
        return response()->json(['exito' => 'Tipo de Tramite ' . $tipo_tramite->nombre . ' eliminado exitosamente'], 200);
    }
}

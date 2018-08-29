<?php

namespace App\Http\Controllers;

use App\Departamento;
use App\TipoTramite;

class TipoTramiteController extends Controller
{
    public function index()
    {
        return response()->json(TipoTramite::with('departamento')
                        ->orderBy('nombre')->paginate(10), 200);
    }
    public function lista_tipo_tramites()
    {
        return response()->json(TipoTramite::orderBy('nombre')->get(), 200);
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
    /*
     * tipo de tramites de cada departamento
     * cuyos recorridos comienzan con el departamento
     * que los crea
     * */
    public function tipo_tramites_departamento($departamento_id) {
        $tipo_tramites = TipoTramite::join('recorridos', 'recorridos.tipo_tramite_id', 'tipo_tramites.id')
                                    ->where('tipo_tramites.departamento_id', $departamento_id)
                                    ->where('recorridos.posicion', 1)
                                    ->where('recorridos.departamento_id', $departamento_id)
                                    ->select('tipo_tramites.*')
                                    ->distinct('tipo_tramites.id')
                                    ->get();
        return response()->json($tipo_tramites, 200);
    }

}

<?php

namespace App\Http\Controllers;

use App\Departamento;
use App\Recorrido;
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

    /*
     * Recupera todos los tipos de tramties
     * de un departamento
     *
     * */
    public function get_tipo_tramites_departamento($departamento_id) {
        return response()->json(Departamento::find($departamento_id)->tipoTramites()->get(), 200);
    }

    /*
     * Recorridos de tipo de tramite
     * y recorridos vacios con tipo_tramite_id y departamento_id
     * */
    public function recorridos_tipo_tramite($tipo_tramite_id) {
        $administrador_id = Departamento::where('nombre', 'Administrador')->first()->id;
        $recorridos = Recorrido::join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
                                 ->where('recorridos.tipo_tramite_id', '=', $tipo_tramite_id)
                                 ->where('recorridos.departamento_id', '<>', $administrador_id)
                                 ->select(
                                            'recorridos.tipo_tramite_id',
                                            'recorridos.posicion',
                                            'recorridos.tiempo_estimado',
                                            'recorridos.observaciones',
                                            'recorridos.departamento_id',
                                            'departamentos.nombre'
                                     )
                                 ->orderBy('recorridos.posicion')
                                 ->get();
        $departamentos_recorrido = Recorrido::join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
            ->where('recorridos.tipo_tramite_id', '=', $tipo_tramite_id)
            ->where('recorridos.departamento_id', '<>', $administrador_id)
            ->select(
                'departamentos.id'
            )
            ->get();
        $departamentos_id = [];
        foreach ($departamentos_recorrido as $departamento_recorrido) {
            array_push($departamentos_id, $departamento_recorrido->id);
        }
        array_push($departamentos_id, $administrador_id);
        $departamentos = Departamento::all()->except($departamentos_id);
        $recorridos_vacio = [];
        foreach ($departamentos as $departamento) {
            array_push($recorridos_vacio, [
                'nombre' => $departamento->nombre,
                'tipo_tramite_id' => (int)$tipo_tramite_id,
                'posicion' => 0,
                'tiempo_estimado' => 0,
                'observaciones' => 'obs1',
                'departamento_id' => $departamento->id,
            ]);
            array_push($recorridos_vacio, [
                'nombre' => $departamento->nombre,
                'tipo_tramite_id' => (int)$tipo_tramite_id,
                'posicion' => 0,
                'tiempo_estimado' => 0,
                'observaciones' => 'obs2',
                'departamento_id' => $departamento->id,
            ]);
        }

        return response()->json([
            'recorridos' => $recorridos,
            'recorridos_vacio' => $recorridos_vacio
        ], 200);
    }

}

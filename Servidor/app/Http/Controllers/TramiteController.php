<?php

namespace App\Http\Controllers;

use App\Departamento;
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

        $recorrido = Tramite::find($id)
                            ->tipoTramite()
                            ->first()
                            ->recorridos()
                            ->orderby('posicion', 'desc')
                            ->first();
        $tramite = Tramite::find($id);
        if ($recorrido->id === (int)request()->input('recorrido_id')) {
            $tramite->fill(request()->all());
            $tramite->estado = 'finalizado';
            $tramite->save();
        } else {
            $tramite->fill(request()->all());
            $tramite->estado = 'proceso';
            $tramite->save();
        }
        return response()->json($tramite, 200);
    }

    public function destroy($id)
    {
        $tramite = Tramite::find($id);
        $tramite->delete();
        return response()->json(['exito' => 'Tramite ' . $tramite->nombres . ' eliminado exitosamente'], 200);
    }

    public function ver_archivo($id) {
        $archivo = Tramite::find($id)->archivo;
        return response()->file(storage_path('app/' . $archivo));
    }
    public function recorridos_tramite($tramite_id) {
        $recorridos = Tramite::find($tramite_id)
                                ->tipoTramite()
                                ->first()
                                ->recorridos()
                                ->join('tipo_tramites', 'tipo_tramites.id', 'recorridos.tipo_tramite_id')
                                ->join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
                                ->orderBy('recorridos.posicion')
                                ->select('recorridos.*', 'departamentos.nombre as departamento', 'tipo_tramites.nombre as tipo_tramite')
                                ->get();
        return response()->json($recorridos, 200);
    }

    public function tramites_departamento($departamento_id) {
        $tramites = Tramite::with('tipoTramite', 'cliente')
                            ->join('recorridos', 'recorridos.id', 'tramites.recorrido_id')
                            ->join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
                            ->where('recorridos.departamento_id', $departamento_id)
                            ->orderBy('tramites.id', 'desc')
                            ->select('tramites.*', 'departamentos.nombre as departamento')
                            ->paginate(10);
        /*$tramites = Tramite::with('tipoTramite','cliente')
            ->join('recorridos', 'recorridos.id', 'tramites.recorrido_id')
            ->join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
            ->where('departamentos.id', $departamento_id)
            ->orderBy('tramites.id', 'desc')
            ->select('tramites.*', 'departamentos.nombre as departamento')
            ->paginate(10);*/
        return response()->json($tramites, 200);
    }
    public function buscar_tramite() {
        $search = request()->input('search');
        $departamento_id = request()->input('departamento_id');

        $tramites = Tramite::with('tipoTramite','cliente')
            ->join('clientes', 'clientes.id', 'tramites.cliente_id')
            ->join('tipo_tramites', 'tipo_tramites.id', 'tramites.tipo_tramite_id')
            ->join('recorridos', 'recorridos.id', 'tramites.recorrido_id')
            ->join('departamentos', 'departamentos.id', 'recorridos.departamento_id')
            ->where('departamentos.id', $departamento_id)
            ->orWhere('clientes.identificacion', 'like', '%' . $search . '%')
            ->orWhere('tipo_tramites.nombre', 'like', '%'. $search. '%')
            ->orderBy('tramites.id', 'desc')
            ->select('tramites.*', 'departamentos.nombre as departamento')
            ->paginate(10);
        return response()->json($tramites, 200);

    }
    public function cantidad_estado_tramites($departamento_id) {
        $tramites_pendientes = Departamento::find($departamento_id)
                ->join('tipo_tramites', 'tipo_tramites.departamento_id', 'departamentos.id')
                ->join('tramites', 'tramites.tipo_tramite_id', 'tipo_tramites.id')
                ->where('tramites.estado', 'pendiente')
                ->select('tramites.*')
                ->count();
        $tramites_proceso = Departamento::find($departamento_id)
            ->join('tipo_tramites', 'tipo_tramites.departamento_id', 'departamentos.id')
            ->join('tramites', 'tramites.tipo_tramite_id', 'tipo_tramites.id')
            ->where('tramites.estado', 'proceso')
            ->select('tramites.*')
            ->count();
        $tramites_finalizados = Departamento::find($departamento_id)
            ->join('tipo_tramites', 'tipo_tramites.departamento_id', 'departamentos.id')
            ->join('tramites', 'tramites.tipo_tramite_id', 'tipo_tramites.id')
            ->where('tramites.estado', 'finalizado')
            ->select('tramites.*')
            ->count();
        return response()->json([
            'pendientes' => $tramites_pendientes,
            'proceso' => $tramites_proceso,
            'finalizados' => $tramites_finalizados,
        ]);
    }
}

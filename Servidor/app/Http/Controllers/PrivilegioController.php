<?php

namespace App\Http\Controllers;
use App\Privilegio;

class PrivilegioController extends Controller
{
    private $privilegioData = null;
    public function index()
    {
        return response()->json(Privilegio::with('departamento')->orderBy('departamento_id')
            ->where('departamento_id', '!=', 1)
            ->paginate(10), 200);
    }
    public function store()
    {
        return response()->json(Privilegio::create(request()->all()), 201);
    }
    public function show($id)
    {
        return response()->json(Privilegio::find($id), 200);
    }
    private function guardar($departamento_id) {
        $rutas = ['departamento','usuario','privilegio','cliente','tipo_tramite','tramite','recorrido'];
        foreach ($rutas as $ruta){
            $privilegio = new Privilegio();
            $privilegio->departamento_id = $departamento_id;
            $privilegio->ruta = $ruta;
            $privilegio->activo = true;
            $privilegio->save();
        }
    }
    public function update($departamento_id)
    {
        if ($this->privilegioData === null) {
            $this->privilegioData = request()->all();
        }
        $existe = Privilegio::where('departamento_id', $departamento_id)->count();
        if ($existe > 0)
        {
            $privilegios = Privilegio::where('departamento_id', $departamento_id)->get();
            foreach ($privilegios as $privilegio) {
                switch ($privilegio->ruta) {
                    case 'departamento':
                        $privilegio->activo = $this->privilegioData['departamento'];
                        $privilegio->save();
                        break;
                    case 'usuario':
                        $privilegio->activo = $this->privilegioData['usuario'];
                        $privilegio->save();
                        break;
                    case 'privilegio':
                        $privilegio->activo = $this->privilegioData['privilegio'];
                        $privilegio->save();
                        break;
                    case 'cliente':
                        $privilegio->activo = $this->privilegioData['cliente'];
                        $privilegio->save();
                        break;
                    case 'tipo_tramite':
                        $privilegio->activo = $this->privilegioData['tipo_tramite'];
                        $privilegio->save();
                        break;
                    case 'tramite':
                        $privilegio->activo = $this->privilegioData['tramite'];
                        $privilegio->save();
                        break;
                    case 'recorrido':
                        $privilegio->activo = $this->privilegioData['recorrido'];
                        $privilegio->save();
                        break;
                }
            }
            return response()->json(['exito' => 'Privilegios actualizados'], 200);
        }else{
            $this->guardar($departamento_id);
            $this->update($departamento_id);
        }
    }

    public function destroy($id)
    {
        $privilegio = Privilegio::find($id);
        $privilegio->delete();
        return response()->json(['exito' => 'El privilegio ' . $privilegio->ruta . ' fue eliminado exitosamente'], 200);
    }
}

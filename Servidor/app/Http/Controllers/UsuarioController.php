<?php

namespace App\Http\Controllers;


use App\Http\Requests\StoreUsuario;
use App\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function index() {
        return response()->json(Usuario::with('departamento')->paginate(10), 200);
    }
    public function show($id) {
        return response()->json(Usuario::find($id), 200);
    }
    public function store(StoreUsuario $request){
        $usuario = new Usuario();
        $usuario->departamento_id = $request->input('departamento_id');
        $usuario->nombres = $request->input('nombres');
        $usuario->cuenta = $request->input('cuenta');
        $usuario->password = Hash::make($request->input('password'));
        $usuario->save();
        return response()->json($usuario, 201);
    }
    public function update($id) {
        $usuario = Usuario::find($id);
        $usuario->departamento_id = request()->input('departamento_id');
        $usuario->nombres = request()->input('nombres');
        $usuario->save();
        return response()->json($usuario, 200);
    }
    public function destroy($id) {
        $usuario = Usuario::find($id);
        $usuario->delete();
        return response()->json(['exito' => 'El usuario ' . $usuario->nombres . ' fue eliminado exitosamente'], 200);
    }
}

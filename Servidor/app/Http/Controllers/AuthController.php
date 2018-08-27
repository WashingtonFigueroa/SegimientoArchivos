<?php

namespace App\Http\Controllers;
use App\Departamento;
use App\Http\Requests\LoginAuth;
use App\Usuario;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
class AuthController extends Controller
{
    public function login(LoginAuth $request) {
        $credentials = $request->only('cuenta', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $usuario = Usuario::join('departamentos', 'usuarios.departamento_id', 'departamentos.id')
                            ->where('cuenta', $request->input('cuenta'))
                            ->select('usuarios.*', 'departamentos.nombre as departamento')
                            ->first();

        $privilegios = Departamento::find($usuario->departamento_id)
                                    ->privilegios()
                                    ->orderBy('ruta')
                                    ->get();
        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'privilegios' => $privilegios,
            'token' => $token,
            'mensaje' => 'Usuario '. $usuario->cuenta .' autenticado exitosamente'
        ], 200);
    }
}

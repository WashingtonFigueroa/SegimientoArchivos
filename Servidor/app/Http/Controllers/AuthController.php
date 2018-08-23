<?php

namespace App\Http\Controllers;
use App\Departamento;
use App\Usuario;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;
class AuthController extends Controller
{
    public function login() {
        $credentials = request()->only('cuenta', 'password');
        $rules = [
            'cuenta' => 'required',
            'password' => 'required|min:5',
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json([
                'autenticado' => false,
                'mensaje' => $validator->messages()
            ], 500);
        }

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'autenticado' => false,
                    'mensaje' => 'Las credenciales son incorrectas'
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'autenticado' => false,
                'mensaje' => 'Error durante la autenticacion, por favor intente nuevamente'],
                500);
        }
        $usuario = Usuario::where('cuenta', \request()->input('cuenta'))->first();
        $privilegios = Departamento::find($usuario->departamento_id)
                                    ->privilegios()
                                    ->orderBy('ruta')
                                    ->get();
        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'privilegios' => $privilegios,
            'token' => $token,
            'mensaje' => 'Usuario autenticado exitosamente'
        ], 200);
    }
}

<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::post('login', 'AuthController@login');

Route::resource('tramites', 'TramiteController', ['except' => ['edit', 'create']]);

Route::resource('tipo_tramites', 'TipoTramiteController', ['except' => ['edit', 'create']]);
Route::get('lista_tipo_tramites','TipoTramiteController@lista_tipo_tramites');

Route::resource('recorridos', 'RecorridoController', ['except' => ['edit', 'create']]);

Route::resource('clientes', 'ClienteController', ['except' => ['edit', 'create']]);
Route::get('lista_clientes','ClienteController@lista_clientes');


Route::resource('tramites', 'TramiteController', ['except' => ['edit', 'create']]);

Route::resource('respaldos', 'RespaldoController', ['except' => ['edit', 'create']]);

Route::resource('usuarios', 'UsuarioController', ['except' => ['edit', 'create']]);

Route::resource('privilegios', 'PrivilegioController', ['except' => ['edit', 'create']]);

Route::resource('departamentos', 'DepartamentoController', ['except' => ['edit', 'create']]);
Route::get('lista_departamentos','DepartamentoController@lista_departamentos');

Route::get('ver_archivo/{id}', 'TramiteController@ver_archivo');

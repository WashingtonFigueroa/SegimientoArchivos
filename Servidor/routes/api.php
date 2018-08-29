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
Route::get('tramites_departamento/{departamento_id}', 'TramiteController@tramites_departamento');
Route::post('buscar_tramite', 'TramiteController@buscar_tramite');
Route::get('cantidad_estado_tramites/{departamento_id}', 'TramiteController@cantidad_estado_tramites');


Route::resource('tipo_tramites', 'TipoTramiteController', ['except' => ['edit', 'create']]);
Route::get('lista_tipo_tramites','TipoTramiteController@lista_tipo_tramites');
Route::get('tipo_tramites_departamento/{departamento_id}', 'TipoTramiteController@tipo_tramites_departamento');
Route::get('get_tipo_tramites_departamento/{departamento_id}', 'TipoTramiteController@get_tipo_tramites_departamento');
Route::resource('recorridos', 'RecorridoController', ['except' => ['edit', 'create']]);
Route::get('recorridos_tipo_tramite/{tipo_tramite_id}', 'TipoTramiteController@recorridos_tipo_tramite');
Route::put('update_recorridos/{tipo_tramite_id}', 'RecorridoController@update_recorridos');
Route::resource('clientes', 'ClienteController', ['except' => ['edit', 'create']]);
Route::get('lista_clientes','ClienteController@lista_clientes');
Route::get('ver_documento/{id}','ClienteController@ver_documento');



Route::resource('tramites', 'TramiteController', ['except' => ['edit', 'create']]);
Route::get('recorridos_tramite/{tramite_id}', 'TramiteController@recorridos_tramite');

Route::resource('respaldos', 'RespaldoController', ['except' => ['edit', 'create']]);

Route::resource('usuarios', 'UsuarioController', ['except' => ['edit', 'create']]);

Route::resource('privilegios', 'PrivilegioController', ['except' => ['edit', 'create']]);

Route::resource('departamentos', 'DepartamentoController');
Route::get('lista_departamentos','DepartamentoController@lista_departamentos');
Route::get('listaPrivilegios/{departamento_id}', 'DepartamentoController@listaPrivilegios');

Route::get('ver_archivo/{id}', 'TramiteController@ver_archivo');

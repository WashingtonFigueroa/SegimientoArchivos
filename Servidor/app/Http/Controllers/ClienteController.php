<?php

namespace App\Http\Controllers;

use App\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ClienteController extends Controller
{
    public function index()
    {
        return response()->json(Cliente::orderBy('nombres')->paginate(10), 200);
    }
    public function lista_clientes()
    {
        return response()->json(Cliente::orderBy('nombres')->get(), 200);
    }
    public function ver_documento($id) {
        $documento = Cliente::find($id)->documento;
        return response()->file(storage_path('app/' . $documento));
    }
    public function store(Request $request)
    {
        if ($request->hasFile('documento')){
            $path_documento = $request->file('documento')->store('documento');
            $cliente = new Cliente();
            $cliente->tipo_documento = $request->input('tipo_documento');
            $cliente->identificacion = $request->input('identificacion');
            $cliente->nombres = $request->input('nombres');
            $cliente->telefono = $request->input('telefono');
            $cliente->celular = $request->input('celular');
            $cliente->correo = $request->input('correo');
            $cliente->documento = $path_documento;
            $cliente->save();
        }
        else{
            $cliente = new Cliente();
            $cliente->tipo_documento = $request->input('tipo_documento');
            $cliente->identificacion = $request->input('identificacion');
            $cliente->nombres = $request->input('nombres');
            $cliente->telefono = $request->input('telefono');
            $cliente->celular = $request->input('celular');
            $cliente->correo = $request->input('correo');
            $cliente->documento = "documento/log.png";
            $cliente->save();
        }
        return response()->json($cliente, 201);
    }
    public function show($id)
    {
        return response()->json(Cliente::find($id), 200);
    }
    public function update($id)
    {
        $cliente = Cliente::find($id);
        $cliente->update(request()->all());
        return response()->json($cliente, 200);
    }

    public function destroy($id)
    {
        $cliente = Cliente::find($id);
        $cliente->delete();
        return response()->json(['exito' => 'Cliente ' . $cliente->nombres . ' eliminado exitosamente'], 200);
    }
}

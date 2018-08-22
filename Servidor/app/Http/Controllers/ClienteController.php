<?php

namespace App\Http\Controllers;

use App\Cliente;

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
    public function store()
    {
        return response()->json(Cliente::create(request()->all()), 201);
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

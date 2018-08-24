<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUsuario extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cuenta' => 'required|unique:usuarios',
            'password' => 'required|confirmed|min:6',
        ];
    }
    public function messages()
    {
        return [
            'cuenta.unique' => 'La cuenta ya fue usada con anterioridad',
            'password.required' => 'El password es obligatorio',
            'password.min' => 'Longitud minima es de 6 caracteres',
            'password.confirmed' => 'Los passwords no coinciden',
        ];
    }
}

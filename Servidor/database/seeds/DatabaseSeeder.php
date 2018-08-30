<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /*crear administrador*/
          \App\Departamento::create([
            'nombre' => 'Administrador',
            'descripcion' => 'DTE',
        ]);
        /*crear privilegios*/
        $rutas = ['departamento','usuario','privilegio','cliente','tipo_tramite','tramite','recorrido'];
        for ($i = 1; $i<=1; $i++) {
            foreach ($rutas as $ruta) {
                \App\Privilegio::create([
                    'departamento_id' => 1,
                    'ruta' => $ruta,
                    'activo' => true
                ]);
            }
        }
        /*crear administrador*/
        \App\Usuario::create([
            'departamento_id' => 1,
            'nombres' => 'Washington Figueroa',
            'cuenta' => 'DTE',
            'password' => bcrypt('123456'),
        ]);
    }
}

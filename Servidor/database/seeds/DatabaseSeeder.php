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
//        $faker = \Faker\Factory::create();
//        for ($i = 0 ; $i < 10; $i++) {
//            $departamento = \App\Departamento::create([
//                'nombre' => $faker->word,
//                'descripcion' => $faker->sentence
//            ]);
//            \App\Usuario::create([
//                'departamento_id' => $departamento->id,
//                'nombres' => $faker->name,
//                'cuenta' => $faker->unique()->word,
//                'password' => Hash::make('password')
//            ]);
//            $tipo_tramite = \App\TipoTramite::create([
//                'departamento_id' => $departamento->id,
//                'nombre' => $faker->word,
//                'descripcion' => $faker->realText(50)
//            ]);
//            $recorridos = [];
//            for ($j = 0; $j < 10; $j++) {
//                $recorrido = \App\Recorrido::create([
//                    'tipo_tramite_id' => $tipo_tramite->id,
//                    'posicion' => $faker->numberBetween(1, 15),
//                    'tiempo_estimado' => $faker->numberBetween(1, 72),
//                    'observaciones' => $faker->text(100),
//                    'departamento_id' => $departamento->id
//                ]);
//                array_push($recorridos, $recorrido);
//            }
//
//            $cliente = \App\Cliente::create([
//                'tipo_documento' => $i%2 === 0 ? 'cedula' : 'ruc',
//                'identificacion' => $faker->numberBetween(10000, 262002336),
//                'nombres' => $faker->name,
//                'telefono' => $faker->phoneNumber,
//                'celular' => $faker->phoneNumber,
//                'correo' => $faker->freeEmail,
//            ]);
//
//            for ($k=0; $k < 10; $k++) {
//                $tramite = \App\Tramite::create([
//                    'cliente_id' => $cliente->id,
//                    'tipo_tramite_id' => $tipo_tramite->id,
//                    'archivo' => $faker->word,
//                    'estado' => $k % 2 === 0 ? 'finalizado' : 'proceso',
//                    'fecha_inicio' => $faker->date(),
//                    'recorrido_id' => $recorridos[$k]->id,
//                    'observacion' => $faker->sentence,
//                    'permiso' => $k % 2 === 0? 'publico': 'recorrido',
//                ]);
//                \App\Respaldo::create([
//                    'tramite_id' => $tramite->id,
//                    'archivo' => $tramite->archivo,
//                ]);
//            }
//        }
        // $this->call(UsersTableSeeder::class);
        //crear administrador
//        \App\Parametro::create([
//            'nombre' => 'Administrador',
//            'descripcion' => 'DTE',
//        ]);
        //crear privilegios
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
        //crear fin privilegios
        /*
DPTO Recaudacion
DPTO Financiero
Gerente General
Consejo de vigilancia
DTPO Talento Humano
Recurso Humano
Mercadeo
DPTO Contabilidad
DPTO Creditos y Cobranzas
Servicios Generales
CONTABILIDAD
Registros y Funcion Contable*/
    }
}

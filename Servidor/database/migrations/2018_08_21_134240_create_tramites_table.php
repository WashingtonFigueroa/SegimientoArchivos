<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTramitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tramites', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cliente_id')->unsigned();
            $table->foreign('cliente_id')
                  ->references('id')
                  ->on('clientes')
                  ->onDelete('cascade');
            $table->integer('tipo_tramite_id')->unsigned();
            $table->foreign('tipo_tramite_id')
                ->references('id')
                ->on('tipo_tramites')
                ->onDelete('cascade');
            $table->string('archivo');
            $table->enum('estado', ['finalizado', 'proceso']);
            $table->date('fecha_inicio');
            $table->integer('recorrido_id')->unsigned();
            $table->string('observacion')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tramites');
    }
}

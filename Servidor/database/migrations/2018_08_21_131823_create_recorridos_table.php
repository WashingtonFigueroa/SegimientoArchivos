<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecorridosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recorridos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tipo_tramite_id')->unsigned();
            $table->foreign('tipo_tramite_id')
                  ->references('id')
                  ->on('tipo_tramites')
                  ->onDelete('cascade');
            $table->integer('posicion')->unsigned();
            $table->integer('tiempo_estimado');
            $table->string('observaciones')->nullable();
            $table->integer('departamento_id')->unsigned();
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
        Schema::dropIfExists('recorridos');
    }
}

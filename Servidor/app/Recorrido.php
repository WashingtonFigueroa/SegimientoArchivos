<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Recorrido extends Model
{
    use SoftDeletes;
    protected $table = 'recorridos';
    protected $fillable = ['tipo_tramite_id',
        'posicion',
        'tiempo_estimado',
        'observaciones',
        'departamento_id'];
    protected $dates = ['deleted_at'];
    public function tipoTramite() {
        return $this->belongsTo('App\TipoTramite');
    }
}

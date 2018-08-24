<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tramite extends Model
{
    use SoftDeletes;
    protected $table = 'tramites';
    protected $fillable = [
        'cliente_id',
        'tipo_tramite_id',
        'archivo',
        'estado',
        'fecha_inicio',
        'recorrido_id',
        'observacion',
        'permiso'
    ];
    protected $dates = ['deleted_at'];
    public function cliente() {
        return $this->belongsTo('App\Cliente');
    }
    public function tipoTramite() {
        return $this->belongsTo('App\TipoTramite');
    }
}

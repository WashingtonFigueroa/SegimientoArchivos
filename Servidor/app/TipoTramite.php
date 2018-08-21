<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoTramite extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_tramites';
    protected $fillable = ['nombre', 'descripcion'];
    protected $dates = ['deleted_at'];
    public function departamento() {
        return $this->belongsTo('App\Departamento');
    }
    public function recorridos() {
        return $this->hasMany('App\Recorrido');
    }
    public function tramites() {
        return $this->hasMany('App\Tramite');
    }
}

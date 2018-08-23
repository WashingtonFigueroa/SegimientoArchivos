<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Departamento extends Model
{
    use SoftDeletes;
    protected $table = 'departamentos';
    protected $fillable = ['nombre', 'descripcion'];
    protected $dates = ['deleted_at'];
    public function tipoTramites() {
        return $this->hasMany('App\TipoTramite');
    }
    public function privilegios() {
        return $this->hasMany('App\Privilegio');
    }
    public function usuarios() {
        return $this->hasMany('App\Usuario');
    }
    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->tipoTramites()->delete();
            $padre->privilegios()->delete();
            $padre->usuarios()->delete();
        });
    }

}

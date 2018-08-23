<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Departamento extends Model
{
    use SoftDeletes;
    protected $table = 'departamentos';
    protected $fillable = ['nombre', 'personal_a_cargo'];
    protected $dates = ['deleted_at'];
    public function tipoTramites() {
        return $this->hasMany('App\TipoTramite');
    }
    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->tipoTramites()->delete();
        });
    }

}

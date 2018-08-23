<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cliente extends Model
{
    use SoftDeletes;
    protected $table = 'clientes';
    protected $fillable = ['tipo_documento', 'identificacion', 'nombres', 'telefono', 'celular', 'correo'];
    protected $dates = ['deleted_at'];

    public function tramites() {
        return $this->hasMany('App\Tramite');
    }

    public static function boot()
    {
        parent::boot();
        static::deleting(function($padre) {
            $padre->tramites()->delete();
        });
    }

}

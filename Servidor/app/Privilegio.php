<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Privilegio extends Model
{
    use SoftDeletes;
    protected $table = 'privilegios';
    protected $fillable = ['departamento_id', 'ruta', 'activo'];
    protected $dates = ['deleted_at'];
    public function departamento() {
        return $this->belongsTo('App\Departamento');
    }
}

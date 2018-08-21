<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Respaldo extends Model
{
    use SoftDeletes;
    protected $table = 'respaldos';
    protected $fillable = ['tramite_id', 'archivo'];
    protected $dates = ['deleted_at'];
}

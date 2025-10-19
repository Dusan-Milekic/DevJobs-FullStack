<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rolejob extends Model
{

    protected $table = 'role_job';

    protected $fillable = [
        'devjob_id',
        'content',
    ];

    protected $primaryKey = 'id';
}



<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Requirementjob extends Model
{
    //
    protected $fillable = [
        'devjob_id',
        'content',
    ];
    protected $table = 'requirements_job';
}

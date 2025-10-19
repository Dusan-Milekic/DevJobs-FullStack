<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Requirementitem extends Model
{
    protected $table = 'items_requirements';
    protected $fillable = ['devjob_id', 'content'];
}

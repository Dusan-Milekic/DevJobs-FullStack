<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemsRole extends Model
{
    protected $table = 'items_role';
    protected $fillable = ['devjob_id', 'content'];
}

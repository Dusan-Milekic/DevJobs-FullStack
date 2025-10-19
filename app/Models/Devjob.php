<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Devjob extends Model
{
    protected $table = 'devjobs';

    protected $fillable = [
        'company_name',
        'logo',
        'logoBackground',
        'position',
        'contract',
        'website',
        'description',
        'location'
    ];
    protected $primaryKey = 'id';
}

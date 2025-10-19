<?php

namespace App\Http\Controllers;

use App\Models\Devjob;
use App\Models\Itemsrole;
use App\Models\Requirementjob;
use App\Models\Requirementitem;
use App\Models\Rolejob; // pazi na naziv tabele u ovom modelu
use Inertia\Inertia;

class DevJobController extends Controller
{
    public function showJobs()
    {

        return ['dev_jobs' => Devjob::all()];
    }

    public function showJobDetail($id)
    {

        $job = Devjob::findOrFail($id + 2);

        $contentRole = Rolejob::where('devjob_id', $id + 2)->value('content'); // vrati string ili null
        $contentRequirement = Requirementjob::where('devjob_id', $id + 2)->value('content'); // vrati string ili null

        $itemsRole = Itemsrole::where('rolejob_id', $id + 1)
            ->pluck('content') // uzima sve vrednosti iz kolone content
            ->toArray();

        $itemsRequirement = Requirementitem::where('requirementjob_id', $id + 1)
            ->pluck('content') // uzima sve vrednosti iz kolone content
            ->toArray();

        return Inertia::render('jobdetail', [
            'job_detail' => $job,
            'content_role' => $contentRole,
            'items_role' => $itemsRole,
            'content_requirement' => $contentRequirement,
            'items_requirement' => $itemsRequirement,
        ]);
    }
}

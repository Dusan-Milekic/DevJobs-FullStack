<?php

namespace App\Http\Controllers;

use App\Models\Devjob;
use App\Models\ItemsRole;
use App\Models\Requirementjob;
use App\Models\ItemsRequirements;
use App\Models\Requirementitem;
use App\Models\Rolejob;
use Inertia\Inertia;

class DevJobController extends Controller
{
    public function showJobs()
    {
        return ['dev_jobs' => Devjob::all()];
    }

    public function showJobDetail($id)
    {
        $job = Devjob::findOrFail($id);

        $contentRole = Rolejob::where('devjob_id', $id)->value('content');
        $contentRequirement = Requirementjob::where('devjob_id', $id)->value('content');

        // Prvo pronađi role_job ID na osnovu devjob_id
        $roleJobId = Rolejob::where('devjob_id', $id)->value('id');
        $itemsRole = ItemsRole::where('rolejob_id', $roleJobId)
            ->pluck('content')
            ->toArray();

        // Prvo pronađi requirement_job ID na osnovu devjob_id
        $requirementJobId = Requirementjob::where('devjob_id', $id)->value('id');
        $itemsRequirement = Requirementitem::where('requirementjob_id', $requirementJobId)
            ->pluck('content')
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

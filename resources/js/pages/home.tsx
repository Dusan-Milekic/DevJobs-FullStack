import Header from "@/components/Header";
import JobCard from "@/components/ui/jobcard";
import SearchFilter from "@/components/ui/searchFilter";

import { useEffect, useState } from "react";

async function fetchJobs() {
    const response = await fetch("/devjobs");
    const data = await response.json();
    return data;
}

export interface IDevJob {
    created_at: string;
    contract: string;
    position: string;
    company_name: string;
    location: string;
    logo: string;
    logoBackground: string;
}

export default function Home() {
    const [showMore, setShowMore] = useState(5);
    const [jobs, setJobs] = useState<IDevJob[]>([]);

    useEffect(() => {
        fetchJobs()
            .then((data) => setJobs(data?.dev_jobs ?? []))  // ✅ fallback ako nema dev_jobs
            .catch((err) => console.error("Fetch /devjobs error:", err));
    }, []);

    return (
        <div className="relative" id="homepage">
            <Header />

            <div className="flex justify-center relative -top-10 max-w-[320px] mx-auto">
                <SearchFilter jobs={jobs} setJobs={setJobs} />

            </div>

            <div className="py-14 grid grid-cols-1 place-items-center gap-14 max-w-[320px] mx-auto sm:max-w-[710px] sm:grid-cols-2 lg:max-w-[1110px] lg:grid-cols-3">
                {jobs.slice(0, showMore).map((job, index) => (
                    <JobCard
                        key={index}
                        hours={job.created_at}
                        type={job.contract}
                        position={job.position}
                        company={job.company_name}
                        location={job.location}
                        image={job.logo}
                        bg_color={job.logoBackground}
                        id={index.toString()}
                    />
                ))}
            </div>

            <button
                onClick={() => setShowMore((v) => v + 5)}
                className={`cursor-pointer bg-indigo-500 rounded-6 w-full max-w-[144px] h-11 px-6 font-semibold text-neutral-0 mt-14 mb-10 block mx-auto ${showMore >= jobs.length ? "hidden" : ""      /* ✅ pravilniji uslov */
                    }`}
            >
                Load More
            </button>

            <div className="h-full"></div>
        </div>
    );
}

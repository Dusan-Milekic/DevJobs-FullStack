import PopUp from "./popup"
import React, { useEffect, useState } from "react";
import { IDevJob } from "@/pages/home";

export default function SearchFilter({ setJobs, }: { jobs: IDevJob[]; setJobs: React.Dispatch<React.SetStateAction<IDevJob[]>>; }) {
    //Define states and refs
    const [active, setActive] = useState(false);
    const manyFilter = React.useRef<HTMLInputElement>(null);
    const fullTimeInput = React.useRef<HTMLInputElement>(null);
    const locationFilter = React.useRef<HTMLInputElement>(null);

    //Define functions for popup
    const close = () => setActive(false);
    const toggle = () => setActive((v) => !v);

    //Define function for filtering jobs
    const filterJobs = async () => {

        //Get input values
        const value = manyFilter.current?.value.toLowerCase() || "";
        const isFullTime = fullTimeInput.current?.checked || false;
        const locationInput = locationFilter.current?.value.toLowerCase() || "";

        //Fetch jobs from server
        const response = await fetch("/devjobs");
        const payload = await response.json();
        const list: IDevJob[] = Array.isArray(payload) ? payload : (payload?.dev_jobs ?? []);

        //If no filters are applied, reset to original list
        if (value === "" && !isFullTime && locationInput === "") {
            setJobs(list);
            return;
        }

        //Filter the jobs based on input values
        const filtered = list.filter((job) => {
            const company = (job as IDevJob).company_name;

            const matchesText = !value || job.position.toLowerCase().includes(value) || company.toLowerCase().includes(value);

            const matchesType = !isFullTime || job.contract.toLowerCase() === "full time";

            const matchesLocation = !locationInput || job.location.toLowerCase().includes(locationInput);


            return matchesText && matchesType && matchesLocation;
        });

        setJobs(filtered);
    };

    useEffect(() => {
        // If popup is not active just exit
        if (!active) return;

        // Close on Escape key
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active]);

    return (
        <>
            {active && (
                <>
                    <div className="fixed inset-0  bg-black/50 backdrop-blur-[2px] z-40" onClick={close} />
                    <div className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <PopUp
                            is_active
                            locationRef={locationFilter}
                            fullTimeRef={fullTimeInput}
                            onSearch={() => {
                                filterJobs();
                                close();
                            }}
                        />
                    </div>
                </>
            )}

            <div className="flex dark:bg-neutral-0 bg-slate-900 w-fit rounded-6">
                <input
                    type="text"
                    name="title"
                    placeholder="Filter by title, company, expertise"
                    className="overflow-ellipsis text-preset-4-font-size outline-none indent-3 2xl:w-lg 2xl:indent-7 text-neutral-0 dark:text-slate-900 "
                    ref={manyFilter}
                />

                <div className="flex gap-6 px-5 ">
                    {/* Filter (mobile) */}
                    <div className="flex justify-center items-center cursor-pointer md:hidden" onClick={toggle}>
                        <img src="images/filter.svg" alt="filter_icon" className="w-5 h-5" />
                    </div>

                    {/* Location (desktop) */}
                    <div className="hidden md:flex items-center border-x border-slate-700 dark:border-neutral-300 2xl:w-sm py-7">
                        <img src="images/location.svg" alt="location_icon" className="ml-3" />
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Filter by location..."
                            className="2xl:w-sm indent-3 outline-none text-preset-4-font-size text-neutral-0 dark:text-slate-900"
                            ref={locationFilter}
                        />
                    </div>

                    {/* Full time (desktop) */}
                    <div className="hidden md:flex items-center gap-4 pr-6 2xl:w-[240px]">
                        <input
                            ref={fullTimeInput}
                            type="checkbox"
                            name="cb_fulltime"
                            className="w-6 h-6 bg-[#979797] accent-[#979797] "
                        />
                        <p className="text-neutral-0 dark:text-slate-900">Full Time</p>
                        <button
                            className="bg-indigo-500 rounded-6 w-20 h-11 font-semibold text-neutral-0 cursor-pointer"
                            onClick={filterJobs}
                        >
                            Search
                        </button>
                    </div>

                    {/* Search (mobile) */}
                    <div
                        className="bg-indigo-500 w-12 h-12 rounded-6 flex justify-center items-center cursor-pointer my-3.5 md:hidden"
                        onClick={filterJobs}
                    >
                        <img src="images/search.svg" alt="search_icon" />
                    </div>
                </div>
            </div>
        </>
    );
}

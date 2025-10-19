import { IJobDetail } from "@/pages/jobdetail";

export default function JobInfo(props: { info: { job_detail: IJobDetail; content_role: string; items_role: string[]; content_requirement: string; items_requirement: string[] } }) {
    const info = props.info;
    return (
        <>
            <div className="py-10 bg-slate-900 dark:bg-neutral-0 w-[327px] mx-auto md:w-[689px]">
                <div className="space-y-1.5 w-[279px] mx-auto md:w-[593px] md:flex">
                    <div>
                        <p className="text-slate-300 ">{info.job_detail.contract}</p>
                        <h3 className="text-preset-3-font-size font-semibold md:text-preset-1-font-size text-neutral-0 dark:text-black">{info.job_detail.position}</h3>
                        <p className="text-indigo-500 font-bold">{info.job_detail.location}</p>
                    </div>

                    <button className="bg-indigo-500 w-full h-[44px] rounded-6 md:w-[149px] md:ml-auto md:mt-5 text-white">Apply Now</button>
                </div>

                <div className="w-[279px] mx-auto space-y-5 md:w-[593px] ">
                    <h2 className="mt-10 mb-4 text-preset-3-font-size font-semibold text-neutral-0 dark:text-black">Requirements</h2>
                    <p className="text-slate-300">{info.content_requirement}</p>
                    <ul className="list-disc space-y-4 text-slate-300">
                        {info.items_requirement.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="w-[279px] mx-auto space-y-5 md:w-[593px] ">
                    <h2 className="mt-10 mb-4 text-preset-3-font-size font-semibold text-neutral-0 dark:text-black">What will you do </h2>
                    <p className="text-slate-300">{info.content_role}</p>
                    <ol className="list-decimal space-y-4 text-slate-300">
                        {info.items_role.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>













            </div>
            <div className="w-full mx-auto mt-14 flex justify-center  bg-slate-900 dark:bg-neutral-0 md:flex md:items-center md:justify-around">
                <div className="hidden md:block">
                    <h3 className="text-preset-3-font-size font-bold text-neutral-0 dark:text-black">{info.job_detail.position}</h3>
                    <p className="text-slate-500">{info.job_detail.company_name}</p>
                </div>
                <button className="bg-indigo-500 w-[327px] h-[44px] rounded-6 my-7 text-white">Apply Now</button>
            </div>
        </>
    );
}

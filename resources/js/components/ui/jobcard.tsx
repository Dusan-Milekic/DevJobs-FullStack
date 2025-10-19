export default function JobCard({ hours, type, position, company, location, image, bg_color, id }: { hours?: string, type?: string, position?: string, company?: string, location?: string, image?: string, bg_color?: string, id?: string }) {

    const createdAt = new Date(hours || "").toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    image = image?.split('/').pop();

    image = `images/logos/${image}`;


    const daysAgo = Math.floor((Date.now() - Date.parse(createdAt)) / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor((Date.now() - Date.parse(createdAt)) / (1000 * 60 * 60));

    const RedirectToJob = () => {
        window.location.href = `/job/${id}`;
    }
    return (
        <div className="animate-fade-left  px-8 pb-6 pt-14 dark:bg-neutral-0 bg-slate-900  relative rounded-xl cursor-pointer w-full" onClick={RedirectToJob}>
            <div className="w-[50px] h-[50px] absolute -top-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: bg_color || "black" }}>
                <img src={image} alt="company_logo" />
            </div>


            <div className="flex gap-6 w-[263px]">
                <p className="text-preset-4-font-size text-slate-500">{daysAgo > 0 ? daysAgo.toString() + " days" : hoursAgo.toString() + " hours"} ago</p>
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-100 text-preset-4-font-size bg-slate-500"></div>
                    <p className="text-preset-4-font-size text-slate-500">{type}</p>
                </div>

            </div>
            <div className="mt-3">
                <h2 className="text-preset-3-font-size font-bold dark:text-black text-neutral-0">{position}</h2>
            </div>
            <div className="mt-3">
                <p className="text-preset-4-font-size text-slate-500">{company}</p>
            </div>
            <div className="mt-10 text-preset-5-font-size text-indigo-500 font-semibold">
                <p>{location}</p>
            </div>

        </div>
    )
}

import { IJobDetail } from "@/pages/jobdetail";
export default function CompanyInfo({ company }: { company: IJobDetail }) {
    const logoFileName = company.logo?.split('/').pop();
    const logoPath = `/images/logos/${logoFileName}`;

    return (
        <div className="bg-slate-900 dark:bg-neutral-0 relative py-10 w-[327px] mx-auto rounded-12 z-10 -top-5 md:w-[689px] md:flex md:items-center md:py-0">

            <div style={{ backgroundColor: company.logoBackground || "black" }} className="w-[50px] h-[50px] flex items-center justify-center rounded-16 mx-auto absolute  -top-7 left-0 right-0 md:relative md:w-[140px] md:h-[140px] md:mx-0 md:-top-0 md:rounded-0">
                <img src={logoPath} alt={`${company.company_name} logo`} className="md:w-[81px]" />
            </div>
            <div className="md:ml-10">
                <h3 className=" text-preset-3-font-size font-bold text-center md:text-left text-neutral-0 dark:text-black">{company.company_name}</h3>
                <p className="text-slate-500 text-center md:text-left">{company.company_name.toLowerCase()}.com</p>
            </div>

            <a href={company.website} target="_blank" rel="noopener noreferrer" className="bg-slate-700 dark:bg-indigo-300 text-white font-semibold w-36 h-12 text-center flex items-center justify-center rounded-md mx-auto mt-8 md:m-0 md:ml-auto md:mr-10 ">Company Site</a>

        </div>
    );
}

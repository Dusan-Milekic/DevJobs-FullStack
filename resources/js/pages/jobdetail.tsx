import Header from "@/components/Header";
import CompanyInfo from "@/components/ui/companyInfo";
import JobInfo from "@/components/ui/jobinfo";
import { usePage } from "@inertiajs/react";

export interface IJobDetail {
    created_at: string;
    contract: string;
    position: string;
    company_name: string;
    location: string;
    logo: string;
    logoBackground: string;
    website: string;
}

type PageProps = {
    job_detail: IJobDetail;
    content_role: string;
    items_role: string[];
    content_requirement: string;
    items_requirement: string[];

};

export default function JobDetail() {
    const { job_detail, content_role, items_role, content_requirement, items_requirement } = usePage<PageProps>().props;

    return (
        <>
            <Header />
            <CompanyInfo company={job_detail} />
            <JobInfo info={{ job_detail, content_role, items_role, content_requirement, items_requirement }} />




        </>
    );
}

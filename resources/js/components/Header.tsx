import ToggleBar from "./ui/togglebar";
export default function Header() {
    return (
        <>
            <header className=" pt-7 pb-14 md:rounded-bl-[80px] ">
                <div className="flex justify-between items-center w-[375px] mx-auto sm:w-[689px] lg:w-[1110px]">
                    <div><h3 className="text-preset-1-font-size font-bold text-neutral-0">devjobs</h3></div>
                    <ToggleBar />
                </div>


            </header>

        </>
    )
}

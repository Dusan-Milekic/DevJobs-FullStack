import { useEffect, useState } from "react";

export default function ToggleBar() {


    const [isToggled, setIsToggled] = useState(localStorage.getItem("theme") === "dark");


    useEffect(() => {
        if (isToggled) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isToggled]);

    const Toggle = () => {
        const newState = !isToggled;
        setIsToggled(newState);

        if (newState) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (

        <div className="w-28 bg-transparent flex justify-around">


            <div className="flex items-center">
                <img src="/images/moon.svg" alt="sun_ico" />
            </div>


            <div className="w-12 h-6 bg-neutral-0 rounded-12 flex items-center cursor-pointer " onClick={Toggle}>
                <div className={`w-3.5 h-3.5 bg-indigo-500 rounded-full mx-1.5 transition-transform ${isToggled ? "translate-x-6" : ""}`}></div>
            </div>


            <div className="flex items-center">
                <img src="/images/sun.svg" alt="moon_ico" />
            </div>


        </div>

    )
}

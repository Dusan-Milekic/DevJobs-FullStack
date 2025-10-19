import React from "react";
type InputRef = React.MutableRefObject<HTMLInputElement | null>;
export default function PopUp({ is_active, locationRef, fullTimeRef, onSearch }: { is_active?: boolean; locationRef: InputRef; fullTimeRef: InputRef; onSearch: () => void; }) {
    return (
        <div
            id="popup"
            className={`bg-neutral-0 w-fit px-6 py-6 rounded-6 shadow-lg transition-all duration-200 ${is_active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex gap-4 pb-5">
                <img src="images/location.svg" alt="location.ico" />
                <input
                    ref={locationRef}
                    type="text"
                    name="location"
                    placeholder="Filter by location..."
                    className="text-slate-900 outline-none"
                />
                <hr className="border-slate-500 w-[281px] h-0.5 absolute left-0 top-16" />
            </div>

            <div className="flex items-center gap-4 py-5">
                <input ref={fullTimeRef} type="checkbox" name="fulltime" className="w-6 h-6" />
                <p className="font-bold text-preset-4-font-size text-slate-900">Full Time Only</p>
            </div>

            <button
                onClick={onSearch}
                className="bg-indigo-500 rounded-6 w-full h-11 px-6 font-semibold text-neutral-0"
            >
                Search
            </button>
        </div>
    );
}

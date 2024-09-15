import { useEffect, useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { setRegion } from '../../app/feature/CountryFilterSlice';

const filterRegions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
]

const DropDown = () => {
    const [isShow, setIsShow] = useState(false);
    const dispatch = useAppDispatch();
    const { region } = useAppSelector((state) => state.countryFilter);
    const dropRef = useRef<HTMLDivElement>(null);

    const handleShow = () => {
        setIsShow(prev => !prev);
    }

    const handleSelectRegion = (region: string) => {
        dispatch(setRegion(region));
        setIsShow(false);
    }

    const renderFilterRegions = filterRegions.map((rg: string, idx: number) => (
        <p
            className={`cursor-pointer p-2.5 transition-all duration-[0.5s] hover:pl-4 ${region === rg ? "bg-[#eee]" : ""}`}
            onClick={() => handleSelectRegion(rg)}
            key={idx}
        >
            {rg}
        </p>
    ))

    const handleClickOutside = (event: MouseEvent) => {
        if (dropRef.current && !dropRef.current.contains(event.target as Node)) {
            setIsShow(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="drop-down-con w-[250px] relative" ref={dropRef}>
            <div
                className="drop-down shadow-md rounded-lg py-4 px-6 flex items-center justify-between cursor-pointer"
                onClick={handleShow}>
                <p>{region ? `${region}` : "Filter by region"}</p>
                <span className="">
                    <BiChevronDown className={`transition-transform duration-[0.5s] ${isShow ? 'rotate-180' : 'rotate-0'}`} size={30} />
                </span>
            </div>
            {isShow && (
                <div
                    className="drop bg-white shadow-md rounded-lg absolute top-[68px] z-10 w-full overflow-hidden">
                    {renderFilterRegions}
                </div>
            )}
        </div>
    )
}

export default DropDown;

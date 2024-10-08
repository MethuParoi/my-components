"use client";

import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchClicked &&
        !(event.target as HTMLElement).closest(".search-container")
      ) {
        setSearchClicked(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchClicked]);

  return (
    <nav className="flex items-center justify-between pb-[2rem]">
      <div>
        <h1>NIXZO</h1>
      </div>

      {/* search bar for md and above*/}
      <div className="relative hidden md:block">
        <input
          className="z-10 h-[4.5rem] xl:w-[50rem] md:w-[30rem] rounded-l-[1rem] border-2 border-primaryColor px-[1rem]"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {!inputValue && !isFocused && (
          <div className="absolute top-[.7rem] left-[1.5rem] flex items-center gap-x-4 pointer-events-none opacity-50">
            <IoIosSearch className="text-[3.2rem] text-primaryColor" />
            <p className="text-[2rem] text-primaryColor">search...</p>
          </div>
        )}
        <button className="h-[4.5rem] lg:w-[10rem] ml-[-2px] bg-primaryColor hover:bg-primaryColorHover hover:text-primaryTextColorHover text-primaryTextColor rounded-r-[1rem]">
          Search
        </button>
      </div>

      {/* search bar for less than md */}
      {searchClicked && (
        <div className="absolute top-[1rem] right-[1rem] md:hidden">
          <div className="search-container">
            <input
              className="z-10 h-[4.5rem] max-w-[18rem] rounded-l-[1rem] border-2 border-primaryColor px-[1rem]"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
              }}
            />
            {!inputValue && !isFocused && (
              <div className="absolute top-[.7rem] left-[1.5rem] flex items-center gap-x-4 pointer-events-none opacity-50">
                <IoIosSearch className="text-[3.2rem] text-primaryColor" />
                <p className="text-[2rem] text-primaryColor">search...</p>
              </div>
            )}
            <button className="h-[4.5rem] w-[7rem] ml-[-2px] bg-primaryColor hover:bg-primaryColorHover hover:text-primaryTextColorHover text-primaryTextColor text-md rounded-r-[1rem]">
              Search
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-x-[2rem] cursor-pointer text-primaryColor hover:text-primaryColorHover">
        <button
          onClick={() => setSearchClicked(!searchClicked)}
          className="md:hidden flex flex-col items-center"
        >
          <IoIosSearch
            className="text-[3.2rem] text-primaryColor"
            style={{ strokeWidth: 0.9 }}
          />
          <p className="text-[1rem]">Search</p>
        </button>

        <button className="flex flex-col items-center">
          <HiOutlineShoppingBag
            className="text-[3.2rem]"
            style={{ strokeWidth: 0.9 }}
          />
          <p className="text-[1rem]">Shopping Bag</p>
        </button>

        <button className="flex flex-col items-center cursor-pointer text-primaryColor hover:text-primaryColorHover">
          <CiUser className="text-[3.2rem] " />
          <p className="text-[1rem]">Profile</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

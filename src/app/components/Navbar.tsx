"use client";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { list } from "@/data/navbar";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(
    Array.from({ length: list.length }, () => null)
  );

  const handleMenuOpen = (event: any, _idx: any) => {
    console.log(event.currentTarget);
    // setAnchorEl(event.currentTarget) ;
    setAnchorEl(
      anchorEl.map((_, idx) => (idx === _idx ? event.currentTarget : null))
    );
  };

  const handleMenuClose = () => {
    setAnchorEl([...Array.from({ length: list.length }, () => null)]);
  };

  const lists = list.map((item, _idx) => {
    return (
      <li
        key={item.id}
        className="cursor-pointer hover:text-sky-700  transition hover:shadow-2xl"
        color="inherit"
        onClick={(e) => handleMenuOpen(e, _idx)}
        aria-controls={`menu-${_idx}`}
        aria-haspopup="true"
      >
        {item.name}
        {item.subMenu.length > 0 && <KeyboardArrowDownIcon />}

        {item.subMenu.length > 0 && (
          <Menu
            id={`menu-${_idx}`}
            anchorEl={anchorEl[_idx]}
            open={Boolean(anchorEl[_idx])}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseLeave: handleMenuClose, // Optional: close on mouse leave
            }}
          >
            {item.subMenu.map((subItem, _idx) => {
              return (
                <MenuItem key={_idx} onClick={handleMenuClose}>
                  {subItem.name}
                </MenuItem>
              );
            })}
          </Menu>
        )}
      </li>
    );
  });

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-sky-600" href="#">
              <span className="sr-only">Home</span>
              <svg
                width="137"
                height="40"
                viewBox="0 0 137 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1038 15.3425C18.1038 21.3071 13.9769 25.413 7.53976 25.413H0V5.27202H7.55026C13.9769 5.27202 18.1038 9.34643 18.1038 15.3425ZM7.23523 21.1706C10.9421 21.1706 13.1158 19.0494 13.1158 15.3425C13.1158 11.6357 10.9316 9.46194 7.23523 9.46194H4.90399V21.1706H7.23523Z"
                  fill="#0E82FD"
                />
                <path
                  d="M29.9795 25.6236C24.2669 25.6236 19.6254 21.3497 19.6254 15.2905C19.6254 9.23144 24.2774 4.98901 29.9795 4.98901C35.7235 4.98901 40.281 9.23144 40.281 15.2905C40.281 21.3392 35.6815 25.6236 29.9795 25.6236ZM29.9795 21.1396C33.1928 21.1396 35.293 18.8189 35.293 15.2905C35.293 11.6992 33.2033 9.44146 29.9795 9.44146C26.7031 9.44146 24.6449 11.7097 24.6449 15.2905C24.6344 18.8189 26.7031 21.1396 29.9795 21.1396Z"
                  fill="#0E82FD"
                />
                <path
                  d="M52.2943 5.04162C57.0827 5.04162 60.7056 7.74039 61.8502 12.0983H56.4527C55.6231 10.3762 54.1005 9.51507 52.2313 9.51507C49.2175 9.51507 47.1488 11.7518 47.1488 15.3117C47.1488 18.8715 49.2175 21.1082 52.2313 21.1082C54.1005 21.1082 55.6126 20.2471 56.4527 18.525H61.8502C60.7056 22.8829 57.0827 25.5502 52.2943 25.5502C46.3507 25.5502 42.1608 21.3288 42.1608 15.3011C42.1713 9.29455 46.3612 5.04162 52.2943 5.04162Z"
                  fill="#0E82FD"
                />
                <path
                  d="M73.3384 5.04162C78.1268 5.04162 81.7497 7.74039 82.8943 12.0983H77.4968C76.6672 10.3762 75.1445 9.51507 73.2754 9.51507C70.2616 9.51507 68.1928 11.7518 68.1928 15.3117C68.1928 18.8715 70.2616 21.1082 73.2754 21.1082C75.1445 21.1082 76.6567 20.2471 77.4968 18.525H82.8943C81.7497 22.8829 78.1268 25.5502 73.3384 25.5502C67.3948 25.5502 63.2048 21.3288 63.2048 15.3011C63.2153 9.29455 67.4053 5.04162 73.3384 5.04162Z"
                  fill="#0E82FD"
                />
                <path
                  d="M134.728 9.20991H127.294V13.2843H133.867V17.0752H127.294V21.4961H134.728V25.4235H122.39V5.27202H134.728V9.20991Z"
                  fill="#0E82FD"
                />
                <path
                  d="M115.226 25.4127H120.918L115.247 17.4319C118.345 16.5183 119.721 14.1345 119.721 11.6038C119.721 8.10692 117.253 5.26113 112.318 5.26113H104.085V25.4022H108.989V18.671H110.648L115.226 25.4127ZM108.989 9.34604H112.034C113.872 9.34604 114.733 10.3226 114.733 11.8138C114.733 13.3889 113.872 14.334 112.034 14.334H108.989V9.34604Z"
                  fill="#0E82FD"
                />
                <path
                  d="M131.502 34.9385C132.587 34.9385 133.466 34.0593 133.466 32.9748C133.466 31.8903 132.587 31.0111 131.502 31.0111C130.418 31.0111 129.538 31.8903 129.538 32.9748C129.538 34.0593 130.418 34.9385 131.502 34.9385Z"
                  fill="#0E82FD"
                />
                <path
                  d="M131.482 28.2276C130.012 28.2276 128.71 28.9101 127.859 29.9813L121.779 29.8867V31.6824H98.9706C98.6556 31.6824 98.3406 31.5774 98.3406 31.5774V31.5669C95.7678 30.6953 94.9802 28.9521 94.7387 28.0071C96.0828 27.5765 97.2589 26.3899 97.2904 24.6992C99.6322 23.4811 101.249 21.0134 101.249 17.2855V11.7514H101.239L100.409 10.9638L100.22 6.29088L99.0861 5.06226C99.0966 4.97825 99.1071 4.88374 99.1071 4.79973C99.1071 3.5291 98.0675 2.5 96.7864 2.5C95.5053 2.5 94.4657 3.5291 94.4657 4.79973C94.4657 6.07036 95.5053 7.09946 96.7864 7.09946C96.8809 7.09946 96.9754 7.08896 97.0594 7.07846L97.4375 7.79253V10.9743L96.7864 11.7514H96.7549V17.3275C96.7549 19.7112 95.6208 21.0869 93.4891 21.0869C91.3573 21.0869 90.2757 19.7112 90.2757 17.3275V11.7514H90.2547L89.6142 10.9743V7.79253L89.9817 7.07846C90.0762 7.08896 90.1602 7.09946 90.2547 7.09946C91.5254 7.09946 92.5545 6.07036 92.5545 4.79973C92.5545 3.5291 91.5254 2.5 90.2547 2.5C88.9841 2.5 87.955 3.5291 87.955 4.79973C87.955 4.89424 87.9655 4.97825 87.976 5.06226L86.8524 6.29088L86.6634 10.9638L85.8443 11.7514H85.7813V17.296C85.7813 21.2549 87.472 23.7961 90.0027 24.9302C90.1812 26.5894 91.2838 27.671 92.5755 28.0491C93.027 31.7769 96.6079 33.6671 97.8365 33.8981C97.8365 33.8981 98.099 33.9821 98.4981 34.0137H121.81V35.8408H127.964C128.815 36.8489 130.085 37.5 131.513 37.5C134.076 37.5 136.144 35.4313 136.144 32.869C136.113 30.3068 134.044 28.2276 131.482 28.2276ZM93.6046 27.0515C92.3865 27.0515 91.4834 26.3899 91.0633 25.3188C91.7984 25.5183 92.5755 25.6233 93.3946 25.6233C94.3817 25.6233 95.3267 25.4763 96.1983 25.1823H96.1878C95.7783 26.3164 94.8647 27.0515 93.6046 27.0515ZM131.482 36.2084C129.634 36.2084 128.132 34.7067 128.132 32.8585C128.132 31.0104 129.634 29.5087 131.482 29.5087C133.33 29.5087 134.832 31.0104 134.832 32.8585C134.832 34.7067 133.33 36.2084 131.482 36.2084Z"
                  fill="#0E82FD"
                />
              </svg>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">{lists}</ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="#"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
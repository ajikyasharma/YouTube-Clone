import React, { Fragment, forwardRef } from "react";
import {
  HomeIcon,
  CreditCardIcon,
  UserIcon,
  ChevronDownIcon,
  PencilIcon,
  Cog8ToothIcon,
  FireIcon,
  MusicalNoteIcon,
  FilmIcon,
  TvIcon,
  PuzzlePieceIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

const SideBar = forwardRef(({ showSideBar }, ref) => {
  return (
    <div ref={ref} className="fixed w-56 h-full bg-black shadow-sm flex flex-col">
      <div className="flex-1 flex flex-col">
        <div className="flex justify-center mt-6 mb-8 ">
          <picture>
            <img
              className="mr-5 "
              // src="src/Images/yt-logo.png"
               src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg"
              width={120}
              alt="logo"
            />
          </picture>
        </div>

        <div className="flex flex-col">
        <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 pt-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <HomeIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Home</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 pt-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <FireIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Trending</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/music"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 pt-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <MusicalNoteIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Music</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/films"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 mt-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <FilmIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Films </p>
              </div>
            </div>
          </NavLink>



          <NavLink
            to="/live"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 mt-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <TvIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Live </p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/game"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 mt-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <PuzzlePieceIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Game</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col border-t border-neutral-700">
      <NavLink
            to="/settings"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400  hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <Cog8ToothIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Settings</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400  hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <FlagIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Report</p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              `rounded mx-2 mb-2 ${
                isActive
                  ? " text-white bg-gray-700 "
                  : "text-gray-400  hover:bg-gray-100 hover:text-gray-700"
              }`
            }
          >
            <div
              className={`pl-6 py-2  rounded text-center cursor-pointer mb-3 flex flex-row justify-be transition-colors `}
            >
              <div className="mr-2">
                <QuestionMarkCircleIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Help</p>
              </div>
            </div>
          </NavLink>
      </div>
    </div>
  );
});

export default SideBar;

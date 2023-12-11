import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Bars3CenterLeftIcon,
  BellIcon,
  CheckIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  CreditCardIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ setShowSideBar, showSideBar,setSearchTerm }) {

  const navigate= useNavigate()


  const [input, setInput]= useState('')


  const submitHandler =(e)=>{
       e.preventDefault()
       setSearchTerm(input)

       navigate('/searchresult')

       setInput('')
  }


  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] bg-black  text-white ${
        showSideBar ? "ml-56  pr-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-500 cursor-pointer"
          onClick={() => setShowSideBar(!showSideBar)}
        />
      </div>
      <div >
          <form className="flex flex-row" onSubmit={submitHandler}>
            <input className="w-40 md:w-60 h-10 rounded bg-transparent border border-gray-400 text-gray-300 p-2" type="text" placeholder="Search here..."  value={input}  onChange={(e)=>setInput(e.target.value)}/>
            <input className="w-15 text-sm md:text-md md:w-20 h-10 rounded text-white bg-red-600 ml-1 md:ml-3" type="submit" value="Search"/>
          </form>
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none ml-1 mr- md:mr-8 cursor-pointer text-gray-500">
            <BellIcon className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-black bg-text-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-white font-medium">Notifications</p>
                  <a className="text-sm text-red-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-500">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-300 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-500">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-300 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-500">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-300 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-500">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-300 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="https://source.unsplash.com/80x80?face"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>

            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-black bg-text-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    to="#"
                    className="flex hover:bg-red-600 hover:text-white text-gray-300 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <UserIcon className="h-4 w-4 mr-2" />
                    Your Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="#"
                    className="flex hover:bg-red-600 hover:text-white text-gray-300 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="#"
                    className="flex hover:bg-red-600 hover:text-white text-gray-300 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
                    Log Out
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Header;

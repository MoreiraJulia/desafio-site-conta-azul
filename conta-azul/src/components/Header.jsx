import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { HeaderListNavigationDesktop, HeaderListNavigationMobile } from './HeaderListNavigation';
import HeaderFaleConoscoEntrar from './HeaderFaleConoscoEntrar';
import LogoDoSite from '../utils/LogoDoSite';
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import redesSociais from "../services/RedesSociais";
import { CiSearch } from "react-icons/ci";


function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow fixed top-0 left-0 right-0 z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <LogoDoSite />
                </div>
                <div className="menu-desktop sm:ml-6 ">
                  <div className="flex space-x-6">
                    <HeaderListNavigationDesktop />
                  </div>
                </div>
              </div>

              <div>
                <HeaderFaleConoscoEntrar />
              </div>

              <div className="relative inset-y-0 right-0 flex items-center menu-mobile">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#999999] text-[13px] font-medium">
                  <IoMdMenu className={`${open ? 'hidden' : 'block'} h-6 w-10 pr-1`} aria-hidden="true"/> Menu
                  <IoCloseOutline className={`${open ? 'block' : 'hidden'} h-6 w-10`}  aria-hidden="true"/>
                </DisclosureButton>
              </div>

              <DisclosurePanel className={`flex flex-col justify-between fixed inset-y-0 right-0 z-50 w-80 bg-white p-4 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <DisclosureButton className="absolute z-20 top-4 right-4 text-gray-500 hover:text-gray-800">
                  <MdClose aria-hidden="true"/>
                </DisclosureButton>
                <div className="space-y-1 px-2 pt-2 pb-3 overflow-auto">
                  <HeaderListNavigationMobile />
                </div>

                <div>
                  {/* <input placeholder="Buscar" className=" border-black pl-3.5 rounded-[5px] border-[1px] py-2 w-full"/> */}
                  <div className="relative">
                      <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input 
                          placeholder="Buscar" 
                          className="pl-10 border-black rounded-[5px] border-[1px] py-2 w-full" 
                      />
                  </div>
                  <div className="flex justify-center lg:justify-start gap-7 mb-5 mt-5 lg:mb-0">
                    {redesSociais.map((item) => (
                        <a href={item.url} title={item.name}>
                            {item.image}
                        </a>
                    ))}
                  </div>
                </div>
              </DisclosurePanel>
            </div>
          </div>
          {open && (<div className="fixed inset-0 bg-blue-600 opacity-75 z-30"></div>)}
        </>
      )}
    </Disclosure>
  );
}

export default Header;
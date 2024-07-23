import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { HeaderListNavigationDesktop, HeaderListNavigationMobile } from './HeaderListNavigation';
import HeaderFaleConoscoEntrar from './HeaderFaleConoscoEntrar';
import LogoDoSite from './LogoDoSite';


export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <LogoDoSite />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    <HeaderListNavigationDesktop />
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <svg className={`${open ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <svg className={`${open ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </DisclosureButton>
              </div>

              <div className="">
                <HeaderFaleConoscoEntrar />
              </div>

              <DisclosurePanel className={`fixed inset-y-0 right-0 z-40 w-80 bg-white p-4 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <DisclosureButton className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </DisclosureButton>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  <HeaderListNavigationMobile />
                </div>
              </DisclosurePanel>
            </div>
          </div>

          {/* Background overlay */}
          {open && (
            <div className="fixed inset-0 bg-blue-600 opacity-75 z-30"></div>
          )}
        </>
      )}
    </Disclosure>
  );
}

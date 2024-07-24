// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import navigation from '../services/HeaderNavigation';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

function HeaderListNavigationDesktop({ items }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeSubMenuDois, setActiveSubMenuDois] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSubMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  const handleMouseEnterDois = (index) => {
    setActiveSubMenuDois(index);
  };

  const handleMouseLeaveDois = () => {
    setActiveSubMenuDois(null);
  };

  return (
    <div className="relative flex gap-8">
      {navigation.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="relative h-20 self-center flex"
          onMouseEnter={() => handleMouseEnter(itemIndex)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.href}
            className="text-gray-conta-azul text-sm font-medium flex items-center"
          >
            {item.name}
            {item.subCategorias && (
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-500 ease-in-out transform ${
                  activeSubMenu === itemIndex ? 'rotate-180' : ''
                }`}
              />
            )}
          </a>
          {item.subCategorias && activeSubMenu === itemIndex && (
            <div className="absolute bg-white shadow-lg py-6 mt-[80px]">
              <div
                className={
                  item.subCategorias.length <= 5
                    ? 'grid grid-rows-5 grid-flow-col gap-x-6 gap-y-4 max-w-full w-max'
                    : 'grid grid-rows-6 2xl:grid-rows-4 grid-flow-col gap-x-2 gap-y-4 max-w-full w-max'
                }
              >
                {item.subCategorias.map((subcategoria, subIndex) => (
                  <div
                    key={subIndex}
                    className="relative"
                    onMouseEnter={() => handleMouseEnterDois(subIndex)}
                    onMouseLeave={handleMouseLeaveDois}
                  >
                    <a
                      href={subcategoria.href}
                      className="px-12 py-2 text-sm font-medium text-gray-800 flex items-center gap-1.5"
                    >
                      {subcategoria.nameSub}
                      {subcategoria.subCategoriaDois && (
                        <IoIosArrowDown
                          className={`ml-1 transition-transform duration-500 ease-in-out transform ${
                            activeSubMenuDois === subIndex ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </a>
                    {subcategoria.subCategoriaDois && activeSubMenuDois === subIndex && (
                      <div className="absolute bg-white shadow-lg mt-[-25px] py-6 left-full top-0">
                        <div className="grid grid-rows-4 grid-flow-col gap-x-6 gap-y-4 max-w-full w-max">
                          {subcategoria.subCategoriaDois.map(
                            (subcategoriaDois, subDoisIndex) => (
                              <a
                                key={subDoisIndex}
                                href={subcategoriaDois.href}
                                className="px-10 py-2 text-sm font-medium text-gray-800"
                              >
                                {subcategoriaDois.nameSubCategoriaDois}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// function HeaderListNavigationMobile(){
//   const [openMenu, setOpenMenu] = useState(null);

//   const toggleMenu = (index) => {
//     setOpenMenu(openMenu === index ? null : index); 
//   };

//   return(
//     <div className="text-center">
//       {navigation.map((item, index) => (
//         <>
//           <Menu as="div" className="relative text-center">
//             <div className="text-center">
//               <MenuButton  onClick={() => toggleMenu(index)} className="inline-flex text-center w-full justify-center px-3 py-4 text-sm font-medium text-gray-900 border-0 btn-mobile-menu">
//                 {item.name}
//                 {item.subCategorias && (
//                   <IoIosArrowDown
//                     className={`ml-2 transition-transform duration-300 ${openMenu === index ? 'rotate-180' : 'rotate-0'}`}
//                   />
//                 )}
//               </MenuButton>
//             </div>
//             {item.subCategorias &&  (
//               <MenuItems
//                 transition
//                 className="relative  mt-2  w-full transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//               >
//                 <div className="py-1">
//                   {item.subCategorias.map((subcategoria) => (
//                     <MenuItem>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 font-medium text-sm text-[#999] "
//                       >
//                         {subcategoria.nameSub}
//                       </a>
//                     </MenuItem>
//                   ))}
//                 </div>
//               </MenuItems>
//             )}
//           </Menu>
//         <hr />
//       </>
//     ))}
//   </div>
// )}


function HeaderListNavigationMobile() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index); 
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index); 
  };

  return (
    <div className="text-center">
      {navigation.map((item, index) => (
        <div key={index} className="relative text-center">
          <Menu as="div" className="relative text-center">
            <div className="text-center">
              <MenuButton
                onClick={() => toggleMenu(index)}
                className="inline-flex text-center w-full justify-center px-3 py-4 text-sm font-medium text-gray-900 border-0 btn-mobile-menu"
              >
                {item.name}
                {item.subCategorias && (
                  <IoIosArrowDown
                    className={`ml-2 transition-transform duration-300 ${openMenu === index ? 'rotate-180' : 'rotate-0'}`}
                  />
                )}
              </MenuButton>
            </div>
            {item.subCategorias && (
              <MenuItems
                transition
                className="relative mt-2 w-full transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  {item.subCategorias.map((subcategoria, subIndex) => (
                    <div key={subIndex} className="relative">
                      <Menu as="div" className="relative">
                        <div>
                          <MenuButton
                            onClick={() => toggleSubMenu(subIndex)}
                            className="inline-flex text-center w-full justify-center block px-4 py-2 font-medium text-sm text-[#999] w-full text-left btn-mobile-menu"
                          >
                            {subcategoria.nameSub}
                            {subcategoria.subCategoriaDois && (
                              <IoIosArrowDown
                                className={`ml-2 transition-transform duration-300 ${openSubMenu === subIndex ? 'rotate-180' : 'rotate-0'}`}
                              />
                            )}
                          </MenuButton>
                        </div>
                        {subcategoria.subCategoriaDois && (
                          <MenuItems
                            transition
                            className="relative mt-2 w-full transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div className="py-1">
                              {subcategoria.subCategoriaDois.map((subSubCategoria, subSubIndex) => (
                                <MenuItem key={subSubIndex}>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 font-medium text-sm text-[#999]"
                                  >
                                    {subSubCategoria.nameSubCategoriaDois}
                                  </a>
                                </MenuItem>
                              ))}
                            </div>
                          </MenuItems>
                        )}
                      </Menu>
                    </div>
                  ))}
                </div>
              </MenuItems>
            )}
          </Menu>
          <hr />
        </div>
      ))}
    </div>
  );
}
export {HeaderListNavigationDesktop, HeaderListNavigationMobile};
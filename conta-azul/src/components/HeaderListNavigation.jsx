import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import navigation from './HeaderNavigation';

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
                    : 'grid grid-rows-4 grid-flow-col gap-x-6 gap-y-4 max-w-full w-max'
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


// function HeaderListNavigationDesktop(){
    
//     return(
//         <>
//         {navigation.map((item) => (
//             <div id="bouton" key={item.name} className="relative group relative group h-20 self-center flex">
//             <a
//                 href={item.href}
//                 className="text-gray-conta-azul text-sm font-medium flex items-center gap-1.5"
//             >
//                 {item.name}
//                 {item.subCategorias && (
//                 <IoIosArrowDown className="ml-1 transition-transform duration-500 ease-in-out transform group-hover:rotate-180 "/>
//                 )}
//             </a>
//             {item.subCategorias && (
//                 <div className="absolute hidden group-hover:block bg-white shadow-lg transition delay-500 duration-500 ease-in-out p-6 mt-[81px] hover:delay-500">
//                     <div className={item.subCategorias.length <= 5 
//                         ? "grid grid-rows-5 grid-flow-col gap-x-6 gap-y-4 max-w-full w-max" 
//                         : "grid grid-rows-4 grid-flow-col gap-x-6 gap-y-4 max-w-full w-max"
//                     }>
//                         {item.subCategorias.map((subcategoria, index) => (
//                             <div key={index} className="relative group">
//                                 <a href={subcategoria.href} className="px-4 py-2 text-sm font-medium text-gray-800 flex items-center gap-1.5">
//                                     {subcategoria.nameSub}
//                                     {subcategoria.subCategoriaDois && (
//                                         <IoIosArrowDown className="ml-1 transition-transform duration-500 ease-in-out transform group-hover:rotate-180"/>
//                                     )}
//                                 </a>
//                                 {subcategoria.subCategoriaDois && (
//                                     <div className="absolute hidden group-hover:block bg-white shadow-lg mt-[-25px] transition-all duration-500 ease-in-out hover:ease-in p-6 ml-7 left-full top-0 group">
//                                         <div className="grid grid-rows-4 grid-flow-col gap-x-6 gap-y-4 max-w-full w-max">
//                                             {subcategoria.subCategoriaDois.map((subcategoriaDois, subIndex) => (
//                                                 <a key={subIndex} href={subcategoriaDois.href} className="relative group px-4 py-2 text-sm font-medium text-gray-800">
//                                                     {subcategoriaDois.nameSubCategoriaDois}
//                                                     <div className="absolute hidden group-hover:block bg-white shadow-lg mt-[-25px] transition-all duration-500 ease-in-out hover:ease-in p-6 ml-7 left-full top-0">
//                                                         <div className="grid grid-rows-4 grid-flow-col gap-x-6 gap-y-4 max-w-full w-max">
//                                                             {/* Conteúdo do submenu do item filho */}
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             </div>
//         ))}
//         </>
//     )
// }
function HeaderListNavigationMobile(){
    return(
        <>
        {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </> 
    )
}
export {HeaderListNavigationDesktop, HeaderListNavigationMobile} ;
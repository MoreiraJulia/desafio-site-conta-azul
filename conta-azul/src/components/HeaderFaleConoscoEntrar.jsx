import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function HeaderFaleConoscoEntrar(){
    return(
        <>
            <div className="flex items-center gap-7">
                <button>
                    <CiSearch className="icone-search"/>
                </button>
                <div>
                    <p className="text-gray-conta-azul text-sm font-medium inline-grid leading-6">Fale Conosco <a href="" target="_blank" className="text-azul-conta-azul hover:text-azul-hover-conta-azul">WhatsApp</a></p>
                </div>
                <button className="bg-azul-conta-azul font-medium rounded text-white flex items-center gap-1.5 px-8 py-2.5 text-sm">
                    Entrar
                    <IoIosArrowDown />
                    
                </button>
            </div>
        </>
    )
}

export default HeaderFaleConoscoEntrar;
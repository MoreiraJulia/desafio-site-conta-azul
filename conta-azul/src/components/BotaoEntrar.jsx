import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function BotaoEntrar() {
  const [showOptions, setShowOptions] = useState(false);
  return(
    <div className="button-entrar-container">
      <div 
        className="button-container"
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <button className="bg-azul-conta-azul font-medium rounded text-white flex items-center gap-1.5 px-8 py-2.5 text-sm btn-entrar">
          Entrar
          <IoIosArrowDown />
        </button>
        {showOptions && (
          <div className="dropdown">
            <a className="dropdown-item flex items-center gap-3 mb-1" href="https://login.contaazul.com/">
              <img src="https://ca.contaazul.com/wp-content/uploads/2023/03/pro_simbolo.svg" className="h-7" />
              <div>
                <h3 className="text-[16px] text-[#999] hover:text-[#666]">ERP Conta Azul Pro</h3>
                <p className="text-[10px] text-[#999] hover:text-[#666]">O ERP em Nuvem que simplica sua gestão financeira</p>
              </div>
            </a>
            <hr />
            <a className="dropdown-item flex items-center gap-3 mt-1" href="https://contabilidade.contaazul.com/">
              <img src="https://ca.contaazul.com/wp-content/uploads/2023/03/mais_simbolo.svg"  className="h-7" />
              <div>
                <h3 className="text-[16px] text-[#999] hover:text-[#666]">Conta Azul Mais</h3>
                <p className="text-[10px] text-[#999] hover:text-[#666]">O que sua contabilidade precisa em um só lugar</p>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default BotaoEntrar;
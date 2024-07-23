import React, { useState } from 'react';

function InputExperimenteGratis() {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <input placeholder="seu e-mail" className="input-seu-email border-gray-200 pl-3.5 rounded-[5px] border-[1px] py-3"/>
                <button
                    className={`btn-verde text-sm font-medium py-3.5 px-10  rounded-[5px] border-[1px] md:max-w-max rounded ${
                        isChecked
                            ? 'bg-verde-folha-conta-azul text-white border-verde-folha-conta-azul'
                            : 'bg-white text-gray-400 border-gray-200'
                    }`}
                    disabled={!isChecked}
                >
                    Experimente Grátis
                </button>
            </div>
            <div className="mt-5">
                <fieldset>
                    <label className="peer flex items-center gap-1">
                        <input
                            type="checkbox"
                            name="politicaDePrivacidade"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className="text-sm text-[#666] font-medium justify-center md:justify-left">
                            Concordo com a{' '}
                            <a
                                href="https://ca.contaazul.com/termos/privacidade/?_ga=2.209904273.54477621.1690375421-388926672.1690220393"
                                className="text-azul-conta-azul"
                            >
                                Política de Privacidade.
                            </a>
                        </span>
                    </label>
                </fieldset>
            </div>
        </>
    );
}

export default InputExperimenteGratis;

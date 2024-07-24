import BotaoPesquisa from "./BotaoPesquisa";
import BotaoEntrar from "./BotaoEntrar";

function HeaderFaleConoscoEntrar(){
    return(
        <>
            <div className="flex items-center gap-7">
                <button>
                    <BotaoPesquisa />
                </button>
                <div className="text-fale-conosco">
                    <p className="text-gray-conta-azul text-sm font-medium inline-grid leading-6">Fale Conosco <a href="" target="_blank" className="text-azul-conta-azul hover:text-azul-hover-conta-azul">WhatsApp</a></p>
                </div>
                <BotaoEntrar />
            </div>
        </>
    )
}

export default HeaderFaleConoscoEntrar;
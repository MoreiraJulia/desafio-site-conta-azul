import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function BarraAzulFixaRodape() {
    return (
        <>
            <section className="fixed bottom-0 left-0 right-0 z-10 h-[61px] md:grid grid-cols-2 barra-azul-bottom">
                <div className="bg-[#00aff0] flex items-center justify-end pr-4">
                    <p className="text-sm text-white flex items-center gap-1 font-semibold">
                        Quer falar com um especialista? <a href="tel:08006000920" className="font-bold text-base flex items-center gap-1"> <IoPhonePortraitOutline className="text-xl"/>
                         0800 600 0920</a>
                    </p>
                </div>
                <div className="bg-[#3dd0f6] flex items-center pl-4">
                    <a href="https://api.whatsapp.com/send/?phone=554730640460&text=Ol%C3%A1%21%20Estou%20interessado%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20sistema." className="text-white font-bold text-base flex items-center gap-1"> <FaWhatsapp className="text-xl"/>  Fale com a gente no Whatsapp</a>
                </div>
            </section>
        </>
    )
}

export default BarraAzulFixaRodape;
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function BotaoFlutuante() {
    return (
        <>
            <button className="text-white text-[9px] bg-[#0c178b] h-14 rounded-full fixed bottom-3 right-3 flex flex-col items-center justify-center px-3.5 z-20 font-medium shadow-xl">
                <IoChatbubbleEllipsesSharp className="text-[22px]"/>
                Fale conosco
            </button>
        </>
    )
}

export default BotaoFlutuante;
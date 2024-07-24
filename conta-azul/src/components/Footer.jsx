import BarraAzulFixaRodape from "./BarraAzulFixaRodape";
import FooterCopyright from "./FooterCopyright";
import FooterMapaDoSite from "./FooterMapaDoSite";
import BotaoFlutuante from "./BotaoFlutuante";

function Footer() {
    return(
        <>
            <BotaoFlutuante />
            <footer className="bg-white mx-auto max-w-7xl pt-10 pb-4 md:pb-10 lg:px-8">
                <FooterMapaDoSite />
                <hr />
                <FooterCopyright />
            </footer>   
            <BarraAzulFixaRodape />
        </>
    );
}

export default Footer;
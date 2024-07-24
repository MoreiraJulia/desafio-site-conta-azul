import LogoDoSite from "../utils/LogoDoSite";
import { paginasList, suporteList, nossosAplicativos, certificacoes } from "../services/FooterLinks";

function FooterMapaDoSite() {
    return(
        <>
            <section className="block lg:grid grid-cols-4 justify-between pb-6">
                <div className="logo-footer mt-6 lg:mt-0">
                    <LogoDoSite />
                    <div className="mt-5">
                        {paginasList.map((pagina) => {
                            return (
                                <a href={pagina.href} className="color-cinza-footer text-base font-medium block mb-4 text-center lg:text-left" title={pagina.name}>
                                    {pagina.name}
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-6 sm:mt-0">
                    <h4 className="color-cinza-footer text-base font-bold block mb-4 text-center lg:text-left">Suporte</h4>
                    {suporteList.map((suporte) => {
                        return (
                            <a href={suporte.href} className="color-cinza-footer text-base font-medium block mb-4 text-center lg:text-left" title={suporte.name}>
                                {suporte.name}
                            </a>
                        )
                    })}
                </div>
                <div className="mt-6 sm:mt-0">
                    <h4 className="color-cinza-footer text-base font-bold block mb-4 text-center lg:text-left">Baixe nossos aplicativos</h4>
                    {nossosAplicativos.map((aplicativos) => {
                        return (
                            <a href={aplicativos.href} className="logo-footer" title={aplicativos.name}>
                                <img src={aplicativos.image} width="120px" className="mb-4" />
                            </a>
                        )
                    })}
                </div>
                <div className="mt-6 sm:mt-0">
                    <h4 className="color-cinza-footer text-base font-bold block mb-4 text-center lg:text-left">Certificações</h4>
                    <div className="flex gap-x-6 justify-center lg:justify-start flex-wrap">
                        {certificacoes.map((certificacoes) => {
                            return (
                                <a href={certificacoes.href} className="logo-footer" title={certificacoes.name}>
                                    <img src={certificacoes.image} className="mb-4" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterMapaDoSite;
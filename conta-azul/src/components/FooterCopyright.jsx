
import redesSociais from "../services/RedesSociais";

function FooterCopyright() {
    return(
        <>
            <section className="block lg:flex justify-between pt-6 pb-10">
                <div className="flex justify-center lg:justify-start gap-2 mb-5 lg:mb-0">
                    {redesSociais.map((item) => (
                        <a href={item.url} title={item.name}>
                            {item.image}
                        </a>
                    ))
                }
                </div>
                <div>
                    <div className="flex gap-6">
                        <a href="https://ca.contaazul.com/termos/" className="text-gray-conta-azul text-sm font-medium">Termos de uso</a>
                        <a href="https://ca.contaazul.com/termos/privacidade/" className="text-gray-conta-azul text-sm font-medium">Política de Privacidade</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterCopyright;
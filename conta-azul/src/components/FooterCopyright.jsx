import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const redesSociais = [
    {name: "Facebook", url:"https://facebook.com/ContaAzul", image:<FaFacebookF className="icon-redes-sociais" /> },
    {name: "Instagram", url:"https://www.instagram.com/contaazul", image:<FaInstagram className="icon-redes-sociais" /> },
    {name: "Linkedin", url:"https://www.linkedin.com/company/contaazul", image:<FaLinkedinIn className="icon-redes-sociais" /> },
    {name: "Youtube", url:"https://youtube.com/ContaAzulTV", image:<FaYoutube className="icon-redes-sociais" /> },
]

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
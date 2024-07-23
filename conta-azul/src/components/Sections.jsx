import SectionAzul from './SectionAzul'
import Contato from './Contato'
import { FaWhatsapp, FaPhoneVolume } from "react-icons/fa";
import SectionBranca from './SectionBranca';
import imagePlanoDeNegocio from '../assets/plano-negocio-image.webp';
import ButtonVerde from './ButtonVerde';
import imagemMapa from '../assets/mapa2.webp'
import imagePequenasEmpresas from '../assets/pequenas-empresas-grandes-negocios.webp'
import imageExame from '../assets/logo-exame.png'
import imageForbes from '../assets/logo-forbes.webp'
import LogosMidia from './LogosMidia';
import SwiperSegmentos from './SwiperSegmentos';
import SwiperOResultado from './SwiperOResultado';
import InputExperimenteGratis from './InputExperimenteGratis';

function Sections(){
    return(
        <>
            <SectionBranca>
                <div className="block sm:grid grid-cols-2 gap-10">
                    <div className="max-w-[500px] flex flex-col justify-center mt-4 sm:mt-0">
                        <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul'><span className='text-azul-conta-azul'>Controle</span> seu negócio e <span className='text-azul-conta-azul'>ganhe tempo</span> com o ERP Conta Azul.</h2>
                        <p className="text-gray-conta-azul text-md font-medium my-6 sm:my-8">ERP financeiro simples, seguro e de fácil implantação. Automatize suas rotinas financeiras e tenha suas informações organizadas. Mais controle, tempo e previsibilidade para tomar as melhores decisões.</p>
                        <InputExperimenteGratis />
                    </div>
                    <img className="rounded-lg self-center mt-6 md:mt-0" src="https://ca.contaazul.com/wp-content/uploads/2024/07/Controle-580-2.webp" />
                </div>
            </SectionBranca>

            <SectionAzul>
                <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul text-center mb-12 md:mb-8'>Um ERP <span className='text-azul-conta-azul'>simples</span> e <span className='text-azul-conta-azul'>seguro</span>
                </h2>
                <div className="block sm:grid grid-cols-2 gap-10">
                    <img className="self-center" src="https://ca.contaazul.com/wp-content/uploads/2024/07/Secure-Site-1024x840-1.webp" />
                    <div className="max-w-[500px] flex flex-col justify-center mt-7 sm:mt-0">
                        <h2 className='text-[32px] lg:text-[32px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul'>Livre-se das planilhas e assuma o controle da sua empresa, tudo na nuvem.</h2>
                        <p className="text-gray-conta-azul text-md font-medium my-6 sm:my-8">Um ERP para gestão financeira com um poderoso ecossistema que transforma a relação das empresas com seus contadores e bancos.<br /><br />
                        ERP financeiro com funcionalidades essenciais para todo negócio: gestão de clientes, controle de vendas, emissão de NFs eletrônicas, automatização da cobrança, contratos recorrentes, produtos e estoque, contas a pagar/receber, conciliação bancária com importação automática do extrato e integração direta com o contador.</p>
                    </div>
                </div>
                
                    
            </SectionAzul>

            <SectionBranca>
                <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul text-center mb-16'>O resultado: seu negócio mais <span className='text-azul-conta-azul'>organizado,<br></br> produtivo</span> e com maior potencial de <span className='text-azul-conta-azul'>crescimento!</span></h2>
            <SwiperOResultado />
            </SectionBranca>

            <SectionAzul>
                <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul'><span className='text-azul-conta-azul'>Segmentos</span> Variados</h2>
                <p className="text-gray-conta-azul text-md font-medium my-6 sm:my-8">Atuamos em muitos segmentos. Deixa a Conta Azul te ajudar! Qual o seu perfil de negócio?</p>
                <SwiperSegmentos />
            </SectionAzul>

            <SectionBranca>
                <div className="text-center">
                    <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul'>Conta Azul na <span className='text-azul-conta-azul'>mídia!</span></h2>
                    <p className="text-gray-conta-azul text-md font-medium my-6 sm:my-8">Veja o que estão falando da gente nas redes.</p>
                    <div className="flex justify-center items-center gap-7 md:gap-32 flex-col sm:flex-row">
                        <LogosMidia 
                        link="https://revistapegn.globo.com/Startups/noticia/2022/01/nos-10-anos-da-contaazul-ceo-da-dica-novas-aquisicoes-estao-no-radar.html"
                        imageLogo={imagePequenasEmpresas}
                        />
                        <LogosMidia 
                        link="https://exame.com/pme/conta-azul-lanca-plataforma-que-pode-poupar-85-do-tempo-do-contador/"
                        imageLogo={imageExame}
                        />
                        <LogosMidia 
                        link="https://forbes.com.br/forbes-money/2022/01/quatro-startups-com-alto-potencial-de-crescimento-em-2022-veja-quais/"
                        imageLogo={imageForbes}
                        />
                    </div>
                </div>
            </SectionBranca>

            <SectionAzul>
                <div className="block sm:grid grid-cols-2 gap-10">
                    <div className="max-w-[500px] flex flex-col justify-center mb-4 sm:mb-0">
                        <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul'>
                        Já ajudamos <br /><span className='text-azul-conta-azul'>milhares de clientes</span> no Brasil todo!</h2>
                    </div>
                    <img className="rounded-lg self-center" src={imagemMapa} />
                </div>
            </SectionAzul>

            <SectionBranca>
                <div className="block sm:grid grid-cols-2 gap-10">
                    <div className="max-w-[500px] flex flex-col justify-center mt-4 sm:mt-0">
                        <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul'>
                        Temos o plano perfeito para o seu <span className='text-azul-conta-azul'>negócio</span> e para o seu <span className='text-azul-conta-azul'>bolso!</span></h2>
                        <p className="text-gray-conta-azul text-md font-medium my-6 sm:my-8">ERP financeiro simples, seguro e de fácil implantação. Automatize suas rotinas financeiras e tenha suas informações organizadas. Mais controle, tempo e previsibilidade para tomar as melhores decisões.</p>
                        <ButtonVerde 
                        title="Saiba mais"
                        href="https://ca.contaazul.com/planos/"
                        ></ButtonVerde>
                    </div>
                    <img className="rounded-lg self-center" src={imagePlanoDeNegocio} />
                </div>
            </SectionBranca>

            <SectionAzul>
                <div className="block sm:grid grid-cols-2 gap-10 pb-[85px]">
                    <img className="rounded-lg self-center" src="../src/assets/image-tem-duvidas.webp"  />
                    <div className="max-w-[500px] flex flex-col justify-center mt-8 sm:mt-0">
                        <h2 className='text-[32px] lg:text-[42px] font-bold leading-[1.2em] text-cinza-escuro-conta-azul'>Tem dúvidas de como a Conta Azul pode <span className='text-azul-conta-azul'>ajudar o seu negócio?</span></h2>
                        <p className="text-gray-conta-azul text-md font-medium my-6 sm:my-8">Fale com nosso time de especialistas e tire todas as suas dúvidas</p>
                        <a href="" className="text-azul-conta-azul text-md font-medium">Falar com um especialista</a>
                    </div>
                </div>
                <div className="flex justify-center gap-4 sm:gap-7">
                    <Contato 
                        href="https://api.whatsapp.com/send?phone=554730640460&text=Ol%C3%A1!%20Estou%20interessado%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20sistema."
                        title="Mande um WhatsApp"
                    >
                        <FaWhatsapp className="bloco-contato text-azul-conta-azul text-[52px]"/>
                    </Contato>
                    <Contato 
                        href="tel:08006000920"
                        title="0800 600 0920"
                    >
                        <FaPhoneVolume className="bloco-contato text-azul-conta-azul text-[52px]"/>
                    </Contato>
                </div>
            </SectionAzul>
        </>
        
    )
}

export default Sections;
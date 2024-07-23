function Contato(props) {
    return(
        <a href={props.href} target="_blank" className="bg-white bloco-contato flex items-center flex-col justify-between hover:bg-azul-claro-hover-conta-azul">
            {props.children}
            <h4 className="text-cinza-escuro-conta-azul text-sm font-semibold text-center">{props.title}</h4>
        </a>
    )
}

export default Contato;
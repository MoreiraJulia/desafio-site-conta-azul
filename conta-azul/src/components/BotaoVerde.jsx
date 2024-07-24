function BotaoVerde(props){
    return(
        <a href={props.href} className="btn-verde bg-verde-folha-conta-azul text-base text-white font-medium py-3 px-6 max-w-max rounded mb-9">
            {props.title}
        </a>
    )
}

export default BotaoVerde;
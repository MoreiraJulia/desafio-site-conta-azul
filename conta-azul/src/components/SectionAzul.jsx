function SectionAzul(props){
    return(
    <section className="bg-azul-claro-conta-azul py-[70px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {props.children}
        </div>
    </section>
    )
    
}

export default SectionAzul;
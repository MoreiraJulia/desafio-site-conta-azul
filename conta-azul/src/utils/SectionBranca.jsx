function SectionBranca(props){
    return(
    <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {props.children}
        </div>
    </section>
    )
    
}

export default SectionBranca;
import logo from '../assets/conta-azul-logo.svg'

function LogoDoSite() {
    return(
        <>
            <a href=""><img
                alt="Logo Conta Azul"
                src={logo}
                className="h-5 w-auto"
            /></a>
        </>
    )
}

export default LogoDoSite;
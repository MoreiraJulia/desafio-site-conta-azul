function LogosMidia(props) {
    return(
        <>
            <a target="_blank" href={props.link}>
                <img src={props.imageLogo} />
            </a>
        </>
    )
}

export default LogosMidia;
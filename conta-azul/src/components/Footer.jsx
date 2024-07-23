import FooterCopyright from "./FooterCopyright";
import FooterMapaDoSite from "./FooterMapaDoSite";

function Footer() {
    return(
        <>
            <footer className="mx-auto max-w-7xl px-6 lg:px-8">
                <FooterMapaDoSite />
                <hr />
                <FooterCopyright />
            </footer>   
        </>
    );
}

export default Footer;
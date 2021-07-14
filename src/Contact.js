const Contact = () => {
    // import doc from './images/UMOWA.docx'
    {/* <p>Open a PDF file <a download href={doc}>example </a>.</p> */}
    return ( 
        <div className="contact">
            <h2 className="pageTitle">Kontakt</h2>
            <div className="contact__wrapper">
                <div className="contact__info">
                    <a className="contact__infoItem" href="tel:+48 668 433 047">Tel: +48 668 433 047</a>
                    <a href="mailto:tomasz.szabat@gmail.com?subject=Stona internetowa" className="contact__infoItem">e-mail: tomasz.szabat@gmail.com</a>
                    <p className="contact__infoItem">ul. Spokojna 58, 37-413 Harasiuki</p>
                </div>
                <iframe className="contact__map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Harasiuki%20142A,%2037-413%20Harasiuki+(Kajakami%20po%20Tanwi%20i%20%C5%81adzie)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" loading="lazy"></iframe>
            </div>
        </div>
     );
}
 
export default Contact;


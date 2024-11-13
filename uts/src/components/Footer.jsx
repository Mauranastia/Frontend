import { Phone, Mail, Instagram } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="footer">
            <div id='about' className="container">

                {/* Map Section */}
                <div className="map-section">
                    <h2>LOKASI KAMI</h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.5951021334904!2d114.35421571744384!3d-8.243405400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15b81d300360f%3A0x9c36909a534842ec!2sVilla%20Pakis%20Residence%20Banyuwangi!5e0!3m2!1sid!2sid!4v1731394885399!5m2!1sid!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Villa Pakis Residence Location"
                    ></iframe>
                </div>

                <div className="flex flex-col items-center gap-8 mt-8">
                    <div className="contact-section">
                        <Phone className="icon" />
                        <div>
                            <p>+62 813-3338-5305</p>
                        </div>
                    </div>

                    <div className="email-section">
                        <Mail className="icon" />
                        <div>
                            <a href="mailto:pakisresidence12@gmail.com">
                                pakisresidence12@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="instagram-section">
                        <Instagram className="icon" />
                        <div>
                            <a
                                href="https://instagram.com/villa_pakis_residence"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @villa_pakis_residence
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 text-sm">
                    <p>&copy; MAURANASTIA_STIKOM PGRI BANYUWANGI.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

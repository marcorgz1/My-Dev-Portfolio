import 'leaflet/dist/leaflet.css'
import '../css/Contact.css'
import { GithubIcon, LinkedinContactIcon, HomeIcon, MailIcon } from './Icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export function Contact() {
    const madridPosition = [40.4168, -3.7038] // Madrid coordinates

    const SOCIAL_LINKS = [
        {
            id: 1,
            icon: <LinkedinContactIcon />,
            name: 'Marco Rodriguez-Rey',
            link: 'https://www.linkedin.com/in/marco-rodriguez-rey-b082361b9/'
        },
        {
            id: 2,
            icon: <GithubIcon />,
            name: 'marcorgz1',
            link: 'https://github.com/marcorgz1?tab=repositories'
        },
        {
            id: 3,
            icon: <MailIcon />,
            name: 'marco.valdemoro@gmail.com',
            link: 'mailto:marco.valdemoro@gmail.com'
        }
    ]

    return (
        <section className="contact">
            <h2>Contáctame</h2>
            <p>
                ¿Estás buscando a alguien con quién colaborar en algún proyecto? 
                No dudes en ponerte en contacto conmigo.
            </p>
            <div id="contact" className="contact_container">                    
                <div className="contact_social_links">
                {
                    SOCIAL_LINKS.map((social_link) => {
                        return (
                            <a key={social_link.id} href={social_link.link} target="_blank">
                                {social_link.icon}
                                <span>{social_link.name}</span>
                            </a>
                        )
                    })
                }
                </div>
                <div className="map_container">
                    <MapContainer
                        center={madridPosition}
                        zoom={5}
                        style={{ height: "300px", width: "400px", borderRadius: "8px" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={madridPosition}>
                            <Popup>
                                Madrid, España
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section >
    )
}
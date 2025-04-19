import 'leaflet/dist/leaflet.css'
import '../css/Contact.css'
import { GithubIcon, LinkedinContactIcon, HomeIcon, MailIcon } from './Icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export function Contact() {
    const madridPosition = [40.4168, -3.7038] // Madrid coordinates

    return (
        <section className="contact">
            <h2>Contáctame</h2>
            <p>
                ¿Estás buscando a alguien con quién colaborar en algún proyecto? 
                No dudes en ponerte en contacto conmigo.
            </p>
            <div className="contact_container">
                <div className="contact_left__container">
                    <div className="country_container">
                        <div className="home_icon">
                            <HomeIcon />
                        </div>
                        <div className="country">
                            <h3>España</h3>
                            <span>Madrid, España</span>
                        </div>
                    </div>
                    <div className="linkedin">
                        <LinkedinContactIcon />
                        <a href='https://www.linkedin.com/in/marco-rodriguez-rey-b082361b9/'>Marco Rodriguez-Rey</a>
                    </div>
                    <div className="github">
                        <GithubIcon />
                        <a href='https://github.com/marcorgz1?tab=repositories'>marcorgz1</a>
                    </div>
                    <div className="email">
                        <MailIcon />
                        <a href='mailto:marco.valdemoro@gmail.com'>marco.valdemoro@gmail.com</a>
                    </div>
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
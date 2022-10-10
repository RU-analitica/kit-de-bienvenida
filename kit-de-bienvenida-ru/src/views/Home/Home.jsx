import "./Home.scss";
import { Navbar } from 'shared/Navbar/Navbar';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import logo from "assets/images/ru.png";
import kit from "assets/images/kit.png";
import calendar from "assets/images/calendar.png";
import culture from "assets/images/culture.png";
import faq from "assets/images/faq.png";
import ingreso from "assets/images/ingresoru.png";
import sie from "assets/images/sie.png";
import somos from "assets/images/somos.png";
import touchid from "assets/images/touch-id.png";
import trophy from "assets/images/trophy.png";
import unitel from "assets/images/unitel.png";

function Home() {
    const cultureApps = [
        {
            name: "Información básica de Cultura RU",
            image: culture,
            route: "/culture"
        },
        {
            name: "Guía de ingreso a Universidad RU",
            image: ingreso,
            route: "/universidadru"
        }
    ]
    const opApps = [
        {
            name: "SOMOS Extraordinarios",
            image: somos,
            route: "/somos"
        },
        {
            name: "¿Qué es excelencia en Red?",
            image: trophy,
            route: "/excelencia"
        },
        {
            name: "Proceso de huellas dactilares en CNBV",
            image: touchid,
            route: "/touchid"
        },
        {
            name: "UniTEL",
            image: unitel,
            route: "/unitel"
        },
        {
            name: "Guía SIE RU",
            image: sie,
            route: "/sie"
        },
        {
            name: "Calendario de tareas y comunicados base",
            image: calendar,
            route: "/calendar"
        },
        {
            name: "FAQ's",
            image: faq,
            route: "/faq"
        }
    ]

    return (
        <>
            <div className="hero">
                {/* Header */}
                <div className="hero-header">
                    <Navbar />
                    <figure>
                        <img src={logo} alt="Logo Red Única" />
                    </figure>
                </div>
                {/* End Header */}
                {/* Hero */}
                <div className="hero">
                    <div className="hero-title">
                        <figure>
                            <img src={kit} alt="Kit de bienvenida zeus" />
                        </figure>
                        <h2>Kit de bienvenida</h2>
                    </div>
                    <div className="hero-body">
                        <p><strong>Pulsa <TouchAppIcon /></strong>  sobre cualquier icono para consultar la información</p>
                    </div>
                    {/* End Hero */}
                    {/* Apps */}
                    <div className="hero-apps">
                        <div className="hero-apps-header">
                            <span>Cultura RU</span>
                        </div>
                        <div className="hero-apps-cards">
                            {/* Culture Apps */}
                            {cultureApps.map((app, index) => (
                                <a href={app.route} class="hero-link">
                                    <div className="hero-app" key={index}>
                                        <figure>
                                            <img src={app.image} alt={app.name} />
                                        </figure>
                                        <div className="hero-app__title">
                                            <h2>{app.name}</h2>
                                        </div>
                                    </div>
                                </a>
                            ))}
                            {/* End Culture Apps */}
                        </div>
                    </div>
                    <div className="hero-apps">
                        <div className="hero-apps-header">
                            <span>Operación</span>
                        </div>
                        <div className="hero-apps-cards">
                            {/* Operation Apps */}
                            {opApps.map((app, index) => (
                                <a href={app.route} class="hero-link">
                                    <div className="hero-app" key={index}>
                                        <figure>
                                            <img src={app.image} alt={app.name} />
                                        </figure>
                                        <div className="hero-app__title">
                                            <h2>{app.name}</h2>
                                        </div>
                                    </div>
                                </a>
                            ))}
                            {/* End Apps */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Home };
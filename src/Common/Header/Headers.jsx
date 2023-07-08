import { NavLink } from "react-router-dom"
import "./Header.css"
import logo1 from "../../assets/vai/logo.png"
const Headers = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <nav className="navbar navbar-expand-md navbar-light">
                        <NavLink to={"/"} className="navbar-brand">
                            <img src={logo1} style={{ width: '100%',height:'55px' }} className="img-fluid" alt="" />
                        </NavLink>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <NavLink to={"/"} className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/about"} className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/service"} className="nav-link">services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/portfolio"} className="nav-link">portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/blogs"} className="nav-link" >blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/contact"} className="nav-link" >contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/calender"} className="nav-link">set calender</NavLink>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">meeting</a>
                                    <div className="dropdown-menu bg-dark" aria-labelledby="dropdownId">
                                        <NavLink to={"/calender"} className="dropdown-item">set calender</NavLink>
                                        <a className="dropdown-item" href="#">set meeting</a>
                                    </div>
                                </li> */}
                            </ul>
                            <NavLink to={"calender"} style={{ backgroundColor: "blue", color: "whitesmoke" }} className="btn">Book A Consultation</NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Headers
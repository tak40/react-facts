import logo from "../assets/react-icon-small.png"

function Navbar() {
    return (
        <nav>
            <div className="nav-left">
                <img src={logo} alt="React Logo" className="nav-icon" />
                <h1 className="nav-title">ReactFacts</h1>
            </div>
            <p className="nav-subtitle">React Course - Project 1</p>
        </nav>
    )
}

export default Navbar

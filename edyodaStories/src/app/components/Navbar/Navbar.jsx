import './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="nav-container">
        <div className="nav-item">
           <label className="logo" >EDYODA</label>
           <p className="logo-stories">Stories</p>
        </div>
        <div className="nav-item">
            <p className="drop-down-text">Explore Categories<span>
                <img className="drop-down-icon" src="https://static.thenounproject.com/png/1666929-200.png" alt="dropdownicon" /></span></p>
        </div>
        <div className='nav-content'>
          <p>EdYoda is a learning and knowledge sharing platform for techies</p>
        </div>
        <button className='nav-btn'>Go To Main Website</button>
    </nav>
    </>
  )
}

export default Navbar
import './App.css'
function App() {
  function showMenu() {
    document.getElementById('nav-links').style.right = '0px'
  }
  function hideMenu() {
    document.getElementById('nav-links').style.right = '-200px'
  }
  return (
    <>
      <div className='banner'>
        <nav>
          <h1 className='logo'>Interior</h1>
          <div className='nav-links' id='nav-links'>
            <i
              className='fa fa-times'
              style={{ color: 'black' }}
              onClick={hideMenu}
            ></i>
            <ul>
              <li>
                <a href='' className='link'>
                  Home
                </a>
              </li>
              <li>
                <a href='' className='link'>
                  Bedroom
                </a>
              </li>
              <li>
                <a href='' className='link'>
                  Dinning
                </a>
              </li>
              <li>
                <a href='' className='link'>
                  Kit
                </a>
              </li>
              <li>
                <a href='' className='link'>
                  Backyard
                </a>
              </li>
            </ul>
          </div>
          <i className='fa fa-bars' onClick={showMenu}></i>
        </nav>
        <div className='content'>
          <h1>DESIGN YOUR HOUSE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab
            deleniti facere <br />
            non sit quos illo velit porro unde nesciunt necessitatibus explicabo
            qui.
          </p>
          <div>
            <button type='button'>
              <span></span>WATCH MORE
            </button>
            <button type='button'>
              <span></span>SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

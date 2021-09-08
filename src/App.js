import './App.css'
function App() {
  return (
    <>
      <div className='banner'>
        <div className='navbar'>
          <h1 className='logo'>Interior</h1>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Bedroom</a>
            </li>
            <li>
              <a href=''>Dinnig</a>
            </li>
            <li>
              <a href=''>Kit</a>
            </li>
            <li>
              <a href=''>Backyard</a>
            </li>
          </ul>
        </div>
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

import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return<div>
        <header style={{
        height: '100px',
        color:'blue',
        backgroundcolor: 'grey',
      }}>
      <nav >
  <Link to="/" end>Home</Link>
  <Link to="/movies">Movies</Link>
      </nav>
      </header> 
      <main>
      <Outlet/>
      </main>
      <footer></footer>
    </div>
};
export default Layout;
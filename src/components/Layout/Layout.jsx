import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }

const btn = {
    display: 'flex',
    margin: '20px auto',
    paddingTop: '20px',
    paddingLeft: '40px',
    paddingRight: '10px',
    width: '300px',
    height: '65px',
    borderRadius: '30px',
    border: 'none',
    fontWeight: 700,
    fontSize: '18px',
    backgroundColor: '#00c78b',
    color: '#fff',
    transition: 'color .3s ease-in-out',
}

  const Layout = () => {
    const {text: {idText}, image: {idImg}} = useSelector(state => state);
    return (
        <div style={wrapper}>
        <Header />
        <Outlet />
        {idText && idImg && (
            <Link style={btn} to={`singleCard/${idText}/${idImg}`}>Поделиться открыткой</Link>
        )} 
        <Footer />
        </div>
    )
  }

  export default Layout;
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }

  const Layout = () => (
    <div style={wrapper}>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )

  export default Layout;
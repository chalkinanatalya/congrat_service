import { ImgContextProvider } from './context/imgContext';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}


const App = () => {
  return (
    <div style={wrapper}>
        <ImgContextProvider>
            <Header />
            <Card />
            <Footer />
        </ImgContextProvider>
    </div>
  );
}

export default App;

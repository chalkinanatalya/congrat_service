import Footer from './components/Footer/Footer';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const App = () => {
  return (
    <div style={wrapper}>
      <Footer />
    </div>
  );
}

export default App;

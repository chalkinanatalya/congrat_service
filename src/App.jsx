import Card from './components/Card/Card';
import EmptyCard from './components/EmptyCard/EmptyCard';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<EmptyCard />}/> 
        <Route path='card/:holiday' element={<Card />}/> 
      </Route>
    </Routes>

  );
}

export default App;


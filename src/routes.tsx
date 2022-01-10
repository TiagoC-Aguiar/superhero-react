import { Routes, Route } from 'react-router-dom';
import {Home, Hero} from './pages';


const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero/:id" element={<Hero />} />
    </Routes>
  );
};

export default RoutesComponent;

import {HomePage }from './pages/HomePage';
import {CreateComentary }from './components/createComentary';


const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/coments', element: <CreateComentary /> },
];

export default routes;

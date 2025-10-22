import { registerRootComponent } from 'expo';

import PaginaInicial from '../screens/paginaInicial';
import SegundaPagina from '../screens/segundaPagina';
import LoginPagina from '../screens/LoginPagina';
import primeiraPagina from '../screens/primeiraPagina';
// App.js



export default function App() {
  return <LoginPagina />; 
}

// registerRootComponent(PaginaInicial);
registerRootComponent(LoginPagina);
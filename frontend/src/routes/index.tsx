import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home';
import Produtos from 'views/Produtos';
import Fornecedores from 'views/Fornecedores';
import Pedidos from 'views/Pedidos';
import Contato from 'views/Contato';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/fornecedores' element={<Fornecedores />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
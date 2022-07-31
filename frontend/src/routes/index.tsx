import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home';
import Produtos from 'views/Produtos';
import Fornecedores from 'views/Fornecedores';
import Pedidos from 'views/Pedidos';
import Contato from 'views/Contato';
import Address from 'components/Address';
import Identification from 'components/Identification';
import Message from 'components/Message';
import Product from 'components/Product';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/fornecedores' element={<Fornecedores />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/pedidos/address' element={<Address />}/>
        <Route path='/pedidos/identification' element={<Identification />} />
        <Route path='/pedidos/message' element={<Message />}/>
        <Route path='/pedidos/Product' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
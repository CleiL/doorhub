import NavBar from './components/navBar/NavBar';
import Banner from './components/banner/Banner';
import Produtos from './components/produtos/Produtos';
import CardProduto from './components/cardProduto/Card';
import { useState } from 'react';


function App() {
  const [products] = useState([
    {
        "id": 1,
        "imageUrl": "https://placehold.co/100x100",
        "title": "Repolho Estufado com Molho",
        "price": "$5.90"
    },
    {
        "id": 2,
        "imageUrl": "https://th.bing.com/th/id/R.31b68c4e9c3d8f0ddef26752ad6acc53?rik=zO6k0SPOYa%2fNQw&pid=ImgRaw&r=0",
        "title": "Frango Assado",
        "price": "$7.50"
    }

]);
  return (
    <>
      <NavBar/>
      <Banner/>
      <Produtos/>
      <CardProduto products={products}/>      
    </>
  );
}

export default App;

import React from 'react';
import dadosIniciais from '../../../data/dados_iniciais.json';
import Menu from '../../Menu';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer'; 

function Home() {
  return (
    <div style={{ background:"#141414"}}>
      <Menu />
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[4].videos[5].titulo}
        url={dadosIniciais.categorias[4].videos[5].url}
        videoDescription={""}
      />

      <Carousel
        
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Carousel
        category={dadosIniciais.categorias[6]}
      />

      <Carousel
        category={dadosIniciais.categorias[7]}
      />

      <Footer />
    </div>
  );
}

export default Home;

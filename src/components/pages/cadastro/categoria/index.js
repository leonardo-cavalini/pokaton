import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria

          <input type= "Text"/>
        </label>

        <button>
          Cadastrar
        </button>
      </form>

        <Link to="/">
          Ir pra home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;
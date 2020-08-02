import React, { useState} from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
  let [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form>
        <label>
          Nome da Categoria

          <input type= "Text"
          value={nomeDaCategoria}
          onChange={function sabonete(infoDoEvento){
            console.log('[nomeDaCategoria]', nomeDaCategoria);
            console.log('[infoDoEvento]', infoDoEvento.target.value);
            setNomeDaCategoria(infoDoEvento.target.value);
  }}
          />
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
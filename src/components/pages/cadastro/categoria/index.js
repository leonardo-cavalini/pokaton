import React, { useState} from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
  const [categorias, setCategorias] = useState(['Nova categoria']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form>
        <label>
          Nome da Categoria

          <input type= "Text"
          value={nomeDaCategoria}
          onChange={function sabonete(infoDoEvento){
            setNomeDaCategoria(infoDoEvento.target.value);
  }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categorias) => {
          return(
            <li key={categorias}>
              {categorias}
            </li>
          )
      })}
      </ul>

        <Link to="/">
          Ir pra home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;
import React, { useState} from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
  const [categorias, setCategorias] = useState([]);

  const dadosIniciais = {
    nome:'',
    descricao:'',
    cor:'#000',
  }

  const [values, setValues] = useState(dadosIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(infoDoEvento){
    const { getAttribute, value} = infoDoEvento.target
    setValue(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value
    );
  }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoDoEvento) {
          infoDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(dadosIniciais)

      }}>

      <div>
          <label>
        Nome da Categoria

        <input
         type= "Text"
        value={values.nome}
        name='nome'
        onChange={handleChange}/>
        </label>
      </div>

      <div>
      <label>
        Descrição:
          <textarea
          type= "Text"
            value={values.descricao}
            name='descricao'
            onChange={handleChange}
          />
          
      </label>
        
      </div>

      <div>
      <label>
        Cor:
          <input
            type= "color"
            value={values.cor}
            name='cor'
          onChange={handleChange}/>
      </label>
        
      </div>
    

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categorias, indice) => {
          return(
            <li key={`${categorias}as${indice}`}>
              {categorias.nome}
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
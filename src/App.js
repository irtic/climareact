import React, {useState} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
function App() {

  //state principal
  //ciudad = state, guardarCiudad = this.setstate() 
  const [ciudad,guardarCiudad] = useState('');
  const [pais,guardarPais] = useState('');
  const [error, guardarError] = useState(false); 


  const datosConsulta = datos => {
      //Validad que ambos campos esten

      if(datos.ciudad == '' || datos.pais == '')
      {
        guardarError(true);
        return;
      }


      //ciudad y pais existen,agregarlos al state
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);
  }

  //cargar un componente condicionalmente

  let componente;
  if(error)
  {
    //hay un error mostrarlo
    componente = <Error mensaje='Ambos campos son obligatorios'/>
  }else
  {
    //mostrar el clima
    componente = null
  }

  return (
    <div className="App">
      <Header 
        titulo = 'Clima react App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta = {datosConsulta}
              />
            </div>
            <div className="col s12 m6">
                {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

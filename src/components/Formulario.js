import React from 'react';

function Formulario() {

    const handleChange = e => {
        //cambiar el state
    }
    return (
        <form>
            <div className="input-field col s12">
                <input 
                    type = "text"
                    name = "ciudad"
                    id = "ciudad"
                    onchange = {handleChange}
                />
                <label htmlFor="ciudad">Ciudad :</label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Seleccione País</option>
                    <option value="CL">Chile</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Perú</option>

                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Obtener Clima" />
            </div>
        </form>
    );
}

export default Formulario;
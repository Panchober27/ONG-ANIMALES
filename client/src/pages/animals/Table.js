import React,{ Fragment} from 'react'

const Table = () => {
    return (
        <Fragment>
            <h3>Tabla con los animales disponibles para adopción</h3>
            <table className="table">
                <thead>
                    <tr>
                    <th>Codigo Animal</th>
                        <th>Nombre Animal</th>
                        <th>Edad Animal</th>
                        <th>Especie Animal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> {/* Un Objeto Animal */}
                        <th>1</th>
                        <th>Pancho</th>
                        <th>25</th>
                        <th>Dios</th>
                    </tr>
                </tbody>
            </table>

        </Fragment>        
    );
}
 
export default Table;
export default function MiApi({personajes, personajesFiltrados}){

    if (personajesFiltrados.length > 0)
        personajes = personajesFiltrados;


    return(

        <>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Especie</th>
                            <th scope="col">Género</th>
                            <th scope="col">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personajes.map (db => 
                            <tr key={db.id}>
                                <td>{db.name}</td>
                                <td>{db.race}</td>
                                <td>{db.gender}</td>
                                <td>{db.description}</td>
                            </tr> 
                        )}  
                    </tbody>        
                </table>
            </div>
        </>
    );
}
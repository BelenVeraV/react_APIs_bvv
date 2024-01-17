export default function Buscador({personajes, personajesFiltrados, setPersonajesFiltrados}){
//filtro de personajes
    const filtroPersonajes = (e) => {
        
        if (e === "") {
        setPersonajesFiltrados(personajes);
        }else {
        const newResult = personajes.filter(
            (personaje) =>
            personaje.name.toLowerCase().includes(e.toLowerCase()) ||
            personaje.race.toLowerCase().includes(e.toLowerCase()) ||
            personaje.gender.toLowerCase().includes(e.toLowerCase()) 
             
        );
        setPersonajesFiltrados(newResult);
    }
    };
//spread operator - crea copia de los arreglos
    function ordenAlfa(o){
        let listaPersonajesFiltrados = "";

        if (personajesFiltrados.length > 0 )
            listaPersonajesFiltrados = [...personajesFiltrados]
        else
            listaPersonajesFiltrados = [...personajes]

        let nuevoPersonajesFiltrados = ""; 
//metodo sort - orden ascendente
        if (o == "ascendente")
            nuevoPersonajesFiltrados = listaPersonajesFiltrados.sort((a, b) => a.name.localeCompare(b.name));
//metodo reverse - orden descendente
        if (o == "descendente")
            nuevoPersonajesFiltrados = listaPersonajesFiltrados.reverse((a, b) => a.name.localeCompare(b.name));

        if (o != "")
            return setPersonajesFiltrados(nuevoPersonajesFiltrados)   

    }

    return(

        <>
            <h1>Personajes Dragon Ball</h1>
            <br />

            <input type="text" className="form-control" id="x" placeholder="Buscar..." onChange={(e)=>filtroPersonajes(e.target.value)}/>
           <br />
            <div className="mb-3">
                <label><b>Ordenar por Nombre Alfabéticamente</b></label>
                
                <p>
                <input type="radio" value='ascendente' name="alfa" id="alfa" onClick={(e)=> ordenAlfa(e.target.value)} /> Ascendente <br />
                <input type="radio" value='descendente' name="alfa" id="alfa" onClick={(e)=> ordenAlfa(e.target.value)} /> Descendente 
                </p>
                
            </div>
        </>
    );
}
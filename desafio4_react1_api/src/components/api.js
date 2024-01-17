const dragonBallApi = async(setPersonajes) => {
    const apiUrl = "https://dragonball-api.com/api/characters";

    try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data.items);
        setPersonajes(data.items);

    }catch(error){
        console.log(error);
    }

};

export {dragonBallApi}
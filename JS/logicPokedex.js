const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./Assets/pokemon-no.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokenombre = data.name;
            let poketipo = data.types[0].type.name;
            let estad1 = data.stats;
            let movs = data.moves;
           // let pokeestadistica = data.t
            pokeImage(pokeImg);
            nom(pokenombre);
            tipo(poketipo);
            imrimeStats(estad1);
            imprimirMov(movs);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const nom = (txt) => {
    const name = document.getElementById("nombre");
    name.innerHTML = txt;
}

const tipo = (txt) => {
    const name = document.getElementById("tipo");
    name.innerHTML = txt;
}

const estad = (txt) => {
    const est = document.getElementById("estadistica");
    est.innerHTML = txt;
}

const imrimeStats = (array) => {
    const stat1 = array[0].stat.name;
    const nivel1 = array[0].base_stat;
    const stat2 = array[1].stat.name;
    const nivel2 = array[1].base_stat;
    const stat3 = array[2].stat.name;
    const nivel3 = array[2].base_stat;
    const stat4 = array[3].stat.name;
    const nivel4 = array[3].base_stat;
    const stat5 = array[4].stat.name;
    const nivel5 = array[4].base_stat;
    const stat6 = array[5].stat.name;
    const nivel6 = array[5].base_stat;
    const sta1 = document.getElementById("estadistica1");
    const sta2 = document.getElementById("estadistica2");
    const sta3 = document.getElementById("estadistica3");
    const sta4 = document.getElementById("estadistica4");
    const sta5 = document.getElementById("estadistica5");
    const sta6 = document.getElementById("estadistica6");
    sta1.innerHTML = stat1+":" + " " + nivel1;
    sta2.innerHTML = stat2+":" + " " + nivel2;
    sta3.innerHTML = stat3+":" + " " + nivel3;
    sta4.innerHTML = stat4+":" + " " + nivel4;
    sta5.innerHTML = stat5+":" + " " + nivel5;
    sta6.innerHTML = stat6+":" + " " + nivel6;
} 

const imprimirMov = (array)  => {
    const mo1 = array[0].move.name;
    const mov1 = document.getElementById("mov1");
    const mo2 = array[1].move.name;
    const mov2 = document.getElementById("mov2");
    const mo3 = array[3].move.name;
    const mov3 = document.getElementById("mov3");
    mov1.innerHTML = mo1;
    mov2.innerHTML = mo2;
    mov3.innerHTML = mo3;
} 



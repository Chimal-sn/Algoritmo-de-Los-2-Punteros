function encontrarInvitadosConsecutivos(invitados){
    let primero = 0;
    let segundo = 1;

    while (segundo < invitados.length ){

        const invitado1 = invitados[primero]
        const invitado2 = invitados[segundo]
        if (invitado1[0] == invitado2[0]){
            return [invitados[primero], invitados[segundo]];
        }
        primero++;
        segundo++;
    }

    return "No se encontraron personas con la misma inicial en el nombre.";
}

function encontrarInvitadosNoConsecutivos(invitados){

    let primero = 0;

    while (primero < invitados.length){
        for(let segundo = 1; segundo < invitados.length; segundo++){
            const invitado1 = invitados[primero]
            const invitado2 = invitados[segundo]
            if (invitado1[0] == invitado2[0]){
                return [invitados[primero], invitados[segundo]];
            }
        }
        primero++;
    }

    return "No se encontraron personas con la misma inicial en el nombre.";

}



const invitados = ["Andres", "Cecilia", "Carlos", "Maria", "Antonia", "Daniela"]

console.log(encontrarInvitadosNoConsecutivos(invitados));

console.log(encontrarInvitadosConsecutivos(invitados));

const listProvincias = document.getElementById('provincia');
const listMunicipios = document.getElementById('municipio');
const listMunicipiosSeleccionados = document.querySelector('ul');

PROVINCIAS.forEach(provincia => {
    let opcion = document.createElement('option');
    opcion.value = provincia.idProvincia;
    opcion.textContent = provincia.nombre;
    listProvincias.append(opcion);
});

listProvincias.addEventListener('change', ()=>{
    console.log('change: ', listProvincias.value);
    listMunicipios.classList.remove('oculto');
    let [,...opciones] = listMunicipios.children;
    opciones.forEach(o => o.remove());

    let municipiosProvincia = MUNICIPIOS.filter(m => m.idProvincia == listProvincias.value);
    municipiosProvincia.forEach(municipio => {
        let opcion = document.createElement('option');
        //opcion.value = municipio.idMunicipio;
        opcion.textContent = municipio.nombre;
        listMunicipios.append(opcion);
    });
    listMunicipios.value = 0;
});

listMunicipios.addEventListener('change', () => {
    console.log('cambiando municipio');
    let nuevo = document.createElement('li');
    let datos_provincia = PROVINCIAS.filter(p => p.idProvincia == listProvincias.value)[0];
    console.log(datos_provincia);
    nuevo.textContent = datos_provincia.nombre + " - " + listMunicipios.value;
    listMunicipiosSeleccionados.appendChild(nuevo);
});

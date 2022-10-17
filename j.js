const Id = document.getElementById("Id")
const Nom = document.getElementById("Nom")
const Marca = document.getElementById("Marca")
const Unid = document.getElementById("Unid")
const Precio = document.getElementById("Precio")
const form = document.getElementById("contenedor")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(Id.value.length <1){
        warnings += `El Id no es valido <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO ID")
    }
    if(Nom.value.length <1){
        warnings += `El Nom no es valido <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO NOM")
    }
    if(Marca.value.length <1){
        warnings += `La Marca no es valida <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO MARCA")
    }
    if(Unid.value.length <1){
        warnings += `La Unid no es valida <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO UNID")
    }
    if(Precio.value.length <1){
        warnings += `El Precio no es valido <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO PRECIO")
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Registrado"
    }
})
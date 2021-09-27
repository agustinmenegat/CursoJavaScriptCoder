//Agregamos un formulario con jQuery
$('#aboutUs').prepend(`
    <div class="mt-4 mb-4">
        <h1><b>¿Te presentamos nuestro Staff?</b></h1>
    </div>    
    <div class="">
        <button id="btnQC">¡Sí, quiero conocerlos!</button>
    </div>
    <div class="">
        <div class="itemsList mt-5 mb-5 container d-flex" id="listaEmpleados"></div>    
    </div>
`);


$(document).ready(function(){
    $('#btnQC').click(function(e){
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.get("../multimedia/sobrenosotros.json", function(data){
            $.each(data,function(index,item){
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
 
                    <div class="m-2">
                        <div class="card p-3">
                            <div>
                                <img class="fotos" src="../multimedia/img/${item.id}.jpg" alt"foto-carnet">
                            <div>
                            <div class="card-body">
                                <h5 class="card-title"><b>${item.nombre}</b></h5>
                                <p class="card-text">${item.profesion} </br> ${item.mail} </br> IG: ${item.instagram}
                                </p>
                            </div>
                        </div>
                    </div>    
  
                `)
            })            
        })
    })
})



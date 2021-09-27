const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset();
        Swal.fire(
            'Gracias',
            '¡Te contestaremos a la brevedad!',
            'success'
          );
        }
}

$(".contenedoresDiv").css("text-transform","uppercase")
          .css("display","none")
          .slideUp(1000)
          .slideDown(1000);


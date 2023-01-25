function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas. `

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `Bom dia! `
        img.setAttribute('src', 'imagem/manha.jpg')
        document.body.style.background = '#C5EEFF'
    } else if (hora <= 18) {
        msg.innerHTML += `Boa tarde! `
        img.setAttribute('src', 'imagem/tarde.jpg')
        document.body.style.background = '#C4702C'
    } else if (hora < 24) {
        msg.innerHTML += `Boa noite! `
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#2B62AB'
        //img.setAttribute('src', 'imagem/noite.jpg')

    }
}
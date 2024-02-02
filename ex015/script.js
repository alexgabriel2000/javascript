function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO: Verifique os dados e tnete novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-menino.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else {
                //idoso
                img.setAttribute('src', 'mulher-adulta.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-menina.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
                img.style.width = '250px'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}
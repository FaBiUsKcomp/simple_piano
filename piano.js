/* Coded by FaBiUsKcomp - 01/2020 */

(function() {

    const notas = document.querySelectorAll('.note')

    const notasDoMeio = document.querySelectorAll('.notaMid')

    notas.forEach(nota => {
        nota.addEventListener('click', () => seleciona(nota, false))
    })

    notasDoMeio.forEach(notaMeio => {
        notaMeio.addEventListener('click', () => seleciona(notaMeio, false))
    })

    function seleciona (nota, select) {
        if(!select) {
            const notaMomentoAudio = document.getElementById(nota.dataset.note)
            toque(notaMomentoAudio)
            atribuiEventoLigado(nota, notaMomentoAudio)
        } else {
            const todasNotas = document.querySelectorAll('.notaUnica')
            todasNotas.forEach(e => {
                if(e.dataset.note == nota.id) {
                    console.log(e, nota)
                    toque(nota)
                    atribuiEventoLigado(e, nota)
                }
            })
        }
    }

    function atribuiEventoLigado (nota, notaMomentoAudio) {
        nota.classList.add('active')
        notaMomentoAudio.addEventListener('ended', () => {
            nota.classList.remove('active')
        })
    }

    function toque (notaMomentoAudio) {
        notaMomentoAudio.currentTime = 0
        notaMomentoAudio.play() 
    }

    //const brilha = document.getElementById('brilha')
    brilha.addEventListener('click', brilhaBrilhaEstrelinha)

    function brilhaBrilhaEstrelinha () {
        seleciona(Db, true)
        console.log
        setTimeout(seleciona, 400, Db, true)
        setTimeout(seleciona, 800, Ab, true)
        setTimeout(seleciona, 1200, Ab, true)
        setTimeout(seleciona, 1600, Bb, true)
        setTimeout(seleciona, 2000, Bb, true)
        setTimeout(seleciona, 2400, Ab, true)
        setTimeout(seleciona, 3100, Gb, true)
        setTimeout(seleciona, 3600, Gb, true)
        setTimeout(seleciona, 4000, F, true)
        setTimeout(seleciona, 4500, F, true)
        setTimeout(seleciona, 4900, Eb, true)
        setTimeout(seleciona, 5300, Eb, true)
        setTimeout(seleciona, 5700, Db, true)

        setTimeout(seleciona, 6400, Ab,true)
        setTimeout(seleciona, 6800, Ab, true)
        setTimeout(seleciona, 7200, Gb, true)
        setTimeout(seleciona, 7600, Gb, true)
        setTimeout(seleciona, 8000, F, true)
        setTimeout(seleciona, 8400, F, true)
        setTimeout(seleciona, 8800, Eb, true)

        setTimeout(seleciona, 9500, Ab, true)
        setTimeout(seleciona, 9800, Ab, true)
        setTimeout(seleciona, 10200, Gb, true)
        setTimeout(seleciona, 10600, Gb, true)
        setTimeout(seleciona, 11000, F, true)
        setTimeout(seleciona, 11400, F, true)
        setTimeout(seleciona, 11800, Eb, true)

        setTimeout(seleciona, 12500, Db, true)
        setTimeout(seleciona, 12900, Db, true)
        setTimeout(seleciona, 13300, Ab, true)
        setTimeout(seleciona, 13700, Ab, true)
        setTimeout(seleciona, 14100, Bb, true)
        setTimeout(seleciona, 14500, Bb, true)
        setTimeout(seleciona, 14900, Ab, true)

        setTimeout(seleciona, 15600, Gb, true)
        setTimeout(seleciona, 16000, Gb, true)
        setTimeout(seleciona, 16400, F, true)
        setTimeout(seleciona, 16800, F, true)
        setTimeout(seleciona, 17200, Eb, true)
        setTimeout(seleciona, 17600, Eb, true)
        setTimeout(seleciona, 18000, Db, true)        
    }
})()
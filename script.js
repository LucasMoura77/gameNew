let tab = [['','',''],['','',''],['','','']]
let init = 0
let p1 = window.document.querySelector('.p1')
let p2 = window.document.querySelector('.p2')
let p3 = window.document.querySelector('.p3')
let p4 = window.document.querySelector('.p4')
let p5 = window.document.querySelector('.p5')
let p6 = window.document.querySelector('.p6')
let p7 = window.document.querySelector('.p7')
let p8 = window.document.querySelector('.p8')
let p9 = window.document.querySelector('.p9')
let cpuBot = window.document.querySelector('.cpu')
let cpuMsg = window.document.querySelector('.cpuMsg')
let quemJoga = window.document.querySelector('.quemJoga')
let msgWinner = window.document.querySelector('.msgVencedor')
let winnerBox = window.document.querySelector('.vencedor')
let btnNewGame = window.document.querySelector('.botao')
btnNewGame.addEventListener('click', function(){
    document.location.reload(true)
})

function choice(p){
    if(init == 0){
        switch(p){
            case 1:
                if(p1.innerHTML == ''){
                    p1.textContent='X'
                    tab[0][0] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 2:
                if(p2.innerHTML == ''){
                    p2.textContent='X'
                    tab[0][1] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 3:
                if(p3.innerHTML == ''){
                    p3.textContent='X'
                    tab[0][2] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 4:
                if(p4.innerHTML == ''){
                    p4.textContent='X'
                    tab[1][0] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 5:
                if(p5.innerHTML == ''){
                    p5.textContent='X'
                    tab[1][1] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 6:
                if(p6.innerHTML == ''){
                    p6.textContent='X'
                    tab[1][2] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 7: 
                if(p7.innerHTML == ''){
                    p7.textContent='X'
                    tab[2][0] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 8: 
                if(p8.innerHTML == ''){
                    p8.textContent='X'
                    tab[2][1] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
            case 9:
                if(p9.innerHTML == ''){
                    p9.textContent='X'
                    tab[2][2] = 'X'
                    init = 1
                }else{
                    choice(p)
                }
                break
        }
        checkTab()
        cpuBot.classList.add('cpuEffects')
        cpuMsg.classList.add('cpuMsgEffect')
        quemJoga.textContent='JOGADOR: CPU'
        checkWinner('X')
        setTimeout(cpuChoice,2100)
    }
}


function cpuChoice(){
    if((tab[0][0] == '') && (tab[0][1] == 'X') && (tab[0][2] == 'X')){
        p1.textContent='O'
        tab[0][0] = 'O'
        init = 0
    }else if((tab[0][0] == 'X') && (tab[0][1] == '') && (tab[0][2] == 'X')){
        p2.textContent='O'
        tab[0][1] = 'O'
        init = 0
    }else if((tab[0][0] == 'X') && (tab[0][1] == 'X') && (tab[0][2] == '')){
        p3.textContent='O'
        tab[0][2] = 'O'
        init = 0
    }else if((tab[1][0] == '') && (tab[1][1] == 'X') && (tab[1][2] == 'X')){
        p4.textContent='O'
        tab[1][0]='O'
        init = 0
    }else if((tab[1][0] == 'X') && (tab[1][1] == '') && (tab[1][2] == 'X')){
        p5.textContent='O'
        tab[1][1] = 'O'
        init = 0
    }
    else if((tab[1][0] == 'X') && (tab[1][1] == 'X') && (tab[1][2] == '')){
        p6.textContent='O'
        tab[1][2] = 'O'
        init = 0
    }else if((tab[2][0] == '') && (tab[2][1] == 'X') && (tab[2][2] == 'X')){
        p7.textContent='O'
        tab[2][0]='O'
        init = 0
    }else if((tab[2][0] == 'X') && (tab[2][1] == '') && (tab[2][2] == 'X')){
        p8.textContent='O'
        tab[2][1] = 'O'
        init = 0
    }else if((tab[2][0] == 'X') && (tab[2][1] == 'X') && (tab[2][2] == '')){
        p9.textContent='O'
        tab[2][2]='O'
        init = 0

        //HORIZONTAL CONCLUÍDA;

    }else if((tab[0][0] == '') && (tab[1][0] == 'X') && (tab[2][0] == 'X')){
        p1.textContent='O'
        tab[0][0]='O'
        init = 0
    }else if((tab[0][0] == 'X') && (tab[1][0] == '') && (tab[2][0] == 'X')){
        p4.textContent='O'
        tab[1][0]='O'
        init = 0
    }else if((tab[0][0] == 'X') && (tab[1][0] == 'X') && (tab[2][0] == '')){
        p7.textContent='O'
        tab[2][0]='O'
        init = 0
    }else if((tab[0][1] == '') && (tab[1][1] == 'X') && (tab[2][1] == 'X')){
        p2.textContent='O'
        tab[0][1]='O'
        init = 0
    }else if((tab[0][1] == 'X') && (tab[1][1] == '') && (tab[2][1] == 'X')){
        p5.textContent='O'
        tab[1][1]='O'
        init = 0
    }else if((tab[0][1] == 'X') && (tab[1][1] == 'X') && (tab[2][1] == '')){
        p8.textContent='O'
        tab[2][1]='O'
        init = 0
    }else if((tab[0][2] == '') && (tab[1][2] == 'X') && (tab[2][2] == 'X')){
        p3.textContent='O'
        tab[0][2]='O'
        init = 0
    }else if((tab[0][2] == 'X') && (tab[1][2] == '') && (tab[2][2] == 'X')){
        p6.textContent='O'
        tab[1][2]='O'
        init = 0
    }else if((tab[0][2] == 'X') && (tab[1][2] == 'X') && (tab[2][2] == '')){
        p9.textContent='O'
        tab[2][2]='O'
        init = 0

        //VERTICAL CONCLUÍDA;

    }else if((tab[0][0] == '') && (tab[1][1] == 'X') && (tab[2][2] == 'X')){
        p1.textContent='O'
        tab[0][0]='O'
        init = 0
    }else if((tab[0][0] == 'X') && (tab[1][1] == '') && (tab[2][2] == 'X')){
        p5.textContent='O'
        tab[1][1]='O'
        init = 0
    }else if((tab[0][0] == 'X') && (tab[1][1] == 'X') && (tab[2][2] == '')){
        p9.textContent='O'
        tab[2][2]='O'
        init = 0
        
        //DIAGONAL ESQUERDA CONCLUÍDA;
    }else if((tab[0][2] == '') && (tab[1][1] == 'X') && (tab[2][0] == 'X')){
        p3.textContent='O'
        tab[0][2]='O'
        init = 0
    }else if((tab[0][2] == 'X') && (tab[1][1] == '') && (tab[2][0] == 'X')){
        p5.textContent='O'
        tab[1][1]='O'
        init = 0
    }else if((tab[0][2] == 'X') && (tab[1][1] == 'X') && (tab[2][0] == '')){
        p7.textContent='O'
        tab[2][0]='O'
        init = 0
        
        //DIAGONAL DIREITA CONCLUÍDA;
    }else{
        randomPos()
    }
    checkTab()
    cpuMsg.classList.remove('cpuMsgEffect')
    cpuBot.classList.remove('cpuEffects')
    quemJoga.textContent='JOGADOR: É A SUA VEZ'
    checkWinner('O')
}

function randomPos(){
    let aleatPos = Math.round(Math.random() * 8 + 1)
    switch(aleatPos){
        case 1:
            if(p1.innerHTML == ''){
                p1.textContent='O'
                tab[0][0]='O'
                init = 0
            }else{
                randomPos()
            }
            break
        case 2:
            if(p2.innerHTML == ''){
                p2.textContent='O'
                tab[0][1]='O'
                init = 0
            }else{
                randomPos()
            }
            break
        case 3:
            if(p3.innerHTML == ''){
                p3.textContent='O'
                tab[0][2]='O'
                init = 0
            }else{
                randomPos()
            }
            break
        case 4:
            if(p4.innerHTML == ''){
                p4.textContent='O'
                tab[1][0]='O'
                init = 0
            }else{
                randomPos()
            }
            break
        case 5:
            if(p5.innerHTML == ''){
                p5.textContent='O'
                tab[1][1]='O'
                init = 0
            }else{
                randomPos()
            }
            break 
        case 6:
            if(p6.innerHTML == ''){
                p6.textContent='O'
                tab[1][2]='O'
                init = 0
            }else{
                randomPos()
            }
            break 
        case 7:
            if(p7.innerHTML == ''){
                p7.textContent='O'
                tab[2][0]='O'
                init = 0
            }else{
                randomPos()
            }
            break 
        case 8:
            if(p8.innerHTML == ''){
                p8.textContent='O'
                tab[2][1]='O'
                init = 0
            }else{
                randomPos()
            }
            break 
        case 9:
            if(p9.innerHTML == ''){
                p9.textContent='O'
                tab[2][2]='O'
                init = 0
            }else{
                randomPos()
            }
            break 
    }
}


function checkWinner(winner){
    if(tab[0][0].innerHTML == winner && tab[0][1].innerHTML == winner && tab[0][2].innerHTML == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }else if(tab[1][0] == winner && tab[1][1] == winner && tab[1][2] == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }else if(tab[2][0] == winner && tab[2][1] == winner && tab[2][2] == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }else if(tab[0][0] == winner && tab[1][0] == winner && tab[2][0] == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }else if(tab[0][1] == winner && tab[1][1] == winner && tab[2][1] == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }else if(tab[0][2] == winner && tab[1][2] == winner && tab[2][2] == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }else if(tab[0][0] == winner && tab[1][1] == winner && tab[2][2] == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }else if(tab[0][2] == winner && tab[1][1] == winner && tab[2][0] == winner){
        msgWinner.textContent = `VENCEDOR: ${winner}`
        winnerBox.style.visibility='visible'
        exit()
    }
}

function checkTab(){
    if((tab[0][0] != '') && (tab[0][1] != '') && (tab[0][2] != '') && (tab[1][0] != '') && (tab[1][1] != '') && (tab[1][2] != '') && (tab[2][0] != '') && (tab[2][1] != '') &&(tab[2][2] != '')){
        msgWinner.textContent = `VENCEDOR: DEU VELHA`
        winnerBox.style.visibility='visible'
        exit()
    }
}
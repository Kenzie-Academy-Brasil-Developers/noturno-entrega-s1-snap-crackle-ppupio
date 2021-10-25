// Seu código vai aqui
let part
let phrase=[]
let text=""
function snapCrackle (maxValue) {
   
    for (let counter=1; counter<=maxValue; counter++){
        if (counter%5===0 && counter%2!==0) {
        part = "snapCrackle"
        text=text+part+", "
        phrase.push(part)
        }
        else {if (counter%5===0 && counter%2===0) {
        part = "Crackle"
        text=text+part+", "
        phrase.push(part)
        }
        else {if (counter%2!==0) {
            part = "snap"
            text=text+part+", "
            phrase.push(part)
        }
        else {
            part = counter
            text=text+part+", "
            phrase.push(part)
        }
    }
    }
  }
    return text
}
console.log (snapCrackle(35))
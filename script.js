function calcular(){
    var body       = document.body
    var iptAltura  = document.getElementById("ipt-altura").value
    var iptPeso    = document.getElementById("ipt-peso").value
    var btnResult  = document.getElementById("resultado")
    var calculoIMC = iptPeso/(iptAltura)**2


    if (calculoIMC < 17){
        console.log("Muito abaixo do peso")

        body.style.backgroundColor = "#3AA2E8"
        btnResult.style.display = "block"
        btnResult.innerText = "Muito abaixo do peso"
    } 
    else if(calculoIMC >= 17 && calculoIMC <= 18.5){
        console.log("Abaixo do peso")

        body.style.backgroundColor = "#87E0E8"
        btnResult.style.display = "block"
        btnResult.innerText = "Abaixo do peso"
    } 
    else if (calculoIMC >= 18.6 && calculoIMC <= 24.9){
        console.log("Peso normal")

        body.style.backgroundColor = "#3AE84A"
        btnResult.style.display = "block"
        btnResult.innerText = "Peso normal"
    } 
    else if (calculoIMC >= 25 && calculoIMC <= 29.9){
        console.log("Acima do peso")

        body.style.backgroundColor = "#EBE881"
        btnResult.style.display = "block"
        btnResult.innerText = "Acima do peso"
    } 
    else if (calculoIMC >= 30 && calculoIMC <= 34.9){
        console.log("Obesidade 1")

        body.style.backgroundColor = "#E8D23A"
        btnResult.style.display = "block"
        btnResult.innerText = "Obesidade 1"
    }  
    else if (calculoIMC >= 35 && calculoIMC <= 39.9){
        console.log("Obesidade 2 (severa)")

        body.style.backgroundColor = "#E88E3A"
        btnResult.style.display = "block"
        btnResult.innerText = "Obesidade 2 (severa)"
    } 
    else if (calculoIMC > 40){
        console.log("Obesidade 3 (mórbida)")

        body.style.backgroundColor = "#EB4B42"
        btnResult.style.display = "block"
        btnResult.innerText = "Obesidade 3 (mórbida)"
    }
}

// var iptAltura = 1.70
// var iptPeso   = 71
// var calculoIMC = iptPeso/(iptAltura)**2

// console.log(calculoIMC)  // Saída: 24.56


// if (calculoIMC < 17){
//     console.log("Muito abaixo do peso")
// } else if(calculoIMC >= 17 && calculoIMC <= 18.5){
//     console.log("Abaixo do peso")
// } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9){
//     console.log("Peso normal")
// } else if (calculoIMC >= 25 && calculoIMC <= 29.9){
//     console.log("Acima do peso")
// } else if (calculoIMC >= 30 && calculoIMC <= 34.9){
//     console.log("Obesidade 1")
// }  else if (calculoIMC >= 35 && calculoIMC <= 39.9){
//     console.log("Obesidade 2 (severa)")
// } else if (calculoIMC >40){
//     console.log("Obesidade 3 (mórbida)")
// } 
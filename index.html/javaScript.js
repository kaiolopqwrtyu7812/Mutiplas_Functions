// const caixa1 = document.getElementById("caixa1")
// const caixa2 = document.getElementById("caixa2")
// const caixa3 = document.getElementById("caixa3")
// const caixa4 = document.getElementById("caixa4")
// const caixa5 = document.getElementById("caixa5")
// function newPromiseF(){
//    new Promise((resolve, reject) => {
//     const pro =  setInterval(()=>{
//             resolve()
//         },1000)
//     })
// }
// function home(){;
//     newPromiseF()
//     caixa1.innerHTML="1"
//     newPromiseF()
//     caixa2.innerHTML="2"
//     newPromiseF()
//     caixa3.innerHTML="3"
//     newPromiseF()
//     caixa4.innerHTML="4"
//     newPromiseF()
//     caixa5.innerHTML="5"
//     newPromiseF()
// }
// home()


// // Função de soma 
// function soma(a,b) {
//     return a + b
// }
// console.log(soma(1,1))

// // Menssagem function
// function button(){
//     console.log("Olá mundo")
//     alert("Novo mundo")
// }

// class name {
//     constructor(body,alma) {
//         this.alma=alma
//         this.body=body
//     }
// }
// const bob = new alma("minha alma é linda!")
// console.logO(bob)
// function de validação 
// function validacao(id){
//     if (id==1) {
//         console.log(id)
//     }
// }

// validacao(1)


// 7 function

// F = ( C × 9 / 5 ) + 32 Celsius para Fahrenheit:
    function calculoC(c) {

        const calc1 = ( c * 9 / 5) + 32
        console.log(calc1)

    }

    calculoC(25)

// (F− 32 ) × 5 / 9 Converter Fahrenheit para Celsius:
    function calculoF(f) {

        const calc2 = ( f-32 )* 5 / 9
        console.log(calc2)

    }

    calculoF(77)

//  K = C + 273.15 Converter Celsius para Kelvin:
    function calculoF(K) {

        const calc2 = ( K + 273.15 )
        console.log(calc2)

    }

    calculoF(24)



function validacaoCarga(val){
    if (val == 50) {
        console.log("Sua carga é quase completa !")
    }else if (val == 100) {
        console.log("Sua carga é completa !")
    } else {
        console.log("Sua carga é vasia !")
    }
}
validacaoCarga(50)
function filtrando() {
    const numeros=[1,2,3,4,5,6,7,8,9,10]
    const fil= numeros.filter(a=>a % 2 == 0)
    console.log(fil)
}
filtrando() 


function timeAlt1() {
    setTimeout(()=>{
        console.log("1")
    },1000)
}
timeAlt1()
function timeAlt() {
    setInterval(()=>{
        console.log("2")
    },1000)
}
timeAlt()
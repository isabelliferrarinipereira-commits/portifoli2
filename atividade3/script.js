let nota1tri;
let nota2tri;
let resultado;

function caucular(){
    nota1tri = Number (prompt("digite a nota do 1 trimestre"));
    nota2tri = Number (prompt("digite a nota do 2 trimestre"));

    resultado = 180 - (nota1tri + nota2tri)

    if(resultado <= 0){

        alert("parabéns você foi aprovado!!!! Oppa!!! lindo maravilhoso senseiii !!!!  ₍₍⚞(˶˃ ꒳ ˂˶)⚟⁾⁾ ")

    } else {
        alert("Oppaa!!! Você ainda precisa tirar "  + resultado + " no terceiro trimestre para passar hummmmmnn  (💢,,>﹏<,,) b-baka!")
    }
}

console.log("Hello World");

let nota = Number(prompt('Qual é a nota do aluno?'));

console.log(nota);

// alert('Anota do aluno é: '+ nota);

// alert('A nota do aluno é ${nota}.' );

if(nota >= 6){
    alert('Parabéns, o aluno foi aprovado!');
}
else if(nota = 5){
    alert('Quase lá, mas não foi o bastante');
}
else{
    alert('Parece que você vai para recuperação!');
}
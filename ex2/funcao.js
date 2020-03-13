function concatena(nome, sobrenome) {
    if (sobrenome === void 0) { sobrenome = 'teste'; }
    // console.log(`Bom dia ${nome} ${sobrenome}`)
    return ("Bom dia " + nome + " " + sobrenome);
}
// Invocando a função
console.log(concatena("Maria", "Topzeira"));

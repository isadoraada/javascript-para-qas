var gaveteiro = ["Meias", "Gravatas", "Documentos", "Salgadinhos"];
console.log(gaveteiro[3])

gaveteiro.push("Canetas")
console.log(gaveteiro)

gaveteiro.pop()
console.log(gaveteiro)

gaveteiro = gaveteiro.filter(function(p) {
    return p !== "Meias";
});
console.log(gaveteiro);
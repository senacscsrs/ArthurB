let produtos=prompt("Escolha um desses produtos: Leite, Queijo e Pão.")
let produto;
switch(produtos){
    case Leite:
        produto=prompt("Qual dessas marcas você quer comparar: Italac, Nestlé, Parmalat.")
        break
    case Queijo:
        produto=prompt("Qual dessas queijos você quer comparar: Cheddar, Feta, Brie.")
        break
    case Pão:
        produto=prompt("Qual dessas marcas você quer comparar: Bauducco, Pullman, Panco.")
        break
    default:
        produto="invalido"
        break
}
switch(produto){

}
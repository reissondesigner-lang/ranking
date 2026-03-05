async function loadTodasVendas(){

const { data } = await supabase
.from("sales")
.select("*")

let lista = document.getElementById("listaVendas")

lista.innerHTML=""

data.forEach(v=>{

let item=document.createElement("div")

item.innerHTML =

v.data_venda+" - R$"+v.valor

lista.appendChild(item)

})

}
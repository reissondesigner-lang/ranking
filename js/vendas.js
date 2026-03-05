async function salvarVenda(){

let valor = document.getElementById("valorVenda").value
let data = document.getElementById("dataVenda").value

let user = await db.auth.getUser()

await db.from("sales").insert({

user_id:user.data.user.id,
valor:parseFloat(valor),
data_venda:data

})

alert("Venda registrada")

}

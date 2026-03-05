async function loadRanking(periodo){

let inicio

let hoje = new Date()

if(periodo==="week"){

let dia = hoje.getDay()
inicio = new Date()
inicio.setDate(hoje.getDate()-dia)

}

if(periodo==="month"){

inicio = new Date(hoje.getFullYear(),hoje.getMonth(),1)

}

if(periodo==="year"){

inicio = new Date(hoje.getFullYear(),0,1)

}

const { data } = await supabase
.from("ranking_mensal")
.select("*")
.order("posicao", { ascending: true })

let totals={}

data.forEach(v=>{

if(new Date(v.data_venda)>=inicio){

totals[v.user_id]=(totals[v.user_id]||0)+v.valor

}

})

let ranking = Object.entries(totals)
.sort((a,b)=>b[1]-a[1])

renderRanking(ranking)

}

function renderRanking(ranking){

let lista = document.getElementById("rankingList")

lista.innerHTML=""

ranking.forEach((r,i)=>{

let item=document.createElement("div")

item.className="rank-item"

item.innerHTML=

"<span>#"+(i+1)+"</span>"+
"<span>"+r[0]+"</span>"

lista.appendChild(item)

})

}

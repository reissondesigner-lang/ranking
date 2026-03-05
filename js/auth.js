async function login(){

let codigo = document.getElementById("codigo").value
let senha = document.getElementById("senha").value

const { data, error } = await db.auth.signInWithPassword({

email: codigo+"@ranking.com",
password: senha

})

if(error){

alert("Erro no login")
return

}

mostrarDashboard()

}

function logout(){

db.auth.signOut()
location.reload()

}

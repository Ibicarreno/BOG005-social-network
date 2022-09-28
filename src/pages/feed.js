export const feed = 
`
<div class= "feedView">
<h2>Pagina en construccion</h2>
<h1 id="profileName"> </h1>
<button id="bottonProfile">Ir al perfil</button>
</div>
`

const profileView = document.getElementById("profileName")
if (profileView) {
    profileView.innerHTML(user.displayName);
}



export const feed = 
`
<div style="background: #F0F0F0" id="feed">
<section id="feedMainProfile">
<button id="bottonMyProfile">Mi perfil</button>
<button id="bottonPostRecipe">Publicar receta</button>
<img src='../resources/robot.png' alt="icon" id="icon">
<p id="nameUser">Nombre de usuari@</p>
</section>
<section id="feedMainPost">
<div class= "feedView">
<h1 id="titlePostMain">Publicaciones de tus amigos</h1>
<textarea name=""  cols="40" rows="7" id="seePost">
</textarea>
<img src='../resources/ensalada-mediterranea.jpg' alt="postPublic" id="postPublic">
</div>
</section>
<section id="myFriends" style:"display:none">
<p id="titleMyFriends">Amigos</p>
<img src='' alt="iconMyFriend" id="iconMyFriend">
<p id="nameFriend">Nombre amig@</p>
</section>
</div>
`

const profileView = document.getElementById("profileName")
if (profileView) {
    profileView.innerHTML(user.displayName);
}



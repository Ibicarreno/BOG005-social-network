const Register = 
`
<div id="backgroundVideo">    
<video src="./resources/pexels-vanessa-loring-5858145.mp4" autoplay loop muted></video>
</div>
<div class= "registerView" id="registerView">
<h2>REGISTRO</h2>
<input type="text" class="input registerNameUser" id="registerNameUser" placeholder="Nombre">
<input type="text" class="input registerEmailUser" id="registerEmailUser" placeholder="Correo electrónico">
<input type="password" class="input registerrPassWordUser" id="registerPassWordUser" placeholder="Contraseña">
<button id="bottonRegister">REGÍSTRARSE</button>
<hr class="lineRightRegister">
<p id="letter">o</p>
<hr class="lineLeftRegister">
</div>
<div id="sectionGoogle">
<button id="bottonGoogle">
<img id="imgGoogle" src="./resources/google.png" alt="Google">
<p>Entrar con Google</p>
</button>
</div>
`
export {Register}
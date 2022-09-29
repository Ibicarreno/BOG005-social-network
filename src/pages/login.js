const Login = `
    <div id="backgroundVideo">    
      <video src="./resources/pexels-vanessa-loring-5858145.mp4" autoplay loop muted></video>
    </div>
      <section id="sectionLogIn" class="sectionLogIn">
        <p id="LogInP">INICIAR SESIÓN</p>
        <input  type="text" id="emailUser" placeholder="Correo electrónico">
        <input type="password" id="passWordUser" placeholder="Contraseña">
        <button id="logginButton">ENTRAR</button>
        <hr class="lineRight">
        <p id="letter">o</p>
       <hr class="lineLeft">
    </section>
    <div id="sigInMobile">
      <p>¿No tienes una cuenta?</p>
      <a href="" id="linkRegister"> ¡Regístrate!</a>
    </div>
  `
export {Login};

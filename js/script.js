window.addEventListener('DOMContentLoaded', () => {
    var facebookProfileId = '100016352295470';
    var twitterProfileId = 'JsManuelSP';
    var skypeProfileId = 'manue-154@hotmail.com';
    var linkedinProfileId = 'samamesjose';
    var instagramProfileId = 'jsmanuelsamames11';
    document.getElementById('facebook-link').href = `https://www.facebook.com/profile.php?id=${facebookProfileId}`;
    document.getElementById('facebook-k').href = `https://www.facebook.com/profile.php?id=${facebookProfileId}`;
    document.getElementById('twitter-link').href = `https://www.twitter.com/${twitterProfileId}`;
    document.getElementById('twitter-k').href = `https://www.twitter.com/${twitterProfileId}`;
    document.getElementById('skype-link').href = `https://www.skype.com/${skypeProfileId}`;
    document.getElementById('skype-k').href = `https://www.skype.com/${skypeProfileId}`;
    document.getElementById('linkedin-link').href = `https://www.linkedin.com/in/${linkedinProfileId}`;
    document.getElementById('linkedin-k').href = `https://www.linkedin.com/in/${linkedinProfileId}`;
    document.getElementById('instagram-link').href = `https://www.instagram.com/${instagramProfileId}`;
    document.getElementById('instagram-k').href = `https://www.instagram.com/${instagramProfileId}`;
    
  });
  
//--------
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("redes");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
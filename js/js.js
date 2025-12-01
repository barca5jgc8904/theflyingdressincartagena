
  // Efecto parallax simulando background-attachment: fixed
    window.addEventListener("scroll", () => {
      
        const imgs = document.querySelectorAll('.columna img');
        /*foreach:ejecuta una funcion para cada elemento de un array, permitiendo 
        iterarsobre ellos sin necesidad sobre un bloque for*/
        imgs.forEach((img) => {
            let velocidad = 0.3; // Ajusta para más o menos movimiento
            let desplazamiento = window.scrollY * velocidad;
                    let desplazamiento = window.scrollY * velocidad;
            img.style.transform = `translateY(${desplazamiento}px)`;
          
        });
    });
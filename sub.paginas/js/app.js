
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

const cargarImagen = (entrada, observador) =>{

   /*forEach: quiero que me ejecutes una funcion
  por cada unp de los elementos de las entras.
  es un metodo de los arrays en java script que ejecuta 
  para cada elemento array */
 entrada.forEach((entrada) => {
     if(entrada.isIntersecting){
     	entrada.target.classList.add('visible');
		} else {
			// entrada.target.classList.remove('visible');
		}
});
}

//IntersectionObserver= observa o vijile las imagenes
const observador = new IntersectionObserver(cargarImagen, {
root: null,
rootMargin: '0PX 0PX 0PX 0PX',
threshold: 1.0
});



observador.observe(imagen1);
observador.observe(imagen2);
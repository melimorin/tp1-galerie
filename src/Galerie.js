/*jslint esnext:true, browser:true*/
/**
 * @module Galerie
 */
export default class Galerie {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {

		var galerie = document.getElementById("galerie");
		var images = galerie.getElementsByTagName("a");

		function createBackdrop(index) {
			var backdrop = document.createElement("div");
			backdrop.id = "backdrop";
			backdrop.addEventListener("click", function(event) {
				document.body.removeChild(backdrop);
			})
	
			var close = document.createElement("span");
			close.classList.add("close");
			close.innerHTML = "&#x2716;";
			close.addEventListener("click", function(event){
				document.body.removeChild(backdrop);
			});
	
			var precedent = document.createElement("span");
			precedent.classList.add("precedent");
			precedent.innerHTML = "&#x276e;";
	
			var diapo = document.createElement("figure");
			diapo.classList.add("diapo");
	
			var img = document.createElement("img");
			img.src = images[index].children[0].src;
			img.alt = images[index].children[0].alt;
	
			var figcaption = document.createElement("figcaption");
			figcaption.innerHTML = images[index].children[0].alt;
	
			var suivant = document.createElement("span");
			suivant.classList.add("suivant");
			suivant.innerHTML = "&#x276f;";
	
			var body = document.body;
	
			diapo.appendChild(img);
			diapo.appendChild(figcaption);
	
			backdrop.appendChild(close);
			backdrop.appendChild(precedent);
			backdrop.appendChild(diapo);
			backdrop.appendChild(suivant);
	
			body.appendChild(backdrop);
		}

		for (let i = 0; i < images.length; i++) {
			images[i].addEventListener("click", function(event) {
				event.preventDefault();
				createBackdrop(i);
			})
		}
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}

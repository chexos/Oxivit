let index = document.getElementById("index");
let slider = document.getElementsByClassName("slider");
let sliderPortada = document.getElementById("sliderPortada");
let circulosSlider = document.getElementsByClassName("circulos-slider");
let c = -1;
let cb = -1;
let cp = 0;
let menuOxivit = document.getElementById("menu-oxivit");
let menuEnlace1 = document.getElementById("menu-enlace-1");
let menuEnlace2 = document.getElementById("menu-enlace-2");
let menuEnlace3 = document.getElementById("menu-enlace-3");
let menuInicio = document.getElementById("logo-oxivit");
let btnProductosIzquierda = document.getElementById("btn-producto-izquierda");
let btnNebulizacion = document.getElementById("btnNebulizacion");
let btnProductosDerecha = document.getElementById("btn-producto-derecha");
let productosCelular = document.getElementsByClassName("productos");
let productosOxivit = document.getElementById("productos-oxivit2");
let mainBeneficios = document.getElementsByClassName("beneficios");
let beneficiosArticulo = document.getElementsByClassName("articulo-beneficio");
let circulosBeneficio = document.getElementsByClassName("circulos-beneficio");
let menuCelular = document.getElementById("menu-celular");
let spanPri = document.getElementById("menu-cel-pri");
let spanMed = document.getElementById("menu-cel-medio");
let spanUlt = document.getElementById("menu-cel-ult");
let rotarSlider, rotarBeneficios;
let mensaje = document.getElementById("mensajeIndex");
let esperar, mensajeEnviado = false;
let menuMovil = document.getElementById("menu-movil");
let btnSlider = document.getElementById("btnSlider1");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let celular = document.getElementById("celular");
let consulta = document.getElementById("consulta");
function verificarSlider() {
	switch (c) {
		case 0:
			cambiarColorCirculo();
			sliderPortada.style.right = "0%";
			break;
		case 1:
			cambiarColorCirculo();
			sliderPortada.style.right = "25%";
			break;
		case 2:
			cambiarColorCirculo();
			sliderPortada.style.right = "50%";
			break;
		case 3:
			cambiarColorCirculo();
			sliderPortada.style.right = "75%";
			break;
		default:
			break;
	}
}
function cambiarColorCirculo() {
	for (var i = 0; i < circulosSlider.length; i++) {
		if (i == c) {
			circulosSlider[i].style.backgroundColor = "rgb(60,60,60)";
		} else {
			circulosSlider[i].style.backgroundColor = "rgb(114,114,114)";
		}
	}
}
function cambiarPortada() {
	circulosSlider[0].addEventListener("click", function() {
		c = 0;
		verificarSlider();
		cambiarColorCirculo();
		reiniciarRotacion();
	});
	circulosSlider[1].addEventListener("click", function() {
		c = 1;
		verificarSlider();
		cambiarColorCirculo();
		reiniciarRotacion();
	});
	circulosSlider[2].addEventListener("click", function() {
		c = 2;
		verificarSlider();
		cambiarColorCirculo();
		reiniciarRotacion();
	});
	circulosSlider[3].addEventListener("click", function() {
		c = 3;
		verificarSlider();
		cambiarColorCirculo();
		reiniciarRotacion();
	});
}
function reiniciarRotacion() {
	clearTimeout(rotarSlider);
	rotarSlider = setTimeout("rotacion()", 3000);
}
function rotacion() {
	c++;
	if (c >= slider.length) c = 0;
	let x;
	let x2;
	let x3;
	let x4 = 0;
	let posActual;
	let prevenir = false;
	verificarSlider();
	rotarSlider = setTimeout("rotacion()", 3000);
	sliderPortada.addEventListener("touchstart", touchStart);
	function touchStart(e) {
		clearTimeout(rotarSlider);
		x = e.touches[0].pageX;
		x4 = 0;
	}
	sliderPortada.addEventListener("touchmove", touchMove);
	function touchMove(e) {
		let sli = document.getElementById("slider").clientWidth;
		posActual = sliderPortada.style.right;
		let pos = posActual.slice(0, posActual.length - 1);
		pos = parseFloat(pos);
		clearTimeout(rotarSlider);
		x3 = e.touches[0].pageX;
		sliderPortada.style.transition = "0s";
		if (x4 == 0 && x3 != 0 && prevenir == true) {
			prevenir = false;
			if (x > x3) {
				sliderPortada.style.right = (pos + (x3 * 100 / sli)) + "%";
			} else if (x < x3) {
				cambioSliderWidth = x3 - x;
				sliderPortada.style.right = (pos + (cambioSliderWidth * 100 / sli)) + "%";
			}
		} else if (x4 == 0 && x3 != 0) {
			x4 = x3;
			if (x > x3) {
				cambioSliderWidth = x - x3;
				sliderPortada.style.right = (pos + (cambioSliderWidth * 100 / sli)) + "%";
			} else if (x < x3) {
				cambioSliderWidth = x3 - x;
				sliderPortada.style.right = (pos - (cambioSliderWidth * 100 / sli)) + "%";
			} else {

			}
		} else if (x3 == 0) {
			e.preventDefault();
			prevenir = e.defaultPrevented;
		} else {
			if (x3 > x4) {
				cambioSliderWidth = x3 - x4;
				sliderPortada.style.right = (pos - (cambioSliderWidth * 100 / sli)) + "%";
			} else if (x3 < x4) {
				cambioSliderWidth = x4 - x3;
				sliderPortada.style.right = (pos + (cambioSliderWidth * 100 / sli)) + "%";
			} else {

			}
		}
		x4 = x3;
		e.stopImmediatePropagation();
	}
	sliderPortada.addEventListener("touchend", touchEnd);
	function touchEnd(e) {
		x2 = e.changedTouches[0].pageX;
		if (x > x2) {
			if (c === 3) {
				c = 0;
			} else {
				c++;
			}
		} else if (x < x2) {
			if (c === 0) {
				c = 3;
			} else {
				c--;
			}
		} else {

		}
		verificarSlider();
		sliderPortada.style.transition = "1s all";
		rotarSlider = setTimeout("rotacion()", 3000);
		e.stopImmediatePropagation();
	}
	sliderPortada.addEventListener("dragstart", dragStart);
	function dragStart(e) {
		clearTimeout(rotarSlider);
		x = e.pageX;
	}
	sliderPortada.addEventListener("drag", drag);
	function drag(e) {
		let sli = document.getElementById("slider").clientWidth;
		posActual = sliderPortada.style.right;
		let pos = posActual.slice(0, posActual.length - 1);
		pos = parseFloat(pos);
		clearTimeout(rotarSlider);
		x3 = e.clientX;
		sliderPortada.style.transition = "0s";
		if (x4 == 0 && x3 != 0 && prevenir == true) {
			prevenir = false;
			if (x > x3) {
				sliderPortada.style.right = (pos + (x3 * 100 / sli)) + "%";
			} else if (x < x3) {
				cambioSliderWidth = x3 - x;
				sliderPortada.style.right = - cambioSliderWidth * 100 / sli + "%";
			}
		} else if (x4 == 0 && x3 != 0) {
			x4 = x3;
			if (x > x3) {
				cambioSliderWidth = x - x3;
				sliderPortada.style.right = (pos + (cambioSliderWidth * 100 / sli)) + "%";
			} else if (x < x3) {
				cambioSliderWidth = x3 - x;
				sliderPortada.style.right = (pos - (cambioSliderWidth * 100 / sli)) + "%";
			} else {

			}
		} else if (x3 == 0) {
			e.preventDefault();
			prevenir = e.defaultPrevented;
		} else {
			if (x3 > x4) {
				cambioSliderWidth = x3 - x4;
				sliderPortada.style.right = (pos - (cambioSliderWidth * 100 / sli)) + "%";
			} else if (x3 < x4) {
				cambioSliderWidth = x4 - x3;
				sliderPortada.style.right = (pos + (cambioSliderWidth * 100 / sli)) + "%";
			} else {

			}
		}
		x4 = x3;
		e.stopImmediatePropagation();
	}
	sliderPortada.addEventListener("dragend", dragEnd);
	function dragEnd(e) {
		x2 = e.pageX;
		if (x > x2) {
			if (c === 3) {
				c = 0;
			} else {
				c++;
			}
		} else if (x < x2) {
			if (c === 0) {
				c = 3;
			} else {
				c--;
			}
		}
		prevenir = false;
		verificarSlider();
		sliderPortada.style.transition = "1s all";
		rotarSlider = setTimeout("rotacion()", 3000);
		e.stopImmediatePropagation();
	}
}
function menu() {
	function moverMenu(event) {
		if (menuCelular.style.left == "100%" && event != undefined) {
			spanPri.style.transform = "rotate(45deg)";
			spanPri.style.top = "5px";
			spanMed.style.transition = "0.25s";
			spanMed.style.opacity = "0";
			spanUlt.style.transform = "rotate(-45deg)";
			spanUlt.style.top = "-5px";
			menuCelular.style.left = "0%";
			focusMenuMovil();
		} else if (menuCelular.style.left == "0%" && event != undefined) {
			ocultarMenu();
		}
		if (event != undefined)
			event.stopImmediatePropagation();
	}
	menuEnlace1.addEventListener("click", moverMenu);
	menuEnlace2.addEventListener("click", moverMenu);
	menuEnlace3.addEventListener("click", moverMenu);
	menuOxivit.addEventListener("click", moverMenu);
	menuInicio.addEventListener("click", ocultarMenu);
}
function focusMenuMovil() {
	if (menuCelular.style.left == "100%") {
		menuEnlace1.tabIndex = -1;
		menuEnlace2.tabIndex = -1;
		menuEnlace3.tabIndex = -1;
	} else {
		menuEnlace1.tabIndex = 1;
		menuEnlace2.tabIndex = 1;
		menuEnlace3.tabIndex = 1;
	}
}
function tabEvent() {
	document.addEventListener("keydown", keyDown);
	function keyDown(event) {
		event.stopPropagation();
	}
	document.addEventListener("keypress", keyPress);
	function keyPress(event) {
		event.stopPropagation();
	}
	document.addEventListener("keyup", keyUp);
	function keyUp(event) {
		if (event.keyCode == 9) {
			tab = true;
			if (menuCelular.style.left == "0%" && document.activeElement == btnSlider) {
				menuEnlace1.focus();
			}
		}
		event.stopPropagation();
	}
}
function ocultarMenu() {
	menuCelular.style.left = "100%";
	spanPri.style.transform = "rotate(0deg)";
	spanPri.style.top = "0px";
	spanMed.style.transition = "1.75s";
	spanMed.style.opacity = "1";
	spanUlt.style.transform = "rotate(0deg)";
	spanUlt.style.top = "0px";
	focusMenuMovil();
}
function focusNebulizacion() {
	if (index.clientWidth <= 594 && cp != 3) {
		btnNebulizacion.tabIndex = -1;
	} else {
		btnNebulizacion.tabIndex = 1;
	}
}
function verificarProducto() {
	let index = document.getElementById("index").clientWidth;
	if (cp == 0) {
		productosOxivit.style.transform = "translateX(0px)";
	} else if (cp == 1) {
		productosOxivit.style.transform = "translateX(" + (- index) + "px)";
	} else if (cp == 2) {
		productosOxivit.style.transform = "translateX(" + (- (2 * index)) + "px)";
	} else if (cp == 3) {
		productosOxivit.style.transform = "translateX(" + (- (3 * index)) + "px)";
	}
	focusNebulizacion();
}
function disminiurProductos(event) {
	if (cp == 0) {
		cp = 3;
	} else {
		cp--;
	}
	verificarProducto();
	event.stopImmediatePropagation();
}
function aumentarProductos(event) {
	if (cp == 3) {
		cp = 0;
	} else {
		cp++;
	}
	verificarProducto();
	event.stopImmediatePropagation();
}
function productos2() {
	btnProductosIzquierda.addEventListener("click", disminiurProductos);
	btnProductosDerecha.addEventListener("click", aumentarProductos);
}
function cambiarProducto() {
	let x, x2, x3;
	function touchStartProducto(event) {
		if (index.clientWidth >= 595) {
			productosOxivit.removeEventListener("touchstart", touchStartProducto);
			return;
		}
		clearTimeout(rotarBeneficios);
		x = event.touches[0].pageX;
	}
	productosOxivit.addEventListener("touchstart", touchStartProducto);
	function touchMoveProducto(event) {
		if (index.clientWidth >= 595) {
			productosOxivit.removeEventListener("touchmove", touchMoveProducto);
			return;
		}
		let newWidth;
		let cambioProductosWidth;
		x3 = event.touches[0].pageX;
		switch (cp) {
			case 0:
				newWidth = 0;
				break;
			case 1:
				newWidth = - index.clientWidth;
				break;
			case 2:
				newWidth = - (index.clientWidth * 2);
				break;
			case 3:
				newWidth = - (index.clientWidth * 3);
				break;
		}
		productosOxivit.style.transition = "0s";
		if (x > x3) {
			cambioProductosWidth = x - x3;
			productosOxivit.style.transform = "translateX(" + (newWidth - cambioProductosWidth) + "px)";
		} else {
			cambioProductosWidth = x3 - x;
			productosOxivit.style.transform = "translateX(" + (newWidth + cambioProductosWidth) + "px)";
		}
	}
	productosOxivit.addEventListener("touchmove", touchMoveProducto);
	function touchEndProducto(e) {
		if (index.clientWidth >= 595) {
			productosOxivit.removeEventListener("touchend", touchEndProducto);
			return;
		}
		x2 = e.changedTouches[0].clientX;
		console.log(x2);
		if (x > x2) {
			if (cp === 3) {
				cp = 0;
			} else {
				cp++;
			}
		} else if (x < x2) {
			if (cp === 0) {
				cp = 3;
			} else {
				cp--;
			}
		} else {

		}
		productosOxivit.style.transition = "1s all";
		verificarProducto();
		e.stopImmediatePropagation();
	}
	productosOxivit.addEventListener("touchend", touchEndProducto);
}
function verificarBeneficios() {
	switch (cb) {
		case 0:
			mainBeneficios[0].style.right = "0%";
			verificarCB();
			break;
		case 1:
			mainBeneficios[0].style.right = "20%";
			verificarCB();
			break;
		case 2:
			mainBeneficios[0].style.right = "40%";
			verificarCB();
			break;
		case 3:
			mainBeneficios[0].style.right = "60%";
			verificarCB();
			break;
		case 4:
			mainBeneficios[0].style.right = "80%";
			verificarCB();
			break;
		default:
			break;
	}
}
function verificarCB() {
	for (var i = 0; i < circulosBeneficio.length; i++) {
		if (cb == i) {
			circulosBeneficio[i].style.backgroundColor = "rgb(60,60,60)";
		} else {
			circulosBeneficio[i].style.backgroundColor = "rgb(114,114,114)";
		}
	}
}
function cambiarBeneficio() {
	circulosBeneficio[0].addEventListener("click", function() {
		cb = 0;
		verificarBeneficios();
		verificarCB();
		reiniciarRotacionBeneficios();
	});
	circulosBeneficio[1].addEventListener("click", function() {
		cb = 1;
		verificarBeneficios();
		verificarCB();
		reiniciarRotacionBeneficios();
	});
	circulosBeneficio[2].addEventListener("click", function() {
		cb = 2;
		verificarBeneficios();
		verificarCB();
		reiniciarRotacionBeneficios();
	});
	circulosBeneficio[3].addEventListener("click", function() {
		cb = 3;
		verificarBeneficios();
		verificarCB();
		reiniciarRotacionBeneficios();
	});
	circulosBeneficio[4].addEventListener("click", function() {
		cb = 4;
		verificarBeneficios();
		verificarCB();
		reiniciarRotacionBeneficios();
	});
}
function reiniciarRotacionBeneficios() {
	clearTimeout(rotarBeneficios);
	rotarBeneficios = setTimeout("rotacionBeneficios()", 3000);
}
function rotacionBeneficios() {
	cb++;
	if (cb >= circulosBeneficio.length) cb = 0;
	let x;
	let x2;
	let x3;
	verificarBeneficios();
	rotarBeneficios = setTimeout("rotacionBeneficios()", 3000);
	if (index.clientWidth >= 595) {
		clearTimeout(rotarBeneficios);
	}
	function touchStartBeneficio(event) {
		if (index.clientWidth >= 595) {
			mainBeneficios[0].removeEventListener("touchstart", touchStartBeneficio);
			return;
		}
		clearTimeout(rotarBeneficios);
		x = event.touches[0].pageX;
	}
	mainBeneficios[0].addEventListener("touchstart", touchStartBeneficio);
	function touchMoveBeneficio(event) {
		if (index.clientWidth >= 595) {
			mainBeneficios[0].removeEventListener("touchmove", touchMoveBeneficio);
			return;
		}
		let beneficios = document.getElementsByClassName("beneficios");
		let beneficiosWidthActual = beneficios[0].style.right;
		let newWidth;
		let cambioBeneficiosWidth;
		if (beneficiosWidthActual.length == 2) {
			newWidth = beneficiosWidthActual.slice(0, 1);
		} else {
			newWidth = beneficiosWidthActual.slice(0, 2);
		}
		x2 = event.touches[0].pageX;
		switch (cb) {
			case 0:
				newWidth = 0;
				break;
			case 1:
				newWidth = 20;
				break;
			case 2:
				newWidth = 40;
				break;
			case 3:
				newWidth = 60;
				break;
			case 4:
				newWidth = 80;
				break;
		}
		mainBeneficios[0].style.transition = "0s";
		if (x > x2) {
			cambioBeneficiosWidth = (x - x2) * 100 / beneficios[0].clientWidth;
			mainBeneficios[0].style.right = (parseInt(newWidth) + cambioBeneficiosWidth) + "%";
		} else {
			cambioBeneficiosWidth = (x2 - x) * 100 / beneficios[0].clientWidth;
			mainBeneficios[0].style.right = (parseInt(newWidth) - cambioBeneficiosWidth) + "%";
		}
	}
	mainBeneficios[0].addEventListener("touchmove", touchMoveBeneficio);
	function touchEndBeneficio(event) {
		if (index.clientWidth >= 595) {
			mainBeneficios[0].removeEventListener("touchend", touchEndBeneficio);
			return;
		}
		x3 = event.changedTouches[0].pageX;
		if (x > x3) {
			if (cb === 4) {
				cb = 0;
			} else {
				cb++;
			}
		} else if (x < x3) {
			if (cb === 0) {
				cb = 4;
			} else {
				cb--;
			}
		}
		mainBeneficios[0].style.transition = "1s all";
		verificarBeneficios();
		rotarBeneficios = setTimeout("rotacionBeneficios()", 3000);
		event.stopImmediatePropagation();
	}
	mainBeneficios[0].addEventListener("touchend", touchEndBeneficio);
}
function validarInputs() {
	nombre.addEventListener("input", quitarValidacionNombre);
	function quitarValidacionNombre(e) {
		e.target.setCustomValidity("");
		validarNombre(e);
	}
	nombre.addEventListener("invalid", validarNombre);
	function validarNombre(e) {
		let r = new RegExp("[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}");
		if (nombre.value.length == 0) {
			e.target.setCustomValidity("Ingresa nombre");
		} else if (nombre.value.length > 0 && nombre.value.length < 3) {
			e.target.setCustomValidity("Ingrese mínimo tres carácteres");
		} else if (!r.test(nombre.value)) {
			e.target.setCustomValidity("Utiliza sólo carácteres del idioma español");
		}
	}
	correo.addEventListener("input", quitarValidacionCorreo);
	function quitarValidacionCorreo(e) {
		e.target.setCustomValidity("");
		validarCorreo(e);
	}
	correo.addEventListener("invalid", validarCorreo);
	function validarCorreo(e) {
		let r = new RegExp("[a-zA-Z0-9]{3,15}[@][a-zA-Z0-9]{3,15}[.][a-zA-Z0-9]{3,15}");
		if (correo.value.length == 0) {
			e.target.setCustomValidity("Ingresa correo");
		} else if (correo.value.length > 0 && correo.value.length < 11) {
			e.target.setCustomValidity("Ingrese mínimo once carácteres");
		} else if (!r.test(correo.value)) {
			e.target.setCustomValidity("Utiliza un formato de correo valido");
		}
	}
	celular.addEventListener("input", quitarValidacionCelular);
	function quitarValidacionCelular(e) {
		e.target.setCustomValidity("");
		validarTelefono(e);
	}
	celular.addEventListener("invalid", validarTelefono);
	function validarTelefono(e) {
		let r = new RegExp("[+]{0,1}[0-9]{9,20}");
		if (celular.value.length == 0) {
			e.target.setCustomValidity("Ingresa teléfono");
		} else if (celular.value.length < 9) {
			e.target.setCustomValidity("Ingrese mínimo nueve carácteres");
		} else if (!r.test(celular.value)) {
			e.target.setCustomValidity("Utiliza un formato de teléfono valido");
		}
	}
	consulta.addEventListener("input", quitarValidacionConsulta);
	function quitarValidacionConsulta(e) {
		e.target.setCustomValidity("");
		validarConsulta(e);
	}
	consulta.addEventListener("invalid", validarConsulta);
	function validarConsulta(e) {
		let r = new RegExp("[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]{3,1500}");
		if (consulta.value.length == 0) {
			e.target.setCustomValidity("Ingresa consulta");
		} else if (consulta.value.length < 10) {
			e.target.setCustomValidity("Ingrese mínimo diez carácteres");
		} else if (!r.test(consulta.value)) {
			e.target.setCustomValidity("Utiliza sólo carácteres del idioma español");
		}
	}
}
function mensajeCorreo() {
	if (mensaje.innerHTML != "" && mensajeEnviado == false) {
		mensaje.style.display = "flex";
		mensajeEnviado = true;
	} else if (mensajeEnviado == true) {
		mensaje.innerHTML = "";
		mensaje.style.display = "none";
		mensajeEnviado = false;
		clearTimeout("esperar");
		return;
	}
	esperar = setTimeout("mensajeCorreo()", 10000);
}
function cambio() {
	window.addEventListener("resize", function() {
		if (index.clientWidth >= 595) {
			ocultarMenu();
			clearTimeout(rotarBeneficios);
			productosOxivit.style.transition = "0s";
			productosOxivit.style.transform = "translateX(0px)";
		} else {
			console.log(index.clientWidth);
			verificarProducto();
			menu();
			cambiarBeneficio();
			cambiarProducto();
			productos2();
			verificarBeneficios();
			clearTimeout(rotarBeneficios);
			cb--;
			rotacionBeneficios();
			productosOxivit.style.transition = "1s";
		}
		verificarSlider();
	});
}
document.addEventListener("visibilitychange", function() {
	if (document.hidden) {
		clearTimeout(rotarSlider);
		clearTimeout(rotarBeneficios);
	} else {
		c--;
		rotacion();
		cb--;
		rotacionBeneficios();
	}
});
let w = document.getElementById("whatsapp");
let wh = document.getElementById("whatsapp-header");
let ma = document.getElementById("maximizar");
let wo = document.getElementById("whatsapp-oxivit");
let mi = document.getElementById("minimizar");
let wb = document.getElementById("whatsapp-body");
let wf = document.getElementById("whatsapp-footer");
let e = document.getElementById("enviarMensaje");
function whatsapp() {
	ma.addEventListener("click", mensajeria);
	function mensajeria() {
		w.style.transition = "1s all";
		wb.style.display = "flex";
		wf.style.display = "flex";
		wo.style.display = "flex";
		mi.style.display = "flex";
		w.style.backgroundColor = "white";
		w.style.height = "75%";
		w.style.width = "60%";
		w.style.border = "2px solid black";
		wh.style.backgroundColor = "rgb(31, 138, 136)";
		wh.style.borderBottom = "2px solid black";
		if (wb.childNodes == 0) {

		}
	}
	mi.addEventListener("click", minimizar);
	function minimizar() {
		w.style.transition = "0s";
		wb.style.display = "none";
		wf.style.display = "none";
		wo.style.display = "none";
		mi.style.display = "none";
		w.style.background = "none";
		w.style.height = "7%";
		w.style.width = "auto";
		w.style.border = "none";
		wh.style.background = "none";
		wh.style.borderBottom = "none";
	}
	e.addEventListener("click", enviarWhatsapp);
	function enviarWhatsapp() {
		fetch("https://api.whatsapp.com/send?phone=51982762366&text=This%20is%20a%20test",
		{
			
		})
		/*
		fetch("https://graph.facebook.com/v16.0/112192638523204/messages",
		{
			method: "POST",
			headers: {
			'Authorization': 'Bearer EAAK7zNE3pg0BADpe1uwOXhZCRIZBeCoUvcGOVJ8Upam2CQJ6TihtDpARwGfzuxnFcrZCfOVRStf1IONtyRT3YRmLA9CSGdWL1m6ZB3nIBr2ZBx101PCeJQsosQEuhNsNHLtISNjlWBTGhwRcZBeReOPSqnVL3AmP4XDYIztbwHS6WZAP4vRqbNlYx7dMSYJl5jlLAazf7bLbmSncREJQuYIBd0jegNo6o8ZD',
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({"messaging_product": "whatsapp", "to": "51982762366", 
									"type": "template", "template": { "name": "hello_world",
									"language": { "code": "en_US"} } } )
		})
		fetch("https://lemon-earthy-sting.glitch.me/webhook/OxivitWhatsapp",
		{
			method: "POST",
			headers: {
			'Authorization': 'Bearer EAAHgr15OrQYBALKw87qsIQauiApAtfxUqPWG8ZBwzzZCcYkRHKS0XZCpDTCij2E5IqlqZBoPIdBoZBB1VkxUazbyH0vyMYnI0xzL4JjGzTY6vC7agwr4LCAgyonZBnt4a5m3rFt7ZAOgJrxBZAZAredIYYTafjEdrfNtqrsWGNF19sXXI4KcxDQQ7Lfka0ri8sZBXVQg1CYA5IhQ3Ls5j8h5vZCIMVrNeb85hoZD',
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({"messaging_product": "whatsapp", "to": "51982762366",
									"from": "51987198911",
									"type": "template", "template": { "name": "hello_world",
									"language": { "code": "en_US"} } } )
		})*/
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) });
	}
}
window.addEventListener("DOMContentLoaded", function() {
	rotacion();
	cambio();
	cambiarPortada();
	mensajeCorreo();
	focusMenuMovil();
	validarInputs();
	whatsapp();
	if (index.clientWidth <= 594) {
		rotacionBeneficios();
		menu();
		focusNebulizacion();
		productos2();
		cambiarProducto();
		cambiarBeneficio();
		tabEvent();
	} else {

	}
});
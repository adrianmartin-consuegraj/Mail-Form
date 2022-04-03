

function validarString(cadena, min, max) {
	var res = false;

	if (min == 0 && max != null) {
		if ((isNaN(cadena) && cadena.length <= max) || cadena == "")
			res = true;
	}

	if (min > 0 && max == null) {
		if (isNaN(cadena) && cadena.length >= min)
			res = true;
	}

	if (min == 0 && max == null) {
		if (isNaN(cadena) || cadena == "")
			res = true;
	}

	if (min > 0 && max != null) {
		if (isNaN(cadena) && cadena.length >= min && cadena.length <= max)
			res = true;
	}

	return res;
}


function validarNumber(cadena, min, max) {
	var res = false;

	if (min == 0 && max != null) {
		if ((!isNaN(cadena) && cadena.length <= max) || cadena == "")
			res = true;
	}

	if (min > 0 && max == null) {
		if (!isNaN(cadena) && cadena.length >= min)
			res = true;
	}

	if (min == 0 && max == null) {
		if (!isNaN(cadena) || cadena == "")
			res = true;
	}

	if (min > 0 && max != null) {
		if (!isNaN(cadena) && cadena.length >= min && cadena.length <= max)
			res = true;
	}

	return res;
}


function validarDNI(dni) {
	var numero
	var letr
	var letra
	var expresion_regular_dni
	expresion_regular_dni = /^\d{8}[a-zA-Z]$/

	if (expresion_regular_dni.test(dni) == true) {
		numero = dni.substr(0, dni.length - 1)
		letr = dni.substr(dni.length - 1, 1)
		numero = numero % 23
		letra = 'TRWAGMYFPDXBNJZSQVHLCKET'
		letra = letra.substring(numero, numero + 1)
		if (letra != letr.toUpperCase()) {
			return false
		} else {
			return true
		}
	} else {
		return false
	}
}

function validarNIE(value) {
	var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
	var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var str = value.toString().toUpperCase();

	if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

	var nie = str
		.replace(/^[X]/, '0')
		.replace(/^[Y]/, '1')
		.replace(/^[Z]/, '2');

	var letter = str.substr(-1);
	var charIndex = parseInt(nie.substr(0, 8)) % 23;

	if (validChars.charAt(charIndex) === letter) return true;

	return false;
}


function isValidCif(abc) {
	par = 0;
	non = 0;
	letras = "ABCDEFGHKLMNPQS";
	let = abc.charAt(0);

	if (abc.length != 9) {
		//alert('El Cif debe tener 9 dígitos');
		return false;
	}

	if (letras.indexOf(let.toUpperCase()) == -1) {
		//alert("El comienzo del Cif no es válido");
		return false;
	}

	for (zz = 2; zz < 8; zz += 2) {
		par = par + parseInt(abc.charAt(zz));
	}

	for (zz = 1; zz < 9; zz += 2) {
		nn = 2 * parseInt(abc.charAt(zz));
		if (nn > 9) nn = 1 + (nn - 10);
		non = non + nn;
	}

	parcial = par + non;
	control = (10 - (parcial % 10));
	if (control == 10) control = 0;

	if (control != abc.charAt(8)) {
		//alert("El Cif no es válido");
		return false;
	}
	//alert("El Cif es válido");
	return true;
}

function validarCP(elemento) {

	if (elemento.value != "" && elemento.value.length == 5 && validarNumber(elemento.value, 0, 5) && elemento.value >= 01000 && elemento.value <= 52999) {

		return true;
	} else {
		return false;
	}
}


function provinciaEtCA(elemento) {

	var cp = elemento.value.substring(0, 2);
	if (cp < 10) {
		cp = cp.substring(1, 2);
	}

	let provincias = ["Ninguno", "Álava", "Albacete", "Alicante", "Almería",
		"Ávila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos",
		"Cáceres", "Cádiz", "Castellón", "Ciudad Real", "Córdoba",
		"La Coruña", "Cuenca", "Gerona", "Granada", "Guadalajara",
		"Guipúzcoa", "Huelva", "Huesca", "Jaén", "León",
		"Lérida", "La Rioja", "Lugo", "Madrid", "Málaga",
		"Murcia", "Navarra", "Orense", "Asturias", "Palencia",
		"Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Cantabria",
		"Segovia", "Sevilla", "Soria", "Tarragona", "Teruel",
		"Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza",
		"Ceuta", "Melilla"];

	document.getElementById("provincia").value = provincias[cp]

	if (document.getElementById("provincia").value == "Almería" ||
		document.getElementById("provincia").value == "Cádiz" ||
		document.getElementById("provincia").value == "Córdoba" ||
		document.getElementById("provincia").value == "Granada" ||
		document.getElementById("provincia").value == "Huelva" ||
		document.getElementById("provincia").value == "Jaén" ||
		document.getElementById("provincia").value == "Málaga" ||
		document.getElementById("provincia").value == "Sevilla") {
		document.getElementById("comunidadAutonoma").value = "Andalucía";
	}

	if (document.getElementById("provincia").value == "Huesca" ||
		document.getElementById("provincia").value == "Teruel" ||
		document.getElementById("provincia").value == "Zaragoza") {
		document.getElementById("comunidadAutonoma").value = "Aragón";
	}

	if (document.getElementById("provincia").value == "Asturias") {
		document.getElementById("comunidadAutonoma").value = "Asturias";
	}

	if (document.getElementById("provincia").value == "Islas Baleares") {
		document.getElementById("comunidadAutonoma").value = "Islas Baleares";
	}

	if (document.getElementById("provincia").value == "Santa Cruz de Tenerife" ||
		document.getElementById("provincia").value == "Las Palmas") {
		document.getElementById("comunidadAutonoma").value = "Islas Canarias";
	}

	if (document.getElementById("provincia").value == "Cantabria") {
		document.getElementById("comunidadAutonoma").value = "Cantabria";
	}

	if (document.getElementById("provincia").value == "Toledo" ||
		document.getElementById("provincia").value == "Ciudad Real" ||
		document.getElementById("provincia").value == "Cuenca" ||
		document.getElementById("provincia").value == "Guadalajara" ||
		document.getElementById("provincia").value == "Albacete") {
		document.getElementById("comunidadAutonoma").value = "Castilla-La Mancha";
	}

	if (document.getElementById("provincia").value == "León" ||
		document.getElementById("provincia").value == "Palencia Real" ||
		document.getElementById("provincia").value == "Salamanca" ||
		document.getElementById("provincia").value == "Burgos" ||
		document.getElementById("provincia").value == "Zamora" ||
		document.getElementById("provincia").value == "Valladolid" ||
		document.getElementById("provincia").value == "Soria" ||
		document.getElementById("provincia").value == "Segovia" ||
		document.getElementById("provincia").value == "Ávila") {
		document.getElementById("comunidadAutonoma").value = "Castilla Y León";
	}

	if (document.getElementById("provincia").value == "Barcelona" ||
		document.getElementById("provincia").value == "Tarragona" ||
		document.getElementById("provincia").value == "Lérida" ||
		document.getElementById("provincia").value == "Gerona") {
		document.getElementById("comunidadAutonoma").value = "Cataluña";
	}

	if (document.getElementById("provincia").value == "Cáceres" ||
		document.getElementById("provincia").value == "Badajoz") {
		document.getElementById("comunidadAutonoma").value = "Extremadura";
	}

	if (document.getElementById("provincia").value == "La Coruña" ||
		document.getElementById("provincia").value == "Lugo" ||
		document.getElementById("provincia").value == "Orense" ||
		document.getElementById("provincia").value == "Pontevedra") {
		document.getElementById("comunidadAutonoma").value = "Galicia";
	}

	if (document.getElementById("provincia").value == "La Rioja") {
		document.getElementById("comunidadAutonoma").value = "La Rioja";
	}


	if (document.getElementById("provincia").value == "Madrid") {
		document.getElementById("comunidadAutonoma").value = "Comunidad de Madrid";
	}


	if (document.getElementById("provincia").value == "Navarra") {
		document.getElementById("comunidadAutonoma").value = "Navarra";
	}


	if (document.getElementById("provincia").value == "Álava" ||
		document.getElementById("provincia").value == "Vizcaya" ||
		document.getElementById("provincia").value == "Guipúzcoa") {
		document.getElementById("comunidadAutonoma").value = "País Vasco";
	}


	if (document.getElementById("provincia").value == "Murcia") {
		document.getElementById("comunidadAutonoma").value = "Región de Murcia";
	}


	if (document.getElementById("provincia").value == "Castellón" ||
		document.getElementById("provincia").value == "Valencia" ||
		document.getElementById("provincia").value == "Alivcante") {
		document.getElementById("comunidadAutonoma").value = "Comunidad Valenciana";
	}


}

//Validar Email
function validarEmail(elemento) {
	if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(elemento)) {
		return true
	} else {
		return false
	}
}

//formato de móvil: primer digito 6 ó 7
function validarMovil(cadena) {

	if (cadena.length != 9) {
		return false;
	} if (cadena.substring(0, 1) == 6 || cadena.substring(0, 1) == 7) {
		return true;
	}
}

//formato de telefono: primer digito 6 ó 7
function validarTelefono(cadena) {

	if (cadena.length != 9) {
		return false;
	} else{
		if (cadena.substring(0, 1) == 9 || cadena.substring(0, 1) == 6 || cadena.substring(0, 1) == 7) {
			return true;
		}
	}
}

//Validar IBAN 1
function fn_ValidateIBAN(IBAN) {

	//Se pasa a Mayusculas
	IBAN = IBAN.toUpperCase();
	//Se quita los blancos de principio y final.
	IBAN = IBAN.trim();
	IBAN = IBAN.replace(/\s/g, ""); //Y se quita los espacios en blanco dentro de la cadena

	var letra1, letra2, num1, num2;
	var isbanaux;
	var numeroSustitucion;
	//La longitud debe ser siempre de 24 caracteres
	if (IBAN.length != 24) {
		return false;
	}

	// Se coge las primeras dos letras y se pasan a números
	letra1 = IBAN.substring(0, 1);
	letra2 = IBAN.substring(1, 2);
	num1 = getnumIBAN(letra1);
	num2 = getnumIBAN(letra2);
	//Se sustituye las letras por números.
	isbanaux = String(num1) + String(num2) + IBAN.substring(2);
	// Se mueve los 6 primeros caracteres al final de la cadena.
	isbanaux = isbanaux.substring(6) + isbanaux.substring(0, 6);

	//Se calcula el resto, llamando a la función modulo97, definida más abajo
	resto = modulo97(isbanaux);
	if (resto == 1) {
		return true;
	} else {
		return false;
	}
}

//Validar IBAN 2
function modulo97(iban) {
	var parts = Math.ceil(iban.length / 7);
	var remainer = "";

	for (var i = 1; i <= parts; i++) {
		remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
	}

	return remainer;
}

//Validar IBAN 3
function getnumIBAN(letra) {
	ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return ls_letras.search(letra) + 10;
}


//Validar FORMULARIO
function validarForm() {
	var res = true;
	var mensaje = "";

	//Nombre o Empresa
	var nombre = document.getElementById("nombre").value;
	var empresa = document.getElementById("empresa").value;

	//Código Postal
	var codigoPostal = document.getElementById("codigoPostal").value;

	//Peso y tamaño
	var peso = document.getElementById("peso").value;
	var pesoVolumetrico = document.getElementById("pesoVolumetrico").value;
	var alto = document.getElementById("alto").value;
	var ancho = document.getElementById("ancho").value;
	var largo = document.getElementById("largo").value;

	//Importe de Seguro a Todo Riesgo (CHECK)
	var checkSeguroTodoRiesgo = document.getElementById("seguroTodoRiesgoCheck");
	var importeSeguro = document.getElementById("importeSeguroATodoRiesgo").value;

	//Importe de Reembolso en Cuenta (CHECK)
	var checkReembolsoEnCuenta = document.getElementById("reembolsoEnCuentaCheck");
	var importeReembolso = document.getElementById("importeReembolso").value;


	if (!validarString(nombre, 2, 60) && !validarString(empresa, 2, 60)) {
		res = false;
		mensaje += "· Se debe insertar un Nombre o una Empresa.\n";
	}

	if (!validarNumber(codigoPostal, 5, 5)) {
		res = false;
		mensaje += "· El Código Postal debe contener 5 números.\n";
	}

	if (!validarNumber(peso, 1, 4)) {
		res = false;
		mensaje += "· El Peso se debe introducir.\n";
	}

	if (pesoVolumetrico == "") {
		res = false;
		mensaje += "· El Peso Volumétrico se debe calcular.\n";
	}

	if (!validarNumber(alto, 1, 4)) {
		res = false;
		mensaje += "· El Alto se debe introducir.\n";
	}

	if (!validarNumber(ancho, 1, 4)) {
		res = false;
		mensaje += "· El Ancho se debe introducir.\n";
	}

	if (!validarNumber(largo, 1, 4)) {
		res = false;
		mensaje += "· El Largo se debe introducir.\n";
	}

	//Seguro a Todo Riesgo
	if (checkSeguroTodoRiesgo.checked) {
		if (importeSeguro == "") {
			res = false;
			mensaje += "· El importe del Seguro a Todo Riesgo es necesario.\n";
		}
	}

	//Reembolso en Cuenta
	if (checkReembolsoEnCuenta.checked) {
		if (importeReembolso == "") {
			res = false;
			mensaje += "· El importe del Reembolso en Cuenta es necesario.\n";
		}
	}

	if (res == false) {
		alert(mensaje);
	}

	return res;

}



function recuperarDatos() {

	//Nombre (1), Apellidos y Empresa (1)
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var empresa = document.getElementById("empresa").value;

	//Tipo de Documento y Número de Documento
	var tipoDocumento = document.getElementById("tipoDocumento").value;
	var numeroDocumento = document.getElementById("numeroDocumento").value;

	//Tipo de Vía y Nombre de Vía
	var tipoVia = document.getElementById("tipoVia").value;
	var nombreVia = document.getElementById("nombreVia").value;

	//Número, Bloque, Portal, Piso, Escalera, Puerta y Dirección Complemento
	var numero = document.getElementById("numero").value;
	var bloque = document.getElementById("bloque").value;
	var portal = document.getElementById("portal").value;
	var piso = document.getElementById("piso").value;
	var escalera = document.getElementById("escalera").value;
	var puerta = document.getElementById("puerta").value;
	var direccionComplemento = document.getElementById("direccionComplemento").value;

	//Pais seleccionado
	var pais = document.getElementsByName("opcionPais");

	//Codigo Postal (*), Comunidad Autónoma y Provincia
	var codigoPostal = document.getElementById("codigoPostal").value;
	var comunidadAutonoma = document.getElementById("comunidadAutonoma").value;
	var provincia = document.getElementById("provincia").value;

	//Móvil envío SMS, Email y Teléfono contacto
	var movil = document.getElementById("movilEnvioSMS").value;
	var email = document.getElementById("email").value;
	var telefono = document.getElementById("telefonoContacto").value;

	//Referencia Clientes
	var cliente1 = document.getElementById("referenciaCliente1").value;
	var cliente2 = document.getElementById("referenciaCliente2").value;
	var cliente3 = document.getElementById("referenciaCliente3").value;

	//Peso y tamaño
	var peso = document.getElementById("peso").value;
	var pesoVolumetrico = document.getElementById("pesoVolumetrico").value;
	var alto = document.getElementById("alto").value;
	var ancho = document.getElementById("ancho").value;
	var largo = document.getElementById("largo").value;

	//CHECK - Preparar envío de vuelta
	var checkEnvioVuelta = document.getElementById("envioVueltaCheck");

	//CHECK - Seguro todo riesgo + Importe
	var checkSeguroTodoRiesgo = document.getElementById("seguroTodoRiesgoCheck");
	var importeSeguro = document.getElementById("importeSeguroATodoRiesgo").value;

	//eAR (Acuse de Recibo Electrónico)
	var checkeAR = document.getElementById("acuseReciboElectronicoCheck");

	//CHECK - EDD (Entrega Exclusiva al Destinatario)
	var checkEDD = document.getElementById("entregaExclusivaDestinatarioCheck");

	//CHECK - Reembolso en Cuenta + Importe
	var checkReembolsoEnCuenta = document.getElementById("reembolsoEnCuentaCheck");
	var importeReembolso = document.getElementById("importeReembolso").value;
	var iban = document.getElementById("iban").value;
	var checkPagoAgrupado = document.getElementById("pagoAgrupadoCheck");

	//Observaciones
	var observaciones = document.getElementById("observaciones").value;

	var mensaje = "";

	//Se devuelven solo los datos introducidos
	if (nombre != "") {
		mensaje += "Nombre: " + nombre + ".\n";
	}

	if (apellidos != "") {
		mensaje += "Apellidos: " + apellidos + ".\n";
	}

	if (empresa != "") {
		mensaje += "Empresa: " + empresa + ".\n";
	}

	if (tipoDocumento != "selecciona") {

		if (numeroDocumento != "") {
			mensaje += tipoDocumento + ": " + numeroDocumento + ".\n";
		}
	}

	if (tipoVia != "selecciona") {

		if (nombreVia != "") {
			mensaje += tipoVia + ": " + nombreVia + ".\n";
		}
	}

	if (numero != "") {
		mensaje += "Número: " + numero + ".\n";
	}

	if (bloque != "") {
		mensaje += "Bloque: " + bloque + ".\n";
	}

	if (portal != "") {
		mensaje += "Portal: " + portal + ".\n";
	}

	if (piso != "") {
		mensaje += "Piso: " + piso + ".\n";
	}

	if (escalera != "") {
		mensaje += "Escalera: " + escalera + ".\n";
	}

	if (puerta != "") {
		mensaje += "Puerta: " + puerta + ".\n";
	}

	if (direccionComplemento != "") {
		mensaje += "Dirección Complemento: " + direccionComplemento + ".\n";
	}

	//Pais
	for (var i = 0; i < pais.length; i++) {
		if (pais[i].checked) {
			var paisSeleccionado = pais[i].value;
			mensaje += "País: " + paisSeleccionado + ".\n";
		}
	}

	if (codigoPostal != "") {
		mensaje += "Código Postal: " + codigoPostal + ".\n" +
			"Comunidad Autónoma: " + comunidadAutonoma + ".\n" +
			"Provincia: " + provincia + ".\n";
	}

	if (movil != "") {
		mensaje += "Móvil envío SMS: " + movil + ".\n";
	}

	if (email != "") {
		mensaje += "Email: " + email + ".\n";
	}

	if (telefono != "") {
		mensaje += "Teléfono Contacto: " + telefono + ".\n";
	}

	//Referencia a Clientes
	if (cliente1 != "") {
		mensaje += "Referencia Cliente 1: " + cliente1 + ".\n";
	}

	if (cliente2 != "") {
		mensaje += "Referencia Cliente 2: " + cliente2 + ".\n";
	}

	if (cliente3 != "") {
		mensaje += "Referencia Cliente 3: " + cliente3 + ".\n";
	}

	//Peso y tamaño
	if (peso != "") {
		mensaje += "Peso: " + peso + "Kg.\n";
	}

	if (pesoVolumetrico != "") {
		mensaje += "Peso Volumétrico: " + pesoVolumetrico + "Kg.\n";
	}

	if (alto != "") {
		mensaje += "Alto: " + alto + "cm.\n";
	}

	if (ancho != "") {
		mensaje += "Ancho: " + ancho + "cm.\n";
	}

	if (largo != "") {
		mensaje += "Largo: " + largo + "cm.\n";
	}

	//CHECK - Preparar envío de vuelta
	if (checkEnvioVuelta.checked) {
		mensaje += " - Preparar envío de vuelta.\n";
	}

	//CHECK - Seguro a todo riesgo
	if (checkSeguroTodoRiesgo.checked && importeSeguro != "") {
		mensaje += " - Seguro a todo riesgo (Importe: " + importeSeguro + "€).\n";
	}

	//CHECK - eAR (Acuse de Recibo Electrónico)
	if (checkeAR.checked) {
		mensaje += " - eAR (Acuse de Recido Electrónico).\n";
	}

	//CHECK - EDD (Entrega Exclusiva al Destinatario)
	if (checkEDD.checked) {
		mensaje += " - EDD (Entrega Exclusiva al Destinatario).\n";
	}

	//CHECK - Reembolso en Cuenta
	if (checkReembolsoEnCuenta.checked && importeReembolso != "") {
		mensaje += " - Reembolso en Cuenta (Importe: " + importeReembolso + "€).\n";

		if (iban != "") {
			mensaje += "   IBAN: " + iban + ".\n";
		}

		if (checkPagoAgrupado.checked) {
			mensaje += "   > Pago Agrupado.\n";
		}
	}

	//Observaciones
	if (observaciones != "") {
		mensaje += "Observaciones: " + observaciones + ".";
	}

	return mensaje;
}


	let array = [];

function incluir() {
inclusao = prompt("coloque o seu numero");
array.push(inclusao)
incluirNumero();
}

	function incluirNumero() {
	let querIncluir = prompt("Quer inclui mais númeor \n 1 sim \n 2 não");
	if (querIncluir == 1) {
		incluir();
	} else {
		console.log(array);
		substituiNumerosPares(array);
	}
	}





function substituiNumerosPares(array) {
	if (!array.length) return alert(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			alert(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			alert('Ops, você já vale 0!');
		}
	}
	alert(array);
}


incluir()
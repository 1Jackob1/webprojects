function CalculateSquare() {
	var Source = document.getElementById('form');
	var a = Source.ParHeight.value;
	var b = Source.ParWidth.value;
	if (isNaN(a * b) || a == '' || b == '') {
		Source.Result.value = "Введите циферки плез";
	} else {
		Source.Result.value = a * b;
	}
}

function SumSer() {
	var base = document.getElementById('independentX').value;
	var s = parseFloat(base);
	var i = 3;
	var eps = 0.005;
	if (s >= 1) {
		return;
	}
	while (((Math.pow(base, i) / i) > eps)) {
		s += (Math.pow(base, i) / i);
		i += 2;
	}

	s *= 10000000;
	s = Math.round(s);
	s /= 10000000;

	document.getElementById('Result').innerHTML = "S=" + s;
}

function GenMatrix() {
	var max = document.getElementById('MaxNumber').value;
	var min = document.getElementById('MinNumber').value;
	if (isNaN(max) || isNaN(min) || max < min) {
		document.getElementById('MaxNumber').value = 'Некорректный ввод!';
		return;
	}
	var div = document.getElementsByClassName('Matrix')[0];
	var table = document.createElement('table');
	table.className = 'SortedTable';
	table.id = 'DeleteIt'
	var trow = document.createElement('tr');
	var array = [];
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			array[j] = Math.round(min - 0.5 + Math.random() * (max - min + 1));
		}
		array.sort(function(a, b) {
			return a - b
		});
		for (var j = 0; j < 8; j++) {
			var td = document.createElement('td');
			td.innerHTML = parseInt(array[j]);
			trow.appendChild(td);
		}
		table.appendChild(trow);
		trow = document.createElement('tr');
	}
	var tmp = document.getElementById('DeleteIt');
	if (tmp != null) {
		div.removeChild(tmp);
	}
	div.appendChild(table);
}
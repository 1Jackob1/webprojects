/***************************************/
function CalculateSquare() {
	var Source = document.getElementById('form');
	var a = Source.ParHeight.value;
	var b = Source.ParWidth.value;
	if (isNaN(a * b) || a == '' || b == '') {
		alert("Введите намана плез");
	} else {
		Source.Result.value = a * b;
	}
}
/***************************************/
/***************************************/
/***************************************/
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
/***************************************/
/***************************************/
/*******************************************************/
function GenMatrix() {
	var max = document.getElementById('MaxNumber').value;
	var min = document.getElementById('MinNumber').value;
	if ( max < min) {
		alert("капеееец это жи не правильный ввод!");
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
/***************************************/
/***************************************/
/*****************************************************/
function GetRandomInt(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function GetArray(n, min, max) {
	var A=[];
	for (var i = 0; i < n; i++) {
		A[i]=[];
		for (var j = 0; j < n; j++) {
			A[i][j] = GetRandomInt(min, max);
		}
	}
	return A;
}

function GetRusultArray(a) {
	var Buf=[];
	for (var i = 0; i < a.length; i++) {
		for (var j = 0; j < a.length; j++) {
			Buf.push(a[i][j]);
		}


		//console.log("start Buf - "+Buf+" - end Buf and i%2"+ i%2);

	}
	Buf.sort(function cmp(a,b){
		return(a-b);
	});
	//console.log("start Buf - "+Buf+" - end Buf");
	var iter=0;
	for (var k = 0; k < a.length; k++) {
		if(k%2==1){
			for (var j = 0; j < a.length; j++) {
				a[j][k]=Buf[iter++]
			}
		}else{
			for (var j = a.length-1; j >= 0; j--) {
				a[j][k]=Buf[iter++];
			}
		}
	}
	return a;
}

function FillSnake() {
	var min=document.getElementById('MinNum').value;
	var max=document.getElementById('MaxNum').value;
	var n=document.getElementById('Size').value;
	if(min>max || n==0){
		alert("Введите циферки плез");
		return;
	}
	var Arr=GetRusultArray(GetArray(n, min, max));

	var div = document.getElementsByClassName('FillSnakeDiv')[0];
	var table = document.createElement('table');
	table.className = 'SortedTable';
	table.id = 'DeleteIt'
	var trow = document.createElement('tr');
	var iter=0;
	for (var i = 0; i < Arr.length; i++) {
		for (var j = 0; j < Arr.length; j++) {
			var td = document.createElement('td');
			td.innerHTML = parseInt(Arr[i][j]);
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
	// for (var i = 0; i < Arr.length; i++) {
	// 		console.log(Arr[i]);
	// }


}

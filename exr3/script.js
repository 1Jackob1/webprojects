function CalculateSquare() {
    var Source=document.getElementById('form');
    var a=Source.ParHeight.value;
    var b=Source.ParWidth.value;
    if ( isNaN(a*b) || a=='' || b=='') {
      Source.Result.value="Введите циферки плез";
    } else {
      Source.Result.value=a*b;
    }
}

function SumSer() {
  var base=document.getElementById('independentX').value;
  var s=parseFloat(base);
  var i=3;
  var eps=0.005;
  if (s>=1) {
    return;
  }
  while (((Math.pow(base, i) / i) > eps)) {
    s+=(Math.pow(base, i) / i);
    i+=2;
  }

  s*=10000000;
  s=Math.round(s);
  s/=10000000;

  document.getElementById('Result').innerHTML="S="+s;
}

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

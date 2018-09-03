
$("#factorial").click(function(){
          //obtener valor de un input
  var n1 = parseInt($("#n1").val());
  var factorial = 1;
        //desde 1     mientras/asta
  for (var index = 1; index <= n1; index++) {
       factorial = factorial * index;
  }
  $("#resultado").val("el factorial es: "+factorial);
});

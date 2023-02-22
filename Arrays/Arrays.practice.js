var dan = 'ponedeljak';
var result = 'Petak';


 if( dan == "ponedeljak") {
     result = "Danas";
     result = "Danas je utorak";
    result = "Danas je subota";
}
switch (dan) {

      case "ponedeljak":
          result = "Danas je ponedeljak";
          break;
      case "utorak":
         result = "Danas je utorak";
         
      case "sreda":
          result = "Danas je subota";
          break;
      default:
          result = "";
 }
  
console.log(result);
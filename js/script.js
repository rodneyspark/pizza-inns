var num = parseInt(document.getElementById("undo").value);
var totalAmount = num*(tas + s + c + top);
alert(" The Total Amount is kshs "  +  totalAmount  +  ""  +  " Thank you for your order welcome again.");
prompt("Enter your name")
prompt("enter your location")
alert("You delivery fee is 150/=")
alert("You order will be delivered shortly")
function Pizza (size, toppings) {
    this.pizzaSize = size;
    this.pizzaToppings = toppings;
  }

  Pizza.prototype.costOfPizza = function (size, toppings) {
    var pizzaPrice = this.pizzaSize + this.toppings;
    return pizzaPrice;
  }
  $(document).ready(function(){
    $("#new-pizza-order").submit(function(event){
      event.preventDefault();

      var inputtedPizzaSize = parseInt( $("select.new-pizza-size").val() );
      var inputtedPizzaToppings = 0;

      var checkedBoxes = document.getElementsByName("toppings");
      for (i = 0; i < checkedBoxes.length; i += 1) {
        if (checkedBoxes[i].checked) {
          inputtedPizzaToppings += 1;
        }
      }
      var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings);

      $("h1#pizza-price").text("$" + newPizza.costOfPizza());

      console.log(inputtedPizzaSize);
      console.log(inputtedPizzaToppings);
      console.log(newPizza);
    });
  });

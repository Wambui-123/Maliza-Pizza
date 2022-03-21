let totalPrice = 0;
class Order {
  constructor(
    sizePrice,
    crustPrice,
    toppingPrice,
    pizzaFlavour,
    pizzaSize,
    pizzaCrust,
    pizzaTopping
  ) {
    this.sizePrice = sizePrice;
    this.crustPrice = crustPrice;
    this.toppingPrice = toppingPrice;

    this.pizzaFlavour = pizzaFlavour;
    this.pizzaSize = pizzaSize;
    this.pizzaCrust = pizzaCrust;
    this.pizzaTopping = pizzaTopping;
  }

  addOrder() {
    var total =
    parseInt(this.crustPrice) +
    parseInt(this.sizePrice) +
    parseInt(this.toppingPrice);

    const order = `
    <div class="order">
        <div class="check"> ✔️ </div>

        <div style="flex: 1; font-size: 16px;">
            <p>${this.pizzaFlavour}</p>
            <p>Size - ${this.pizzaSize}</p>
            <p>Toppings - ${this.pizzaTopping}</p>
            <p>Crust - ${this.pizzaCrust}</p>
            <p>Total - ${total}</p>
        <div>
    </div>`;

    $("#order-container").append(order);
    
    totalPrice = totalPrice + total;
    const totalElem = document.getElementById("total");
    totalElem.innerHTML = totalPrice;
  }
}

function handleOrder() {
  var sizeOfPizza = $("#pizza-size option:selected").text();
  var crustOfPizza = $("#pizza-crust option:selected").text();
  var toppingOfPizza = $("#pizza-topping option:selected").text();
  var flavourOfPizza = $("#pizza-flavour option:selected").text();

  var sizePrice = $("#pizza-size").val();
  var crustPrice = $("#pizza-crust").val();
  var toppingPrice = $("#pizza-topping").val();

  const newOrder = new Order(
    sizePrice,
    crustPrice,
    toppingPrice,
    flavourOfPizza,
    sizeOfPizza,
    crustOfPizza,
    toppingOfPizza
  );

  newOrder.addOrder();
}

$("#pizza-flavour").change(function () {
  $("#flavour").html($(this).val());
});
$("#pizza-size").change(function () {
  $("#size").html($(this).val());
});
$("#pizza-crust").change(function () {
  $("#crust").html($(this).val());
});
$("#pizza-topping").change(function () {
  $("#topping").html($(this).val());
});
$("#btn").click(function () {
  $("#toggle").toggle();
});
$("#submit-address").click(function () {
  $("#address-val").html(`to ${$("#address").val()}`);
  $(".para").toggle();
  $(".delivery-section").hide();
})
$("#yes").click(function () {
  $(".delivery-section").toggle();
});
$("#no").click(function () {
  $(".para").toggle();
});

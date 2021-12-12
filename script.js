function addtoCart(val){
    var count = document.getElementById(eval("cart_count"))+val;
    alert("added to the cart"+count);
    document.getElementById("cart_count").innerHTML=count
    
}

   
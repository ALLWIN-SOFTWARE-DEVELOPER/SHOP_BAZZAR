//select poduct,input and total poduct>div//
var product=document.getElementById("product")
var input1=document.getElementById("input1")
var productdiv=product.querySelectorAll("div")

// function //
input1.addEventListener("keyup",function(event){
    var enterednumber=event.target.value.toUpperCase()

    for(hi=0;hi<productdiv.length;hi=hi+1)
    {
        var productname=productdiv[hi].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enterednumber)<0)
        {
            productdiv[hi].style.display="none"
        }
        else{
            productdiv[hi].style.display="block"
        }
    }
})
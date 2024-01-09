// .side-navbar

var sidenavbar=document.querySelector(".side-navbar")

function shownavbar(){
    sidenavbar.style.left="0"
}

function closenavbar(){
    sidenavbar.style.left="-60%"
}

var search=document.getElementById("input")

var productcontainer=document.getElementById("product")

var productlist=productcontainer.querySelectorAll(".collection-box")


search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(i=0;i<productlist.length;i++)
    {
        var productname=productlist[i].querySelector("p").textContent
        if( productname.toUpperCase().indexOf(enteredvalue) < 0)
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }

})


// search.addEventListener("keyup",function(){
//     var enteredvalue=event.target.value.toUpperCase()

//     for(i=0;i<productlist.length;i++)
//     {
//         var productname=productlist[i].querySelector("p").textContent

//         if(productname.toUpperCase().indexOf(enteredvalue) <0 )
//         {
//             productlist[i].style.display="none"
//         }
//         else{
//             productlist[i].style.display="block"
//         }
//     }
// })

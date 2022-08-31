window.onload = function() {
    var element = document.getElementById("humbergerList");
    element.addEventListener("click", function(){
        var ele= document.getElementById("menuListHidden")
        var ele2= document.getElementById("menuListShow")

        if(ele!==null)
            ele.setAttribute("id","menuListShow");
        else if(ele2!==null)
            ele2.setAttribute("id","menuListHidden");

    });

}
window.onload = function() {
        var oUll = document.getElementById("ull");
        var aLi = oUll.getElementsByTagName("li");
        var oDiv = document.getElementById("mDiv");
        var aDiv = oDiv.getElementsByTagName("div");
        for(var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onclick = function() {
                for(var i = 0; i < aLi.length; i++) {
                    aLi[i].className = "";
                }
                this.className = "active";
                for(var j = 0; j < aDiv.length; j++) {
                    aDiv[j].className = "hide";
                }
                aDiv[this.index].className = "show";
            }        
        }
    }
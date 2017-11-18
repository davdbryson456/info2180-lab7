function Search(){//Change to search with checked 
    var a=document.getElementById("country");
    var b=document.getElementById("Check");
    if (b.checked==true){
        console.log("test");
        SearchALL();
    }else{
    Search2(a.value);
    }
}

function Search2(searchkey){//put if statement for checkbox in respone.open
	    if (searchkey.length == 0) { 
        document.getElementById("result").innerHTML = "";
        return;
        } else {
        	var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {   
                   if (request.status == 200) {
                       document.getElementById("result").innerHTML = request.responseText;
                   }
                }
        	};
        	
        	request.open("GET", "world.php?country="+ searchkey, true);
            request.send();
	    }
	}
	
	
function SearchALL(){//put if statement for checkbox in respone.open
        	var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {   
                   if (request.status == 200) {
                       document.getElementById("result").innerHTML = request.responseText;
                   }
                }
        	};
        	
        	request.open("GET", "world.php?all=true", true);
            request.send();
	    }
	
	
	
	
	
window.onload=function(){
    var p=document.getElementById("lookup");
    p.addEventListener("click",Search);
};
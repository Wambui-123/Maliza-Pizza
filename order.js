function checkButton() {    
    if(document.getElementById('flexRadioDefault1').checked) { 
        document.getElementById("print-size").innerHTML = document.getElementById("flexRadioDefault1").value        
        //console.log(document.getElementById("flexRadioDefault1").value) 
    }   
    else if(document.getElementById('flexRadioDefault2').checked) {     
        document.getElementById("print-size").innerHTML = document.getElementById("flexRadioDefault2").value 
        //console.log(document.getElementById("flexRadioDefault2").value)         
    }   
    else if(document.getElementById('flexRadioDefault3').checked) {  
        document.getElementById("print-size").innerHTML = document.getElementById("flexRadioDefault3").value        
        //console.log(document.getElementById("flexRadioDefault3").value)   
    }   
    else if(document.getElementById('flexRadioDefault4').checked) {  
        document.getElementById("print-crust").innerHTML = document.getElementById("flexRadioDefault4").value        
        //console.log(document.getElementById("flexRadioDefault4").value)  
    }
    else if(document.getElementById('flexRadioDefault5').checked) { 
        document.getElementById("print-crust").innerHTML = document.getElementById("flexRadioDefault5").value          
        //console.log(document.getElementById("flexRadioDefault5").value) 
    } 
    else if(document.getElementById('flexRadioDefault6').checked) {  
        document.getElementById("print-crust").innerHTML = document.getElementById("flexRadioDefault6").value         
        //console.log(document.getElementById("flexRadioDefault6").value) 
    } 
    else {   
       console.log('You have not choosen any meal')
    }   
} 

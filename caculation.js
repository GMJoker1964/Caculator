function showResult(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    let phepTinh = document.getElementById("caculation").value;

    if(phepTinh === "sum") alert(num1+num2);
    if(phepTinh === "sub") alert(num1-num2);
    if(phepTinh === "multi") alert(num1*num2);
    if(phepTinh === "divide"){
        alert(num1/num2);
        if(num2 == 0){
            alert("Error");
        }
    }

}
window.onload =function(){
    
    var n2=document.getElementById("n2");
    var n1=document.getElementById("n1");
    var n3=document.getElementById("n3");
    var n4=document.getElementById("n4");
    var n5=document.getElementById("n5");
    var n6=document.getElementById("n6");
    var n7=document.getElementById("n7");

    var char = event.which || event.keyCode;
    document.addEventListener("keypress", function(event) {
        char=event.which || event.keyCode;
        switch(char){
            case 49:makeOne();
                break;
            case 50:makeTwo();
                break;
            case 51:makeThree();
                break;
            case 52:makeFour();
                break;
            case 53:makeFive();
                break;
            case 54:makeSix();
                break;
            case 55:makeSeven();
                break;
            case 56:makeEight();
                break;
            case 57:makeNine();
                break;
            case 48:makeZero();
                break;
            default:alert("Please press a number!");
        }
    });
    
    function makeOne(){
        removeSecondClass();
        n1.classList.add("cell-container-1-right");
        n2.classList.add("cell-container-2-right");
        n4.classList.add("cell-container-4-right");
        n5.classList.add("cell-container-5-right");
        n7.classList.add("cell-container-7-right");
    }
    function makeTwo(){
        removeSecondClass();
        n2.classList.add("cell-container-2-right");
        n6.classList.add("cell-container-6-left");
    }
    function makeThree(){
        removeSecondClass();
        n2.classList.add("cell-container-2-right");
        n5.classList.add("cell-container-5-right");
    }
    function makeFour(){
        removeSecondClass();
        n1.classList.add("cell-container-1-right");
        n5.classList.add("cell-container-5-up");
        n7.classList.add("cell-container-7-right");
    }
    function makeFive(){
        removeSecondClass();
        n3.classList.add("cell-container-3-left");
        n5.classList.add("cell-container-5-right");
    }
    function makeSix(){
        removeSecondClass();
        n3.classList.add("cell-container-3-left");
    }
    function makeSeven(){
        removeSecondClass();
        n2.classList.add("cell-container-2-right");
        n4.classList.add("cell-container-4-right");
        n5.classList.add("cell-container-5-right");
        n7.classList.add("cell-container-7-right");
    }
    function makeEight(){
        removeSecondClass();
    }
    function makeNine(){
        removeSecondClass();
        n5.classList.add("cell-container-5-right");
    }
    function makeZero(){
        removeSecondClass();
        n4.classList.add("cell-container-4-left");
    }
    function removeSecondClass(){
        n1.classList.length==2?n1.classList.remove(n1.classList.item(1)):"";
        n2.classList.length==2?n2.classList.remove(n2.classList.item(1)):"";
        n3.classList.length==2?n3.classList.remove(n3.classList.item(1)):"";
        n4.classList.length==2?n4.classList.remove(n4.classList.item(1)):"";
        n5.classList.length==2?n5.classList.remove(n5.classList.item(1)):"";
        n6.classList.length==2?n6.classList.remove(n6.classList.item(1)):"";
        n7.classList.length==2?n7.classList.remove(n7.classList.item(1)):"";
    }
    
}
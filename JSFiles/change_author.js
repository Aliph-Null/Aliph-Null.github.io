var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
// var year = dateObj.getUTCFullYear();

call_logic_change_Author();

function call_logic_change_Author(){
    if(month == 11 && day == 23){
        change_Author();
    }
}

function change_Author(){
    document.getElementById("author").innerHTML = " - Aliph Null";
}
var n = 15;
var data= new Array();

for(var i = 0;i <= 100;i++){
    data[i] = new Array();
    for(var j = 0;j <= 100;j++){
        data[i][j] = 0;
    }
}

data[0][n-1] = 1;

row = 1;
var start_col = n-2;
function generate_pascal()
{
    data[row][start_col] = 1;
    for(var col = start_col+2;col < (2*n);col+=2){
        data[row][col] = data[row-1][col - 1] + data[row - 1][col + 1];
    }
    start_col--;
    row++;

    
    var html_string = "<table>";
    for(var i = 0;i <n;i++){
        html_string += "<tr>";
        for(var j = 0;j <= (2*n);j++){
            if(data[i][j] != 0){
                html_string += "<td class='coef'>"+data[i][j]+"</td>";
            }
            else
                html_string += "<td class='space'></td>";
        }
        html_string += "</tr>";
    }  
    html_string += "</table>";
    document.getElementById("main-content").innerHTML=html_string;  
}


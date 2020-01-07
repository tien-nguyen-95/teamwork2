function IsValidNumber(num){
    num = parseInt(num);
    return !isNaN(num) && Number.isInteger(num) && num >= 10 && num <= 15;
}

function GenerateMatrix(row, col){
    let matrix = new Array(row);
    for(let i=0; i< row; i++){
        let arr = new Array(col);
        for(let j = 0; j< col; j++){
            arr[j] = Math.floor(Math.random() * 41 + 10);
        }
        matrix[i] = arr;
    }
    return matrix;
}

function ShowMatrix(row, col, matrix){
    let str ="<table>"
    for(let i=0; i< row; i++){
        str = str + "<tr>";
        for(let j = 0; j< col; j++){
            str = str + "<td>" + matrix[i][j] + "</td>";
        }
        str = str + "</tr>";
    }
    str+="</table>";
    return str;
}
function TotalRow(arr,col,row,indexRow) {
    let sum = 0
    
    if(IsValidNumber(indexRow) && indexRow <= row ){}
        for (i=0; i < col ; i++){
        sum +=arr[indexRow][i];
        }
        return sum;
}
function findMax(arr,row,col){
    let max = arr[0][0];
    let indexi,indexj;
    for(let i = 0 ; i < row ; i++ ){
        for( let j=0 ; j < col ; j++ ){
            if ( max < arr[i][j]){
                max = arr[i][j];
                indexi = i;
                indexj =j;
            }
        }
    }
    return `Max : ${max} position: ${indexi} - ${indexj}`
}
function sumMargin(arr,row ,col){
    let sumTop = 0;
    let sumBot = 0;
    let sumLeft = 0;
    let sumRight = 0;
    
    for (let i = 0 ; i<row ; i++){
        sumTop += arr[0][i];
        sumBot += arr[col-1][i] ;
    }
    for (let i = 0 ; i < col ; i++){
        sumLeft += arr[i][0]    
        sumRight +=arr[i][row-1];
    }
    let sum = sumBot + sumLeft + sumTop + sumRight - arr[0][0] -arr[col-1][0] -arr[0][row-1] -arr[col-1][row-1];
    return `Total Margin: ${sum} `;
}
function findMaxRow(arr,row,col){
    let max = TotalRow(arr,col,row,0);
    let indexRow=0;
    for(let i =1; i<row;i++){
        if(max<TotalRow(arr,col,row,i)){
            max=TotalRow(arr,col,row,i);
            indexRow=i;
        }
    }
    return `MaxRow = ${max} position : ${indexRow}`;
}
function countMulti(arr,col,row) {
    let count =0;
    for(let i =0;i<row;i++){
        for(let j=0; j<col;j++){
            if(arr[i][j]%5===0){
                count++;
            }
        }
    }
    return count;
}
function main(){
    let row = document.getElementById("rowNum").value;
    let col = document.getElementById("colNum").value;
    let indexRow = parseInt(prompt("nhập row"));
    let validRow = IsValidNumber(row);
    let validCol = IsValidNumber(col);
    if(validCol && validRow){
        let matrix = GenerateMatrix(row, col);
        let totalRow = TotalRow(matrix,col,row,indexRow);
        document.getElementById("showMatrix").innerHTML=ShowMatrix(row, col, matrix);
        document.getElementById("totalRow").innerHTML = `Total Row: ${totalRow}`;
        document.getElementById("Max").innerHTML = findMax(matrix ,row , col);
        document.getElementById("totalMargin").innerHTML = sumMargin(matrix,row ,col);
        document.getElementById("maxRow").innerHTML = findMaxRow(matrix,row,col);
        document.getElementById("multi").innerHTML = `Số bội của 5 : ${countMulti(matrix,col,row)}`
    }
    else {
        alert('Invalid value');
    }
}

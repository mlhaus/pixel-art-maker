


// When size is submitted by the user, call makeGrid()

function makeGrid(rows, cols) {
    
    theTable.css('background-color', 'red');
    // var $newRow = $(<tr></tr>);
    // var $newCol = $(<td></td>);
    // for(var r = 0; r < rows; r++){
    //     theTable.append($newRow);
    //     for(var c = 0; c < cols; c++){
    //         $newRow.append($newCol);
    //     }
    // }
}


// Select size input
var sizeSubmitButton, heightInput, widthInput; 
sizeSubmitButton = $('#sizePicker').children().last();
heightInput = $('#inputHeight');
widthInput = $('#inputWeight');
sizeSubmitButton.click(function(event){
    //console.log(event);
    var gridHeight = heightInput.val();
    var gridWidth = widthInput.val();
    makeGrid(gridHeight, gridWidth);
});

// /** 
//  * This function validates the values of the inputHeight and inputWeight fields
//  * Note: Using type="number" and min="1" in the <input> tag accomplishes the same as this code 
//  * @param {number} val - The value inputed by the user
//  * @returns {number} - It will be the original value if it checks good. If not, it will be 1
//  */
// function cleanupInput(val){
//     if(!val || val < 1 || isNaN(val)) {
//         return 1;
//     }
//     return val;
// }




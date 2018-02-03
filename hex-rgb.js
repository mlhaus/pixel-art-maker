$(function(){
    let canvasWidth = 256;
    let canvasHeight = 20;

    // Creates a table based on colors provided
    let pixelTable = $("#pixelCanvas");
    function makeGrid(numRows, numCols, r, g, b) {
        let newRow = "<tr></tr>";
        let firstRow = $(newRow).appendTo(pixelTable);
        let newColBeg = '<td style="background-color: rgb(';
        let newColEnd = ');"></td>';
        for(let cols = 0; cols < numCols; cols++){
            $(newColBeg + r + ", " + g + ", " + b + newColEnd).appendTo(firstRow);
            r = r > 0 ? r - 1 : 0;
            g = g > 0 ? g - 1 : 0;
            b = b > 0 ? b - 1 : 0;
        }
        let rowToCopy = pixelTable.children().first();
        for(let rows = 0; rows < numRows; rows++){
            rowToCopy.clone().appendTo(pixelTable);
        }
    }
    makeGrid(canvasHeight, canvasWidth, 255, 255, 255);

    // Clear the previous table
    function clearBoard(){
        pixelTable.empty();
    }

    // Code courtesy of Tim Down
    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    // Converts a hexadecimal value into RGB
    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? { // returns an object with 3 key: value pairs
            r: parseInt(result[1], 16), //Takes a value in base 16 and converts it to a decimal number between 0 and 255
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Converts an RGB value to hexadecimal
    function componentToHex(c) {
        var hex = parseInt(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    // Selects color input, clears old table colors and regenerates new colors
    let colorPicker = $("#colorPicker"); 
    let bgColorRgb, red, green, blue;
    colorPicker.change(function(){
        let bgColorHex = colorPicker.val();
        bgColorRgb = hexToRgb(bgColorHex);
        red = bgColorRgb.r; //this is dot notation, others are bracket notation
        green = bgColorRgb["g"];
        blue = bgColorRgb["b"];
        clearBoard();
        makeGrid(canvasHeight, canvasWidth, red, green, blue);
    });
    
    // Makes the table clickable and finds the clicked on color
    let td = pixelTable.find("td");
    $("#pixelCanvas").on("click", "td", function(event){
        //console.log(event);
        let color = $( this ).css( "background-color" );
        let startRed = color.indexOf("(")+1;
        let endRed = color.indexOf(",");
        let red = color.substring(startRed,endRed);
        let startGreen = endRed + 1;
        let endGreen = color.indexOf(",", startGreen);
        let green = color.substring(startGreen, endGreen);
        let startBlue = endGreen + 1;
        let endBlue = color.indexOf(")");
        let blue = color.substring(startBlue, endBlue);
        let hexInput = $("#colorHex");
        let rbgInput = $("#colorRGB");
        hexInput.val(rgbToHex(red, green, blue));
        rbgInput.val(color);
    });
    
})
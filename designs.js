$(function(){
    let pixelTable = $("#pixelCanvas");
    function makeGrid(r, c) {
        let newRow = "<tr></tr>";
        let newCol = "<td></td>";
        for(let rows = 0; rows < r; rows++){
            let thisRow = $(newRow).appendTo(pixelTable);
            for(let cols = 0; cols < c; cols++){
                $(newCol).appendTo(thisRow);
            }
        }
    }

    function clearBoard(){
        let allRows = pixelTable.children();
        allRows.remove();
    }

    // Select size input
    let sizeForm = $("#sizePicker");
    sizeForm.submit(function(event){
        event.preventDefault();
        clearBoard();
        let heightInput = sizeForm.children().first();
        let widthInput = sizeForm.children().eq(1);
        let theHeight = heightInput.val();
        let theWidth = widthInput.val();
        makeGrid(theHeight, theWidth); // When size is submitted, call makeGrid()
    });

    // Select color input
    let colorPicker = $("#colorPicker"); 
    let td = pixelTable.find("td");
    $("#pixelCanvas").on("click", "td", function(event){
        //console.log(event);
        let backgroundColor = colorPicker.val();
        $(this).css("background-color", backgroundColor);
    });
    
})
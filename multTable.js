$(document).ready(function(){
    console.log("2");
    $("#frm").submit( function(){
        var columns = ($("#maxXVal").val() - $("minXVal").val()) + 2;
        var rows = ($("maxYVal").val() - $("minYVal").val()) + 2;
        
        console.log("1");
        
        /* creates an empty string that will be appended to in each of the for
           loops.  It will later be pushed in the html table tag to create the
           multiplication table */
        var strAppend = "";
        
        // begins first for loop that will iterate through the rows of the table
        for ( var i=0 ; i < rows ; i++ ){
            
            strAppend = strAppend.concat("<tr>");
            console.log("hi");
            
            // begins second loop that will iterate through the columns of the table
            for ( var j=0 ; j<columns ; j++){
                // checks if the row and column are both 0, if so, then we are
                // now in the top left of the table and need to add a blank cell
                if( i === 0 && j === 0){
                    
                    // appends an empty table header to the string to represent
                    // an empty cell
                    strAppend = strAppend.concat("<th></th>");
                }
                else if( i===0 ){
                    strAppend = strAppend.concat("<th>");
                    strAppend = strAppend.concat( (j-1 + $(minXVal).val()).tostring() );
                    strAppend = strAppend.concat("</th>");
                }
                else if( j===0 ){
                    strAppend = strAppend.concat("<th>");
                    strAppend = strAppend.concat( (i-1 + $(minYVal).val().tostring()) );
                    strAppend = strAppend.concat("</th>");
                }
                else{
                    strAppend = strAppend.concat("<td>");
                    strAppend = strAppend.concat( ((i-1 + $(minYVal).val()) * (j-1 + $(minXVal).val())).tostring() );
                    strAppend = strAppend.concat("</td>");
                }
                
                strAppend = strAppend.concat("</tr>");
                
            }
        }
        
        $("#tab").append(strAppend);
        
    });
    
});

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var i;

$(document).ready(function() {
    $("#frm").submit(function() {

        $("#tab").empty();

        var columns = ($("#maxXVal").val() - $("#minXVal").val()) + 2;
        var rows = ($("#maxYVal").val() - $("#minYVal").val()) + 2;

        /* creates an empty string that will be appended to in each of the for
         loops.  It will later be pushed in the html table tag to create the
         multiplication table */
        var strAppend = "";

        // begins first for loop that will iterate through the rows of the table
        for (i = 0; i < Math.abs(rows); i++) {

            strAppend = strAppend.concat("<tr>");

            // begins second loop that will iterate through the columns of the table
            for (var j = 0; j < Math.abs(columns); j++) {
                // checks if the row and column are both 0, if so, then we are
                // now in the top left of the table and need to add a blank cell
                if (i === 0 && j === 0) {

                    // appends an empty table header to the string to represent
                    // an empty cell
                    strAppend = strAppend.concat("<th></th>");
                }

                /* checks if the current row is 0, meaning that we are currently
                 in the table header at the top of the table.  If it is, we
                 add a th tag and concatenate the next column number */
                else if (i === 0) {
                    strAppend = strAppend.concat("<th>");
                    strAppend = strAppend.concat((j - 1 + $("#minXVal").numVal()).toString());
                    strAppend = strAppend.concat("</th>");
                }

                /* checks if the current column is 0, meaning that we are currently
                 in the table header at the left of the table.  If so, we add
                 a th tag and concatenate the next row number into the string*/
                else if (j === 0) {
                    strAppend = strAppend.concat("<th>");
                    strAppend = strAppend.concat((i - 1 + $("#minYVal").numVal()).toString());
                    strAppend = strAppend.concat("</th>");
                }

                /* If we are now in the first row or the first column, then we
                 must be in a row and a column in which there is data to read.
                 A td tag is added to the string to create an additional cell in the table
                 where the data is to be stored. Multiply the two respective
                 numbers together to get their value and concatenate that to
                 the string as well
                 */
                else {
                    strAppend = strAppend.concat("<td>");
                    strAppend = strAppend.concat(((i - 1 + $("#minYVal").numVal()) * (j - 1 + $("#minXVal").numVal())).toString());
                    strAppend = strAppend.concat("</td>");
                }


            }

            strAppend = strAppend.concat("</tr>");

        }

        // this line of code takes the completely concatenated string of html
        // code and appends it to the tag whose table id is tab. In this case,
        // the code will be appended right between the <table> and </table> tags
        $("#tab").append(strAppend);

    });

});


/* Function taken from Jared Perreault with permission.  This function simply 
   takes in a number with a string type and parses it as an int so that it can
   be read and manipulated as such. */
jQuery.fn.numVal = function() {
    return parseInt($(this).val());
};






/*
   Alternative solution that I only attempted to hard code but upon further
   research realized that this method costs a lot more than the above solution.
   Each time it writes it slows down performance time where the solution above
   will only write one time.  The rest of the time it is just sittin there as a
   variable while more and more strings are being added to it and only when it
   is complete will it then write its html code in entirety.  This method is
   much more effieient.

 document.write("<h1>Multiplication table</h1>");
 document.write("<table border=2 width=75%");
 
 for (var i = 1; i <= 9; i++) {   
 document.write("<tr>");
 document.write("<td>" + i + "</td>");
 
 for (var j = 1; j <= 9; j++) { 
 document.write("<td>" + i * j + "</td>");
 }
 
 document.write("</tr>");
 }
 
 document.write("</table>");
 
 * */



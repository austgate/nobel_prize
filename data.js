/*
*   Function to tidy up the date format for presentation
*/

function clean_date(date_str)
{
   var clean_data = date_str.split("-");
   return clean_data[2] + " " + clean_data[1] + " " + clean_data[0];
}


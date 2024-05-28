function calculate_gpa()
{
    //This is the form on the page where the user can input their courses, grades, and how many credits each course is worth.
    const FORM = document.getElementById("gpa-form");
    //This will track if there are any grades inputted.
    var are_grades_empty = true;
    //This will track if there are any credit amounts inputted.
    var are_credits_empty = true;
    //The final calculated GPA.
    var gpa = 0.0;
    //Number of credits the user is taking.
    var credits_taken = 0;

    for(var i = 1; i < FORM.elements.length; i += 3)
    {
        //Value of the grade in the i'th row.
        var grade = FORM.elements[i].value;
        //Value of the credit amount of the course in the i'th row.
        var credits = FORM.elements[i + 1].value;
        //If a value exists in the text box for grade or credit amount, it's no longer empty.
        if(grade != "") are_grades_empty = false;
        if(credits != "") are_credits_empty = false;
        //If both text-boxes are empty, we'll just skip over this row and won't calculate this grade.
        if(grade == "" && credits == "") continue;

        //The credit amount for each course has to be numerical.
        if(isNaN(credits))
        {
            alert("Make sure all credit amounts are valid numbers!");
            return;
        }
       
        //In every row, both the grade and the credit amount text-box needs to be filled out.
        if(are_grades_empty || are_credits_empty) 
        {
            alert("Please make sure each set of grades has a respective credit amount and vice versa!");
            return;
        }

        //Actual GPA calculation.
        var gpa_mappings = 
        {
            "A+":    4.33,
            "A" :    4.0,
            "A-":    3.67,
            "B+":    3.33,
            "B" :    3.0,
            "B-":    2.67,
            "C+":    2.33,
            "C" :    2.0,
            "C-":    1.67,
            "D+":    1.33,
            "D" :    1.0,
            "D-":    0.67,
            "F" :    0
        };

        //Track how many credits the user is taking, only if their grade for that respective class is in the range of letter grades below.
        credits_taken += (grade.toUpperCase() in gpa_mappings) ? parseInt(credits): 0; 

        /*If the grade entered is not in the range of letter grades above, we just won't calculate it.
        This is fine because only these letter grade above get factored into GPA. Grades such as Pass or
        satisfactory or unsatisfactory are not factored into GPA.*/
        gpa += (grade.toUpperCase() in gpa_mappings) ? gpa_mappings[grade.toUpperCase()] * parseInt(credits) : 0;

        //After every row of grades and credit amounts we read, reset the empty values so we can detect incompleteness in the form.
        are_grades_empty = true;
        are_credits_empty = true;
    }

    //This is what displays the actual grade on the website.
    var average_gpa_display = document.getElementById("average-gpa");
    //Whenever the user clicks the Calculate button, we'll reset the text and then append the calculated grade.
    average_gpa_display.innerHTML = '<strong>AVERAGE GPA : </strong>';
    average_gpa_display.innerHTML += Math.round((gpa / credits_taken) * 1000) / 1000;
}

document.getElementById("calculate-button-gpa").onclick = function()
{   
    //When the user clicks the Calculate button on the website, we'll invoke this function.
    calculate_gpa();
};

//This function makes it so a text-box will only allow numbers to be entered in.
function only_allow_numbers(event)
{
    //Get the ASCII code of the character pressed.
    var ascii_code = event.keyCode;
    //We'll allow the '.' for decimal percentages.
    if(ascii_code == 0x2E) return true;
    //We won't allow these values to be typed in, any letters and special characters.
    if(ascii_code > 0x1F && (ascii_code < 0x30 || ascii_code > 0x39)) return false;
    return true;
}
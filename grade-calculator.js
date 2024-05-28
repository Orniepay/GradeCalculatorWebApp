function calculate_grades()
{
    //This is the form on the page where the user can input their assignment name, grades, and weights.
    const FORM = document.getElementById("grade-form");
    //This will track if there are any grades inputted.
    var are_grades_empty = true;
    //This will track if there are any assignment weights inputted.
    var are_weights_empty = true;
    //The final calculated average.
    var average = 0.0;

    for(var i = 1; i < FORM.elements.length; i += 3)
    {
        //Value of the grade in the i'th row.
        var grade = FORM.elements[i].value;
        //Value of the weight of the assignment in the i'th row.
        var weight = FORM.elements[i + 1].value;
        //If a value exists in the text box for grade or weight, it's no longer empty.
        if(grade != "") are_grades_empty = false;
        if(weight != "") are_weights_empty = false;
        //If both text-boxes are empty, we'll just skip over this row and won't calculate this grade.
        if(grade == "" && weight == "") continue;
        //We can't have any invalid numbers.
        if(isNaN(grade) || isNaN(weight))
        {
            alert("One or more grades and/or weights that you've entered is not a valid number!");
            return;
        }
        //In every row, both the grade and the weight text-box needs to be filled out.
        if(are_grades_empty || are_weights_empty) 
        {
            alert("Please make sure each set of grade has a respective weight and vice versa!");
            return;
        }
        //Actual grade calculation.
        average += grade * (weight / 100);
        //After every row of grades and weights we read, reset the empty values so we can detect incompleteness in the form.
        are_grades_empty = true;
        are_weights_empty = true;
    }

    //This is what displays the actual grade on the website.
    var average_grade_display = document.getElementById("average-grade");
    //Whenever the user clicks the Calculate button, we'll reset the text and then append the calculated grade.
    average_grade_display.innerHTML = '<strong>AVERAGE GRADE : </strong>';
    average_grade_display.innerHTML += average;

    // Set the color based on the average grade value
    if (average >= 80) {
        average_grade_display.style.color = "green"; 
    } else if (average >= 65) {
        average_grade_display.style.color = "orange"; 
    } else {
        average_grade_display.style.color = "red"; 
    }
}

document.getElementById("calculate-button-grade").onclick = function()
{   
    //When the user clicks the Calculate button on the website, we'll invoke this function.
    calculate_grades();
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
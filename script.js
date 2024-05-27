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
        var grade = FORM.elements[i].value;
        var weight = FORM.elements[i + 1].value;
        if(grade != "") are_grades_empty = false;
        if(weight != "") are_weights_empty = false;
        //Make an alert if a grade is full but weight is empty, they can't do that. and vice versa.
        if(grade == "" && weight == "") continue;
        if(isNaN(grade) || isNaN(weight))
        {
            alert("One or more grades and/or weights that you've entered is not a valid number!");
            return;
        }
        if(are_grades_empty || are_weights_empty) 
        {
            alert("Please make sure each set of grade has a respective weight and vice versa!");
            return;
        }
        average += grade * (weight / 100);
        //After every row of grades and weights we read, reset the empty values so we can detect incompleteness in the form.
        are_grades_empty = true;
        are_weights_empty = true;
    }

    console.log(average);
}

document.getElementById("calculate-button").onclick = function()
{   
    calculate_grades();
};

function only_allow_numbers(event)
{
    //This function makes it so a text-box will only allow numbers to be entered in.
    var ascii_code = event.which ? event.which : event.keyCode;
    //We'll allow the '.' for decimal percentages.
    if(ascii_code == 0x2E) return true;
    if(ascii_code > 0x1F && (ascii_code < 0x30 || ascii_code > 0x39)) return false;
    return true;
}
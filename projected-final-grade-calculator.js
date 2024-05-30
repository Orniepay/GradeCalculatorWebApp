//Target Grade Calculator
function calculate_target_grade()
{
    //User's current grade
    var current_grade = document.getElementById("current-grade-input").value;
    //User's target grade
    var target_grade = document.getElementById("target-grade-input").value;
    //User's final exam weight
    var final_exam_weight = document.getElementById("final-exam-weight").value;

    if(current_grade == '' || target_grade == '' || final_exam_weight == '') 
    {
        alert("Please make sure all text boxes are filled out!");
        return;
    }

    //Formula for calculating target grade, derived from https://www.rapidtables.com/calc/grade/final-grade-calculator.html
    var calculated_target_grade = ((target_grade / 100) - (1 - (final_exam_weight / 100)) * (current_grade / 100)) / (final_exam_weight / 100);
    
    var target_grade_display = document.getElementById("target-grade-display");
    target_grade_display.innerHTML = '<strong>Minimum Final Exam Score Needed : </strong>';
    target_grade_display.innerHTML += (Math.round(calculated_target_grade * 100) / 100) * 100;
}

//Overall Grade Calculator
function calculate_overall_grade()
{
    //User's current grade
    var current_grade = document.getElementById("current-average-grade-input").value;
    //User's final exam grade
    var final_exam_grade = document.getElementById("final-exam-grade-input").value;
    //User's final exam weight
    var final_exam_weight = document.getElementById("final-exam-weight-second").value;
    
    if(current_grade == '' || final_exam_grade == '' || final_exam_weight == '')
    {
        alert("Please make sure all text boxes are filled out!");
        return;
    }

    //Formula for calculating overall grade.
    var calculated_overall_grade = ((final_exam_grade / 100) * (final_exam_weight / 100)) + (1 - (final_exam_weight / 100)) * (current_grade / 100);
    var overall_grade_display = document.getElementById("overall-grade-display");
    overall_grade_display.innerHTML = '<strong>Overall Grade : </strong>';
    overall_grade_display.innerHTML += (Math.round(calculated_overall_grade * 100) / 100) * 100;
}

document.getElementById("calculate-button-target-grade").onclick = function()
{
    calculate_target_grade();
}

document.getElementById("calculate-button-overall-grade").onclick = function()
{
    calculate_overall_grade();
}

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
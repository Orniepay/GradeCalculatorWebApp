function read_grades()
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
        average += grade * (weight / 10);
        
    }
}

document.getElementById("calculate-button").onclick = function()
{   
    //console.log("ratio");
    read_grades();
};
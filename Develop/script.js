// sets an id against each of the days' hour timeblocks to input tasks and save against in localstorage
var today = [
    {
        id:"0",
        hour:"09",
        time:"9",
        amPm:"AM",
        task:""
    },
    {
        id:"1",
        hour:"10",
        time:"10",
        amPm:"AM",
        task:""
    },
    {
        id:"2",
        hour:"11",
        time:"11",
        amPm:"AM",
        task:""
    },
    {
        id:"3",
        hour:"12",
        time:"12",
        amPm:"PM",
        task:""
    },
    {
        id:"4",
        hour:"13",
        time:"1",
        amPm:"PM",
        task:""
    },
    {
        id:"5",
        hour:"14",
        time:"2",
        amPm:"PM",
        task:""
    },
    {
        id:"6",
        hour:"15",
        time:"3",
        amPm:"PM",
        task:""
    },
    {
        id:"7",
        hour:"16",
        time:"4",
        amPm:"PM",
        task:""
    },
    {
        id:"8",
        hour:"17",
        time:"5",
        amPm:"PM",
        task:""
    },
]

// this will get the data for the current day and year
function getCurrentDay() {
    var currentDay = moment().format("dddd, DD MMMM YYYY");
    $("#currentDay").text(currentDay);
};

// displays data for the function currentDay
getCurrentDay();

// this generates the day planners display
today.forEach(function(thisHour) {
    
    // timeblock row
    var hourRow = $("<div>")
        .attr({
        "class": "row"
    });

    // hour cell
    var hourTime = $("<div>")
        .text(`${thisHour.time}${thisHour.amPm}`)
        .attr({
            "class": "col-1 hour"
    });

    // input (task) field
    var taskInput = $("<textarea>");
  
    taskInput.attr("id", thisHour.id);
    if (thisHour.hour < moment().format("HH")) {
        taskInput.attr ({
            "class": "past col-10 description"
        })
    } else if (thisHour.hour === moment().format("HH")) {
        taskInput.attr({
            "class": "present col-10 description"
        })
    } else if (thisHour.hour > moment().format("HH")) {
        taskInput.attr({
            "class": "future col-10 description"
        })
    }

    // save button
    var saveIcon = $("<i class='fas fa-save fa-lg'></i>");
    var saveTask = $("<button>")
        .attr({
            "class": "col-1 saveBtn"
        });
    saveTask.append(saveIcon);
    hourRow.append(hourTime, taskInput, saveTask);

    $(".container").append(hourRow);
})
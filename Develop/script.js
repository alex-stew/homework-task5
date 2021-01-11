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


window.onload = function() {
  colorCode(); nineAM(); tenAM(); elevenAM(); twelvePM(); onePM(); twoPM(); threePM(); fourPM(); fivePM();
}

// This will display the current day when you open the page
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

// This will display the current time when you open the page
var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

var now = new Date().getHours();

// using if/else statements to color code the the time as the day goes by

function colorCode() {
  if (now > 9) {
    $("#comment9Am").addClass("past");
  } else if (now >= 9 && now < 10) {
      $("#comment9Am").addClass("current");
  } else if (now < 9) {
      $("#comment9Am").addClass("future");
  }
  if (now > 10) {
    $("#comment10Am").addClass("past");
  } else if (now >= 10 && now < 11) {
      $("#comment10Am").addClass("current");
  } else if (now < 10) {
      $("#comment10Am").addClass("future");
  }
  if (now > 11) {
    $("#comment11Am").addClass("past");
  } else if (now >= 11 && now < 12) {
      $("#comment11Am").addClass("current");
  } else if (now < 11) {
      $("#comment11Am").addClass("future");
  }
  if (now > 12) {
    $("#comment12Pm").addClass("past");
  } else if (now >= 12 && now < 13) {
      $("#comment12Pm").addClass("current");
  } else if (now < 12) {
      $("#comment12Pm").addClass("future");
  }
  if (now > 13) {
    $("#comment1Pm").addClass("past");
  } else if (now >= 13 && now < 14) {
      $("#comment1Pm").addClass("current");
  } else if (now < 13) {
      $("#comment1Pm").addClass("future");
  }
  if (now > 14) {
    $("#comment2Pm").addClass("past");
  } else if (now >= 14 && now < 15) {
      $("#comment2Pm").addClass("current");
  } else if (now < 14) {
      $("#comment2Pm").addClass("future");
  }
  if (now > 15) {
    $("#comment3Pm").addClass("past");
  } else if (now >= 15 && now < 16) {
      $("#comment3Pm").addClass("current");
  } else if (now < 15) {
      $("#comment3Pm").addClass("future");
  }
  if (now > 16) {
    $("#comment4Pm").addClass("past");
  } else if (now >= 16 && now < 17) {
      $("#comment4Pm").addClass("current");
  } else if (now < 16) {
      $("#comment4Pm").addClass("future");
  }
  if (now > 17) {
    $("#comment5Pm").addClass("past");
  } else if (now >= 17 && now < 18) {
      $("#comment5Pm").addClass("current");
  } else if (now < 17) {
      $("#comment5Pm").addClass("future");
  }
}

// These functions allow the user to input text into the scheduler, and also adds the save button to store the text to the localStorage
function nineAM() {
    var input_TextArea9 = document.querySelector("#comment9Am");
    var output_div9 = document.querySelector("#comment9Am");
    var save_button9 = document.querySelector("#buttonNineAm");
    
    save_button9.addEventListener("click", updateOutput9);
    output_div9.textContent = localStorage.getItem("content");
    input_TextArea9.value = localStorage.getItem("content");

    function updateOutput9() {
      localStorage.setItem("content", input_TextArea9.value);
      output_div9.textContent = input_TextArea9.value;
    }
}

function tenAM() {
    var input_TextArea10 = document.querySelector("#comment10Am");
    var output_div10 = document.querySelector("#comment10Am");
    var save_button10 = document.querySelector("#buttonTenAm");
    
    save_button10.addEventListener("click", updateOutput10);
    output_div10.textContent = localStorage.getItem("content");
    input_TextArea10.value = localStorage.getItem("content");

    function updateOutput10() {
      localStorage.setItem("content", input_TextArea10.value);
      output_div10.textContent = input_TextArea10.value;
    }
}

function elevenAM() {
    var input_TextArea11 = document.querySelector("#comment11Am");
    var output_div11 = document.querySelector("#comment11Am");
    var save_button11 = document.querySelector("#buttonElevenAm");
    
    save_button11.addEventListener("click", updateOutput11);
    output_div11.textContent = localStorage.getItem("content");
    input_TextArea11.value = localStorage.getItem("content");

    function updateOutput11() {
      localStorage.setItem("content", input_TextArea11.value);
      output_div11.textContent = input_TextArea11.value;
    }
}

function twelvePM() {
    var input_TextArea12 = document.querySelector("#comment12Pm");
    var output_div12 = document.querySelector("#comment12Pm");
    var save_button12 = document.querySelector("#buttonTwelvePm");
    
    save_button12.addEventListener("click", updateOutput12);
    output_div12.textContent = localStorage.getItem("content");
    input_TextArea12.value = localStorage.getItem("content");

    function updateOutput12() {
      localStorage.setItem("content", input_TextArea12.value);
      output_div12.textContent = input_TextArea12.value;
    }
}

function onePM() {
    var input_TextArea1 = document.querySelector("#comment1Pm");
    var output_div1 = document.querySelector("#comment1Pm");
    var save_button1 = document.querySelector("#buttonOnePm");
    
    save_button1.addEventListener("click", updateOutput1);
    output_div1.textContent = localStorage.getItem("content");
    input_TextArea1.value = localStorage.getItem("content");

    function updateOutput1() {
      localStorage.setItem("content", input_TextArea1.value);
      output_div1.textContent = input_TextArea1.value;
    }
}

function twoPM() {
    var input_TextArea2 = document.querySelector("#comment2Pm");
    var output_div2 = document.querySelector("#comment2Pm");
    var save_button2 = document.querySelector("#buttonTwoPm");
    
    save_button2.addEventListener("click", updateOutput2);
    output_div2.textContent = localStorage.getItem("content");
    input_TextArea2.value = localStorage.getItem("content");

    function updateOutput2() {
      localStorage.setItem("content", input_TextArea2.value);
      output_div2.textContent = input_TextArea2.value;
    }
}

function threePM() {
    var input_TextArea3 = document.querySelector("#comment3Pm");
    var output_div3 = document.querySelector("#comment3Pm");
    var save_button3 = document.querySelector("#buttonThreePm");
    
    save_button3.addEventListener("click", updateOutput3);
    output_div3.textContent = localStorage.getItem("content");
    input_TextArea3.value = localStorage.getItem("content");

    function updateOutput3() {
      localStorage.setItem("content", input_TextArea3.value);
      output_div3.textContent = input_TextArea3.value;
    }
}

function fourPM() {
    var input_TextArea4 = document.querySelector("#comment4Pm");
    var output_div4 = document.querySelector("#comment4Pm");
    var save_button4 = document.querySelector("#buttonFourPm");
    
    save_button4.addEventListener("click", updateOutput4);
    output_div4.textContent = localStorage.getItem("content");
    input_TextArea4.value = localStorage.getItem("content");

    function updateOutput4() {
      localStorage.setItem("content", input_TextArea4.value);
      output_div4.textContent = input_TextArea4.value;
    }
}

function fivePM() {
    var input_TextArea5 = document.querySelector("#comment5Pm");
    var output_div5 = document.querySelector("#comment5Pm");
    var save_button5 = document.querySelector("#buttonFivePm");
    
    save_button5.addEventListener("click", updateOutput5);
    output_div5.textContent = localStorage.getItem("content");
    input_TextArea5.value = localStorage.getItem("content");

    function updateOutput5() {
      localStorage.setItem("content", input_TextArea5.value);
      output_div5.textContent = input_TextArea5.value;
    }
}
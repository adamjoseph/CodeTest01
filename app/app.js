//Display Current Day and Time
function timerGo() {
	var date = new Date();
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var hour = date.getHours();
	var dayHalf = 'AM';
	if( hour > 11) {
		dayHalf = 'PM'
	};
	if( hour > 12) {
		hour -= 12;
	}; 
	document.getElementById('date').innerText = `Today is ${days[date.getDay()]}. The current time is ${hour} ${dayHalf} : ${date.getMinutes()} : ${date.getSeconds()}`;
	var t = setTimeout(timerGo, 1000);
};

//Scroll String from left to right 
var str = "Origin Code Academy! ";
function scroll() {
		var letter = str.substr(0, 1);
		var chunk = str.substr(1, 21);
		str = chunk + letter;
		document.getElementById('scroller').innerText = str;
		var t =setTimeout(scroll, 200);
	};
scroll();

//Create a bubble sort function 
var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function bubbleSort() {
		var length = arr.length;
	for(var i = 0; i < length; i++) {
		//Number of passes
		for (var j = 0; j < (length -i - 1); j++) {
			//Compare adjacent positons
			if(arr[j] > arr[j+1]) {
				//Swap
				var temp = arr[j];//Holds current number
				arr[j] = arr[j+1];//Replace current number with adjacent number
				arr[j+1] = temp;//Replace adjacent number w/ current number
			};
		};
	};
	console.log(arr.reverse());
};
bubbleSort();


//Bold the first word of 4 paragraph elements
function boldWord(className) {
	//Select first text node
	var node = $(className).contents().filter(function() {
		return this//.nodeType == 3;

	}).first(),

	//Get text
	text = node.text(),

	//Get first word:
	//Slice fromt the beginning to the first space
	first = text.slice(0, text.indexOf(" "));

	//if(!node.length)
	//	return;

	/*****************************************
	Remove first word from text:
	Left side selects all of the text
	Right side removes everything after the first word
	********************************************/
	node[0].nodeValue = text.slice(first.length);

	//Add back with a span HTML around it, span is styled w/CSS
	node.before('<span>' + first + '<span>');

};
 boldWord('.beachItem1');
 boldWord('.beachItem2');
 boldWord('.beachItem3');
 boldWord('.beachItem4');


//Create click and dblclick events for paragraph element #clicker
$('#clicker').on('click', function() {
	var newp = '<p>This is a click event</p>'
	$('#clicker').append(newp);

})

$('#clicker').on('dblclick', () => {
	var newp = '<p>This is a double click event</p>'
	$('#clicker').append(newp);

})

//Change color of the div when it is clicked
$('#changeCol').on('click', () => {
 	$('#colorDiv').css('background-color', 'blue');
	});






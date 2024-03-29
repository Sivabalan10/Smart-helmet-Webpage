window.onload = function(){
	let collision = "Collision"; // input from flask
	let date = "11/12/2023"; // input from flask
	let time = "11:12:13";
	let footage = "Not found" // input from flask
	let count = 3; // input from flask
	while(count != 0){
		let table = document.getElementById("tab");
		let data = document.createElement("tr");
		let val_1 = document.createElement("td");
		let val_2 = document.createElement("td");
		let val_3 = document.createElement("td");
		let val_4 = document.createElement("td");
		val_1.innerHTML = collision;
		val_2.innerHTML = date;
		val_3.innerHTML = time;
		val_4.innerHTML = footage;
		data.append(val_1);
		data.append(val_2);
		data.append(val_3);
		data.append(val_4);
		table.append(data);
		count -= 1;
	}


	// pie chart
	let count_1 = 10;
	let count_2 = 10;
	let count_3 = 10;
	let count_4 = 10;
	let count_5 = 10;
	let count_6 = 10;
	let user = 20; // input from flask
	if(user < 10){
		count_1 += 1;
	}
	else if((user>= 10)&&(user< 40)){
		count_2 += 1;
	}
	else if((user>= 40 )&&(user< 70)){
		count_2 += 1;
	}
	else if((user>= 70)&&(user<= 80)){
		count_3 += 1;
	}
	else if((user> 80)&&(user<= 120)){
		count_4 += 1;
	}
	else{
		count_5 += 1;
	}

	var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Alcohol Detection",
		fontColor:"#ffcc00"
	},
	backgroundColor:"#333333",
	
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		indexLabelFontColor: "white",
		dataPoints: [
			{y: count_1, label: "No alcohol"},
			{y: count_2, label: "Subtle Impression"},
			{y: count_3, label: "Moderate Influence"},
			{y: count_4, label: "Legal Threshold"},
			{y: count_5, label: "Motor Skills Decline"},
			{y: count_6, label: "Severe Impairment Zone"}
		]
	}]
	});
	chart.render();

	
	

}
// get elements

// Live footage
function live_footage(){
		let but_1 = document.getElementById("view_live");
		let rec = document.getElementById("esp");
		rec.style.display = "block";
		but_1.style.display = "none";
}

/* Execute the openFullscreen() function to open the video in fullscreen. Include prefixes for browsers that do not support the requestFullscreen property */
function openFullscreen() {
  let rec = document.getElementById("esp");
  if (rec.requestFullscreen) {
    rec.requestFullscreen();
  } else if (rec.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (rec.msRequestFullscreen) { /* IE11 */
    rec.msRequestFullscreen();
  }
}

function home(){
	let home = document.getElementById("home");
	let details = document.getElementById("details");
	home.style.display = "grid";
	details.style.display = "none";
}
function details(){
	let home = document.getElementById("home");
	let details = document.getElementById("details");
	home.style.display = "none";
	details.style.display = "block";
}

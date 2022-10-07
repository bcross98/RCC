function footColor() {
	document.getElementById('me').style.color = "red";
	setTimeout(function() {
		document.getElementById('me').style.color = "green";
		setTimeout(function() {
			document.getElementById('me').style.color = "blue";
		}, 200);
	}, 200);
}

function imgChange() {
	
	setTimeout(function() {
		$('#travelCenter').fadeTo(1500, 0.0, function() {
			document.getElementById('travelCenter').src = "./images/img1.jpg";
		});
		$('#travelCenter').fadeTo(1500, 1);
		
		setTimeout(function() {
			$('#travelCenter').fadeTo(1500, 0.0, function() {
				document.getElementById('travelCenter').src = "./images/img2.jpg";
			});
			$('#travelCenter').fadeTo(1500, 1);
			
			setTimeout(function() {
				$('#travelCenter').fadeTo(1500, 0.0, function() {
					document.getElementById('travelCenter').src = "./images/img3.jpg";
				});
				$('#travelCenter').fadeTo(1500, 1);
				
				setTimeout(function() {
					$('#travelCenter').fadeTo(1500, 0.0, function() {
						document.getElementById('travelCenter').src = "./images/img4.jpg";
					});
					$('#travelCenter').fadeTo(1500, 1);
					
					setTimeout(function() {
						$('#travelCenter').fadeTo(1500, 0.0, function() {
							document.getElementById('travelCenter').src = "./images/img5.jpg";
						});
						$('#travelCenter').fadeTo(1500, 1);
						
						setTimeout(function() {
							$('#travelCenter').fadeTo(1500, 0.0, function() {
								document.getElementById('travelCenter').src = "./images/travelcenter.jpg";
							});
							$('#travelCenter').fadeTo(1500, 1);
						}, 5000);
					}, 5000);
				}, 5000);
			}, 5000);
		}, 5000);
	}, 5000);
}

function jokes() {
	var joke = new Array();
	
	joke[0] = "What do you call a boomerang that won't come back?\nA stick.";
	joke[1] = "What does a cloud wear under his raincoat?\nThunderwear.";
	joke[2] = "Two pickles fell out of a jar onto the floor. What did one say to the other?\nDill with it.";
	joke[3] = "What time is it when the clock strikes 13?\nTime to get a new clock.";
	joke[4] = "How does a cucumber become a pickle?\nIt goes through a jarring experience.";
	joke[5] = "What did one toilet say to the other?\nYou look a bit flushed.";
	joke[6] = "What do you call a joke that isn't funny?\nA sentence.";
	joke[7] = "What did one stranger say to the other?\nNothing. They didn't know each other.";
	joke[8] = "What did one Frenchman say to the other Frenchman?\nI don't know; I don't speak French.";
	joke[9] = "Why did the swan hiss?\nBiologically, it's coded in their genes to do so when threatened.";
	joke[10] = "What do you call a pigeon that can't find its way back home?\nA pigeon.";
	joke[11] = "What's the best thing about Switzerland?\nI don't know, but the flag is a big plus.";
	
	index = Math.floor(Math.random() * joke.length);
	window.alert(joke[index]);
}

function weather() {
	$('#weatherwidget-io').fadeTo(1000, 1, function() {
		document.getElementById('weatherwidget-io').style.display = "block";
	});
	
	document.getElementById('weather').style.display = "none";
	document.getElementById('noWeather').style.display = "initial";
}

function noWeather() {
	$('#weatherwidget-io').fadeTo(1000, 0.0, function() {
		document.getElementById('weatherwidget-io').style.display = "none";
	});
	
	document.getElementById('weather').style.display = "initial";
	document.getElementById('noWeather').style.display = "none";
}

function fadeIn() {
	$('.Main').fadeTo(500, 1);
	$('.Top').fadeTo(500, 1);
}

$(document).ready(function() {
	
	imgChange();
	setInterval(imgChange, 30000); 
	
	setInterval(footColor, 600);
	
	fadeIn();
});
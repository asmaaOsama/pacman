// 1=<div class="wall"></div>
// 2=<div class="ground"></div>
// 4=<div class="coin"></div>
// 5=<div class="pacman"></div>
var map=[
	[1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,2,2,2,2,1,2,2,2,2,2,1],
	[1,2,1,1,1,2,1,2,1,1,1,2,1],
	[1,2,1,2,2,2,2,2,2,2,1,2,1],
	[1,2,2,2,1,1,5,1,1,2,2,2,1],
	[1,2,1,2,2,2,2,2,2,2,1,2,1],
	[1,2,1,1,1,2,1,2,1,1,1,2,1],
	[1,2,2,2,2,2,1,2,2,2,2,2,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var pacman={
	i:4,
	j:6
},
	score=document.getElementById("score");
function drawWorld() {
	document.getElementById("world").innerHTML="";
	for (var i = 0; i < map.length; i++) {
			console.log(map[i]);
		for (var j = 0; j < map[i].length; j++) {
			if(map[i][j]===1){
				document.getElementById("world").innerHTML+="<div class='wall'></div>";
			}
			else if(map[i][j]===2){
				document.getElementById("world").innerHTML+="<div class='coin'></div>";
			}
			
			else if(map[i][j]===5){
				document.getElementById("world").innerHTML+="<div class='pacman'></div>";
			}
			else if(map[i][j]===3){
				document.getElementById("world").innerHTML+="<div class='ground'></div>";
			}

		}
		document.getElementById("world").innerHTML+="<br>";

	}
}
document.onkeydown=function (e) {
	console.log(e.keyCode);
	if(e.keyCode===37){
		// left
		if(map[pacman.i][pacman.j-1]!==1){
			if(map[pacman.i][pacman.j-1]==2){
				score.innerHTML=parseInt(score.innerHTML,10)+10;
				if (score.innerHTML==520) {
					alert("You-Won");
					drawWorld();
				}
			}
			map[pacman.i][pacman.j]=3;
			pacman.j--;
			map[pacman.i][pacman.j]=5;
			drawWorld();
		}
		
	}
	if(e.keyCode===38){
		// up
		if(map[pacman.i-1][pacman.j]!==1){
			if(map[pacman.i-1][pacman.j]==2){
				score.innerHTML=parseInt(score.innerHTML,10)+10;
				if (score.innerHTML==520) {
					alert("You-Won");
					drawWorld();
				}
			}
			map[pacman.i][pacman.j]=3;
			pacman.i--;
			map[pacman.i][pacman.j]=5;
			drawWorld();
		}
	}
	if(e.keyCode===39){
		//right
		if(map[pacman.i][pacman.j+1]!==1){
			if(map[pacman.i][pacman.j+1]==2){
				score.innerHTML=parseInt(score.innerHTML,10)+10;
				if (score.innerHTML==520) {
					alert("You-Won");
					drawWorld();
				}
			}
			map[pacman.i][pacman.j]=3;
			pacman.j++;
			map[pacman.i][pacman.j]=5;
			drawWorld();
		}
	}
	if(e.keyCode===40){
		//down
		if(map[pacman.i+1][pacman.j]!==1){
			if(map[pacman.i+1][pacman.j]==2){
				score.innerHTML=parseInt(score.innerHTML,10)+10;
				if (score.innerHTML==520) {
					alert("You-Won");
					drawWorld();
				}
			}
			map[pacman.i][pacman.j]=3;
			pacman.i++;
			map[pacman.i][pacman.j]=5;
			drawWorld();
		}
	}
}

drawWorld();

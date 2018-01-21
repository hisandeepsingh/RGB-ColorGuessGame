
var col=randomColor(6);

function random()
{
	var rno= Math.floor(Math.random()*col.length);
	
	return col[rno];

}

var guess=random();
var hard=document.querySelector("#hard");
document.querySelector("#G").textContent=guess;
var message=document.querySelector("#message");

var select=document.querySelectorAll(".square");
for(var i=0;i<select.length;i++)
{    console.log("hi");
	select[i].style.background=col[i];

	select[i].addEventListener("click",function(){

		
		var clickedcolor=this.style.background;
			console.log(clickedcolor,guess);
		if(clickedcolor=== guess)
		{  
			changeall(clickedcolor);
			
			message.textContent="Correct";
			document.querySelector("#button").textContent="Play Again?";
			
		}
		else
		{
			this.style.background="#232323";
			message.textContent="Try Again";
		}

	});
}

function changeall(color)
{
	for(var i=0;i<select.length;i++)
	{
		select[i].style.background=color;
	}
	document.querySelector("#h1").style.color=color;
	
}
function randomColor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(pickrandom());
	}
	return arr;
}
function pickrandom(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

} 


var button=document.querySelector("#button")
button.addEventListener("click",function(){
col=randomColor(6);
guess=random();
document.querySelector("#G").textContent=guess;
for(var i=0;i<select.length;i++)
{   
	if(select[i].style.display==="none")
	{
		select[i].style.display="block";
	}
	select[i].style.background=col[i];
}
message.textContent="OK Play";
document.querySelector("#h1").style.color="white";
document.querySelector("#button").textContent="New Game";
			

});
var easy=document.querySelector("#easy");
easy.addEventListener("click",function(){
	easy.classList.add("Game");
	hard.classList.remove("Game");
col=randomColor(3);
guess=random();
document.querySelector("#G").textContent=guess;
for(var i=0;i<select.length;i++)
{
	if(col[i])
	{
		select[i].style.background=col[i];
	}
	else
	{
		select[i].style.display="none";

	}

}

});

hard.addEventListener("click",function(){
	hard.classList.add("Game");
	easy.classList.remove("Game");
col=randomColor(6);
guess=random();
document.querySelector("#G").textContent=guess;
for(var i=0;i<select.length;i++)
{   
	if(select[i].style.display==="none")
	{
		select[i].style.display="block";
	}
	select[i].style.background=col[i];
}

			

});

var canvas = document.getElementById('canvas');
var canvasField = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
var img = new Image();
img.src = "http://www.clipartsfree.net/vector/small/1306336588_Clipart_Free.png";
setInterval(function(){
    canvasField.clearRect(0,0,400,400);
    canvasField.drawImage(img,50,50)
//циферблат
    canvasField.beginPath();
    canvasField.lineWidth = 10;
    canvasField.setLineDash([10,14.305,5,14.305,5,14.305,5,14.305,5,14.305])
    canvasField.strokeStyle = 'black';
    canvasField.arc(200,200,193,1,10,false);
    canvasField.stroke();  
    canvasField.fillStyle = 'black';
    canvasField.font = "60px Serif";
    canvasField.fillText(12,170,60);
    canvasField.fillText(11,90,80);
    canvasField.fillText(10,30,140);
    canvasField.fillText(9,30,220);
    canvasField.fillText(8,40,300);
    canvasField.fillText(7,100,360);
    canvasField.fillText(6,187,380);
    canvasField.fillText(5,275,359);
    canvasField.fillText(4,330,300);
    canvasField.fillText(3,350,220);
    canvasField.fillText(2,325,135);
    canvasField.fillText(1,272,77);
    var date = new Date();
    var seconds = -90 + (date.getSeconds()*6);
    var minutes = -90 + (date.getMinutes()*6);
    var hours = -90 +(date.getHours()*15)*2;
//часовая стрелка
    canvasField.beginPath();
    canvasField.setLineDash([]);
    canvasField.strokeStyle = 'black';
    canvasField.lineWidth = 12;
    canvasField.moveTo(200,200);
    canvasField.arc(200,200,100,hours*Math.PI/180,hours*Math.PI/180,false);
    canvasField.lineTo(200,200);
    canvasField.stroke();    
//минутная стрелка
    canvasField.beginPath();
    canvasField.lineWidth = 6;
    canvasField.moveTo(200,200);
    canvasField.arc(200,200,140,minutes*Math.PI/180,minutes*Math.PI/180,false);
    canvasField.lineTo(200,200);
    canvasField.stroke();    
//секундная стрелка
    canvasField.beginPath();
    canvasField.strokeStyle = 'red';
    canvasField.lineWidth = 2;
    canvasField.moveTo(200,200);
    canvasField.arc(200,200,170,seconds*Math.PI/180,seconds*Math.PI/180,false);
    canvasField.lineTo(200,200);
    canvasField.stroke();
    canvasField.beginPath();
    canvasField.lineWidth = 6;
    canvasField.moveTo(200,200);
    canvasField.arc(200,200,30,(seconds+180)*Math.PI/180,(seconds+180)*Math.PI/180,false);
    canvasField.lineTo(200,200);
    canvasField.stroke();
//центральная точка
    canvasField.beginPath();
    canvasField.fillStyle = 'gray';
    canvasField.arc(200,200,10,1,10,false);
    canvasField.fill();
},40)
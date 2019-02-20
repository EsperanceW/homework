var left = document.getElementById("left");
var right = document.getElementById("right");
var img = document.getElementsByClassName("img");
var lunbo = document.getElementById("lunbo");
var arry = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png','img/9.png','img/10.png'];
var score = document.getElementById("score");
var time = document.getElementById("time");
var list = document.getElementsByClassName("list");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var a = 0;
var s = 0;
score.innerHTML = "得分: " + s + "分";  
left.onclick = function pre(){
	a--;
	img.src = arry[a];
	if(a < 0){
		a = 0;
		alert('已是第一题！');
	}
	if(a == 0){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 1){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 2){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 3){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 4){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 5){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 6){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 7){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
	if(a == 8){
		lunbo.innerHTML = "此题已答或已放弃回答，请按题号顺序作答！";
	}
}
right.onclick = function next(){
	a++;
	img.src = arry[a];
	if(a > 9){
		a = 9;
		alert("已是最后一题！")
	}
	if(a == 1){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550287485835",true);
        request.send();
		var two = true;
		B.onclick = function (){
			if(two){
			s = s + 2;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			two = false;
		   }
		}
		A.onclick = function (){
			if(two){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			two = false;
		    }
		}
		C.onclick = function (){
			if(two){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			two = false;
		    }
		}
		D.onclick = function (){
			if(two){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			two = false;
		    }
		}
	}
	if(a == 2){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550287714635",true);
        request.send();
		var three = true;
		D.onclick = function (){
			if(three){
			s = s + 3;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			three = false;
		    }
		}
		A.onclick = function (){
			if(three){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			three = false;
		    }
		}
		B.onclick = function (){
			if(three){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			three = false;
		    }
		}
		C.onclick = function (){
			if(three){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			three = false;
		    }
		}
	}
	if(a == 3){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550289755345",true);
        request.send();
		var four = true;
		C.onclick = function (){
			if(four){
			s = s + 4;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			four = false;
		    }
		}
		A.onclick = function (){
			if(four){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			four = false;
		    }
		}
		B.onclick = function (){
			if(four){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			four = false;
		    }
		}
		D.onclick = function (){
			if(four){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			four = false;
		    }
		}
	}
	if(a == 4){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550290300127",true);
        request.send();
		var five = true;
		A.onclick = function (){
			if(five){
			s = s + 5;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			five = false;
		    }
		}
		B.onclick = function (){
			if(five){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			five = false;
		    }
		}
		C.onclick = function (){
			if(five){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			five = false;
		    }
		}
		D.onclick = function (){
			if(five){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			five = false;
		    }
		}
	}
	if(a == 5){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550290811019",true);
        request.send();
		var six = true;
		B.onclick = function (){
			if(six){
			s = s + 6;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			six = false;
		    }
		}
		A.onclick = function (){
			if(six){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			six = false;
		    }
		}
		C.onclick = function (){
			if(six){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			six = false;
		    }
		}
		D.onclick = function (){
			if(six){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			six = false;
		    }
		}
	}
	if(a == 6){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550291115764",true);
        request.send();
		var seven = true
		C.onclick = function (){
			if(seven){
			s = s + 7;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			seven = false;
		    }
		}
		A.onclick = function (){
			if(seven){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			seven = false;
		    }
		}
		B.onclick = function (){
			if(seven){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			seven = false;
		    }
		}
		D.onclick = function (){
			if(seven){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			seven = false;
		    }
		}
	}
	if(a == 7){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550291628628",true);
        request.send();
		var eight = true;
		A.onclick = function (){
			if(eight){
			s = s + 8;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			eight = false;
		    }
		}
		B.onclick = function (){
			if(eight){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			eight = false;
		    }
		}
		C.onclick = function (){
			if(eight){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			eight = false;
		    }
		}
		D.onclick = function (){
			if(eight){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			eight = false;
		    }
		}
	}
	if(a == 8){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550295728397",true);
        request.send();
		var nine = true;
		B.onclick = function (){
			if(nine){
			s = s + 9;
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
			nine = false;
		    }
		}
		A.onclick = function (){
			if(nine){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			nine = false;
		    }
		}
		C.onclick = function (){
			if(nine){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			nine = false;
		    }
		}
		D.onclick = function (){
			if(nine){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
			nine = false;
		    }
		}
	}
	if(a == 9){
		var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
		    if(request.status == 200 && request.readyState == 4){
		    	var content = JSON.parse(request.responseText);
			    lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		    }
		    else {
		    	console.log("request was unsuccessful");
		    }
	    }
	    request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/_copy_1550296527967",true);
        request.send();
		var ten = true;
		D.onclick = function (){
			if(ten){
			s = s + 10;
			score.innerHTML = "得分: " + s + "分";
			alert("答题结束，请点击提交上传成绩！");
			ten = false;
		    }
		}
		A.onclick = function (){
			if(ten){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			alert("答题结束，请点击提交上传成绩！");
			ten = false;
		    }
		}
		B.onclick = function (){
			if(ten){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			alert("答题结束，请点击提交上传成绩！");
			ten = false;
		    }
		}
		C.onclick = function (){
			if(ten){
			s = s + 0
			score.innerHTML = "得分: " + s + "分";
			alert("答题结束，请点击提交上传成绩！");
			ten = false;
		    }
		}
	}
}
var times = 300;
var minute = 0;
var second = 0;
time.innerHTML = "5分0秒";
begin.onclick = function (){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.status == 200 && request.readyState == 4){
			 var content = JSON.parse(request.responseText);
			 lunbo.innerHTML = content.T + "<br>" + content.A + "<br>" + content.B + "<br>" + content.C + "<br>" + content.D;
		}
		else {
			console.log("request was unsuccessful");
		}
	}
	request.open("get","https://www.easy-mock.com/mock/5c595852f2232b58e5761b56/example/",true);
    request.send();
	var one = true;
	A.onclick = function (){
		if(one){
		s = s + 1;
		score.innerHTML = "得分: " + s + "分";
		lunbo.innerHTML = "回答正确，请点击下一题继续作答！";
		one = false;
	    }
	}
	B.onclick = function (){
		if(one){
		s = s + 0
		score.innerHTML = "得分: " + s + "分";
		lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
		one = false
	    }
	}
    C.onclick = function (){
    	if(one){
		s = s + 0
		score.innerHTML = "得分: " + s + "分";
	    lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
	    one = false;
	    }
	}
	D.onclick = function (){
		if(one){
		s = s + 0
		score.innerHTML = "得分: " + s + "分";
		lunbo.innerHTML = "回答错误，请点击下一题继续作答！";
		one = false;
	    }
	}
	var myTime = setInterval(function (){jishi()},1000);
    function jishi(){
    	if(times >= 0){
		minute = Math.floor(times / 60);
		second = Math.floor(times % 60);
		times--;
	    }
	    if(times == 28){
	    	alert("最后30秒，答题即将结束！");
	    }
	time.innerHTML = minute + "分" + second + "秒";
    }
}
var i = 1;
submit.onclick = function (){
	if(i <= 5){
		localStorage.grade = s;
		localStorage.time = 300 - times;
        list[i].innerHTML = localStorage.grade + "分" + " " + "用时" + localStorage.time + "s";
        i++;
    }
}


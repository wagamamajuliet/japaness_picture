$(document).ready(function() {
	$('.nagasawa').click(function(){
		nagasawa();
	});

	$('.nakama').click(function(){
		nakama();
	});
	$('.dakeuchi').click(function(){
		dakeuchi();
	});
	$('.sawajiri').click(function(){
		sawajiri();
	});
	$('.aragaki').click(function(){
		aragaki();
	});
	$('.ayase').click(function(){
		ayase();
	});
	$('.ueto').click(function(){
		ueto();
	});
	$('.kanno').click(function(){
		kanno();
	});
	$('.toda').click(function(){
		toda();
	});
	$('.hirosue').click(function(){
		hirosue();
	});

	 	var firstUrl = './img/';
  	var imgurl = [];
  	imgurl = ['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg','n.jpg','o.jpg','p.jpg','q.jpg','r.jpg','s.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg','y.jpg','z.jpg'];
    var nagasawa = 'nagasawa/';
    var nakama = 'nakama/';
    var dakeuchi = 'dakeuchi/';
    var sawajiri = 'sawajiri/';
    var aragaki = 'aragaki/';
    var amami = 'amami/';
    var ayase = 'ayase/';
    var aoi = 'aoi/';
    var ueto = 'ueto/';
    var kanno = 'kanno/';
    var toda = 'toda/';
    var hirosue = 'hirosue/'; 
    var actress = [nagasawa, nakama, dakeuchi, sawajiri, aragaki, amami, ayase, aoi, ueto, kanno, toda, hirosue];

function addary (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	picActress = actress[Math.floor(Math.random()*actress.length)];
	var beforeimgurl = firstUrl + picActress;
	var arr = new Array;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function nagasawa (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + nagasawa;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function nakama (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + nakama;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function dakeuchi (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + dakeuchi;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function sawajiri (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + sawajiri;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function aragaki (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + aragaki;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function ayase (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + ayase;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function ueto (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + ueto;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function kanno (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + kanno;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function toda (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + toda;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
function hirosue (){
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
	var beforeimgurl = firstUrl + hirosue;
	for(var i = 0; i < imgurl.length; i++) {
		arr[i] = beforeimgurl + imgurl[i];
	}
	shuffle(arr);
	for (var i = 0; i < arr.length; i++) {
		document.getElementsByClassName("img")[i].src = arr[i];
	}
}
});


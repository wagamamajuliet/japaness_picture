
// 	 var funList = new Array();
//       function callFunction()
//       {
//         for(var i =0; i < funList.length; i++)
//           { 
//             funList[i]();
//           }
//       }
//       function addLoadEvent(fun)
//       {
//         funList[funList.length] = fun;
//       }

//   	var firstUrl = './img/';
//   	var imgurl = [];
//   	imgurl = ['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg','n.jpg','o.jpg','p.jpg','q.jpg','r.jpg','s.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg','y.jpg','z.jpg'];
//     var nagasawa = 'nagasawa/';
//     var nakama = 'nakama/';
//     var dakeuchi = 'dakeuchi/';
//     var sawajiri = 'sawajiri/';
//     var aragaki = 'aragaki/';
//     var amami = 'amami/';
//     var ayase = 'ayase/';
//     var aoi = 'aoi/';
//     var ueto = 'ueto/';
//     var kanno = 'kanno/';
//     var toda = 'toda/';
//     var hirosue = 'hirosue/'; 
//     var actress = [nagasawa, nakama, dakeuchi, sawajiri, aragaki, amami, ayase, aoi, ueto, kanno, toda, hirosue];

// function addary (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	picActress = actress[Math.floor(Math.random()*actress.length)];
// 	var beforeimgurl = firstUrl + picActress;
// 	var arr = new Array;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function nagasawa (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + nagasawa;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function nakama (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + nakama;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function dakeuchi (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + dakeuchi;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function sawajiri (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + sawajiri;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function aragaki (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + aragaki;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function ayase (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + ayase;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function ueto (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + ueto;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function kanno (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + kanno;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function toda (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + toda;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }
// function hirosue (){
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i -= 1) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
// 	var beforeimgurl = firstUrl + hirosue;
// 	for(var i = 0; i < imgurl.length; i++) {
// 		arr[i] = beforeimgurl + imgurl[i];
// 	}
// 	shuffle(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 		document.getElementsByClassName("img")[i].src = arr[i];
// 	}
// }

$(window).scroll(function() {


    // var firstUrl = './img/';
    // var nagasawa = 'nagasawa/';
    // var nakama = 'nagasawa/';
    // var dakeuchi = 'nagasawa/';
    // var sawajiri = 'nagasawa/';
    // var aragaki = 'nagasawa/';
    // var amami = 'nagasawa/';
    // var ayase = 'nagasawa/';
    // var aoi = 'nagasawa/';
    // var ueto = 'nagasawa/';
    // var kanno = 'nagasawa/';
    // var toda = 'nagasawa/';
    // var hirosue = 'nagasawa/'; 
    // picActress = actress[Math.floor(Math.random()*actress.length)];
    var addary = addary();
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          $(".container").append('<div class="grid"><h1></h1><div class="intro"><div class="intro_a intro_mar"><img class="img" src=""'+addary+'""><div class="info"><h1 id="tag7">#성공적</h1><i class=" icon-heart" aria-hidden="true"></i><h2>좋아요</h2></div></div><div class="intro_b intro_mar"><img class="img" src="img/h.jpg"><div class="info"><h1 id="tag8">#pussyLady</h1><i class=" icon-heart" aria-hidden="true"></i><h2>좋아요</h2></div></div><div class="intro_c intro_mar"><img class="img" src="img/i.jpg"> <div class="info"><h1 id="tag9">#MyHoney</h1><i class=" icon-heart" aria-hidden="true"></i><h2>좋아요</h2></div></div></div></div>');
    }
});

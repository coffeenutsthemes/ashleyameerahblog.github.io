// (C) ASHLEYAMEERAH 2016
var found=false;var current=[];var numunique=3;var count=0;var current=new Array(numunique);function getUnique(maxvalue){for(i=0;count<numunique;count++){found=false;var rndvalue=getRandom(maxvalue);var j=0;for(j=0;j<current.length;j++){if(current[j]==rndvalue){found=true;break;}}if(found){count--;}else{current[count]=rndvalue;}}}function getRandom(maxvalue){return Math.round(Math.random()*maxvalue);}function Photos(data){console.count([csbarray]);var csbarray=data.posts;getUnique(csbarray.length-1);if(i==csbarray.length-1){}var posts=[csbarray[current[0]],csbarray[current[1]],csbarray[current[2]]];for(var i=0;i<posts.length;i++){var url=posts[i]["url-with-slug"];var rText=posts[i]["photo-caption"]; li='<li><a target="_blank" href = "'+url+'"><img src = "'+posts[i]["photo-url-500"]+'" /></a> <br /> <div class="rcaption"><a target="_blank" href = "'+url+'">'+posts[i]["photo-caption"]+"</a></div></li>";$("#rancsb ul").append(li);}$("#rancsb");}var get_random=Math.floor(Math.random()*100000000); $(function(){$.getScript("http://ashleyameerah.tumblr.com/api/read/json?&num=50&type=photo&callback=Photos");});

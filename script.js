$(function(){
	$.getJSON("menu.json", function(data){
		var subnav = $("div").addClass("sidebar");
		subnav.append($("ul").addClass("subnav"));
		$.each(data.subnav, function(key, value){
			var li = $("li").addClass("subnavitem");
			var a = $("a").attr("href", value.link);
			var img = $("img").addClass("subnavitemimg max-width").attr("src", value.image);
			var div = $("div").addClass("subnavitemtext").text(value.titel);
			li.append(a);
			li.append(img);
			li.append(div);
			subnav.append(li);
		});
		$("sidebar-wrapper").append(subnav);
	});
});
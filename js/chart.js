var barwidth = 40;
var barheight = 20;
var svg;
var l;
var rects;

var topmargin = 65;
var leftmargin = 75;

var w = 640;
var h = 650;

var root = [];


var yearLabels = [{	label : '1990',	x : '1'}, {	label : '1991',	x : '2'}, {	label : '1992',	x : '3'}, {	label : '1993',	x : '4'}, {	label : '1994',	x : '5'}, {	label : '1995',	x : '6'}, {	label : '1996',	x : '7'}, {	label : '1997',	x : '8'}, {	label : '1998',	x : '9'}, {	label : '1999',	x : '10'}, {	label : '2000',	x : '11'}, {	label : '2001',	x : '12'}, {	label : '2002',	x : '13'}, {	label : '2003',	x : '14'}, {	label : '2004',	x : '15'}, {	label : '2005',	x : '16'}, {	label : '2006',	x : '17'}, {	label : '2007',	x : '18'}, {	label : '2008',	x : '19'}, {	label : '2009',	x : '20'}, {	label : '2010',	x : '21'}, {	label : '2011',	x : '22'}, {	label : '2012',	x : '23'}, {	label : '2013',	x : '24'}, {	label : '2014',	x : '25'}, {	label : '2015',	x : '26'}, {	label : '2016',	x : '27'}, {	label : '2017',	x : '28'}];

var monthLabels = [{	label : 'January',	x : '1'}, {	label : 'February',	x : '2'}, {	label : 'March',	x : '3'}, {	label : 'April',	x : '4'}, {	label : 'May',	x : '5'}, {	label : 'June',	x : '6'}, {	label : 'July',	x : '7'}, {	label : 'August',	x : '8'}, {	label : 'September',	x : '9'}, {	label : 'October',	x : '10'}, {	label : 'November',	x : '11'}, {	label : 'December',	x : '12'}, {	label : 'Annual',	x : '14'}];




fetchJSONFile("https://storage.googleapis.com/bls-data/08_bls.json", startup);

var selectElem = document.getElementById('placeselection');

selectElem.addEventListener('change', function(){
  d3it(selectElem.value);
});

/* description is in the name */
function fetchJSONFile(path, callback) {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();

}

function startup(data) {
  //assign to global
  root = data;
  
	svg = d3.select("#svgdiv").append("svg").attr("width", w).attr("height", h);

	l = svg.append("g");

	m = svg.append("g");
	n = svg.append("g");

	m.selectAll("text").data(yearLabels).enter().append("text").text(function(d) {
		return d.label;
	}).attr("x", function(d) {
		return leftmargin - 40;
	}).attr("y", function(d) {
		return (d.x * barheight) + topmargin - 7;
	}).attr("font-family", "sans-serif").attr("font-size", "10px").attr("fill", "black");

	n.selectAll("text").data(monthLabels).enter().append("text").text(function(d) {
		return d.label;
	}).attr("x", function(d) {
		return ((d.x * barwidth) + topmargin - 15);
	}).attr("y", function(d) {
		return (topmargin - 35);
	}).attr("font-family", "sans-serif").attr("font-size", "12px").attr("fill", "black").attr("text-anchor", "start").attr("transform", function(d) {
		return "rotate(-60 " + ((d.x * barwidth) + leftmargin) + "," + (topmargin - 20) + ")";
	});

  //initial load colorado
	d3it(document.getElementById('placeselection').value);

}

function d3it(data) {
  
  svg.selectAll("rect").remove()
  
  var county;
  
for(var i=0; i< root.length; i++){
  
  if(root[i].s===data){
    console.log(data);
    county=root[i].d;
  }
  
}
  
	//select rects
	var rect = l.selectAll("rect").data(county, key); //remove old data so state data doesn't persist for most recent month

	//create any new rect (will only run once at startup)
	rect.enter().append("rect").attr("x", calcx).attr("y", calcy).attr("width", barwidth).attr("height", barheight).attr("fill", fillcolor).attr("value", function(d) {
		return d.v;
	}).on("mouseover", function(d) {
		var xPosition = (parseFloat(d3.select(this).attr("x")) + 200);
		var yPosition = (parseFloat(d3.select(this).attr("y")) + 20);

		d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#dtitle").text(d3.select(this).attr("value") + "%");

		d3.select("#tooltip").classed("hidden", false);

	}).on("mouseout", function(d) {
		d3.select("#tooltip").classed("hidden", true);
	});
	;

	//update all rect
	// rect.transition().duration(500).attr("fill", fillcolor).each("end", function() {
	// 	d3.select(this).attr("value", function(d) {
	// 		return d.v;
	// 	});
	// });


}

var key = function(d) {
	return d.k;
};

function fillcolor(d) {
	var fillcolor = 'rgb(49, 54, 149)';
	var unem = parseFloat(d.v);
	if (unem > 2.99) {fillcolor = 'rgb(69, 117, 180)';}
	if (unem > 3.99) {fillcolor = 'rgb(116, 173, 209)';}
	if (unem > 4.99) {fillcolor = 'rgb(171, 217, 233)';}
	if (unem > 5.99) {fillcolor = 'rgb(224, 243, 248)';}
	if (unem > 6.99) {fillcolor = 'rgb(255, 255, 191)';}
	if (unem > 7.99) {fillcolor = 'rgb(254, 224, 144)';}
	if (unem > 8.99) {fillcolor = 'rgb(253, 174, 97)';}
	if (unem > 9.99) {fillcolor = 'rgb(244, 109, 67)';}
	if (unem > 10.99) {fillcolor = 'rgb(215, 48, 39)';}
	if (unem > 11.99) {fillcolor = 'rgb(165, 0, 38)';}
	return fillcolor;
}

function calcx(d) {

	var parsestring = d.k;
	var month = parsestring.substring(0, 3);

	var xpos;
	if (month == "Jan"){	xpos = 0;};
	if (month == "Feb"){	xpos = 40;};
	if (month == "Mar"){	xpos = 80;};
	if (month == "Apr"){	xpos = 120;};
	if (month == "May"){	xpos = 160;};
	if (month == "Jun"){	xpos = 200;};
	if (month == "Jul"){	xpos = 240;};
	if (month == "Aug"){	xpos = 280;};
	if (month == "Sep"){	xpos = 320;};
	if (month == "Oct"){	xpos = 360;};
	if (month == "Nov"){	xpos = 400;};
	if (month == "Dec"){	xpos = 440;};
	if (month == "Ann"){	xpos = 520;};

	return xpos + leftmargin;

}

function calcy(d) {

	var parsestring = d.k;
	var year = parsestring.substring(3, 7);

	var ypos;
	if (year == "1990"){ypos = 0;	};
	if (year == "1991"){ypos = 20;	};
	if (year == "1992"){ypos = 40;	};
	if (year == "1993"){ypos = 60;	};
	if (year == "1994"){ypos = 80;	};
	if (year == "1995"){ypos = 100;	};
	if (year == "1996"){ypos = 120;	};
	if (year == "1997"){ypos = 140;	};
	if (year == "1998"){ypos = 160;	};
	if (year == "1999"){ypos = 180;	};
	if (year == "2000"){ypos = 200;	};
	if (year == "2001"){ypos = 220;	};
	if (year == "2002"){ypos = 240;	};
	if (year == "2003"){ypos = 260;	};
	if (year == "2004"){ypos = 280;	};
	if (year == "2005"){ypos = 300;	};	
    if (year == "2006"){ypos = 320;	};
	if (year == "2007"){ypos = 340;	};
	if (year == "2008"){ypos = 360;	};
	if (year == "2009"){ypos = 380;	};
	if (year == "2010"){ypos = 400;	};
	if (year == "2011"){ypos = 420;	};
	if (year == "2012"){ypos = 440;	};
	if (year == "2013"){ypos = 460;	};
	if (year == "2014"){ypos = 480;	};
	if (year == "2015"){ypos = 500;	};
	if (year == "2016"){ypos = 520;	};
	if (year == "2017"){ypos = 540;	};
  
	return ypos + topmargin;

}



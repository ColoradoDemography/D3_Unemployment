var barwidth = 40;
var barheight = 20;
var svg;
var l;
var rects;

var topmargin = 75;
var leftmargin = 75;

var w = 640;
var h = 610;

var root = [];

var LAUST080000000000003 = [{"key":"Ann2005","value":"5.0"},{"key":"Dec2005","value":"4.7"},{"key":"Nov2005","value":"4.7"},{"key":"Oct2005","value":"4.4"},{"key":"Sep2005","value":"4.6"},{"key":"Aug2005","value":"4.7"},{"key":"Jul2005","value":"5.0"},{"key":"Jun2005","value":"5.2"},{"key":"May2005","value":"4.9"},{"key":"Apr2005","value":"5.1"},{"key":"Mar2005","value":"5.6"},{"key":"Feb2005","value":"5.7"},{"key":"Jan2005","value":"5.7"},{"key":"Ann2004","value":"5.5"},{"key":"Dec2004","value":"5.2"},{"key":"Nov2004","value":"5.2"},{"key":"Oct2004","value":"5.0"},{"key":"Sep2004","value":"5.0"},{"key":"Aug2004","value":"5.2"},{"key":"Jul2004","value":"5.4"},{"key":"Jun2004","value":"5.7"},{"key":"May2004","value":"5.3"},{"key":"Apr2004","value":"5.4"},{"key":"Mar2004","value":"6.0"},{"key":"Feb2004","value":"6.1"},{"key":"Jan2004","value":"6.3"},{"key":"Ann2003","value":"6.0"},{"key":"Dec2003","value":"5.7"},{"key":"Nov2003","value":"5.8"},{"key":"Oct2003","value":"5.6"},{"key":"Sep2003","value":"5.6"},{"key":"Aug2003","value":"5.8"},{"key":"Jul2003","value":"6.0"},{"key":"Jun2003","value":"6.3"},{"key":"May2003","value":"5.8"},{"key":"Apr2003","value":"5.9"},{"key":"Mar2003","value":"6.3"},{"key":"Feb2003","value":"6.3"},{"key":"Jan2003","value":"6.4"},{"key":"Ann2002","value":"5.5"},{"key":"Dec2002","value":"5.6"},{"key":"Nov2002","value":"5.6"},{"key":"Oct2002","value":"5.2"},{"key":"Sep2002","value":"5.3"},{"key":"Aug2002","value":"5.4"},{"key":"Jul2002","value":"5.5"},{"key":"Jun2002","value":"5.8"},{"key":"May2002","value":"5.2"},{"key":"Apr2002","value":"5.4"},{"key":"Mar2002","value":"5.8"},{"key":"Feb2002","value":"5.7"},{"key":"Jan2002","value":"5.9"},{"key":"Ann2001","value":"3.8"},{"key":"Dec2001","value":"5.1"},{"key":"Nov2001","value":"4.9"},{"key":"Oct2001","value":"4.3"},{"key":"Sep2001","value":"4.0"},{"key":"Aug2001","value":"4.0"},{"key":"Jul2001","value":"3.8"},{"key":"Jun2001","value":"3.7"},{"key":"May2001","value":"3.1"},{"key":"Apr2001","value":"3.0"},{"key":"Mar2001","value":"3.3"},{"key":"Feb2001","value":"3.2"},{"key":"Jan2001","value":"3.2"},{"key":"Ann2000","value":"2.8"},{"key":"Dec2000","value":"2.5"},{"key":"Nov2000","value":"2.6"},{"key":"Oct2000","value":"2.4"},{"key":"Sep2000","value":"2.6"},{"key":"Aug2000","value":"2.8"},{"key":"Jul2000","value":"2.9"},{"key":"Jun2000","value":"3.0"},{"key":"May2000","value":"2.5"},{"key":"Apr2000","value":"2.5"},{"key":"Mar2000","value":"3.0"},{"key":"Feb2000","value":"3.1"},{"key":"Jan2000","value":"3.2"},{"key":"Ann1999","value":"3.1"},{"key":"Dec1999","value":"2.7"},{"key":"Nov1999","value":"2.8"},{"key":"Oct1999","value":"2.7"},{"key":"Sep1999","value":"2.9"},{"key":"Aug1999","value":"3.0"},{"key":"Jul1999","value":"3.2"},{"key":"Jun1999","value":"3.4"},{"key":"May1999","value":"2.9"},{"key":"Apr1999","value":"3.0"},{"key":"Mar1999","value":"3.3"},{"key":"Feb1999","value":"3.4"},{"key":"Jan1999","value":"3.6"},{"key":"Ann1998","value":"3.6"},{"key":"Dec1998","value":"3.1"},{"key":"Nov1998","value":"3.3"},{"key":"Oct1998","value":"3.3"},{"key":"Sep1998","value":"3.5"},{"key":"Aug1998","value":"3.6"},{"key":"Jul1998","value":"3.8"},{"key":"Jun1998","value":"4.0"},{"key":"May1998","value":"3.6"},{"key":"Apr1998","value":"3.5"},{"key":"Mar1998","value":"4.0"},{"key":"Feb1998","value":"3.9"},{"key":"Jan1998","value":"4.0"},{"key":"Ann1997","value":"3.5"},{"key":"Dec1997","value":"3.2"},{"key":"Nov1997","value":"3.2"},{"key":"Oct1997","value":"2.9"},{"key":"Sep1997","value":"3.1"},{"key":"Aug1997","value":"3.2"},{"key":"Jul1997","value":"3.4"},{"key":"Jun1997","value":"3.7"},{"key":"May1997","value":"3.3"},{"key":"Apr1997","value":"3.3"},{"key":"Mar1997","value":"4.0"},{"key":"Feb1997","value":"4.0"},{"key":"Jan1997","value":"4.4"},{"key":"Ann1996","value":"4.2"},{"key":"Dec1996","value":"3.6"},{"key":"Nov1996","value":"3.8"},{"key":"Oct1996","value":"3.7"},{"key":"Sep1996","value":"3.9"},{"key":"Aug1996","value":"4.1"},{"key":"Jul1996","value":"4.5"},{"key":"Jun1996","value":"4.8"},{"key":"May1996","value":"4.3"},{"key":"Apr1996","value":"4.2"},{"key":"Mar1996","value":"4.6"},{"key":"Feb1996","value":"4.6"},{"key":"Jan1996","value":"4.8"},{"key":"Ann1995","value":"4.0"},{"key":"Dec1995","value":"3.9"},{"key":"Nov1995","value":"3.9"},{"key":"Oct1995","value":"3.7"},{"key":"Sep1995","value":"3.9"},{"key":"Aug1995","value":"4.0"},{"key":"Jul1995","value":"4.2"},{"key":"Jun1995","value":"4.4"},{"key":"May1995","value":"3.9"},{"key":"Apr1995","value":"3.9"},{"key":"Mar1995","value":"4.1"},{"key":"Feb1995","value":"4.1"},{"key":"Jan1995","value":"4.3"},{"key":"Ann1994","value":"4.2"},{"key":"Dec1994","value":"3.4"},{"key":"Nov1994","value":"3.5"},{"key":"Oct1994","value":"3.4"},{"key":"Sep1994","value":"3.6"},{"key":"Aug1994","value":"3.9"},{"key":"Jul1994","value":"4.2"},{"key":"Jun1994","value":"4.6"},{"key":"May1994","value":"4.2"},{"key":"Apr1994","value":"4.5"},{"key":"Mar1994","value":"5.2"},{"key":"Feb1994","value":"5.2"},{"key":"Jan1994","value":"5.4"},{"key":"Ann1993","value":"5.3"},{"key":"Dec1993","value":"4.4"},{"key":"Nov1993","value":"4.5"},{"key":"Oct1993","value":"4.4"},{"key":"Sep1993","value":"4.6"},{"key":"Aug1993","value":"4.8"},{"key":"Jul1993","value":"5.1"},{"key":"Jun1993","value":"5.7"},{"key":"May1993","value":"5.3"},{"key":"Apr1993","value":"5.5"},{"key":"Mar1993","value":"6.2"},{"key":"Feb1993","value":"6.5"},{"key":"Jan1993","value":"6.8"},{"key":"Ann1992","value":"6.0"},{"key":"Dec1992","value":"6.0"},{"key":"Nov1992","value":"5.8"},{"key":"Oct1992","value":"5.4"},{"key":"Sep1992","value":"5.6"},{"key":"Aug1992","value":"5.7"},{"key":"Jul1992","value":"5.9"},{"key":"Jun1992","value":"6.4"},{"key":"May1992","value":"5.9"},{"key":"Apr1992","value":"5.8"},{"key":"Mar1992","value":"6.5"},{"key":"Feb1992","value":"6.4"},{"key":"Jan1992","value":"6.5"},{"key":"Ann1991","value":"5.3"},{"key":"Dec1991","value":"5.5"},{"key":"Nov1991","value":"5.3"},{"key":"Oct1991","value":"4.9"},{"key":"Sep1991","value":"4.9"},{"key":"Aug1991","value":"4.9"},{"key":"Jul1991","value":"5.1"},{"key":"Jun1991","value":"5.4"},{"key":"May1991","value":"4.9"},{"key":"Apr1991","value":"4.9"},{"key":"Mar1991","value":"5.6"},{"key":"Feb1991","value":"5.7"},{"key":"Jan1991","value":"5.8"},{"key":"Ann1990","value":"5.2"},{"key":"Dec1990","value":"4.9"},{"key":"Nov1990","value":"4.9"},{"key":"Oct1990","value":"4.6"},{"key":"Sep1990","value":"4.8"},{"key":"Aug1990","value":"4.8"},{"key":"Jul1990","value":"5.0"},{"key":"Jun1990","value":"5.5"},{"key":"May1990","value":"5.1"},{"key":"Apr1990","value":"5.2"},{"key":"Mar1990","value":"5.8"},{"key":"Feb1990","value":"5.9"},{"key":"Jan1990","value":"6.2"},{"key":"Mar2015","value":"4.5"},{"key":"Feb2015","value":"4.7"},{"key":"Jan2015","value":"4.7"},{"key":"Ann2014","value":"5.0"},{"key":"Dec2014","value":"4.1"},{"key":"Nov2014","value":"4.1"},{"key":"Oct2014","value":"4.0"},{"key":"Sep2014","value":"4.1"},{"key":"Aug2014","value":"4.6"},{"key":"Jul2014","value":"4.9"},{"key":"Jun2014","value":"5.1"},{"key":"May2014","value":"5.0"},{"key":"Apr2014","value":"5.4"},{"key":"Mar2014","value":"6.1"},{"key":"Feb2014","value":"6.3"},{"key":"Jan2014","value":"6.4"},{"key":"Ann2013","value":"6.8"},{"key":"Dec2013","value":"5.9"},{"key":"Nov2013","value":"6.0"},{"key":"Oct2013","value":"6.0"},{"key":"Sep2013","value":"6.1"},{"key":"Aug2013","value":"6.5"},{"key":"Jul2013","value":"6.9"},{"key":"Jun2013","value":"7.3"},{"key":"May2013","value":"6.8"},{"key":"Apr2013","value":"6.8"},{"key":"Mar2013","value":"7.5"},{"key":"Feb2013","value":"7.8"},{"key":"Jan2013","value":"8.0"},{"key":"Ann2012","value":"7.8"},{"key":"Dec2012","value":"7.3"},{"key":"Nov2012","value":"7.2"},{"key":"Oct2012","value":"7.1"},{"key":"Sep2012","value":"7.2"},{"key":"Aug2012","value":"7.6"},{"key":"Jul2012","value":"7.8"},{"key":"Jun2012","value":"8.2"},{"key":"May2012","value":"7.7"},{"key":"Apr2012","value":"7.8"},{"key":"Mar2012","value":"8.5"},{"key":"Feb2012","value":"8.5"},{"key":"Jan2012","value":"8.5"},{"key":"Ann2011","value":"8.3"},{"key":"Dec2011","value":"8.0"},{"key":"Nov2011","value":"7.9"},{"key":"Oct2011","value":"7.8"},{"key":"Sep2011","value":"7.8"},{"key":"Aug2011","value":"8.0"},{"key":"Jul2011","value":"8.1"},{"key":"Jun2011","value":"8.3"},{"key":"May2011","value":"8.4"},{"key":"Apr2011","value":"8.2"},{"key":"Mar2011","value":"8.9"},{"key":"Feb2011","value":"9.0"},{"key":"Jan2011","value":"9.1"},{"key":"Ann2010","value":"8.7"},{"key":"Dec2010","value":"8.8"},{"key":"Nov2010","value":"8.9"},{"key":"Oct2010","value":"8.4"},{"key":"Sep2010","value":"8.4"},{"key":"Aug2010","value":"8.6"},{"key":"Jul2010","value":"8.8"},{"key":"Jun2010","value":"8.9"},{"key":"May2010","value":"8.5"},{"key":"Apr2010","value":"8.5"},{"key":"Mar2010","value":"9.1"},{"key":"Feb2010","value":"8.9"},{"key":"Jan2010","value":"8.9"},{"key":"Ann2009","value":"7.3"},{"key":"Dec2009","value":"8.0"},{"key":"Nov2009","value":"7.7"},{"key":"Oct2009","value":"7.4"},{"key":"Sep2009","value":"7.3"},{"key":"Aug2009","value":"7.4"},{"key":"Jul2009","value":"7.5"},{"key":"Jun2009","value":"7.7"},{"key":"May2009","value":"7.0"},{"key":"Apr2009","value":"6.8"},{"key":"Mar2009","value":"7.1"},{"key":"Feb2009","value":"6.9"},{"key":"Jan2009","value":"6.6"},{"key":"Ann2008","value":"4.8"},{"key":"Dec2008","value":"5.6"},{"key":"Nov2008","value":"5.3"},{"key":"Oct2008","value":"5.0"},{"key":"Sep2008","value":"4.9"},{"key":"Aug2008","value":"4.9"},{"key":"Jul2008","value":"5.0"},{"key":"Jun2008","value":"4.9"},{"key":"May2008","value":"4.3"},{"key":"Apr2008","value":"4.2"},{"key":"Mar2008","value":"4.6"},{"key":"Feb2008","value":"4.6"},{"key":"Jan2008","value":"4.6"},{"key":"Ann2007","value":"3.7"},{"key":"Dec2007","value":"4.0"},{"key":"Nov2007","value":"3.8"},{"key":"Oct2007","value":"3.5"},{"key":"Sep2007","value":"3.5"},{"key":"Aug2007","value":"3.6"},{"key":"Jul2007","value":"3.7"},{"key":"Jun2007","value":"3.8"},{"key":"May2007","value":"3.3"},{"key":"Apr2007","value":"3.4"},{"key":"Mar2007","value":"3.8"},{"key":"Feb2007","value":"4.1"},{"key":"Jan2007","value":"4.3"},{"key":"Ann2006","value":"4.3"},{"key":"Dec2006","value":"3.7"},{"key":"Nov2006","value":"3.8"},{"key":"Oct2006","value":"3.6"},{"key":"Sep2006","value":"3.9"},{"key":"Aug2006","value":"4.2"},{"key":"Jul2006","value":"4.4"},{"key":"Jun2006","value":"4.6"},{"key":"May2006","value":"4.3"},{"key":"Apr2006","value":"4.4"},{"key":"Mar2006","value":"4.8"},{"key":"Feb2006","value":"4.9"},{"key":"Jan2006","value":"5.1"}];

var yearLabels = [{
	label : '1990',
	x : '1'
}, {
	label : '1991',
	x : '2'
}, {
	label : '1992',
	x : '3'
}, {
	label : '1993',
	x : '4'
}, {
	label : '1994',
	x : '5'
}, {
	label : '1995',
	x : '6'
}, {
	label : '1996',
	x : '7'
}, {
	label : '1997',
	x : '8'
}, {
	label : '1998',
	x : '9'
}, {
	label : '1999',
	x : '10'
}, {
	label : '2000',
	x : '11'
}, {
	label : '2001',
	x : '12'
}, {
	label : '2002',
	x : '13'
}, {
	label : '2003',
	x : '14'
}, {
	label : '2004',
	x : '15'
}, {
	label : '2005',
	x : '16'
}, {
	label : '2006',
	x : '17'
}, {
	label : '2007',
	x : '18'
}, {
	label : '2008',
	x : '19'
}, {
	label : '2009',
	x : '20'
}, {
	label : '2010',
	x : '21'
}, {
	label : '2011',
	x : '22'
}, {
	label : '2012',
	x : '23'
}, {
	label : '2013',
	x : '24'
}, {
	label : '2014',
	x : '25'
}, {
	label : '2015',
	x : '26'
}];

var monthLabels = [{
	label : 'January',
	x : '1'
}, {
	label : 'February',
	x : '2'
}, {
	label : 'March',
	x : '3'
}, {
	label : 'April',
	x : '4'
}, {
	label : 'May',
	x : '5'
}, {
	label : 'June',
	x : '6'
}, {
	label : 'July',
	x : '7'
}, {
	label : 'August',
	x : '8'
}, {
	label : 'September',
	x : '9'
}, {
	label : 'October',
	x : '10'
}, {
	label : 'November',
	x : '11'
}, {
	label : 'December',
	x : '12'
}, {
	label : 'Annual',
	x : '14'
}];

function myFunction() {
  

  function loadplace(code){
    var test;
    
try {
     test = eval(code);
  d3it(test);
} catch (e) {
  //variable is undefined.  load javascript file containing value.
    for(var i=0;i<directory.length;i=i+1){
      if(directory[i].value===code){
        var fname="file"+directory[i].file+".js";
        $.getScript( "https://s3-us-west-2.amazonaws.com/blsjson/"+fname, function( data, textStatus, jqxhr ) {
          test = eval(code);
          d3it(test);
        });
        
      }
    }

}
    
    
      
  }
  
  
    $("#tags").autocomplete({
        source: directory,
      autoFocus: true,
      delay: 500,
      minLength: 4,
        focus: function (event, ui) {
            event.preventDefault();
            $("#tags").val(ui.item.label);
        },
        select: function (event, ui) {
            event.preventDefault();
            //on select
            $("#tags").val(ui.item.label);
          
            loadplace(ui.item.value);
          
        }
    });
  

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
		return ((d.x * barwidth) + topmargin - 23);
	}).attr("y", function(d) {
		return (topmargin - 35);
	}).attr("font-family", "sans-serif").attr("font-size", "12px").attr("fill", "black").attr("text-anchor", "start").attr("transform", function(d) {
		return "rotate(-60 " + ((d.x * barwidth) + leftmargin) + "," + (topmargin - 20) + ")";
	});

  //initial load colorado
	d3it(LAUST080000000000003);

}

function d3it(county) {

	root = county;

	//select rects
	var rect = l.selectAll("rect").data(root, key);

	//create any new rect (will only run once at startup)
	rect.enter().append("rect").attr("x", calcx).attr("y", calcy).attr("width", barwidth).attr("height", barheight).attr("fill", fillcolor).attr("value", function(d) {
		return d.value;
	}).on("mouseover", function(d) {
		var xPosition = (parseFloat(d3.select(this).attr("x")) + 310);
		var yPosition = (parseFloat(d3.select(this).attr("y")) + 50);

		d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#dtitle").text(d3.select(this).attr("value") + "%");

		d3.select("#tooltip").classed("hidden", false);

	}).on("mouseout", function(d) {
		d3.select("#tooltip").classed("hidden", true);
	});
	;

	//update all rect
	rect.transition().duration(500).attr("fill", fillcolor).each("end", function() {
		d3.select(this).attr("value", function(d) {
			return d.value;
		});
	});

	//no exit selection

}

var key = function(d) {
	return d.key;
};

function fillcolor(d) {

	var fillcolor = 'rgb(49, 54, 149)';
	var unem = parseFloat(d.value);


	if (unem > 2.99) {
		fillcolor = 'rgb(69, 117, 180)';
	}
	if (unem > 3.99) {
		fillcolor = 'rgb(116, 173, 209)';
	}
	if (unem > 4.99) {
		fillcolor = 'rgb(171, 217, 233)';
	}
	if (unem > 5.99) {
		fillcolor = 'rgb(224, 243, 248)';
	}
	if (unem > 6.99) {
		fillcolor = 'rgb(255, 255, 191)';
	}
	if (unem > 7.99) {
		fillcolor = 'rgb(254, 224, 144)';
	}
	if (unem > 8.99) {
		fillcolor = 'rgb(253, 174, 97)';
	}
	if (unem > 9.99) {
		fillcolor = 'rgb(244, 109, 67)';
	}
	if (unem > 10.99) {
		fillcolor = 'rgb(215, 48, 39)';
	}
	if (unem > 11.99) {
		fillcolor = 'rgb(165, 0, 38)';
	}

	return fillcolor;

}

function calcx(d) {

	var parsestring = d.key;
	var month = parsestring.substring(0, 3);

	var xpos;
	if (month == "Jan") {
		xpos = 0;
	};
	if (month == "Feb") {
		xpos = 40;
	};
	if (month == "Mar") {
		xpos = 80;
	};
	if (month == "Apr") {
		xpos = 120;
	};
	if (month == "May") {
		xpos = 160;
	};
	if (month == "Jun") {
		xpos = 200;
	};
	if (month == "Jul") {
		xpos = 240;
	};
	if (month == "Aug") {
		xpos = 280;
	};
	if (month == "Sep") {
		xpos = 320;
	};
	if (month == "Oct") {
		xpos = 360;
	};
	if (month == "Nov") {
		xpos = 400;
	};
	if (month == "Dec") {
		xpos = 440;
	};
	if (month == "Ann") {
		xpos = 520;
	};

	return xpos + leftmargin;

}

function calcy(d) {

	var parsestring = d.key;
	var year = parsestring.substring(3, 7);

	var ypos;
	if (year == "1990") {
		ypos = 0;
	};
	if (year == "1991") {
		ypos = 20;
	};
	if (year == "1992") {
		ypos = 40;
	};
	if (year == "1993") {
		ypos = 60;
	};
	if (year == "1994") {
		ypos = 80;
	};
	if (year == "1995") {
		ypos = 100;
	};
	if (year == "1996") {
		ypos = 120;
	};
	if (year == "1997") {
		ypos = 140;
	};
	if (year == "1998") {
		ypos = 160;
	};
	if (year == "1999") {
		ypos = 180;
	};
	if (year == "2000") {
		ypos = 200;
	};
	if (year == "2001") {
		ypos = 220;
	};
	if (year == "2002") {
		ypos = 240;
	};
	if (year == "2003") {
		ypos = 260;
	};
	if (year == "2004") {
		ypos = 280;
	};
	if (year == "2005") {
		ypos = 300;
	};
	if (year == "2006") {
		ypos = 320;
	};
	if (year == "2007") {
		ypos = 340;
	};
	if (year == "2008") {
		ypos = 360;
	};
	if (year == "2009") {
		ypos = 380;
	};
	if (year == "2010") {
		ypos = 400;
	};
	if (year == "2011") {
		ypos = 420;
	};
	if (year == "2012") {
		ypos = 440;
	};
	if (year == "2013") {
		ypos = 460;
	}
	if (year == "2014") {
		ypos = 480;
	};
	if (year == "2015") {
		ypos = 500;
	};
  
	return ypos + topmargin;

}

function commafy(nStr) {
	var x, x1, x2, rgx;

	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}


function loadjsfile(filename){

        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)

}
 


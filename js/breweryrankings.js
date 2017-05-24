// Credit: this code was adapted from Jim Vallandingham's census bump chart at http://vallandingham.me/census_bump/, and is licensed under the MIT license. 
//
// This version omits zoom functions, opting instead for a responsive chart with widths calculated as a function of the chart's containing element width.
//
// It also calculates rankings from a CSV file of raw data (with a slice and sort loop in the prepareData function).  
// 
// The MIT License (MIT)
// 
// Copyright (c) 2015 Jim Vallandingham
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


var w, h, pillWidth,pillHeight,pillSpace,yearSpace;
var drawn;
var years, breweries;
var sorted = {}, rankings = [], totals = [], shipyard =[], allagash=[];
var cutoff = 25 //to display the top 10; change this variable to display the top 20,40, etc.
var pillMap;
var data = [];
var aspect = 0;
var margin = {top: 100, right: 80, bottom: 80, left: 85};
var width;
var height;
var highlighting = false;
var svg, g, rankLabels, yaxis, defs;

function prepareData(rawData) {

  years = Object.keys(rawData[0]),
  b = years.pop();

  totals = Array.apply(null, Array(years.length)).map(function (i) { return 0; })
  
  //display fewer year columns for smaller screens 
  if (w < 500) {years = years.slice(4);}

  for (var i = years.length - 1; i >= 0; i--) {
    var y = years[i]; 
    sorted[y] = rawData.slice().sort(function(a,b) { 
      return b[y]-a[y];
    });
  };
  
  for (var i = rawData.length - 1; i >= 0; i--) {
    var brewery = rawData[i].name;
    rankings[i] = { 'name' : brewery };

    for (var j = years.length - 1; j >= 0; j--) {
      var y = years[j];
      var thisYearRankings = sorted[y];
      
      rankings[i][y] = (rawData[i][y] > 0) ? thisYearRankings.indexOf(rawData[i]) + 1 : null;

      totals[j] += +rawData[i][y];
    }
  };
  
  for (var i = rawData.length - 1; i >= 0; i--) {
    var d = rawData[i];
    years.forEach(function(y) {
      d[y] = +d[y];
    });
  };
    
  pillTypes.map( d => { 
    var i = pillTypes.indexOf(d); 
    if (rawData[i]) { d.id = (rawData[i]['name']).replace(/\s|'|\./g, ''); return d; } 
  });

  pillMap = d3.map(pillTypes, function(d) {return d.id;});
  
  return rankings;
}

function createLinks(data) {
  var links = [];
  data.forEach(function(d) {
    for(var i = 1; i < years.length; i++) {
      var o = {id : (d.name).replace(/\s|'|\./g, ''), name: d.name, start: d[years[i-1]], end:  d[years[i]], gap:i}
      links.push(o);
    }
  });

  return links.filter(function(l) { return l.start > 0 && l.end > 0 && l.start <= cutoff && l.end <= cutoff; });
}

function getCityTitles(data) {
  midLabels = [];
  // data array includes name, ranking for each year
  
  data.forEach(function(d) {
    for(var i = 1; i < years.length-1; i++) {
      var y = years[i], lastyear = years[i-1], nextyear = years[i+1];
      if (d[y] && (d[y] <= cutoff) && ((d[lastyear] > cutoff || !d[lastyear]) || (d[nextyear] > cutoff || !d[nextyear] ))) { 
        // brewery is above the cutoff ranking this year, but wasn't last year.
        midLabels.push({id: d.name, x: i, rank: d[y] }); 
      }
      else continue;
    }

  });
  // return an array of breweries whose rank is >=10 AND whose prior year rank was < 10 (or null) OR whose next year rank is < 10 (or null)
  return midLabels;
}

function splitName(d) {
  var a = d.split(" ");
  var lastline = "", s = " ";
  
  if (a.length>1) {
    for (var i = 1; i < a.length; i++) {
     lastline += s + a[i];
    };
    return [a[0], lastline];
  } else {return a;}
}

function getStartCities(data) {
  var startIds = data
    .filter(function(d) { return d[years[0]] > 0; })
    .map(function(d) {  return {'id': (d.name).replace(/\s|'|\./g, ''), 'name' : d.name, 'rank': d[years[0]] } });

  return startIds;
}

function getEndCities(data) {
  var index = years.length - 1;
  var endIds = data
    .filter(function(d) { return d[years[index]] > 0; })
    .map(function(d) {  return {'id': (d.name).replace(/\s|'|\./g, ''), 'name' : d.name, 'rank': d[years[index]] } });

  return endIds;
}

function resize() {
  var p = svg.node().parentNode;
  var targetWidth = +d3.select(p).style("width").replace("px","");

  svg.attr("width", targetWidth);
  svg.attr("height", targetWidth / aspect);
}

function mouseover(d,i) {
  highlighting = true; 

  var offset = jQuery('#vis').offset().left;
  // console.log(x0);

  var x0 = d3.event.pageX - margin.left - offset;
  var x_year = Math.floor(x0 * (years.length) / w);

  defs.selectAll(".pill")
    .classed("highlight", function() {return d3.select(this).attr("id") === d.id;})
    .classed("unhighlight", function(e) {return e.id !== d.id; });
  g.selectAll(".link")
    .classed("highlight", function(e) {return e.id === d.id; })
    .classed("unhighlight", function(e) {return e.id !== d.id; });
  g.selectAll(".start-city")
    .classed("hidden", false)
    .classed("highlight", function(e) {return e.id === d.id; })
    .classed("unhighlight", function(e) {return e.id !== d.id; });
  g.selectAll(".end-city")
    .classed("highlight", function(e) {return e.id === d.id; })
    .classed("unhighlight", function(e) {return e.id !== d.id; });
  d3.select("g.rankaxis").classed("hidden", false);
  d3.select("g.rankaxis")
    .transition().duration(200)
    .attr('transform',
      'translate(' + 
      ( (x0 > w/years.length) ? 
          (pillWidth + yearSpace) * x_year - yearSpace/2
        : (pillWidth + yearSpace) * (x_year+1) - yearSpace/2
      ) 
      + ',0)')
}

function mouseout(d,i) {
  highlighting = false;
  defs.selectAll(".pill").classed("highlight", false);
  defs.selectAll(".pill").classed("unhighlight", false);
  g.selectAll(".link").classed("highlight", false);
  g.selectAll(".link").classed("unhighlight", false);
  g.selectAll(".start-city").classed("highlight", false).classed("hidden", true)
  g.selectAll(".start-city").classed("unhighlight", false);
  g.select("g.rankaxis").classed("hidden", true);
}


$(document).ready(function() {

  queue()
    .defer(d3.csv, "http://specialprojects.pressherald.com/topojson/data/breweryvolume.csv")
    .await(display);

  function display(error, d) {
    if (!drawn) {
    // w = $("#vis").innerWidth();
    var bumpchart = d3.select("#vis");

    var linechart = d3.select("#linechart");

    w = d3.select(".container").node().getBoundingClientRect().width;
    if (w<500) { margin.left = 60; margin.right = 60;}

    data = prepareData(d);

    var yearWidth = (w-margin.left - margin.right)/years.length;
    pillWidth = yearWidth * 0.65;
    pillHeight = (w < 500) ? pillWidth / 1.8 : pillWidth / 2.8 ;
    pillSpace = pillHeight * 2 + 6;
    yearSpace = yearWidth * 0.25;

    var links = createLinks(data);
    var cityTitles = getCityTitles(data);
    var startCities = getStartCities(data);
    var endCities = getEndCities(data);
    
    svg = bumpchart.append("svg");

    var parseYear = d3.timeParse("%Y");

    w = (pillWidth + yearSpace) * years.length;
    height = (pillHeight + pillSpace) * 50;
    jQuery('#vis').height(height);

    svg
      .attr("width", w + margin.left + margin.right )
      .attr("height", height + margin.top + margin.bottom )
      .attr("viewBox", "0 0 " + (w + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
      .attr("preserveAspectRatio", "xMidYMid");


    aspect = (w + margin.left + margin.right) / (height + margin.left + margin.right);
 
    defs = svg.append("defs");

    var pill = defs.append("clipPath")
      .attr("id", "pill")
      .append("path")
      .attr("d", pillPath(pillWidth, pillHeight));

    g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    drawn = true;

    var startlabels = g.append('g')
      .attr('class','titles').attr('id','lefttitles')
      .selectAll("text.titles")
      .data(startCities.filter(function(d) { return (d.rank <= cutoff && d.rank > 0); }) )
      .enter()
      .append("text")
      .attr("class", "title city-title start-city hidden")
      .attr("x", 0)
      .attr("dx", -2)
      .attr('text-anchor','end')
      .attr("y", function(d,i) { return (pillHeight + pillSpace) * (d.rank - 1) + pillHeight/2 ; })
      .attr("dy", function(d) { return (d.name.split(" ").length > 1) ?  0 : pillHeight })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

    startlabels.selectAll("tspan")
      .data(function(d) {return d.name.split(" "); })
      .enter().append("tspan")
      .text(function(d) { return d; })
      .attr('x',-2)
      .attr('dy', function(d,i) { return (i) + "em";});

    var endlabels = g.append('g')
      .attr('class','titles').attr('id','righttitles')
      .attr('transform',"translate(" + w + ",0)")
      .selectAll("text.titles")
      .data(endCities.filter(function(d) { return (d.rank <= cutoff && d.rank > 0); }) )
      .enter()
      .append("text")
      .attr("class", "title city-title end-city")
      .attr("dx", 2)
      .attr('text-anchor','start')
      .attr("y", function(d,i) { return (pillHeight + pillSpace) * (d.rank - 1) + pillHeight/2 ; })
      .attr("dy", function(d) { return (d.name.split(" ").length > 1) ?  0 : pillHeight })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

    endlabels.selectAll("tspan")
      .data(function(d) {return splitName(d.name); })
      .enter().append("tspan")
      .text(function(d) { return d; })
      .attr('x', 0)
      .attr('dy', function(d,i) { return (i) + "em";});
      
    var defpills = defs.selectAll("pill")
      .data(pillTypes)
      .enter()
      .append("g")
      .attr("id", function(d) { if (d.id) { return (d.id).replace(/\s|'|\./g, ''); } else {return null; } })
      .attr("class", "pill");

    defpills.append("g").attr("clip-path", "url(#pill)")
      .each(function(d,i) {
        d3.select(this).call(d.func, pillWidth, pillHeight, d.opts);
      });

    defpills.append("path")
      .attr("class", "pill-outline")
      .attr("d", pillPath(pillWidth, pillHeight));

    var areaGradients = defs.selectAll("linearGradient")
      .data(pillTypes.filter(function(d) { return d.opts.gradient; }))
      .enter().append("linearGradient")
      .attr("id", function(d) {return d.opts.colors[0].substr(1,6) + "-gradient" ; })
      .attr("x1", "0%").attr("y1", "0%")
      .attr("x2", "100%").attr("y2", "100%");

    areaGradients.selectAll("stop")
      .data(function(d) { return d.opts.colors; })
      .enter().append('stop')
      .attr('stop-color', function(d) {return d;} )
      .attr('offset', function(d,i) {return (i * 100) + "%";} );

    g.append('g').attr('class','links').selectAll("links").data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("x1", function(d,i) { return ((pillWidth + yearSpace) * d.gap) - (yearSpace ); })
      .attr("y1", function(d,i) { return (pillHeight + pillSpace) * (d.start - 1) + (pillHeight / 2); })
      .attr("x2", function(d,i) { return ((pillWidth + yearSpace) * d.gap); })
      .attr("y2", function(d,i) { return (pillHeight + pillSpace) * (d.end - 1) + (pillHeight / 2); });

    var year = g.append("g")
      .attr("id","yeargroups")
      .selectAll("g.year")
      .data(years)  // keys of the years from the csv file
      .enter()
      .append("g")
      .attr("class", "year")
      .attr("transform", function(d,i) { return "translate(" + ((pillWidth + yearSpace) * i) + ",0)";  });

    year.append("text")
      .attr("class", "title year-title")
      .attr("text-anchor", "middle")
      .attr("y", pillWidth / 2)
      .attr("dy", "0.5em")
      .attr('x', pillHeight * 2)
      .attr("transform","rotate(-90)")
      .text(function(d) { return d; });

    year.selectAll("pill-use")
      .data(function(y) {
        return data.map(function(d) {
          return {"id": (d.name).replace(/\s|'|\./g, ''), "value":d[y]};
        }).filter(function(d) { return (d.value <= cutoff && d.value > 0); });
      })
      .enter()
      .append("use")
      .attr("xlink:href", function(d) { return "#" + (d.id).replace(/\s|'|\./g, '');})
      .attr("class", "pill-use")
      .attr("name", function(d) {return d.id;})
      .attr("transform", function(d,i) {
        return "translate(0," + (d.value - 1) * (pillHeight + pillSpace) + ")";
      })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

    var middleTitles = g.append('g').attr('id',"middleTitles")
      .selectAll("end-title")
      .data(cityTitles)
      .enter().append("text")
      .attr("class", "title mid-title")
      .attr("transform", function(d,i) {
        var x = ((pillWidth + yearSpace) * d.x + pillWidth/2);
        var y = d.rank * (pillHeight + pillSpace) - pillSpace;
        return "translate(" + x + "," + y + ")";
      })
      .attr("text-anchor", "middle")
      // .attr("dx", pillWidth / 2)
      .attr("dy", -1 * (pillHeight - 1))
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

    middleTitles.selectAll('tspan')
      .data(function(d) { return splitName(d.id); })
      .enter().append('tspan')
      .attr('x',0)
      .attr('dy', function(d,i) { return (1+i*0.25) + "em";})
      .text(function(d) { return d; });

    var rankaxis = g.append('g').attr('class','rankaxis')
      .attr('transform', 'translate('+ (-yearSpace/2-14 ) + ',0)');

    var rankings = Array.from(Array(cutoff).keys());

    rankLabels = rankaxis.selectAll('g.rankBadges')
      .data(rankings)
      .enter().append('g').attr('class','rankBadges')
      .attr('transform', function(d) { 
        return 'translate(0,'+ (d * (pillHeight + pillSpace) + pillHeight/2) + ')' 
      });


    var radius = (w<600) ? 10 : 14;

    rankLabels.append('circle').attr('r', radius);
    rankLabels.append('text')
      .attr('text-anchor','middle')
      .attr('class','ranklabel')
      .attr('dy', 4)
      .text(function(d) {return '#' + (d+1);});

    d3.select(window).on('resize', resize);
    
    }
  }

});

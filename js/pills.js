var pillTypes = [ 
    {func:twoColorGradient, opts: {colors: ["#ffb70a","#b60900"], gradient: true} },
    {func:twoColor, opts: {colors:["#222","#e22"]}},
    {func:twoColor, opts: {colors:["#E9D19E","#C0B295"]}},
    {func:twoColor, opts: {colors:["#29464c","#807F5B"]}},
    {func:twoColorVert, opts: {colors:["#A6906D","#D5A97C"]}},
    {func:doubleStripe, opts: {colors:["#ffeda0", "#f03b20"], width: 0.1, dist: 0.1}},
    {func:oneColor, opts: {colors:["#A6906D"]}},
    {func:bigX, opts: {colors:["#fa4616","#333"],width: 0.75}},
    {func:oneColor, opts: {colors:["#008080"]}},
    {func:midStripe, opts: {colors:["#787658","#C28D5E"], width:0.3}},
    {func:twoColor, opts: {colors:["#A6AEA3","#222"]}},
    {func:oneColor, opts: {colors:["#7A7957"]}},
    {func:twoColorGradient, opts: {colors: ["#000","#050"], gradient: true} },
    {func:twoColorGradient, opts: {colors: ["#39df43","#fff50a"], gradient: true} },
    {func:twoColorGradient, opts: {colors: ["#f10aff","#1f0aff"], gradient: true} },
    {func:littleSquares, opts: {colors:["#67522c", "#ddd"]}},
    {func:longStripe, opts: {colors:["#fdbb84","#e34a33"], width: 1.0}},  // Gritty's Portland
    {func:bigTri, opts: {colors:["#BFB395", "#E2CB8D"]}},
    {func:littleSquares, opts: {colors:["#f03b20", "#555"]}},
    {func:midFlag, opts: {colors:["#ABB5A5", "#E5C98F"], width:0.25, skew:6}},
    {func:midFlag, opts: {colors:["#e5e5d3", "#f00"], width:0.25, skew:30}},    //DL Geary
    {func:twoColor, opts: {colors:["#82815C","#C99562"]}},
    {func:twoColorVert, opts: {colors:["#D1A577","#A7916E"]}},
    {func:oneColor, opts: {colors:["#C1B496"]}},
    {func:twoColor, opts: {colors:["#AA9570","#D3AE99"]}},
    {func:twoColorVert, opts: {colors:["#D5A87B","#BAAD91"]}},
    {func:twoColorDiagRev, opts: {colors:["#FF4500",'#fff'],width:0.2}},
    {func:midStripe, opts: {colors:["#45A2D6",'#fff'],width:0.2}},
    {func:twoColorDiag, opts: {colors:["#9C9385","#D6AA7A"]}},
    {func:doubleStripe, opts: {colors:["#D1A575","#A8AD86"], width:0.08, dist:0.08}},
    {func:midStripe, opts: {colors:["#b3d4fc", "#e44"], width: 0.5}},
    {func:twoColorDiag, opts: {colors:["#A6A87E","#998F82"]}},
    {func:twoColorDiagRev, opts: {colors:["#fdbb84","#e34a33"], width:0.2}},
    {func:twoHooks, opts: {colors:["#e34a33","#fdbb84"], width:0.4}},
    {func:midStripe, opts: {colors:["#D7AB97","#A0AB9D"], width:0.2, offset:2}},
    {func:bigTri, opts: {colors:["#808F7B", "#D4AC92"]}},
    {func:longStripe, opts: {colors:["#ba4e47","#fee8c8"], width:1.5}},
    {func:doubleStripe, opts: {colors:["#E3C78D","#D2A98F"], width:0.1, dist:0.0}},
    {func:twoColorGradient, opts: {colors:["#fff","#756bb1"], gradient:true} },
    {func:doubleStripe, opts: {colors:["#fff", "#928C7D"], width:0.1, dist:0.2}},
    {func:doubleFlag, opts: {colors:["#ddd", "#f5A7a7"], width:0.08, dist:0.3}},
    {func:doubleStripe, opts: {colors:["#2c7fb8","#ddd"], width:0.2, dist:0.1}},
    {func:twoColorVert, opts: {colors:["#888","#22d"]}},
    {func:doubleStripe, opts: {colors:["#A38D6A","#9FADA0"], width:0.15, dist:-0.07}},
    {func:oneColor, opts: {colors:["#7C7B5A"]}},
    {func:doubleStripe, opts: {colors:["#948E81","#E0C68C"], width:0.15, dist:0.2}},
    {func:candyStripe, opts: {colors:["#A0ADA0","#948E81"], width:0.20, dist:0.2}}, //TODO
    {func:midFlag, opts: {colors:["#fff","#222"], width:0.05, skew:-5}},
    {func:midStripe, opts: {colors:["#feb24c","#7fcdbb"],width:0.5}},
    {func:midStripe, opts: {colors:["#222","#e55"], width: 0.05}},
    {func:midStripe, opts: {colors:["#9DA89A","#6A828A"], width:0.18, offset:0}},
    {func:midFlag, opts: {colors:["#CFA675", "#A3A67E"], width:0.24, skew:6}},
    {func:oneColor, opts: {colors:["#C2B69A"]}},
    {func:oneColor, opts: {colors:["#807F5B"]}},
    {func:twoColorDiagRev, opts: {colors:["#A3A679","#CFA773"]}},
    {func:oneColor, opts: {colors:["#938C7D"]}},
    {func:midStripe, opts: {colors:["#DCC387","#A3A378"], width:0.5, offset:0}},
    {func:bigTri, opts: {colors:["#1e7d1e", "#444"]}},
    {func:twoHooks, opts: {colors:["#A4B0A0","#D7A892"], width:0.26}},
    {func:twoHooks, opts: {colors:["#A58F6C","#9FAE9C"], width:0.15}},
    {func:twoColorVert, opts: {colors:["#222","#eee"]}},
    {func:twoColorDiag, opts: {colors:["#39df43","#fff"], width:0.2} },
    {func:midStripe, opts: {colors:["#BFB496","#D5AE93"], width:0.5, offset:0}},
    {func:bigTri, opts: {colors:["#D5A78D", "#BFB294"]}},
    {func:twoColorDiagRev, opts: {colors:["#ad4927", "#eee"], width:0.2}},
    {func:bigX, opts: {colors:["#D1A577", "#928D82"], width:1.0}},
    {func:theTeeth, opts: {colors:["#A0ADA3", "#D4AD94", "#B9AC90"], width:1.0}},
    {func:theTeeth, opts: {colors:["#D9B094", "#A2B0A6"], width:1.0}},
    {func:bigX, opts: {colors:["#EACE95", "#C1B29B"], width:1.0}},
    {func:midStripe, opts: {colors:["#ffff33", "#111"], width:0.2}},
    {func:oneColor, opts: {colors:["#005eb8"]} },
    {func:twoColorVert, opts: {colors:["#A1ADA0","#797957"], skew:12}},
    {func:midStripe, opts: {colors:["#004274","#3ff"],width:0.1} },  // Shipyard
    {func:oneColor, opts: {colors:["#0a7eff"]}},
    {func:midStripe, opts: {colors:["#7E7F5C","#AA9570"], width:0.5, offset:0}},
    {func:twoColorDiag, opts: {colors:["#7E7D59","#BDB293"]}},
    {func:twoColorDiag, opts: {colors:["#989180","#D1A772"]} },
    {func:twoColorGradient, opts: {colors:["#ff8080","#ffff00"], gradient: true}},
    {func:bigX, opts: {colors:["#E0C68A", "#968D82"], width:0.4}},
    {func:twoColorGradient, opts: {colors:["#00fefe", "#ffffff"], gradient:true}},
    {func:twoHooks, opts: {colors:["#A1AC9B","#D6AA77"], width:0.25}},
    {func:longStripe, opts: {colors:["#A2AE9F","#B8AF8C"], width:0.2, edge:true}},
    {func:longStripe, opts: {colors:["#BBB08D","#7E7D58"], width:0.6, rev:true, edge:false}},
    {func:midFlag, opts: {colors:["#CDC0A2", "#A1AA99"], width:0.6, skew:20}},
    {func:doubleStripeIn, opts: {colors:["#D7A771","#BAAE8C"], width:0.1}},
    {func:doubleStripe, opts: {colors:["#A19887","#AAB2A0", "#AAAD85"], width:0.30, dist:0.04}},
    {func:doubleStripe, opts: {colors:["#C08B5C","#C1B395"], width:0.2, dist:0.08}},
    {func:midFlag, opts: {colors:["#D4AA8F", "#7D96A1"], width:0.6, skew:20}},
    {func:midFlag, opts: {colors:["#D3A673", "#9E8468"], width:0.6, skew:20}},
    {func:twoColorVert, opts: {colors:["#D4B193","#A7916F"], skew:-12}},
    {func:midStripe, opts: {colors:["#E2C689","#D8B096"], width:0.5, offset:0}},
    {func:twoColor, opts: {colors:["#E3C78C","#BCB091"]}},
    {func:bigTri, opts: {colors:["#7D7C58", "#A28C68"]}},
  ];


  //  function pillPath(width, height, padding) {

  //   var edge = width / 10;
  //   var halfHeight = height / 2;

  //   var path = "M 0," + halfHeight;
  //   path += " l " + edge + "," + (-1 * halfHeight);
  //   path += " l " + (width - (edge * 2)) + ",0";
  //   path += " l " + edge + "," + halfHeight;
  //   path += " l " + (-1 * edge) + "," + halfHeight;
  //   path += " l " + (-1 * (width - (edge * 2))) + ",0";
  //   path += " Z";

  //   return path;
  // }

   function pillPath(width, height, padding) {

    var e = width / 10;
    var halfHeight = height / 2;

    // M2 0 h36c0 0 -2 0 -2 5 c0 5 2 5 2 5 h-36 c 0 0 -2 0 -2 -5 c 0 -5 2 -5 2 -5 // horz.

    var path = "M " + (width - e) + " " + height + " h "+ (-width*0.8);
    path += " c 0 0" + (-e) + " 0 " + (-e) + " " + (-halfHeight); // 
    path += " c 0 " + (-halfHeight) + " " + e + " " + (-halfHeight)  + " " + e + " " + (-halfHeight);
    path += " h " + (width - 2*e);
    path += " c 0 0 " + (e) + " 0 " + (e) + " " + halfHeight; 
    path += " c 0 " + halfHeight + " " + (-e) + " " + halfHeight  + " " + (-e) + " " + halfHeight;

    path += " c 0 0 " + (-e) + " 0 " + (-e) + " " + (-halfHeight); 
    path += " c 0 " + (-halfHeight) + " " + (e) + " " + (-halfHeight)  + " " + (e) + " " + (-halfHeight);
    // path += " c 0 " + (-halfHeight) + " " + e + " " + (-halfHeight)  + " " + e + " " + (-halfHeight);
    

   


    // var path = "M " + (e) + " 0 h "+ (width*0.8);
    // path += " c 0 0" + (-e) + " 0 " + (-e) + " " + halfHeight; // 
    // path += " c 0 " + halfHeight + " " + e + " " + halfHeight  + " " + e + " " + halfHeight;
    // path += " h " + (-width*0.8);
    // path += " c 0 0" + (-e) + " 0 " + (-e) + " " + (-halfHeight); // 
    // path += " c 0 " + (-halfHeight) + " " + e + " " + (-halfHeight)  + " " + e + " " + (-halfHeight);
    // path += " M 0 "+ (width*0.8) + " c 0 0" + (e) + " 0 " + (e) + " " + halfHeight; 
    // path += " c 0 " + halfHeight + " " + e + " " + halfHeight  + " " + e + " " + halfHeight;

    return path;
  }

  function pillOutline(width, height, padding) {
    var p = pillPath(width, height, padding);
    var e = width / 10;
    var halfHeight = height / 2;

    // M2 0 h36c0 0 -2 0 -2 5 c0 5 2 5 2 5 h-36 c 0 0 -2 0 -2 -5 c 0 -5 2 -5 2 -5 // horz.

    p += " M 0 "+ (width*0.8) + " c 0 0" + (e) + " 0 " + (e) + " " + halfHeight; 
    p += " c 0 " + halfHeight + " " + (-e) + " " + halfHeight  + " " + (-e) + " " + halfHeight;

    return p;
  }

  function oneColor(selection, width, height, opts) {
    selection.selectAll("rect")
      .data([opts.colors[0]]).enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", function(d) { return d; });
  }

  function twoColorGradient(selection, width, height, opts) {
    selection.selectAll("rect")
      .data([opts.colors[0]]).enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr('fill', function(d) { return "url(#" + d.substr(1,6) + "-gradient)" });
  }

  function twoColor(selection, width, height, opts) {
    selection.selectAll("rect")
      .data(opts.colors).enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", function(d,i) { return (i * height / 2); })
      .attr("width", width)
      .attr("height", height / 2)
      .attr("fill", function(d) { return d; });
  }

  function twoColorVert(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var skew = opts.skew || 0;

    selection
      .append("path")
      .attr("d", function() {
        var path = "M " + ((width / 2) - (skew / 2)) + "," + 0;
        path += " l" + ((width / 2) + (skew / 2)) + "," + 0;
        path += " l" + 0 + "," + height;
        path += " l" + (-1 * ((width / 2) - (skew / 2))) + "," + 0;
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function twoColorDiag(selection, width, height, opts) {
    selection.append("path")
      .attr("d", function() {
        var path = "M 0,0";
        path += " l " + width + ",0";
        path += " l " + (-1 * width) + "," + height;
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[0]);

    selection.append("path")
      .attr("d", function() {
        var path = "M 0," + height;
        path += " l " + width + ",0";
        path += " l " + 0 + "," + (-1 * height);
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function twoColorDiagRev(selection, width, height, opts) {
    selection.append("path")
      .attr("d", function() {
        var path = "M 0,0";
        path += " l " + width + "," + height;
        path += " l " + (-1 * width) + ",0";
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[0]);

    selection.append("path")
      .attr("d", function() {
        var path = "M 0,0";
        path += " l " + width + ",0";
        path += " l " + 0 + "," + height;
        path += " z";
        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function midStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;
    var offset = 0;
    if(opts.offset) {
      offset = opts.offset;
    }

    selection.append("rect")
      .attr("x", ((width / 2) - offset) - (stripeWidth / 2))
      .attr("y", 0)
      .attr("width", stripeWidth)
      .attr("height", height)
      .attr("fill", opts.colors[1]);
  }

  function doubleStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;
    var halfWidth = width / 2;

    if(opts.colors.length > 2) {
      selection.append("rect")
        .attr("x", ((halfWidth / 2) + (halfWidth * opts.dist)))
        .attr("y", 0)
        .attr("width", stripeWidth * 2)
        .attr("height", height)
        .attr("fill", opts.colors[2]);
    }

    selection.selectAll(".stripe")
      .data([0,1]).enter()
      .append("rect")
      .attr("class", "stripe")
      .attr("x", function(d,i) {
        var dist = i === 0 ? (halfWidth * opts.dist) : (halfWidth * opts.dist * -1);
        return (((halfWidth / 2) + dist) - (stripeWidth / 2)) + (halfWidth * i);
      })
      .attr("y", 0)
      .attr("width", stripeWidth)
      .attr("height", height)
      .attr("fill", opts.colors[1]);
  }

  function candyStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * 0.34;
    var skew = 10;
    var edge = width / 10;

    // var stripeWidth = width * opts.width;
    var halfWidth = width / 2;

    selection.selectAll(".stripe")
      .data([0,1]).enter()
      .append("path")
      .attr("class", "stripe")
      .attr("d", function(d,i) {
        var startX = (i === 0) ? edge : edge + (stripeWidth * 2);
        var path = "M " + startX + "," + 0;
        path += " l" + stripeWidth + "," + 0;
        path += " l" + skew + "," + height;
        path += " l" + (-1 * stripeWidth) + "," + 0;
        path += " z";

        return path;
      })
      .attr("fill", opts.colors[1]);
  }

  function longStripe(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;

    var edge = opts.edge ?  width / 10 : -40;
    var offset = opts.offset || 0;

    selection
      .append("path")
      .attr("d", function(d,i) {
        var path = "M " + (edge) + "," + height ;
        path += " l" + (width - (((edge) * 2) + stripeWidth)) + "," + (-1 * height);
        path += " l" + stripeWidth + "," + 0;
        path += " l" + (-1 * (width - (((edge) * 2) + stripeWidth))) + "," + (height);
        path += " z";

        return path;
      })
      .attr("transform", opts.rev ? "translate(100, 0) scale(-1, 1)" : "")
      .attr("fill", opts.colors[1]);
  }

  function doubleStripeIn(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var stripeWidth = width * opts.width;

    var edge = width / 10;

    selection.selectAll(".flag")
      .data([0,1]).enter()
      .append("path")
      .attr("d", function(d,i) {
        var path = "M " + edge + "," + height ;
        path += " l" + ((width / 2) - ((edge * 2) + stripeWidth)) + "," + (-1 * height);
        path += " l" + stripeWidth + "," + 0;
        path += " l" + (-1 * ((width / 2) - ((edge * 2) + stripeWidth))) + "," + (height);
        path += " z";

        return path;
      })
      .attr("transform", function(d,i) {  return i == 1 ? "translate(100, 0) scale(-1, 1)" : ""; })
      .attr("fill", opts.colors[1]);
  }

  function doubleFlag(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var flagWidth = width * opts.width;
    var halfWidth = width / 2;
    var skew = 6;

    selection.selectAll(".flag")
      .data([0,1]).enter()
      .append("path")
      .attr("class", "flag")
      .attr("fill", opts.colors[1])
      .attr("d", function(d,i) {
        var dist = i === 0 ? (halfWidth * opts.dist) : (halfWidth * opts.dist * -1);
        var path = "M " + ((((halfWidth / 2) + dist ) - ((flagWidth / 2) + (skew / 2))) + (halfWidth * i)) + "," + height;
        path += " l " + (skew) + "," + (-1 * height);
        path += " l " + flagWidth  + "," + 0;
        path += " l " + (-1 * skew)  + "," + ( height);
        path += " z";
        return path;
      });
  }

  function bigTri(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 10;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + edge + "," + height;
        path += " l " + ((width / 2) - edge) + "," + (-1 * height);
        path += " l " + ((width / 2) - edge)  + "," + height;
        path += " z";
        return path;
      });
  }

  function theTeeth(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 8;
    var toothWidth = (width - (edge * 2)) / 2;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + edge + "," + 0;
        path += " l " + (toothWidth / 2) + "," + height;
        path += " l " + (toothWidth / 2) + "," + (-1 * height);
        path += " z";
        return path;
      });

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + (edge + toothWidth) + "," + 0;
        path += " l " + (toothWidth / 2) + "," + height;
        path += " l " + (toothWidth / 2) + "," + (-1 * height);
        path += " z";
        return path;
      });

    var lastCol = opts.colors.length > 2 ? opts.colors[2] : opts.colors[0];

    selection.append("path")
      .attr("fill", lastCol)
      .attr("d", function() {
        var path = "M " + (edge + (toothWidth / 2)) + "," + height;
        path += " l " + (toothWidth / 2) + "," + (-1 * height);
        path += " l " + (toothWidth / 2) + "," + (height);
        path += " z";
        return path;
      });
  }

  function bigX(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 10;
    var xWidth = width * opts.width;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + (edge + (width - xWidth)) + "," + 0;
        path += " l " + ((width / 2) - (edge + (width - xWidth) )) + "," + (height / 2);
        path += " l " + ((width / 2) - ((width - xWidth) + edge)) + "," + (-1 * (height / 2));
        path += " z";
        return path;
      });

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + (edge + (width - xWidth)) + "," + height;
        path += " l " + ((width / 2) - (edge + (width - xWidth))) + "," + (-1 * (height / 2));
        path += " l " + ((width / 2) - ((width - xWidth) + edge)) + "," + ((height / 2));
        path += " z";
        return path;
      });
  }

  function bigTriInverted(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var edge = width / 10;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + edge + "," + 0;
        path += " l " + ((width / 2) - edge) + "," + (height);
        path += " l " + ((width / 2) - edge)  + "," + (-1 * height);
        path += " z";
        return path;
      });
  }

  function littleSquares(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);
    var squares = [true,false,true,false,true];
    var squarePad = width / 10;
    var squareWidth = (width - (squarePad * 2)) / squares.length;
    var squareHeight = height / 2;
    selection.selectAll(".little-square")
      .data(squares).enter()
      .append("rect")
      .attr("class", "little-square")
      .attr("fill", opts.colors[1])
      .attr("width", squareWidth)
      .attr("height", squareHeight)
      .attr("x", function(d,i) { return squarePad + (squareWidth * i); })
      .attr("y", function(d,i) { return d ? squareHeight : 0; });
  }

  function midFlag(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var flagWidth = width * opts.width;
    var skew = opts.skew;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + ((width / 2) - ((flagWidth / 2) + (skew / 2))) + "," + height;
        path += " l " + (skew) + "," + (-1 * height);
        path += " l " + flagWidth  + "," + 0;
        path += " l " + (-1 * skew)  + "," + ( height);
        path += " z";
        return path;
      });
  }

  function twoHooks(selection, width, height, opts) {
    selection.call(oneColor, width, height, opts);

    var hookEdge = width * opts.width;

    selection.append("path")
      .attr("fill", opts.colors[1])
      .attr("d", function() {
        var path = "M " + hookEdge + "," + 0;
        path += " l " + 0 + "," + height / 2;
        path += " l " + (width - (hookEdge * 2)) + "," + 0;
        path += " l " + 0 + "," + height / 2;
        path += " l " + hookEdge + "," + 0;
        path += " l " + 0 + "," + (-1 * height);
        path += " z";
        return path;
      });
  }
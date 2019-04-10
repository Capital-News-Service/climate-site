var chart = c3.generate({
  bindto: '#chart-cold-10',
    data: {
    x: 'x',
        columns: [
        ['x', 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
            [' 10 degrees or below', 16, 30, 86, 43, 71, 26, 27, 39]
        ],
        type: 'bar',

 },
 color: {
     pattern: ['#94B8E0', '#6661AD','#E4A35E']
 },
 //ADD COMMA AND DOLLAR SIGN TO TOOL TIP
        tooltip: {
            format: {
                value: function(value) {
                    return d3.format(",.2f")(value)
                }
            }
        },
          //ADD COMMA AND DOLLAR SIGN TO Y AXIS
        axis : {
        y : {
            tick: {

//                format: function (d) { return "$" + d; }
            }
        }
    },
  //HIDE LEGEND
    legend: {
hide: 'data1'
  //or hide: ['data1', 'data2']
},
  //CUSTOM TITLE FOR TOOPTIP
    tooltip: {
        format: {
            title: function (d) { return ' Cold Days ' + d + 's'; },
    //            value: d3.format(',') // apply this format to both y and y2
        }
    }
    });

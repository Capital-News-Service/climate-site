// Test Page - story-template.html
// chart-cold-10 - cold days
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

// Climate story
// Cold Snap
// Joe HaeMee Edit 
var chart = c3.generate({
    bindto: '#coldsnap',
    data: {
    x: 'x',
        columns: [
        ['x', 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
        	[' 3+ Days', 92, 115, 111, 107, 101, 126, 104, 100],
            [' 5+ Days', 54, 58, 67, 56, 60, 59, 56, 53]
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
        x : {
            tick: {

                format: function (d) { return d + "s"; }
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


// Climate story
// Freeze 32
// Joe HaeMee edit 
var chart = c3.generate({
  bindto: '#chart-freeze-32',
    data: {
    	x: 'x',
        columns: [
        	['x', 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
            ['Cold Days', 801, 954, 1075, 906, 957, 931, 968, 835],
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
        x : {
            tick: {

                format: function (d) { return d + "s"; }
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


// Climate story
// 20-10-compare
// Joe HaeMee edit
var chart = c3.generate({
  bindto: '#chart-20-10-compare',
    data: {
    x: 'x',
        columns: [
        ['x', 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
        	[' 20 degrees or below', 155, 226, 329, 257, 275, 173, 248, 189],
            [' 10 degrees or below', 16, 30, 86, 43, 71, 26, 27, 39]
        ],
        type: 'bar',
        //ADD CUSTOM COLORS



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
        x : {
            tick: {

               format: function (d) { return d + "s"; }
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


// Story template
// Shutoffs bar chart
var chart = c3.generate({
  bindto: '#turnoffs-bar-chart',
    data: {

        columns: [

            ['Turnoffs', 232, 258.9, 255.7, 946.6, 1064.6, 1024.1, 764.8, 943.8, 969.9, 1410.9, 414.7, 422.5],
            ['Reconnections', 169.1, 189.7, 194.1, 527.7, 626.7, 595.3, 497.8, 642.1, 653.2, 976.1, 334.1, 303]
        ],
        type: 'bar',
        //ADD CUSTOM COLORS

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
                format: d3.format(",")
                //
//                format: function (d) { return "$" + d; }
            }
        },
        x: {
          type: 'category',
            categories: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
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
            title: function (d) { return 'Turnoffs and Reconnections ' + d; },
    //            value: d3.format(',') // apply this format to both y and y2
        }
    }
    });





    // Shutoffs line chart

    var chart = c3.generate({
      bindto: '#turnoffs-line-chart',
        data: {

            columns: [

                ['BGE', 2.66, 2.97, 2.94, 10.87, 12.22, 11.76, 8.78, 10.84, 11.14, 16.20, 4.76, 4.85],
    			['Other Companies', 1.20, 1.35, 2.27, 15.75, 13.26, 13.01, 10.49, 12.44, 13.23, 15.16, 1.14, 0.71]
            ],
            types: {
                BGE: 'line',
    			      Other_Companies: 'line'

            },
            groups: [['data1', 'data2']]
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
                    format: d3.format(",")
                    //
    //                format: function (d) { return "$" + d; }
                }
            },
    			y: {
                label: {
                    text: 'Percent',
                    position: 'outer-middle'
                }
            },
            x: {
              type: 'category',
                categories: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
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
                title: function (index) {
                  if (index == 0) {
                    return 'January'
                  } if (index == 1) {
                  return 'February'
                } if (index == 2){
                  return 'March'
                } if (index == 3){
                  return 'April'
                } if (index == 4){
                  return 'May'
                } if (index == 5){
                  return 'June'
                } if (index == 6){
                  return 'July'
                } if (index == 7){
                  return 'August'
                } if (index == 8){
                  return 'September'
                } if (index == 9){
                  return 'October'
                } if (index == 10){
                  return 'November'
                }

                    else {
                      return 'December'
                    }

                },
                name: function (name, ratio, id, index) { return name; },
                value: function (value, ratio, id, index) { return value; }

        //            value: d3.format(',') // apply this format to both y and y2
            }
        }
        });




// Health Story
// Deaths Graphic
  var chart = c3.generate({
    bindto: '#cold-deaths-bar',
      data: {	x: 'x',
          columns: [
            ['x', 2014, 2015, 2016, 2017, 2018, 2019],
              ['data1', 3, 12, 3, 12, 21, 12],
              ['data2', 15, 36, 16, 34, 56, 51]
          ],


  names: {
      data1: 'City of Baltimore',
      data2: 'Maryland'

  },



          type: 'bar'
      },
      color: {
          pattern: ['#94B8E0', '#6661AD','#E4A35E']
      },
      bar: {
          width: {
              ratio: 0.65 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      }
  });

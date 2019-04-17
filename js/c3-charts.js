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


    var chart = c3.generate({
        bindto: '#coldsnap',
        data: {
        x: 'x',
            columns: [
            ['x', 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
            	[' 3+ Days', 93, 118, 115, 109, 103, 126, 107, 101],
                [' 5+ Days', 53, 62, 70, 57, 59, 60, 59, 53]
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



        var chart = c3.generate({
          bindto: '#chart-freeze-32',
            data: {
            	x: 'x',
                columns: [
                	['x', 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
                    ['data1', 801, 954, 1075, 906, 957, 931, 968, 835],
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


                var chart = c3.generate({
                    data: {

                        columns: [

                            ['Shutoffs', 2320, 2589, 2557, 9466, 10646, 10241, 7648, 9438, 9699, 14109, 4147, 4225],
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
                            title: function (d) { return 'Shutoffs ' + d; },
                    //            value: d3.format(',') // apply this format to both y and y2
                        }
                    }
                    });




                    var chart = c3.generate({
                        data: {	x: 'x',
                            columns: [
                              ['x', 2014, 2015, 2016, 2017, 2018, 2019],
                                ['data1', 3, 12, 3, 12, 21, 12],
                                ['data2', 15, 36, 16, 34, 56, 51]
                            ],


                    names: {
                        data1: 'City of Baltimore',
                        data2: 'All of Maryland'

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

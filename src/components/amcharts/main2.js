'use client'


import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function Chart(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv2");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );
    // Define data
    var data = [{
        hour: "12pm",
        weekday: "Rack no 9",
        value: 2990
      }, {
        hour: "1am",
        weekday: "Rack no 9",
        value: 2520
      }, {
        hour: "2am",
        weekday: "Rack no 9",
        value: 2334
      }, {
        hour: "3am",
        weekday: "Rack no 9",
        value: 2230
      }, {
        hour: "4am",
        weekday: "Rack no 9",
        value: 2325
      }, {
        hour: "5am",
        weekday: "Rack no 9",
        value: 2019
      }, {
        hour: "6am",
        weekday: "Rack no 9",
        value: 2128
      }, {
        hour: "7am",
        weekday: "Rack no 9",
        value: 2246
      }, {
        hour: "8am",
        weekday: "Rack no 9",
        value: 2421
      }, {
        hour: "9am",
        weekday: "Rack no 9",
        value: 2788
      }, {
        hour: "10am",
        weekday: "Rack no 9",
        value: 2959
      }, {
        hour: "11am",
        weekday: "Rack no 9",
        value: 3018
      }, {
        hour: "12am",
        weekday: "Rack no 9",
        value: 3154
      }, {
        hour: "1pm",
        weekday: "Rack no 9",
        value: 3172
      }, {
        hour: "2pm",
        weekday: "Rack no 9",
        value: 3368
      }, {
        hour: "3pm",
        weekday: "Rack no 9",
        value: 3464
      }, {
        hour: "4pm",
        weekday: "Rack no 9",
        value: 3746
      }, {
        hour: "5pm",
        weekday: "Rack no 9",
        value: 3656
      }, {
        hour: "6pm",
        weekday: "Rack no 9",
        value: 3336
      }, {
        hour: "7pm",
        weekday: "Rack no 9",
        value: 3292
      }, {
        hour: "8pm",
        weekday: "Rack no 9",
        value: 3269
      }, {
        hour: "9pm",
        weekday: "Rack no 9",
        value: 3300
      }, {
        hour: "10pm",
        weekday: "Rack no 9",
        value: 3403
      }, {
        hour: "11pm",
        weekday: "Rack no 9",
        value: 3323
      }, {
        hour: "12pm",
        weekday: "Rack no 8",
        value: 3346
      }, {
        hour: "1am",
        weekday: "Rack no 8",
        value: 2725
      }, {
        hour: "2am",
        weekday: "Rack no 8",
        value: 3052
      }, {
        hour: "3am",
        weekday: "Rack no 8",
        value: 3876
      }, {
        hour: "4am",
        weekday: "Rack no 8",
        value: 4453
      }, {
        hour: "5am",
        weekday: "Rack no 8",
        value: 3972
      }, {
        hour: "6am",
        weekday: "Rack no 8",
        value: 4644
      }, {
        hour: "7am",
        weekday: "Rack no 8",
        value: 5715
      }, {
        hour: "8am",
        weekday: "Rack no 8",
        value: 7080
      }, {
        hour: "9am",
        weekday: "Rack no 8",
        value: 8022
      }, {
        hour: "10am",
        weekday: "Rack no 8",
        value: 8446
      }, {
        hour: "11am",
        weekday: "Rack no 8",
        value: 9313
      }, {
        hour: "12am",
        weekday: "Rack no 8",
        value: 9011
      }, {
        hour: "1pm",
        weekday: "Rack no 8",
        value: 8508
      }, {
        hour: "2pm",
        weekday: "Rack no 8",
        value: 8515
      }, {
        hour: "3pm",
        weekday: "Rack no 8",
        value: 8399
      }, {
        hour: "4pm",
        weekday: "Rack no 8",
        value: 8649
      }, {
        hour: "5pm",
        weekday: "Rack no 8",
        value: 7869
      }, {
        hour: "6pm",
        weekday: "Rack no 8",
        value: 6933
      }, {
        hour: "7pm",
        weekday: "Rack no 8",
        value: 5969
      }, {
        hour: "8pm",
        weekday: "Rack no 8",
        value: 5552
      }, {
        hour: "9pm",
        weekday: "Rack no 8",
        value: 5434
      }, {
        hour: "10pm",
        weekday: "Rack no 8",
        value: 5070
      }, {
        hour: "11pm",
        weekday: "Rack no 8",
        value: 4851
      }, {
        hour: "12pm",
        weekday: "Rack no 8",
        value: 4468
      }, {
        hour: "1am",
        weekday: "Rack no 8",
        value: 3306
      }, {
        hour: "2am",
        weekday: "Rack no 8",
        value: 3906
      }, {
        hour: "3am",
        weekday: "Rack no 8",
        value: 4413
      }, {
        hour: "4am",
        weekday: "Rack no 8",
        value: 4726
      }, {
        hour: "5am",
        weekday: "Rack no 8",
        value: 4584
      }, {
        hour: "6am",
        weekday: "Rack no 8",
        value: 5717
      }, {
        hour: "7am",
        weekday: "Rack no 8",
        value: 6504
      }, {
        hour: "8am",
        weekday: "Rack no 8",
        value: 8104
      }, {
        hour: "9am",
        weekday: "Rack no 8",
        value: 8813
      }, {
        hour: "10am",
        weekday: "Rack no 8",
        value: 9278
      }, {
        hour: "11am",
        weekday: "Rack no 8",
        value: 10425
      }, {
        hour: "12am",
        weekday: "Rack no 8",
        value: 10137
      }, {
        hour: "1pm",
        weekday: "Rack no 8",
        value: 9290
      }, {
        hour: "2pm",
        weekday: "Rack no 8",
        value: 9255
      }, {
        hour: "3pm",
        weekday: "Rack no 8",
        value: 9614
      }, {
        hour: "4pm",
        weekday: "Rack no 8",
        value: 9713
      }, {
        hour: "5pm",
        weekday: "Rack no 8",
        value: 9667
      }, {
        hour: "6pm",
        weekday: "Rack no 8",
        value: 8774
      }, {
        hour: "7pm",
        weekday: "Rack no 8",
        value: 8649
      }, {
        hour: "8pm",
        weekday: "Rack no 8",
        value: 9937
      }, {
        hour: "9pm",
        weekday: "Rack no 8",
        value: 10286
      }, {
        hour: "10pm",
        weekday: "Rack no 8",
        value: 9175
      }, {
        hour: "11pm",
        weekday: "Rack no 8",
        value: 8581
      }, {
        hour: "12pm",
        weekday: "Rack no 7",
        value: 8145
      }, {
        hour: "1am",
        weekday: "Rack no 7",
        value: 7177
      }, {
        hour: "2am",
        weekday: "Rack no 7",
        value: 5657
      }, {
        hour: "3am",
        weekday: "Rack no 7",
        value: 6802
      }, {
        hour: "4am",
        weekday: "Rack no 7",
        value: 8159
      }, {
        hour: "5am",
        weekday: "Rack no 7",
        value: 8449
      }, {
        hour: "6am",
        weekday: "Rack no 7",
        value: 9453
      }, {
        hour: "7am",
        weekday: "Rack no 7",
        value: 9947
      }, {
        hour: "8am",
        weekday: "Rack no 7",
        value: 11471
      }, {
        hour: "9am",
        weekday: "Rack no 7",
        value: 12492
      }, {
        hour: "10am",
        weekday: "Rack no 7",
        value: 9388
      }, {
        hour: "11am",
        weekday: "Rack no 7",
        value: 9928
      }, {
        hour: "12am",
        weekday: "Rack no 7",
        value: 9644
      }, {
        hour: "1pm",
        weekday: "Rack no 7",
        value: 9034
      }, {
        hour: "2pm",
        weekday: "Rack no 7",
        value: 8964
      }, {
        hour: "3pm",
        weekday: "Rack no 7",
        value: 9069
      }, {
        hour: "4pm",
        weekday: "Rack no 7",
        value: 8898
      }, {
        hour: "5pm",
        weekday: "Rack no 7",
        value: 8322
      }, {
        hour: "6pm",
        weekday: "Rack no 7",
        value: 6909
      }, {
        hour: "7pm",
        weekday: "Rack no 7",
        value: 5810
      }, {
        hour: "8pm",
        weekday: "Rack no 7",
        value: 5151
      }, {
        hour: "9pm",
        weekday: "Rack no 7",
        value: 4911
      }, {
        hour: "10pm",
        weekday: "Rack no 7",
        value: 4487
      }, {
        hour: "11pm",
        weekday: "Rack no 7",
        value: 4118
      }, {
        hour: "12pm",
        weekday: "Rack no 6",
        value: 3689
      }, {
        hour: "1am",
        weekday: "Rack no 6",
        value: 3081
      }, {
        hour: "2am",
        weekday: "Rack no 6",
        value: 6525
      }, {
        hour: "3am",
        weekday: "Rack no 6",
        value: 6228
      }, {
        hour: "4am",
        weekday: "Rack no 6",
        value: 6917
      }, {
        hour: "5am",
        weekday: "Rack no 6",
        value: 6568
      }, {
        hour: "6am",
        weekday: "Rack no 6",
        value: 6405
      }, {
        hour: "7am",
        weekday: "Rack no 6",
        value: 8106
      }, {
        hour: "8am",
        weekday: "Rack no 6",
        value: 8542
      }, {
        hour: "9am",
        weekday: "Rack no 6",
        value: 8501
      }, {
        hour: "10am",
        weekday: "Rack no 6",
        value: 8802
      }, {
        hour: "11am",
        weekday: "Rack no 6",
        value: 9420
      }, {
        hour: "12am",
        weekday: "Rack no 6",
        value: 8966
      }, {
        hour: "1pm",
        weekday: "Rack no 6",
        value: 8135
      }, {
        hour: "2pm",
        weekday: "Rack no 6",
        value: 8224
      }, {
        hour: "3pm",
        weekday: "Rack no 6",
        value: 8387
      }, {
        hour: "4pm",
        weekday: "Rack no 6",
        value: 8218
      }, {
        hour: "5pm",
        weekday: "Rack no 6",
        value: 7641
      }, {
        hour: "6pm",
        weekday: "Rack no 6",
        value: 6469
      }, {
        hour: "7pm",
        weekday: "Rack no 6",
        value: 5441
      }, {
        hour: "8pm",
        weekday: "Rack no 6",
        value: 4952
      }, {
        hour: "9pm",
        weekday: "Rack no 6",
        value: 4643
      }, {
        hour: "10pm",
        weekday: "Rack no 6",
        value: 4393
      }, {
        hour: "11pm",
        weekday: "Rack no 6",
        value: 4017
      }, {
        hour: "12pm",
        weekday: "Rack no 5",
        value: 4022
      }, {
        hour: "1am",
        weekday: "Rack no 5",
        value: 3063
      }, {
        hour: "2am",
        weekday: "Rack no 5",
        value: 3638
      }, {
        hour: "3am",
        weekday: "Rack no 5",
        value: 3968
      }, {
        hour: "4am",
        weekday: "Rack no 5",
        value: 4070
      }, {
        hour: "5am",
        weekday: "Rack no 5",
        value: 4019
      }, {
        hour: "6am",
        weekday: "Rack no 5",
        value: 4548
      }, {
        hour: "7am",
        weekday: "Rack no 5",
        value: 5465
      }, {
        hour: "8am",
        weekday: "Rack no 5",
        value: 6909
      }, {
        hour: "9am",
        weekday: "Rack no 5",
        value: 7706
      }, {
        hour: "10am",
        weekday: "Rack no 5",
        value: 7867
      }, {
        hour: "11am",
        weekday: "Rack no 5",
        value: 8615
      }, {
        hour: "12am",
        weekday: "Rack no 5",
        value: 8218
      }, {
        hour: "1pm",
        weekday: "Rack no 5",
        value: 7604
      }, {
        hour: "2pm",
        weekday: "Rack no 5",
        value: 7429
      }, {
        hour: "3pm",
        weekday: "Rack no 5",
        value: 7488
      }, {
        hour: "4pm",
        weekday: "Rack no 5",
        value: 7493
      }, {
        hour: "5pm",
        weekday: "Rack no 5",
        value: 6998
      }, {
        hour: "6pm",
        weekday: "Rack no 5",
        value: 5941
      }, {
        hour: "7pm",
        weekday: "Rack no 5",
        value: 5068
      }, {
        hour: "8pm",
        weekday: "Rack no 5",
        value: 4636
      }, {
        hour: "9pm",
        weekday: "Rack no 5",
        value: 4241
      }, {
        hour: "10pm",
        weekday: "Rack no 5",
        value: 3858
      }, {
        hour: "11pm",
        weekday: "Rack no 5",
        value: 3833
      }, {
        hour: "12pm",
        weekday: "Rack no 4",
        value: 3503
      }, {
        hour: "1am",
        weekday: "Rack no 4",
        value: 2842
      }, {
        hour: "2am",
        weekday: "Rack no 4",
        value: 2808
      }, {
        hour: "3am",
        weekday: "Rack no 4",
        value: 2399
      }, {
        hour: "4am",
        weekday: "Rack no 4",
        value: 2280
      }, {
        hour: "5am",
        weekday: "Rack no 4",
        value: 2139
      }, {
        hour: "6am",
        weekday: "Rack no 4",
        value: 2527
      }, {
        hour: "7am",
        weekday: "Rack no 4",
        value: 2940
      }, {
        hour: "8am",
        weekday: "Rack no 4",
        value: 3066
      }, {
        hour: "9am",
        weekday: "Rack no 4",
        value: 3494
      }, {
        hour: "10am",
        weekday: "Rack no 4",
        value: 3287
      }, {
        hour: "11am",
        weekday: "Rack no 4",
        value: 3416
      }, {
        hour: "12am",
        weekday: "Rack no 4",
        value: 3432
      }, {
        hour: "1pm",
        weekday: "Rack no 4",
        value: 3523
      }, {
        hour: "2pm",
        weekday: "Rack no 4",
        value: 3542
      }, {
        hour: "3pm",
        weekday: "Rack no 4",
        value: 3347
      }, {
        hour: "4pm",
        weekday: "Rack no 4",
        value: 3292
      }, {
        hour: "5pm",
        weekday: "Rack no 4",
        value: 3416
      }, {
        hour: "6pm",
        weekday: "Rack no 4",
        value: 3131
      }, {
        hour: "7pm",
        weekday: "Rack no 4",
        value: 3057
      }, {
        hour: "8pm",
        weekday: "Rack no 4",
        value: 3227
      }, {
        hour: "9pm",
        weekday: "Rack no 4",
        value: 3060
      }, {
        hour: "10pm",
        weekday: "Rack no 4",
        value: 2855
      }, {
        hour: "11pm",
        weekday: "Rack no 4",
        value: 2625
      }
      ]

    var yRenderer = am5xy.AxisRendererY.new(root, {
        visible: false,
        minGridDistance: 20,
        inversed: true,
        minorGridEnabled: true
      });
      
      yRenderer.grid.template.set("visible", false);

    // Create Y-axis
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        renderer: yRenderer,
        categoryField: "weekday"
      }));
      
      var xRenderer = am5xy.AxisRendererX.new(root, {
        visible: false,
        minGridDistance: 30,
        opposite:true,
        minorGridEnabled: true
      });

      xRenderer.grid.template.set("visible", false);

    // Create X-Axis
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        renderer: xRenderer,
        categoryField: "hour"
      }));

    // Create series
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        calculateAggregates: true,
        stroke: am5.color(0xffffff),
        clustered: false,
        xAxis: xAxis,
        yAxis: yAxis,
        categoryXField: "hour",
        categoryYField: "weekday",
        valueField: "value"
      }));
      
      series.columns.template.setAll({
        tooltipText: "{value}",
        strokeOpacity: 1,
        strokeWidth: 2,
        width: am5.percent(100),
        height: am5.percent(100)
      });

      series.columns.template.events.on("pointerover", function(event) {
        var di = event.target.dataItem;
        if (di) {
          heatLegend.showValue(di.get("value", 0));
        }
      });
      
      series.events.on("datavalidated", function() {
        heatLegend.set("startValue", series.getPrivate("valueHigh"));
        heatLegend.set("endValue", series.getPrivate("valueLow"));
      });

      series.set("heatRules", [{
        target: series.columns.template,
        min: am5.color(0xfffb77),
        max: am5.color(0xfe131a),
        dataField: "value",
        key: "fill"
      }]);

      let heatLegend = chart.bottomAxesContainer.children.push(am5.HeatLegend.new(root, {
        orientation: "horizontal",
        endColor: am5.color(0xfffb77),
        startColor: am5.color(0xfe131a)
      }));

        series.data.setAll(data);

        // Auto-populate X and Y axis category data
        var weekdays = [];
        var hours = [];
        am5.array.each(data, function(row) {
        if (weekdays.indexOf(row.weekday) == -1) {
            weekdays.push(row.weekday);
        }
        if (hours.indexOf(row.hour) == -1) {
            hours.push(row.hour);
        }
        });

        yAxis.data.setAll(weekdays.map(function(item) {
            return { weekday: item }
        }));
        
        
        xAxis.data.setAll(hours.map(function(item) {
            return { hour: item }
        }));
        

    // // Add legend
    // let legend = chart.children.push(am5.Legend.new(root, {}));
    // legend.data.setAll(chart.series.values);

    // // Add cursor
    // chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv2" style={{ width: "500px", height: "500px" }}></div>
  );
}
export default Chart;
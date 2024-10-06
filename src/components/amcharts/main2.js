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
        value: 2990
      }, {
        value: 2520
      }, {
        value: 2334
      }, {
        value: 2230
      }, {
        value: 2325
      }, {
        value: 2019
      }, {
        value: 2128
      }, {
        value: 2246
      }, {
        value: 2421
      }, {
        value: 2788
      }, {
        value: 2959
      }, {
        value: 3018
      }, {
        value: 3154
      }, {
        value: 3172
      }, {
        value: 3368
      }, {
        value: 3464
      }, {
        value: 3746
      }, {
        value: 3656
      }, {
        value: 3336
      }, {
        value: 3292
      }, {
        value: 3269
      }, {
        value: 3300
      }, {
        value: 3403
      }, {
        value: 3323
      }, {
        value: 3346
      }, {
        value: 2725
      }, {
        value: 3052
      }, {
        value: 3876
      }, {
        value: 4453
      }, {
        value: 3972
      }, {
        value: 4644
      }, {
        value: 5715
      }, {
        value: 7080
      }, {
        value: 8022
      }, {
        value: 8446
      }, {
        value: 9313
      }, {
        value: 9011
      }, {
        value: 8508
      }, {
        value: 8515
      }, {
        value: 8399
      }, {
        value: 8649
      }, {
        value: 7869
      }, {
        value: 6933
      }, {
        value: 5969
      }, {
        value: 5552
      }, {
        value: 5434
      }, {
        value: 5070
      }, {
        value: 4851
      }, {
        value: 4468
      }, {
        value: 3306
      }, {
        value: 3906
      }, {
        value: 4413
      }, {
        value: 4726
      }, {
        value: 4584
      }, {
        value: 5717
      }, {
        value: 6504
      }, {
        value: 8104
      }, {
        value: 8813
      }, {
        value: 9278
      }, {
        value: 10425
      }, {
        value: 10137
      }, {
        value: 9290
      }, {
        value: 9255
      }, {
        value: 9614
      }, {
        value: 9713
      }, {
        value: 9667
      }, {
        value: 8774
      }, {
        value: 8649
      }, {
        value: 9937
      }, {
        value: 10286
      }, {
        value: 9175
      }, {
        value: 8581
      }, {
        value: 8145
      }, {
        value: 7177
      }, {
        value: 5657
      }, {
        value: 6802
      }, {
        value: 8159
      }, {
        value: 8449
      }, {
        value: 9453
      }, {
        value: 9947
      }, {
        value: 11471
      }, {
        value: 12492
      }, {
        value: 9388
      }, {
        value: 9928
      }, {
        value: 9644
      }, {
        value: 9034
      }, {
        value: 8964
      }, {
        value: 9069
      }, {
        value: 8898
      }, {
        value: 8322
      }, {
        value: 6909
      }, {
        value: 5810
      }, {
        value: 5151
      }, {
        value: 4911
      }, {
        value: 4487
      }, {
        value: 4118
      }, {
        value: 3689
      }, {
        value: 3081
      }, {
        value: 6525
      }, {
        value: 6228
      }, {
        value: 6917
      }, {
        value: 6568
      }, {
        value: 6405
      }, {
        value: 8106
      }, {
        value: 8542
      }, {
        value: 8501
      }, {
        value: 8802
      }, {
        value: 9420
      }, {
        value: 8966
      }, {
        value: 8135
      }, {
        value: 8224
      }, {
        value: 8387
      }, {
        value: 8218
      }, {
        value: 7641
      }, {
        value: 6469
      }, {
        value: 5441
      }, {
        value: 4952
      }, {
        value: 4643
      }, {
        value: 4393
      }, {
        value: 4017
      }, {
        value: 4022
      }, {
        value: 3063
      }, {
        value: 3638
      }, {
        value: 3968
      }, {
        value: 4070
      }, {
        value: 4019
      }, {
        value: 4548
      }, {
        value: 5465
      }, {
        value: 6909
      }, {
        value: 7706
      }, {
        value: 7867
      }, {
        value: 8615
      }, {
        value: 8218
      }, {
        value: 7604
      }, {
        value: 7429
      }, {
        value: 7488
      }, {
        value: 7493
      }, {
        value: 6998
      }, {
        value: 5941
      }, {
        value: 5068
      }, {
        value: 4636
      }, {
        value: 4241
      }, {
        value: 3858
      }, {
        value: 3833
      }, {
        value: 3503
      }, {
        value: 2842
      }, {
        value: 2808
      }, {
        value: 2399
      }, {
        value: 2280
      }, {
        value: 2139
      }, {
        value: 2527
      }, {
        value: 2940
      }, {
        value: 3066
      }, {
        value: 3494
      }, {
        value: 3287
      }, {
        value: 3416
      }, {
        value: 3432
      }, {
        value: 3523
      }, {
        value: 3542
      }, {
        value: 3347
      }, {
        value: 3292
      }, {
        value: 3416
      }, {
        value: 3131
      }, {
        value: 3057
      }, {
        value: 3227
      }, {
        value: 3060
      }, {
        value: 2855
      }, {
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
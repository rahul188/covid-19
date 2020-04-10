//console.log(labelsValue Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
var labelsKey = []
var labelsValue = []
var totalView = 5;
$(function() {
 $("#selectTagId").change(function(){
	demo123();
});});
 
 $(document).ready(function() {
    demo123();
});
 
 function demo123()
 {

totalView = $("#selectTagId option:selected").text();

$.getJSON( "http://10.192.70.171:5000/allSubmissionResultForChart", function( data ) {
for ( var property in data ) {
    
  labelsKey.push("iguana "+property);
  labelsValue.push(parseInt(data[property])); 
 
  
  // Outputs: foo, fiz or fiz, foo
  
}

var maxHeightSize = labelsValue.slice(labelsKey.length-10,labelsKey.length);
// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    //labels: ["Product-Family-ui","AssociativeStructureBrowser","CommonComponents-firefox","ModelStructureReport-firefox","WorkPackage-firefox"],
    //labels: ["Iguana 100","Iguana 101","Iguana 102","Iguana 103","Iguana 104"],
	labels: labelsKey.slice(labelsKey.length-10,labelsKey.length),
    datasets: [{
      label: "Total Submission Found",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: labelsValue.slice(labelsKey.length-10,labelsKey.length),
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 15
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: Math.round(Math.max.apply(Math,maxHeightSize) / 50) * 50+50,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
 //console.log(labelsValue);
});			
}
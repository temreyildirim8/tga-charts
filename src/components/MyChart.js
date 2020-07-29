import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

let options = {
  title: {
    /*
    Change this title text to something else if the last element of the data array is even.
    If the last element is not even, then keep the title text 'My Chart'.
    It should be updated on every randomization/change on data.
    */
    text: 'My chart'
  },
  series: [{
    allowPointSelect: true,
    data: [1, 2, 3]  // Create this data randomly inside App componnet and use it here to plot the chart.
  }],
  plotOptions: {
    series: {
      point: {
        events: {
          select: (item) => {
            /* 
            Selected value can be viewed on browser console with the help of next line.
            It needs to be visible to the user without opening web console.
            Current <MyChart> component is NOT the right place to represent it.
            <App> component will receive it and display and update it on every click.
            */
            console.log(item.target.y) 
          }
        }
      }
    }
  }
}
 
let mychart = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>
 
export default mychart;                                                                                                                                                                                                                                                                  
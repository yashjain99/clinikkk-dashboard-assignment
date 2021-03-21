import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';
import styles from "./Graph.module.css";

const dataPoints = [
    {
        x: new Date(2021,3,5),
        y: 0
    },
    {
        x: new Date(2021,3,6),
        y: 1.5
    },    
    {
        x: new Date(2021,3,7),
        y: 2.5
    },    
    {
        x: new Date(2021,3,8),
        y: 1
    },    
    {
        x: new Date(2021,3,9),
        y: 4
    },
    {
        x: new Date(2021,3,10),
        y: 3
    },
    {
        x: new Date(2021,3,11),
        y: 2
    },
]

export function Graph() {

    const options = {
        animationEnabled: true,
        height: 250,
        axisX: {
            valueFormatString: "DDD",
            labelFontSize: 15,
            labelFontWeight: 900
        },
        data: [{
            type: "spline",
            lineColor: "black",
            color: "black",
            labelFontSize: 15,
            labelFontWeight: 900,
            dataPoints: dataPoints
        }]
    }

    return (
        <div>
            <div className = { styles.displayGridStats }  >
                <div className = { styles.displayGridStats } >
                    <div>
                        <strong>
                            Learning hours
                        </strong>
                    </div>
                    <div>
                        My courses
                    </div>
                </div>
                <div>
                    <select >
                        <option value = "weekly" >
                            Weekly
                        </option>
                        <option value = "monthly" >
                            Monthly
                        </option>
                    </select>
                </div>
            </div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

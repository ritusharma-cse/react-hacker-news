import React from 'react';
import {LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line,ResponsiveContainer} from "recharts";
import './style.css';
const Chart = (props) => {

    return (
        <div className="chart">
            {!props.payload.loading &&
                <ResponsiveContainer width='95%' height={500}>
                    <LineChart LineChart
                        width={1024}
                        height={350}
                        data={props.payload.hits}
                        margin={{ top: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="objectID" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="points" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

export default Chart;
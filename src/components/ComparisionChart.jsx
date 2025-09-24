import React from 'react';
import {BarChart, Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

function ComparisonChart({data}){
    return(
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDashArray="3 3" />
            <XAxis dataKey="subject"/>
            <YAxis domain={[0,100]}/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="score" fill="#82ca9d" name="Rohan's Score"/>
            <Bar dataKey="avg" fill="#8884d8" name="classAverage"/>

        </BarChart>
    );
}

export default ComparisonChart;
import React,{useState,useEffect} from "react";
import { fetchDailyData } from "../../api";
// react charts api
import {Line,Bar} from "react-chartjs-2";
// charts css
import styles from "./Chart.module.css";
import { red } from "@material-ui/core/colors";
const Chart=({ data:{confirmed,recovered,deaths},country })=>{
    const [dailyData, setDailyData]=useState([]);//works setstate

    useEffect(()=>{
        const fetchAPI=async() =>{
            // const dailyData = await fetchDailyData();
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchAPI();
    },[]);
    const lineChart=(
        (dailyData.length!==0) 
        ?(<Line
            data={{
                labels: dailyData.map(({ date })=> date),//i=>i.date
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:"Infected",
                    borderColor:"#206a5d",
                    fill:true,
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:"Deaths",
                    borderColor:"#e23e57",
                    backgroundColor:"rgba(255,0,0,0.5)",
                    fill:true,
                }],
            }}
        />):null
    );    
    // console.log(confirmed,recovered,deaths);
    const barChart=(
        confirmed
        ?(<Bar 
            data={{
                labels:["Infected","Recovered","Deaths"],
                datasets:[{
                    label:"People",
                    backgroundColor:['#206a5d','#81b214','#8f0d20'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            option={{
                legend:{display: false},
                title: {display:true,text:`Current state in ${country}`},

            }}
        />):null
    );
    return(
        <div className={styles.container}>
            {country?barChart:lineChart}
        </div>
    )
}

export default Chart;
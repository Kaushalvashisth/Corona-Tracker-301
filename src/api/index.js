import axios from "axios";
import { logDOM } from "@testing-library/react";

// api url
const url="https://covid19.mathdro.id/api";

export const fetchData=async (country)=> {
    let changableUrl=url;
    if(country){
        changableUrl=`${url}/countries/${country}`

    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(changableUrl);
        const modifiedData={confirmed,recovered,deaths,lastUpdate,};
        return modifiedData;
        // console.log(response);
    }catch(error){
        console.log(error);
    }
}

export const fetchDailyData=async()=>{
    try {
        const {data}=await axios.get(`${url}/daily`);
        const modifiedData2=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }))
        return modifiedData2;
    }catch(error){
        console.log(error);
    }
}

export const fetchCountries=async()=>{
    try{
        const {data: {countries}} =await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    } catch(error){
        console.log(error);
    }
}
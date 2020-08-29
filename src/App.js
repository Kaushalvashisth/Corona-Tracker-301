import React from "react";

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";
import coronaImage from "./images/image2.png"


class App extends React.Component {
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();//using {} directly takes data from object;
        this.setState({ data:fetchedData});
    }

    handleCountryChange = async(country)=>{
        const fetchedData =await fetchData(country);
        // console.log(country);
        // console.log(fetchedData);
        // set state
        this.setState({data:fetchedData,country:country});
    }
    render() {
        //get data from state object by variable name as data;
        const {data ,country}=this.state; 

        return (
            <div className={styles.container}>
                <div className={styles.imgBox}>
                    <img className={styles.image} src={coronaImage}/>
                </div>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <footer className={styles.footerStyle}><a href="https://github.com/Kaushalvashisth/Corona-Tracker-301">Feel free to give &#9733; on Github</a></footer>
                <footer className={styles.footerStyle2}> Big &#10084; Kaushal</footer>
            </div>
        )
    }
}

export default App;
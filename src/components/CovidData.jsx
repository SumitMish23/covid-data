import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './covidData.css';
<link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>



const CovidData=()=>{
    const [data,setData]=useState([]);
    const getcovidData=async()=>{
        const res=await fetch(("http://disease.sh/v3/covid-19/countries"));
        const actualData=await res.json();
        setData(actualData);
        console.log(actualData);

    }
    useEffect(()=>{
        getcovidData();
        },[]);
    return (
        <>
       
        <div className="container-fluid mt-5">
            <div className="main-heading align-items-center titlename">
                <h1 className='mb-5 font-weight-bold'> COVID-19 DASHBOARD</h1>
            </div>
            <div className='table-rresponsive'>
                <table  className=" mt-2 table table-light table-hover table-striped table-bordered">
                    <thead className=' table-dark'>
                        <tr>
                            <th>Country</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                            <th>Last Updated</th>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            data.map((currElem,ind)=>{
                                return(
                                    <tr>
                                    <td>{currElem.country}</td>
                                    <td>{currElem.cases}</td>
                                    <td className='death'>{currElem.deaths}</td>
                                    <td>{currElem.recovered}</td>
                                    <td>{currElem.updated}</td>
        
                                </tr>
                                )

                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default CovidData;
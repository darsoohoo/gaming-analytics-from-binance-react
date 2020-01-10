import React, { useState, useEffect } from 'react';
import './Landing.css';
import { getRecommendations } from "./apiCore";


const Landing = () => {
  
        const [recommendationsByArea, setRecommendationsByArea] = useState([])
        const [recommendationsByZone, setRecommendationsByZone] = useState([])
        const [error, setError] = useState(false);

        const loadRecommendationsByArea = () => {
            getRecommendations('Area').then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setRecommendationsByArea(data)
                }
            })
        }

        const loadRecommendationsByZone = () => {
            getRecommendations('Zone').then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setRecommendationsByZone(data)
                }
            })
        }
        
        useEffect(() => {
            loadRecommendationsByZone()
            loadRecommendationsByArea()
        }, [])




        return (
            <section className="digital-assets">
                <section className="digital-assets">
                    <table className="mdl-data-table mdl-js-data-table mdl-button--colored" >
                        <thead>
                            <th className="asset">Asset</th>
                            <th className="area">Area</th>
                            <th className="zone">Zone</th>
                            <th className="bank">Bank</th>
                            <th className="stand">Stand</th>
                            <th className="netwin">Net Win</th>
                            <th className="old-denom">Old Denom</th>
                            <th className="new-denom">New Denom</th>
                            <th className="old-payback-pct">Old Payback Percentage</th>
                            <th className="new-payback-pct">New Payback Percentage</th>
                            <th className="date">Date</th>
                        </thead>
                        <tbody>
                            {recommendationsByArea
                            .map(item => (
                                <tr>
                                <td key={item.Asset}>{item.Asset}</td>
                                <td>{item.Area}</td>
                                <td>{item.Bank}</td>
                                <td>{item.Zone}</td>
                                <td>{item.Stand}</td>
                                <td>{item.NetWin}</td>
                                <td>{item.OldDenom}</td>
                                <td>{item.NewDenom}</td>
                                <td>{item.OldPaybackPct}</td>
                                <td>{item.NewPaybackPct}</td>
                                <td>{item.Date}</td>
                                </tr>
                            ))}
                       </tbody>
                    </table>

                </section>
            </section>
        );
    }




export default Landing;

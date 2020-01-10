import React, { useState, useEffect } from 'react';
import './Table.css';
import { getRecommendations } from "./apiCore";


const Table = () => {
  
        const [recommendations, setRecommendations] = useState([])
        const [sortBy, setSortBy] = useState([])
        const [direction, setDirection] = useState([])
        const [error, setError] = useState(false);



        const loadRecommendations = () => {
            getRecommendations().then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setRecommendations(data)
                }
            })
        }

        const sort = (key) => {
            getRecommendations().then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    data = data.sort(( a, b) => (
                        direction[key] === 'asc'
                        ? parseFloat(a[key]) - parseFloat(b[key])
                        : parseFloat(b[key]) - parseFloat(a[key])
                    ))
                    setRecommendations(data)
                }
            })
        }

        useEffect(() => {
            loadRecommendations()
            sort()
        }, [])

        return (
            <section className="digital-assets">
                <section className="digital-assets">
                    <table className="mdl-data-table mdl-js-data-table mdl-button--colored" >
                        <thead>
                            <th className="asset">Asset</th>
                            <th className="area">
                                <button onClick={() => sort}>
                                    Area
                                </button>
                            </th>
                            <th className="zone">
                                <button>
                                    Zone
                                </button>
                            </th>
                            <th className="bank">
                                <button onClick={() => sort}>
                                    Bank
                                </button>
                            </th>
                            <th className="stand">Stand</th>
                            <th className="netwin">Net Win</th>
                            <th className="old-denom">Old Denom</th>
                            <th className="new-denom">New Denom</th>
                            <th className="old-payback-pct">Old Payback Percentage</th>
                            <th className="new-payback-pct">New Payback Percentage</th>
                            <th className="date">Date</th>
                        </thead>
                        <tbody>
                            {recommendations
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




export default Table;

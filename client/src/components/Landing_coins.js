import React, { Component } from 'react';
import './Landing.css';
import axios from 'axios';





const btcLogo = <img height="56px" width="56px" src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="bitcoin logo"/>
const ethLogo = <img height="56px" width="56px" src="https://dynamic-assets.coinbase.com/7796fb1bd5752a156c77e0b1fa28fb17e93d03b4b8e2dcff58dcaf8f99b2e4a3c3af2cd905d5536761c54ac273d62d91a38ef8e5702fa988c37264e7aba36b3b/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png" alt = "ethereum logo"/>
const xrpLogo = <img height="56px" width="56px" src="https://static.coingate.com/images/currencies/256x256/xrp-edited.png" alt = "xrp logo"/>
const defaultLogo = <img src="http://www.w3.org/2000/svg" alt="default logo"/>


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: [],
            isLoaded: false,
            };
        }

        componentDidMount() {
            axios.get('/recommendations')
            .then(res => {
                console.log(res.data)
                const results = res.data;
                this.setState({ items: results, isLoaded: true })
                
            })
            .catch(e => { 
                console.log(`An error occurred: ${e}`); 
            });
        }

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {

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
                            {items
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
    }
}


export default Landing;

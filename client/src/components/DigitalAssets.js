import React, { Component } from 'react';
import './DigitalAssets.css';
import axios from 'axios';





const btcLogo = <img height="56px" width="56px" src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="bitcoin logo"/>
const ethLogo = <img height="56px" width="56px" src="https://dynamic-assets.coinbase.com/7796fb1bd5752a156c77e0b1fa28fb17e93d03b4b8e2dcff58dcaf8f99b2e4a3c3af2cd905d5536761c54ac273d62d91a38ef8e5702fa988c37264e7aba36b3b/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png" alt = "ethereum logo"/>
const xrpLogo = <img height="56px" width="56px" src="https://static.coingate.com/images/currencies/256x256/xrp-edited.png" alt = "xrp logo"/>
const defaultLogo = <img src="http://www.w3.org/2000/svg" alt="default logo"/>


class DigitalAssets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            };
        }

        componentDidMount() {
            axios.get('https://api.binance.com/api/v1/ticker/24hr')
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
                            <th className="item"></th>
                            <th className="name">Name</th>
                            <th className="description">Description</th>
                            <th className="price">Price</th>
                            <th className="add">Add to cart</th>
                        </thead>
                        <tbody>
                            {items
                            .filter(item => item.symbol === 'BTCUSDT' || item.symbol === 'ETHUSDT' || item.symbol === 'XRPUSDT')
                            .map(item => (
                                <tr>
                                <td>
                                {(() => {
                                    switch (item.symbol) {
                                    case "BTCUSDT":   return btcLogo;
                                    case "ETHUSDT": return ethLogo;
                                    case "XRPUSDT":  return xrpLogo;
                                    default:      return defaultLogo;
                                    }
                                })()}




                            </td>
                                <td key={item.symbol}>{item.lastPrice}</td>
                                <td>This is {item.symbol}</td>
                                <td id="eth-price">{item.lastPrice}</td>
                                <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="addEthereum()" type="button">Buy</button></td>
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


export default DigitalAssets;

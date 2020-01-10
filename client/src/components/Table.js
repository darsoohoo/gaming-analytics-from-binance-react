import React, { Component } from 'react'
import './Table.css'

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          sortType: 'asc'
        };
      }


      componentDidMount() {
        fetch('/recommendations')
          .then(res => res.json())
          .then(items =>
            this.setState({ items: items, isLoaded: true }, () =>
              console.log('Items fetched...', items)
            )
          )
          .catch(e => {
            console.log(`An error occured: ${e}`);
          });
      }

      onSort = sortType => {
          this.setState({sortType});
      }


    render() {

        const { items, sortType } = this.state;
        const sorted = items.sort( (a, b) => { 
            const isReversed = sortType === 'asc' ? 1 : -1;
            return isReversed * a.Action.localeCompare(b.Action)
        })
        return (
            <section className="digital-assets">
                <section className="digital-assets">
                    <table className="mdl-data-table mdl-js-data-table mdl-button--colored" >
                        <thead>
                            <th className="asset">Asset</th>
                            <th className="action">
                                <button onClick={() => this.onSort('asc')}>
                                    Asc Action
                                </button>
                                <button onClick={() => this.onSort('desc')}>
                                    Desc Action
                                </button>
                            </th>
                            <th className="recommendation-status">
                                <button>
                                    Recommendation Status
                                </button>
                            </th>
                            <th className="area">
                                <button>
                                    Area
                                </button>
                            </th>
                            <th className="zone">
                                <button>
                                    Zone
                                </button>
                            </th>
                            <th className="bank">
                                <button>
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
                            {items
                            .map(item => (
                                <tr>
                                <td key={item.Asset}>{item.Asset}</td>
                                <td>{item.Action}</td>
                                <td>{item.RecommendationStatus}</td>
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
        )
    }
}

export default Table;
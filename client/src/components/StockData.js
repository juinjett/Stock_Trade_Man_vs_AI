import React, { Component } from 'react';

class StockData extends Component {
  render() {
    let stockDataJSX = [];
    const userStockData = this.props.userStockData;
    const mlStockData = this.props.mlStockData;
    const buys = this.props.buys;
    const sells = this.props.sells;
    if (this.props.svgJSX.length > 0) {
      stockDataJSX.push(<p><span style={{"color":"white"}}> You have {userStockData.currentStocks} stocks plus cash worth a total of ${(parseFloat(userStockData.currentStockValue) + parseFloat(userStockData.bank)).toFixed(2)}</span></p>);
      stockDataJSX.push(<p><span style={{"color":"white"}}> You have {userStockData.currentBuys} {buys} and {userStockData.currentSells} {sells} left</span></p>);
      stockDataJSX.push(<p><span style={{"color":"white"}}> AI has {mlStockData.currentBuys} {buys} and {mlStockData.currentSells} {sells} left</span></p>);
    }
    return (
      <div>
        {stockDataJSX}
      </div>
    )
  }
}

export default StockData

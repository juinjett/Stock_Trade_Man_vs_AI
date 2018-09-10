import React, { Component } from 'react';

class Podium extends Component {
  render() {

    var podiumJSX = [];
    let podium = this.props.podium;
    let mlStockData = this.props.mlStockData;
    let userStockData = this.props.userStockData;
    let lastStockPrice = this.props.lastStockPrice;

    podiumJSX.push(<br />);
    if (this.props.currentData.length > 0 && this.props.data.length === this.props.currentData.length && !this.props.gettingNewStock) {
      if (podium[0].name == "User") {
        podiumJSX.push(
          <div className="podium">
            <p><span style={{"font-weight":"bold", "color":"green"}}>Winner Winner Chicken Diner! </span></p>
          </div>
        )
      }
      else {
        podiumJSX.push(
          <div className="podium">
            <p><span style={{"font-weight":"bold", "color":"red"}}>Better Luck Next Time. Please Try Again! </span></p>
          </div>
        )
      }
      podiumJSX.push(
        <div className="podium">
          <p><span style={{"font-weight":"bold", "color":"white"}}>1st {podium[0].name}: ${podium[0].stockValue.toFixed(2)}</span></p>
          <p><span style={{"font-weight":"bold", "color":"white"}}>2nd {podium[1].name}: ${podium[1].stockValue.toFixed(2)}</span></p>
          <p><span style={{"font-weight":"bold", "color":"white"}}>3rd {podium[2].name}: ${podium[2].stockValue.toFixed(2)}</span></p>
        </div>
      );
      podiumJSX.push(
        <div className="podium">
          <p><span style={{"color":"white"}}>User</span></p>
          <p><span style={{"color":"white"}}>buy1: ${userStockData.userBoughtList[0].toFixed(2)} sell1: ${userStockData.userSoldList[0].toFixed(2)}</span></p>
          <p><span style={{"color":"white"}}>buy2: ${userStockData.userBoughtList[1].toFixed(2)} sell2: ${userStockData.userSoldList[1].toFixed(2)}</span></p>
          <p><span style={{"color":"white"}}>buy3: ${userStockData.userBoughtList[2].toFixed(2)} sell3: ${userStockData.userSoldList[2].toFixed(2)}</span></p>
        </div>
      );
      podiumJSX.push(
        <div className="podium">
          <p><span style={{"color":"white"}}>AI</span></p>
          <p><span style={{"color":"white"}}>buy1: ${mlStockData.mlBoughtList[0].toFixed(2)} sell1: ${mlStockData.mlSoldList[0].toFixed(2)}</span></p>
          <p><span style={{"color":"white"}}>buy2: ${mlStockData.mlBoughtList[1].toFixed(2)} sell2: ${mlStockData.mlSoldList[1].toFixed(2)}</span></p>
          <p><span style={{"color":"white"}}>buy3: ${mlStockData.mlBoughtList[2].toFixed(2)} sell3: ${mlStockData.mlSoldList[2].toFixed(2)}</span></p>
        </div>
      );
    }

    return (
      <div className="podium-container">
        {podiumJSX}
      </div>
    );
  }
}

export default Podium;

import React from "react";

function GamePlayers(props) {
  const { players } = props
  const playersArrey =players && players.map(player => {
    return <li key={player.id}>{player.name}</li>
  })
  return (
    <div>
      <h1>Players in this game:</h1>
      <ul>{playersArrey}</ul>
      <h3>Want to play with them?</h3>
      <p>Click on the 'join game' buttun and see your name on the list</p>
      <p>When you have enought players click on 'start game' and start playing!</p>
      <button onClick={props.onJoin}>Join Game</button>
      <button onClick={props.onStart}>Start Game</button>
    </div>
  )  
}

export default GamePlayers


// const { products } = props
// const productsArray = products && products.map(product => {
//     return <li key={product.id}>
//         <Link to={`/products/${product.id}`} >
//               <p>Title: {product.title}</p>
//               <p>Price: {product.price}</p>
//               <br/>
//         </Link>
//     </li>
// })  

// return (<div>
//     <h1>Buy and Sell</h1>
//     <p>What would you like to buy?</p>
//     {!props.products && 'Loading...'}
//     <ul>
//     {productsArray}
//     </ul>
//     </div>)
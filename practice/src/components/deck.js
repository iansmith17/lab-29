import React from 'react';
import Card from './card';

const Deck = (props) => {
  return (
    <>
    <section className="deck">
        <header><h2>{props.data.title}</h2></header>
      </section>
    {props.data.records.forEach(card => (
      <Card data={card} />
    ))}
    </>
  )
}

export default Deck;
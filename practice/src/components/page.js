import React from 'react';

import Deck from './deck';

const Page = (props) => {

  const content = props.content || [];

  return (
    <>
      {content.forEach(deck => (
        <Deck data={deck} />
    ))}

      {/* {content.map( (deck,i) => (

        <section className="deck">
           <header><h2>{deck.title}</h2></header>

          {deck.records.map( (card) =>

            <div className="card">
              <header><h3>{card.title}</h3></header>
              <div className="content">{card.copy}</div>
              <figure>
                <img src={card.media.href} alt={card.media.alt} />
                <figcaption>{card.media.title}</figcaption>
              </figure>
              <nav className="links">
                <ul>
                  {card.links.map( (link,i) => (
                    <li key={i}><a className={link.type} href={link.href} title={link.title}>{link.title}</a></li>
                  ))}
                </ul>
              </nav>
            </div>

          )}

        </section>

                  ))} */}
    </>
  );
};

export default Page;

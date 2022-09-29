import * as React from 'react';
import './HighlightedProjects.css';
import { Link } from "react-router-dom";

import { SocialIcon } from 'react-social-icons';

const ExpandingCards = ({data}) => {
  const [activeId, setActiveId] = React.useState(1)

  const onClick = (id) => setActiveId(id);

  return (
    <div className="container">
      {
        data.map(card => (
          <div
            key={card.id}
            className={`panel ${activeId === card.id ? 'active' : ''}`}
            onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.url})` }}>
            <h3 className={`${activeId === card.id ? '' : 'vertical'}`}>
              {card.title}
              {activeId === card.id ? 
                <SocialIcon url="https://github.com/borchand" target="_blank" fgColor="#F4F9F9" className="github"/> 
                : null
              }
            </h3>
            {activeId === card.id ? 
              <div className="description">
                <Link to="/markdown">
                  Read more
                </Link>
              </div>
            : null}


          </div>
        ))
      }
    </div>
  )
}

export default ExpandingCards;
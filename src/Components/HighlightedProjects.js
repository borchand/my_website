import * as React from 'react';
import './HighlightedProjects.css';
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
              <SocialIcon url="https://github.com/borchand" fgColor="#F4F9F9" className="github"/> :
              null
              }
            </h3>
          </div>
        ))
      }
    </div>
  )
}

export default ExpandingCards;
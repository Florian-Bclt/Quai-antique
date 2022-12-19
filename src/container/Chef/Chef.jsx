import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt='chef' />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Les paroles du Chef" />
      <h1 className='headtext__cormorant'>Ce qui nous motive</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel, nam tenetur commodi consectetur molestias in est facilis laudantium officiis libero iure atque obcaecati excepturi sit eveniet mollitia minima iusto.</p>
      </div>
      <div className="app__chef-sign">
        <p>Florian Bouclet</p>
        <p className='p__opensans'>Chef et Fondateur</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

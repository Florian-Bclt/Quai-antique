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
          <p className='p__opensans'>Ce qui me plait c'est avant tout de vous faire plaisir !</p>
        </div>
        <p className='p__opensans'>Passionné de cuisine depuis toujours, j'ai pu réaliser mon rêve qui était d'ouvrir un restaurant étoilé. Satisfait, je souhaite revenir à une cuisine plus traditionnelle. Amoureux de la Savoie, j'ai choisi de m'installer à Chambéry pour cuisiner ses recettes incontournables.</p>
      </div>
      <div className="app__chef-sign">
        <p>Arnaud Michant</p>
        <p className='p__opensans'>Chef et Fondateur</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

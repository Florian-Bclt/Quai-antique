import React from 'react';
import { images } from '../../constants'
import { MenuItem, SubHeading } from '../../components'
import './SpecialMenu.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphQl/queries';

const SpecialMenu = () => { 
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;

  const winesProducts = data.productsPagination.nodes.filter((product) => product.category === 'wines');
  const cocktailsProducts = data.productsPagination.nodes.filter((product) => product.category === 'cocktails');
  
  return (
    <div className="app__specialMenu flex__center section__padding" id='menu'>
      <div className="app__specialMenu-title">
        <SubHeading title="Parce qu'ils accompagnent nos plats" />
        <h1 className='headtext__cormorant'>Nos boissons</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className='app__specialMenu-menu_heading'>Vins</p>
          <div className="app__specialMenu_menu_items">
            {winesProducts.map((product) => (
              <MenuItem 
                key={product.id} 
                title={product.title} 
                price={product.price} 
                tags={product.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt='menu img' />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {cocktailsProducts.map((product) => (
              <MenuItem 
                key={product.id} 
                title={product.title} 
                price={product.price} 
                tags={product.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: "15px"}}>
        <button type='button' className='custom__button'><Link to='/cart' style={{ color: 'unset' }}>Découvrir la carte</Link></button>
      </div>
    </div>
  );
}
export default SpecialMenu;

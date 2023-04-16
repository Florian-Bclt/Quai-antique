import React, { useRef } from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';
import { Link } from 'react-router-dom';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06]

const Gallery = () => {
  // const { loading, error, data } = useQuery(GET_IMAGES, {
  //   variables: { category: "gallery" },
  // });

  // if (loading) return <div>loading...</div>;
  // if (error) return <div>Sorry an error occured {error}</div>;
  // if (!data) return <div>No data !</div>;

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title='Galerie' />
        <h1 className='headtext__cormorant'>Quelques douceurs</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>
          Laissez-vous tenter par nos plats régionnaux à base de produits locaux. Retrouvez un aperçu des chefs d'oeuvres de notre cuisine.
        </p>
        <button type='button' className='custom__button'><Link to='/reservation'>Réserver</Link></button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${ index + 1 }`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
};

export default Gallery;

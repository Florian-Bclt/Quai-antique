import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { images } from '../../constants';
import { useQuery } from '@apollo/client';
import { GET_ALL_MENUS } from '../../graphQl/queries';
import './Menu.css';

function Menu() {
  const { loading, error, data } = useQuery(GET_ALL_MENUS);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Erreur :</p>

  return (
    <>
    <Navbar />
      <div className="app__wrapper app__bg flex__center section__padding">
        <div className="p__cormorant app__wrapper-menu flex__center">
          {data.getAllMenus.map((menu, index) => (
            <div className='menu__wrapper' key={menu.id}>
              <h1>
                {index === 0 ? <span>{menu.title}* /</span> : menu.title} {menu.price}€
              </h1>
              {index === 0 && <h5>Entrée + Plat ou Plat + Dessert<span>*</span> / Entrée + Plat + Dessert</h5>}
              {index === 0 && <h6><span>*</span>uniquement le midi, du mardi au vendredi, hors jours fériés</h6>}
              {index === 1 && <h5>Entrée + Plat + Dessert</h5>}
              {index === 1 && <h6></h6>}
                <ul>
                  {menu.entries.map((entry) =>(
                    <li key={entry.title}>
                      <h2>{entry.title}</h2>
                      <p>{entry.description}</p>
                    </li>
                  ))}
                </ul>
                <img src={images.spoon} alt='about_spoon' className='spoon__img' />
                <ul>
                  {menu.mainCourses.map((mainCourse) => (
                    <li key={mainCourse.title}>
                      <h2>{mainCourse.title}</h2>
                      <p>{mainCourse.description}</p>
                    </li>
                  ))}
                </ul>
                <img src={images.spoon} alt='about_spoon' className='spoon__img' />
                <ul>
                  {menu.desserts.map((dessert) => (
                    <li key={dessert.title}>
                      <h2>{dessert.title}</h2>
                      <p>{dessert.description}</p>
                    </li>
                  ))}
                </ul>
            </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Menu
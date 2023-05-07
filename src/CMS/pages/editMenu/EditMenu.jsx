import React from 'react'
import './EditMenu.css'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useQuery } from '@apollo/client';
import { GET_ALL_MENUS } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton';
import DeleteButton from '../../components/Buttons/DeleteButton';

const EditMenu = () => {
  const { loading, error, data } = useQuery(GET_ALL_MENUS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Erreur :</p>;

  const { getAllMenus } = data;
  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Le Menu</h1>
        </div>

      <table>
        <thead>
          <tr>
            <th>Nom du menu</th>
            <th>Prix</th>
            <th>Entrées</th>
            <th>Plats</th>
            <th>Desserts</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
            {getAllMenus.map(menu => (
              <tr key={menu.id}>
                <td>{menu.title}</td>
                <td>{menu.price}</td>
                <td className='table__menu'>
                  <ul>
                    {menu.entries.map((entry, index) => (
                      <li key={index}>{entry.title}</li>
                    ))}
                  </ul>
                </td>
                <td className='table__menu'>
                  <ul>
                    {menu.mainCourses.map((course, index) => (
                      <li key={index}>{course.title}</li>
                    ))}
                  </ul>
                </td>
                <td className='table__menu'>
                  <ul>
                    {menu.desserts.map((dessert, index) => (
                      <li key={index}>{dessert.title}</li>
                    ))}
                  </ul>
                </td>
                <td className='action__column'>
                  <EditButton to={`/dashboard/edit-menu/${menu.id}`}/>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EditMenu
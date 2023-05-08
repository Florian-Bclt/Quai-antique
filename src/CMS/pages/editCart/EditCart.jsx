import React from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'

const EditCart = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;

  const cartProducts = data.productsPagination.nodes.filter((product) => product.category === 'cart');
  const beerProducts = data.productsPagination.nodes.filter((product) => product.category === 'beer');
  const softProducts = data.productsPagination.nodes.filter((product) => product.category === 'soft');
  const winesProducts = data.productsPagination.nodes.filter((product) => product.category === 'wines');
  const cocktailsProducts = data.productsPagination.nodes.filter((product) => product.category === 'cocktails');

  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>La Carte</h1>
        </div>

        <div className="productsTable">
      <div className="productsTable__category">
        <table>
          <thead>
            <tr>
              <th>Plats à la Carte</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td className='product__title'>{product.title}</td>
                <td>{product.price}</td>
                <td className='action__column'>
                  <EditButton to={`/dashboard/edit-cart/${product.id}`}/>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="productsTable__category">
        <table>
          <thead>
            <tr>
              <th>Vins</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {winesProducts.map((product) => (
              <tr key={product.id}>
                <td className='product__title'>{product.title}</td>
                <td>{product.price}</td>
                <td className='action__column'>
                  <EditButton to={`/dashboard/edit-cart/${product.id}`}/>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="productsTable__category">
        <table>
          <thead>
            <tr>
              <th>Cockails</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cocktailsProducts.map((product) => (
              <tr key={product.id}>
                <td className='product__title'>{product.title}</td>
                <td>{product.price}</td>
                <td className='action__column'>
                  <EditButton to={`/dashboard/edit-cart/${product.id}`}/>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="productsTable__category">
        <table>
          <thead>
            <tr>
              <th>Bières</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {beerProducts.map((product) => (
              <tr key={product.id}>
                <td className='product__title'>{product.title}</td>
                <td>{product.price}</td>
                <td className='action__column'>
                  <EditButton to={`/dashboard/edit-cart/${product.id}`}/>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="productsTable__category">
        <table>
          <thead>
            <tr>
              <th>Softs</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {softProducts.map((product) => (
              <tr key={product.id}>
                <td className='product__title'>{product.title}</td>
                <td>{product.price}</td>
                <td className='action__column'>
                  <EditButton to={`/dashboard/edit-cart/${product.id}`}/>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </>
    )
}

export default EditCart
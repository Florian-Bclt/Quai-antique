import React, {useState} from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'
import { PRODUCTS_CREATE, PRODUCTS_DELETE } from '../../../graphQl/mutations';

const EditCart = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [productsCreate] = useMutation(PRODUCTS_CREATE, {
    refetchQueries: [{ query: GET_PRODUCTS}],
  });
  const [productsDelete] = useMutation(PRODUCTS_DELETE, {
    refetchQueries: [{ query: GET_PRODUCTS }]
  });
  const [message, setMessage] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;

  const cartProducts = data.productsPagination.nodes.filter((product) => product.category === 'cart');
  const beerProducts = data.productsPagination.nodes.filter((product) => product.category === 'beer');
  const softProducts = data.productsPagination.nodes.filter((product) => product.category === 'soft');
  const winesProducts = data.productsPagination.nodes.filter((product) => product.category === 'wines');
  const cocktailsProducts = data.productsPagination.nodes.filter((product) => product.category === 'cocktails');

  const handleCreateModalOpen = () => {
    setShowCreateModal(true);
  };

  const handleCreateModalClose = () => {
    setShowCreateModal(false);
  };

  const handleCreateFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await productsCreate({
        variables: {
          title: title,
          price: price,
          tags: tags,
          category: category
        }});

        const createdProduct = data.productsCreate.products;
        console.log(createdProduct);
        setTitle('');
        setPrice(0);
        setTags('');
        setCategory('');
      // Cacher la modale de création
      setShowCreateModal(false);
      // Afficher un message de confirmation
      setMessage('Le produit a été créé avec succès.');
    } catch (error) {
      // Afficher un message d'erreur
      setMessage("Une erreur s'est produite lors de la création du produit");
      console.log(error.graphQLErrors);
    }
  };

  
  const handleDelete = async (productsId) => {
    setShowConfirmationModal(true);
    setSelectedProductId(productsId);
   };

   const confirmDelete = async (productsId) => {
    try {
      await productsDelete({
        variables: {
          id: productsId,
        },
      });
    // Affiche un message de confirmation
    setMessage("Le produit a été supprimé avec succès.");
    setShowConfirmationModal(false);
  } catch (error) {
    // Affiche un message d'erreur
    setMessage("Une erreur s'est produite lors de la suppresion du produit")
    console.log(error.graphQLErrors)
    }
  }

  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>La Carte</h1>
        </div>
        <button className='dashboard__button' onClick={handleCreateModalOpen}>
            Ajouter un produit
        </button>
        {message && (
          <p className={message.includes('succès') ? 'success-message' : 'error-message'}>
            {message}
          </p>
        )}

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
                    <DeleteButton onClick={() => handleDelete(product.id)}/>
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
                    <DeleteButton onClick={() => handleDelete(product.id)}/>
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
                    <DeleteButton onClick={() => handleDelete(product.id)}/>
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
                    <DeleteButton onClick={() => handleDelete(product.id)}/>
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
                    <DeleteButton onClick={() => handleDelete(product.id)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

{/* MODAL de CREATION DE PRODUIT */}
      {showCreateModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content create_modal">
            <h2>Créer un produit</h2>
            <form onSubmit={handleCreateFormSubmit}>
              <div>
                <label htmlFor="title">Nom du produit:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price">Prix:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="tags">Description:</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="category">Catégorie:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="buttons">
                <button type="submit" className="confirm-btn">Créer</button>
                <button type="button" className="cancel-btn" onClick={handleCreateModalClose}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

{/* MODAL DE SUPPRESSION DE PRODUIT*/}
      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <p>Êtes-vous sûr de vouloir supprimer ce produit ?</p>
            <div className='buttons'>
              <button className='confirm-btn' onClick={() => confirmDelete(selectedProductId)}>Confirmer</button>
              <button className='cancel-btn' onClick={() => setShowConfirmationModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditCart
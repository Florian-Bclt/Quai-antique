import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { images } from '../../constants';
import './Menu.css'

function Menu() {
  return (
    <>
    <Navbar />
      <div className="app__wrapper app__bg flex__center section__padding">
        <div className="p__cormorant app__wrapper-menu flex__center">
          <h1>Menu Découverte 25€<span>*</span> / 36€</h1>
          <h5>Entrée + plat ou plat + dessert<span>*</span> / Entrée + plat + dessert</h5>
          <h6><span>*</span>uniquement le midi, du lundi au vendredi, hors jours fériés</h6>
            <h2>Maquereau</h2>
              <p>A la flamme, avocat, betterave en 2 façons vinaigrettes agrumes/soja</p>
            <h2>Joue de boeuf</h2>
              <p>Ravioles de joue de boeuf confite, fondue de poireaux, bouillon truffé</p>
            <h2>Oeuf mollet</h2>
              <p>Velouté de courge truffé, oeuf mollet frit, poudre de lard fumé, croûtons, ail noir</p>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
            <h2>Poulet fermier</h2>
              <p>Suprême de poulet, crosmesquis d'aubergine rôti, pomme de terre au BBQ, jus corsé</p>
            <h2>Agneau</h2>
              <p>Côtelettes d'agneau, mille-feuille de pomme de terre, échalote confite, poivron grillé, jus aux herbes</p>
            <h2>Lieu jaune</h2>
              <p>Juste nacré, chou-fleur, fenouil croquant, bisque de langoustine</p>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
            <h2>Poire</h2>
              <p>Poire pochée au poivre timut, financier fève de tonka, ganache chocolat caramel, sorbet poire</p>
            <h2>tarte citron</h2>
              <p>Tarte citron meringuée, sorbet yuzu/coriandre</p>
            <h2>Banane</h2>
              <p>Tube croquant, mousse chocolat/caramel, banane flambée, sorbet rhum ambré/banane</p>
        </div>
        <div className="p__cormorant app__wrapper-menu">
          <h1>Menu authAntique 46€</h1>
          <h5>Entrée + plat + dessert</h5>
          <h6></h6>
            <h2>Foie gras</h2>
              <p>Pressé de foie gras marbré, magret de canard fumé, cerises confites, jus réduit au porto</p>
            <h2>Langoustine</h2>
              <p>Langoustines rôties, fine ratatouille, tuile de riz, rouille, bisque</p>
            <h2>Veau</h2>
              <p>Carpaccio de veau, comme un vitel tone, artichaut poivrade, pickles oignon, câpre</p>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
            <h2>Canette</h2>
              <p>Filet de canette cuisson lente, pulpe de patate douce, brocolis grillé, cromesquis de cuisse de canette confite, gastrique agrumes</p>
            <h2>Boeuf</h2>
              <p>Filet de boeuf, pommes pont neuf, coulis comté, tartelette croquante haricots sautés à l'ail, jus corsé</p>
            <h2>St Jacques</h2>
              <p>St Jacques rôties au beurre, trompette de la mort, butternut confit, poireau, écume</p>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
            <h2>Noisette</h2>
              <p>Sphère chocolat/café, praliné noisette</p>
            <h2>Framboise chocolat blanc</h2>
              <p>Sphère chocolat blanc, framboise basilic, sablé breton noix de coco</p>
            <h2>Pomme</h2>
              <p>Bavaroise pomme granny, pommes caramélisées, dacquoise amande</p>
        </div>
      </div>
    </>
  )
}

export default Menu
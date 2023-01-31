import images from './images';

const wines = [
  {
    title: 'Saint Emilion, château le Destrier',
    price: '30€',
    tags: 'AOP | 2014',
  },
  {
    title: 'Sancerre Domaine Salmon',
    price: '39€',
    tags: 'AOP | 2015',
  },
  {
    title: 'Bourgogne Côteaux des Moines Château de Beaune',
    price: '49€',
    tags: 'AOC | 2015',
  },
  {
    title: 'Gewurztraminer Vendanges Tardives',
    price: '30€',
    tags: 'AOP | 2018',
  },
  {
    title: 'Côtes de Gascogne Domaine Pellehaut "Harmonie"',
    price: '25€',
    tags: 'IGP | 2016',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritiz',
    price: '15€',
    tags: 'Aperol, Villa Marchesi Prosecco, soda',
  },
  {
    title: "Dark 'N' Stormy",
    price: '14€',
    tags: 'Rhum brun, Ginger beer, Citron vert',
  },
  {
    title: 'Daiquiri',
    price: '10€',
    tags: 'Rhum, Jus de citron vert, Sucre de canne',
  },
  {
    title: 'Old Fashioned',
    price: '20€',
    tags: 'Whisky Bourbon, Sucre roux, Angostura Bitters',
  },
  {
    title: 'Morito',
    price: '13€',
    tags: 'Rhum Cubain, Sucre de canne, Menthe, Soda, Citron vert',
  },
  {
    title: 'Le Royal Antique',
    price: '13€',
    tags: 'Rhum, Rhum arrangé noix de coco, Curaçao bleu, Ananas',
  },
];

const beer = [
  {
    title: 'Karmeliet',
    price: '3€',
    tags: 'Bière blonde légère',
  },
  {
    title: "Goudale Grand cru",
    price: '4€',
    tags: 'Bière blonde, finition rhum',
  },
  {
    title: 'Dangerousse',
    price: '4.50€',
    tags: 'Bière rousse, légère amertume',
  },
  {
    title: 'Rodenbach red ALE',
    price: '4€',
    tags: 'Bière aromatisée aux fruits rouges',
  },
  {
    title: 'Lupulus Hopera',
    price: '3.50€',
    tags: 'Bière brune',
  },
]

const soft = [
  {
    title: 'Coca-Cola',
    price: '3€',
    tags: 'Original, Zero, Light',
  },
  {
    title: 'Fanta',
    price: '2.90€',
    tags: 'Orange, citron',
  },
  {
    title: 'Jus de fruit',
    price: '2.50€',
    tags: 'Abricot, pèche, ananas, banane',
  },
  {
    title: 'Jus de Tomate',
    price: '2.50€',
    tags: 'Sel de Céleri, tabasco, sauce Worcestershire',
  },
];

const cart = [
  {
    title: 'Fondue Savoyarde (2 personnes)',
    price: '24€',
    tags: 'Beaufort, Gruyère de Savoie, Comté, vin blanc, ail',
  },
  {
    title: "Tarte au Reblochon de Savoie",
    price: '14€',
    tags: 'Reblochon AOP fondue, crème fraîche, gratin de fromage râpé',
  },
  {
    title: 'La Poêlée Montagnarde',
    price: '16€',
    tags: "Pommes de terre, lardons fumés, fromage d'Abondance, vin blanc",
  },
  {
    title: 'Le Farcement',
    price: '14€',
    tags: 'Lardons fumés, pruneaux, pommes de terre, poires séchées, crème fraîche',
  },
  {
    title: 'Antique burger',
    price: '17€',
    tags: "Bun brioché, effiloché de porc à la bière et aux épices, galette de pommes de terre, Reblochon, confit d'oignons rouges, sauce reblochon, poitrine fine fumée, mâche",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Euro-Toques',
    subtitle: "L'exigence pour des produits de qualité.",
  },
  {
    imgUrl: images.award01,
    title: 'Maître Restaurateur',
    subtitle: 'Notre Gage de qualité du "fait maison".',
  },
  {
    imgUrl: images.award05,
    title: 'MOF',
    subtitle: 'La consécration au bout des doigts.',
  },
  {
    imgUrl: images.award03,
    title: ' JRE',
    subtitle: 'Jeune restaurateur Européen pour vous !',
  },
];

const hours = [
  {
    day: 'Mardi - Vendredi :',
    hour: '11:30 - 14:00, 18:30 - 22:00'
  },
  {
    day: 'Samedi - Dimanche :',
    hour: '11:30 - 15:30, 18:30 - 23:30'
  }
]

export default { wines, cocktails, awards, hours, cart, beer, soft};

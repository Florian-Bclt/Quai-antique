import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
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


export default { wines, cocktails, awards, hours};

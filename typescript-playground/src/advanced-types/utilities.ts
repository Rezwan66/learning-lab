//^ utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

// type ProductSummary = {
//   id: number;
//   name: string;
//   price: string;
// };

//$& Some utility types:

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

type ProductWithoutStock = Omit<Product, 'stock'>;

type ProductWithColorRequired = Required<Product>;

const product: ProductWithColorRequired = {
  id: 12,
  name: 'Laptop',
  price: '1200 eur',
  stock: 120,
};

type ProductAllTypesOptional = Partial<Product>;

type ProductReadOnly = Readonly<Product>;

//! const emptyObj: Object = {}; instead use:
const emptyObj: Record<string, unknown> = {}; //--> we know because left side keys of objects is always string

type TStd = 'Omar' | 'Rakib';

const roll: Record<TStd, number> = {
  Omar: 23,
  Rakib: 100,
};

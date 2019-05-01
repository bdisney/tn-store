
import React from 'react';
import ProductCard from '~/components/ProductCard';

const Catalogue = ({ products }) => (
  <div>
    {
      products.map((product, index) => <ProductCard product={product} key={index}/>)
    }
  </div>
);

export default Catalogue;

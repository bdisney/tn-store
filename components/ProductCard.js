import React from 'react';

import TextBox from '~/components/TextBox';
import Image from '~/components/Image';
import Price from '~/components/Price';

const ProductCard = ({ product }) => (
  <div>
    <Image
      src={ product.imageUrl }
      alt={ product.title }
      height='256'
      width='256'
    />
    <TextBox str={ product.title } />
    <Price value={ product.price } />
  </div>
);

export default ProductCard;

import React, { useState } from 'react';
import css from './Products.module.css';
import plogo from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Products = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const [parent] = useAutoAnimate();

  const Filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img
        src={plogo}
        alt=''
      />
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => Filter('skin care')}>Skin Care</li>
          <li onClick={() => Filter('conditioner')}>Conditioners</li>
          <li onClick={() => Filter('foundation')}>Foundations</li>
        </ul>
        <div
          className={css.list}
          ref={parent}
        >
          {menuProducts.map((product, i) => (
            <div className={css.product}>
              <div className='left-s'>
                <div className='name'>
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Shop Now</div>
              </div>
              <img
                src={product.img}
                alt=''
                className='img-p'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

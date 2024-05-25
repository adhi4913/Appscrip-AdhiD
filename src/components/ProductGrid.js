// ProductGrid.JS
import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
    {
        name: 'Product Name 1',
        image: '/images/IMG_0502.JPG', // assuming img1.JPG is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 2',
        image: '/images/IMG_0503.JPG', // assuming image2.jpg is located in public/images folder
        outOfStock: true,
    },
    {
        name: 'Product Name 3',
        image: '/images/IMG_0504.JPG', // assuming image3.jpg is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 4',
        image: '/images/IMG_0505.JPG', // assuming image4.jpg is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 5',
        image: '/images/IMG_0506.JPG', // assuming image5.jpg is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 6',
        image: '/images/IMG_0507.JPG', // assuming image6.jpg is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 7',
        image: '/images/IMG_0508.JPG', // assuming img1.JPG is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 8',
        image: '/images/IMG_0510.JPG', // assuming image2.jpg is located in public/images folder
        outOfStock: true,
    },
    {
        name: 'Product Name 9',
        image: '/images/IMG_0518.JPG', // assuming image3.jpg is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 10',
        image: '/images/IMG_0519.JPG', // assuming image4.jpg is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 11',
        image: '/images/IMG_0520.JPG', // assuming image5.jpg is located in public/images folder
        outOfStock: false,
    },
    {
        name: 'Product Name 12',
        image: '/images/IMG_0521.JPG', // assuming image6.jpg is located in public/images folder
        outOfStock: false,
    },
];

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;

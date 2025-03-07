import React from 'react';
import ViewProductButton from './button';

const Productcard = () => {
  const product = [
    {
      name: 'Wireless Headphones',
      photo:
        'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=500&q=60',
      price: '299',
    },
    {
      name: 'Smartwatch',
      photo:
        'https://m.media-amazon.com/images/I/71IaJKeus7L._AC_UF1000,1000_QL80_.jpg',
      price: '1999',
    },
    {
      name: 'Gaming Mouse',
      photo:
        'https://assets2.razerzone.com/images/pnx.assets/c174e90e94ab3f247fa562eaecc282b4/500x500-razer-naga-left-handed.webp',
      price: '709',
    },
    {
      name: 'Mechanical Keyboard',
      photo: 'https://i.ytimg.com/vi/XCGgBdHpQZw/sddefault.jpg',
      price: '1229',
    },
  ];

  return (
    <div
      style={{
        border: '2px solid grey',
        padding: '14px',
        borderRadius: '15px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
      }}
    >
      {product.map((pro, index) => (
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            width: '250px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={pro.photo}
            alt={pro.name}
            height="150px"
            style={{
              borderRadius: '15px',
              border: '3px solid grey',
            }}
          />
          <h2>{pro.name} </h2>
          <h3>₹{pro.price} </h3>
          <ViewProductButton />
        </div>
      ))}
    </div>
  );
};

export default Productcard;

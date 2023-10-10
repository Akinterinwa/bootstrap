// import React from "react";

// const Name = ({ name }) => {
//   return <h2>{name}</h2>;
// };

// export default Name;

import React from 'react';
import productData from './Product'; // Import the JSON data from product.js

function Name() {
  return <h2>{productData.name}</h2>;
}

export default Name;
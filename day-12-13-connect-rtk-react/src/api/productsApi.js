const fakeProducts = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 1 },
  { id: 3, name: "Orange", price: 3 }
];

export const fetchProductsApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeProducts);
    }, 1000);
  });
};
const fakeProducts = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 1 },
  { id: 3, name: "Orange", price: 3 }
];

export const fetchProductsApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        reject(new Error("Network error: failed to fetch products"));
      } else {
        resolve(fakeProducts);
      }
    }, 1000);
  });
};
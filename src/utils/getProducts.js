class ProductServices {
  getProducts() {
    let orderList = [];
    for (let i = 0; i < 20; i++) {
      let temp = {
        name: `Product ${i}`,
        image: `https://dummyimage.com/600x400/000/fff&text=product${i}`,
        price: "20",
        left: i * 200,
        index: i,
        category: `cat${i % 2}`
      };
      orderList.push(temp);
    }
    return orderList;
    // return [
    //   {
    //     name: "Product 1",
    //     image: "https://dummyimage.com/600x400/000/fff&text=product",
    //     price: "20",
    //     left: 0,
    //     index: 0
    //   },
    //   {
    //     name: "Product 2",
    //     image: "https://dummyimage.com/600x400/000/fff&text=product",
    //     price: "20",
    //     left: 200,
    //     index: 1
    //   },
    //   {
    //     name: "Product 3",
    //     image: "https://dummyimage.com/600x400/000/fff&text=product",
    //     price: "20",
    //     left: 400,
    //     index: 2
    //   },
    //   {
    //     name: "Product 4",
    //     image: "https://dummyimage.com/600x400/000/fff&text=product",
    //     price: "20",
    //     left: 600,
    //     index: 3
    //   }
    // ];
  }
}

export default new ProductServices();

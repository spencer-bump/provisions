const initialProvisions = {
  stores:[
    {
      name: "Costco"
    },
    {
      name: "Down to Earth"
    },
    {
      name: "Whole Foods"
    }
  ],
  provisions: [
      {
        id: 1,
        name: "bread flour",
        price: 25.00,
        selected: true,
        store: "Costco"
      },
      {
        id: 2,
        name: "cat litter",
        price: 15.00,
        selected: false,
        store: "Costco"
      },
      {
        id: 3,
        name: "granola",
        price: 10.00,
        selected: true,
        store: "Costco"
      },
      {
        id: 4,
        name: "toilet papaer",
        price: 150.00,
        selected: false,
        store: "Costco"
      },
      {
        id: 5,
        name: "soy milk",
        price: 15.00,
        selected: true,
        store: "Costco"
      },{
        id: 6,
        name: "peanut butter",
        price: 15.00,
        selected: false,
        store: "Costco"
      }
    ]
  };

export default initialProvisions;
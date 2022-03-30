import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Rony",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "João",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Refined Plastic Bike",
      slug: "Refined Plastic Bike",
      category: "Fantastic",
      image: "/images/business.jpg",
      price: "127.00",
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      material: "Metal",
      _id: "1",
    },
    {
      name: "Fantastic Steel Salad",
      slug: "Fantastic Steel Salad",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Refined",
      image: "http://placeimg.com/640/480/nature",
      price: "716.00",
      material: "Metal",
      department: "Tools",
      _id: "2",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Fantastic Steel Salad",
      slug: "Fantastic Steel Salad",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Refined",
      image: "http://placeimg.com/640/480/nature",
      price: "716.00",
      material: "Metal",
      department: "Tools",
      _id: "2",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Gorgeous Steel Chips",
      slug: "Gorgeous Steel Chips",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      category: "Refined",
      image: "http://placeimg.com/640/480/transport",
      price: "492.00",
      material: "Granite",
      department: "Outdoors",
      _id: "3",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Intelligent Plastic Soap",
      slug: "Intelligent Plastic Soap",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      category: "Practical",
      image: "http://placeimg.com/640/480/city",
      price: "376.00",
      material: "Granite",
      department: "Tools",
      _id: "4",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Gorgeous Plastic Mouse",
      slug: "Gorgeous Plastic Mouse",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      category: "Small",
      image: "http://placeimg.com/640/480/abstract",
      price: "340.00",
      material: "Frozen",
      department: "Games",
      _id: "5",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Small Cotton Shoes",
      slug: "Small Cotton Shoes",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      category: "Small",
      image: "http://placeimg.com/640/480/city",
      price: "65.00",
      material: "Rubber",
      department: "Books",
      _id: "6",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Rustic Metal Pizza",
      slug: "Rustic Metal Pizza",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: "Sleek",
      image: "http://placeimg.com/640/480/nature",
      price: "355.00",
      material: "Cotton",
      department: "Computers",
      _id: "7",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Handmade Cotton Ball",
      slug: "Handmade Cotton Ball",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      category: "Generic",
      image: "http://placeimg.com/640/480/city",
      price: "199.00",
      material: "Steel",
      department: "Music",
      _id: "8",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Intelligent Rubber Chips",
      slug: "Intelligent Rubber Chips",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      category: "Generic",
      image: "http://placeimg.com/640/480/transport",
      price: "707.00",
      material: "Rubber",
      department: "Garden",
      _id: "9",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Tasty Soft Shirt",
      slug: "Tasty Soft Shirt",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      category: "Handmade",
      image: "http://placeimg.com/640/480/transport",
      price: "118.00",
      material: "Granite",
      department: "Computers",
      _id: "10",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Intelligent Rubber Salad",
      slug: "Intelligent Rubber Salad",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      category: "Refined",
      image: "http://placeimg.com/640/480/technics",
      price: "778.00",
      material: "Metal",
      department: "Health",
      _id: "11",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Fantastic Granite Towels",
      slug: "Fantastic Granite Towels",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Gorgeous",
      image: "http://placeimg.com/640/480/people",
      price: "783.00",
      material: "Rubber",
      department: "Computers",
      _id: "12",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Tasty Steel Keyboard",
      slug: "Tasty Steel Keyboard",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      category: "Licensed",
      image: "http://placeimg.com/640/480/people",
      price: "109.00",
      material: "Steel",
      department: "Clothing",
      _id: "13",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Licensed Fresh Table",
      slug: "Licensed Fresh Table",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      category: "Licensed",
      image: "http://placeimg.com/640/480/animals",
      price: "804.00",
      material: "Cotton",
      department: "Computers",
      _id: "14",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Small Metal Ball",
      slug: "Small Metal Ball",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: "Generic",
      image: "http://placeimg.com/640/480/transport",
      price: "407.00",
      material: "Steel",
      department: "Shoes",
      _id: "15",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Awesome Steel Sausages",
      slug: "Awesome Steel Sausages",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: "Small",
      image: "http://placeimg.com/640/480/business",
      price: "32.00",
      material: "Soft",
      department: "Health",
      _id: "16",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Gorgeous Fresh Ball",
      slug: "Gorgeous Fresh Ball",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      category: "Rustic",
      image: "http://placeimg.com/640/480/people",
      price: "297.00",
      material: "Plastic",
      department: "Games",
      _id: "17",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Generic Plastic Pizza",
      slug: "Generic Plastic Pizza",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      category: "Practical",
      image: "http://placeimg.com/640/480/abstract",
      price: "888.00",
      material: "Rubber",
      department: "Books",
      _id: "18",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Sleek Fresh Pizza",
      slug: "Sleek Fresh Pizza",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      category: "Fantastic",
      image: "http://placeimg.com/640/480/technics",
      price: "135.00",
      material: "Frozen",
      department: "Grocery",
      _id: "19",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Gorgeous Wooden Table",
      slug: "Gorgeous Wooden Table",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      category: "Unbranded",
      image: "http://placeimg.com/640/480/nightlife",
      price: "618.00",
      material: "Soft",
      department: "Jewelery",
      _id: "20",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Awesome Wooden Sausages",
      slug: "Awesome Wooden Sausages",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      category: "Gorgeous",
      image: "http://placeimg.com/640/480/transport",
      price: "937.00",
      material: "Rubber",
      department: "Baby",
      _id: "21",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Licensed Wooden Chips",
      slug: "Licensed Wooden Chips",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      category: "Ergonomic",
      image: "http://placeimg.com/640/480/nature",
      price: "818.00",
      material: "Rubber",
      department: "Baby",
      _id: "22",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Rustic Cotton Chicken",
      slug: "Rustic Cotton Chicken",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Rustic",
      image: "http://placeimg.com/640/480/abstract",
      price: "544.00",
      material: "Cotton",
      department: "Kids",
      _id: "23",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Sleek Metal Computer",
      slug: "Sleek Metal Computer",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      category: "Intelligent",
      image: "http://placeimg.com/640/480/technics",
      price: "730.00",
      material: "Frozen",
      department: "Tools",
      _id: "24",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Tasty Soft Gloves",
      slug: "Tasty Soft Gloves",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Ergonomic",
      image: "http://placeimg.com/640/480/nature",
      price: "370.00",
      material: "Cotton",
      department: "Tools",
      _id: "25",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Licensed Fresh Shoes",
      slug: "Licensed Fresh Shoes",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      category: "Incredible",
      image: "http://placeimg.com/640/480/technics",
      price: "423.00",
      material: "Cotton",
      department: "Garden",
      _id: "26",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Unbranded Concrete Salad",
      slug: "Unbranded Concrete Salad",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      category: "Fantastic",
      image: "http://placeimg.com/640/480/nightlife",
      price: "427.00",
      material: "Wooden",
      department: "Shoes",
      _id: "27",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Ergonomic Fresh Bacon",
      slug: "Ergonomic Fresh Bacon",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      category: "Generic",
      image: "http://placeimg.com/640/480/animals",
      price: "174.00",
      material: "Concrete",
      department: "Garden",
      _id: "28",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Intelligent Soft Hat",
      slug: "Intelligent Soft Hat",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      category: "Small",
      image: "http://placeimg.com/640/480/nature",
      price: "477.00",
      material: "Plastic",
      department: "Outdoors",
      _id: "29",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Sleek Metal Ball",
      slug: "Sleek Metal Ball",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      category: "Handmade",
      image: "http://placeimg.com/640/480/nightlife",
      price: "886.00",
      material: "Cotton",
      department: "Jewelery",
      _id: "30",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Generic Steel Ball",
      slug: "Generic Steel Ball",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      category: "Ergonomic",
      image: "http://placeimg.com/640/480/nature",
      price: "98.00",
      material: "Fresh",
      department: "Games",
      _id: "31",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 50,
    },
    {
      name: "Ergonomic Frozen Pants",
      slug: "Ergonomic Frozen Pants",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      category: "Fantastic",
      image: "http://placeimg.com/640/480/animals",
      price: "451.00",
      material: "Frozen",
      department: "Industrial",
      _id: "32",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 5,
    },
    {
      name: "Refined Cotton Pizza",
      slug: "Refined Cotton Pizza",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Intelligent",
      image: "http://placeimg.com/640/480/nature",
      price: "558.00",
      material: "Wooden",
      department: "Baby",
      _id: "33",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 5,
    },
    {
      name: "Small Soft Sausages",
      slug: "Small Soft Sausages",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      category: "Sleek",
      image: "http://placeimg.com/640/480/animals",
      price: "727.00",
      material: "Cotton",
      department: "Home",
      _id: "34",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 5,
    },
    {
      name: "Refined Steel Sausages",
      slug: "Refined Steel Sausages",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      category: "Incredible",
      image: "http://placeimg.com/640/480/people",
      price: "601.00",
      material: "Steel",
      department: "Garden",
      _id: "35",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 5,
    },
    {
      name: "Fantastic Soft Pants",
      slug: "Fantastic Soft Pants",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: "Practical",
      image: "http://placeimg.com/640/480/abstract",
      price: "36.00",
      material: "Steel",
      department: "Toys",
      _id: "36",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 5,
    },
    {
      name: "Gorgeous Concrete Chips",
      slug: "Gorgeous Concrete Chips",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      category: "Fantastic",
      image: "http://placeimg.com/640/480/technics",
      price: "680.00",
      material: "Soft",
      department: "Toys",
      _id: "37",
      countInStock: 5,
      brand: "Amazonas",
      rating: 2.5,
      numReviews: 5,
    },
    {
      name: "Tasty Frozen Soap",
      slug: "Tasty Frozen Soap",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      category: "Handmade",
      image: "http://placeimg.com/640/480/technics",
      price: "528.00",
      material: "Rubber",
      department: "Tools",
      _id: "38",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Sleek Frozen Chair",
      slug: "Sleek Frozen Chair",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      category: "Refined",
      image: "http://placeimg.com/640/480/sports",
      price: "247.00",
      material: "Metal",
      department: "Music",
      _id: "39",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Sleek Metal Mouse",
      slug: "Sleek Metal Mouse",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      category: "Small",
      image: "http://placeimg.com/640/480/nightlife",
      price: "773.00",
      material: "Metal",
      department: "Tools",
      _id: "40",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Licensed Cotton Gloves",
      slug: "Licensed Cotton Gloves",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      category: "Incredible",
      image: "http://placeimg.com/640/480/business",
      price: "868.00",
      material: "Rubber",
      department: "Movies",
      _id: "41",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Fantastic Metal Cheese",
      slug: "Fantastic Metal Cheese",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      category: "Intelligent",
      image: "http://placeimg.com/640/480/nightlife",
      price: "601.00",
      material: "Frozen",
      department: "Beauty",
      _id: "42",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Rustic Fresh Gloves",
      slug: "Rustic Fresh Gloves",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      category: "Rustic",
      image: "http://placeimg.com/640/480/city",
      price: "550.00",
      material: "Cotton",
      department: "Jewelery",
      _id: "43",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Small Frozen Chair",
      slug: "Small Frozen Chair",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      category: "Small",
      image: "http://placeimg.com/640/480/nightlife",
      price: "113.00",
      material: "Concrete",
      department: "Clothing",
      _id: "44",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Incredible Steel Pizza",
      slug: "Incredible Steel Pizza",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Awesome",
      image: "http://placeimg.com/640/480/cats",
      price: "908.00",
      material: "Wooden",
      department: "Electronics",
      _id: "45",
      countInStock: 5,
      brand: "Amazonas",
      rating: 3.5,
      numReviews: 15,
    },
    {
      name: "Licensed Wooden Pizza",
      slug: "Licensed Wooden Pizza",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      category: "Tasty",
      image: "http://placeimg.com/640/480/sports",
      price: "713.00",
      material: "Fresh",
      department: "Toys",
      _id: "46",
      countInStock: 5,
      brand: "Amazonas",
      rating: 4.5,
      numReviews: 15,
    },
    {
      name: "Intelligent Wooden Car",
      slug: "Intelligent Wooden Car",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      category: "Intelligent",
      image: "http://placeimg.com/640/480/fashion",
      price: "221.00",
      material: "Wooden",
      department: "Sports",
      _id: "47",
      countInStock: 5,
      brand: "Amazonas",
      rating: 4.5,
      numReviews: 15,
    },
    {
      name: "Unbranded Steel Shirt",
      slug: "Unbranded Steel Shirt",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      category: "Rustic",
      image: "http://placeimg.com/640/480/city",
      price: "525.00",
      material: "Wooden",
      department: "Industrial",
      _id: "48",
      countInStock: 5,
      brand: "Amazonas",
      rating: 4.7,
      numReviews: 25,
    },
    {
      name: "Handcrafted Soft Pants",
      slug: "Handcrafted Soft Pants",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      category: "Fantastic",
      image: "http://placeimg.com/640/480/transport",
      price: "352.00",
      material: "Soft",
      department: "Books",
      _id: "49",
      countInStock: 5,
      brand: "Amazonas",
      rating: 4.7,
      numReviews: 25,
    },
    {
      name: "Generic Concrete Computer",
      slug: "Generic Concrete Computer",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      category: "Handcrafted",
      image: "http://placeimg.com/640/480/people",
      price: "869.00",
      material: "Granite",
      department: "Tools",
      _id: "50",
      countInStock: 5,
      brand: "Amazonas",
      rating: 4.7,
      numReviews: 25,
    },
    {
      name: "Gorgeous Fresh Soap",
      slug: "Gorgeous Fresh Soap",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      category: "Licensed",
      image: "http://placeimg.com/640/480/fashion",
      price: "723.00",
      material: "Soft",
      department: "Industrial",
      _id: "51",
      countInStock: 5,
      brand: "Amazonas",
      rating: 4.7,
      numReviews: 25,
    },
  ],
};
export default data;

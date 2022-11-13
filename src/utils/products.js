const products = [
    {
      id: 1,
      name: "Happiness",
      stock: 120,
      cost: 3300,
      description: "This pill will make you feel as happy as you have been in the best moment of your life. You just have to wait a few minutes and you can feel it throughout your body.",
      capacity: 1000,
      image: [
        "https://img.freepik.com/premium-vector/realistic-medical-pills-isolated-white_153563-4.jpg?w=740"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Emotions",
        id: 1
      },
      brand: {
        id: 10,
        name: "Super Majestic"
      },
      reviews: []
    },
    {
      id: 2,
      name: "Confidence",
      stock: 99,
      cost: 2650,
      description: "Do you have to do a complicated job or go out on a date with your crush and you feel that you are not prepared? Don't panic, this pill is your solution.",
      capacity: 1000,
      image: [
        "https://img.freepik.com/free-vector/medical-design-poster-with-original-medicinal-capsule-consisting-red-white-parts-different-medical-objects_1284-53615.jpg?w=740&t=st=1667859781~exp=1667860381~hmac=19537c4139959c3b5d0d60c4cf68848de1a1d63272e49e1bfc4b146e022c5527"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Emotions",
        id: 1
      },
      brand: {
        id: 10,
        name: "Super Majestic"
      },
      reviews: [
        {
          "comment": "Amazing experience!",
          "rating": "4"
        }
      ]
    },
    {
      id: 3,
      name: "Super Strength",
      stock: 75,
      cost: 5200,
      description: "Do you need to fix or move things in your house? Do you want to fight against a giant monster? Or maybe move cars with just one finger. With this pill you can do this and much more!",
      capacity: 750,
      image: [
        "https://img.freepik.com/premium-photo/orange-silhouette-bottle-container-with-colorful-pills-blue-paper-background_273003-5457.jpg?w=740"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 2,
      brandId: 20,
      packingId: null,
      category: {
        name: "Skills",
        id: 2
      },
      brand: {
        id: 20,
        name: "Amazing Pop Star"
      },
      reviews: []
    },
    {
      id: 4,
      name: "Flexibility",
      stock: 150,
      cost: 2750,
      description: "With this pill you will be able to transform your body almost in any way, you will be able to reach unimaginable areas and feel totally comfortable while doing it, at a more than reasonable price.",
      capacity: 750,
      image: [
        "https://img.freepik.com/premium-psd/3d-icon-capsule_668790-13.jpg?w=740"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 2,
      brandId: 20,
      packingId: null,
      category: {
        name: "Skills",
        id: 2
      },
      brand: {
        id: 20,
        name: "Amazing Pop Star"
      },
      reviews: []
    },
    {
      id: 5,
      name: "Speed",
      stock: 45,
      cost: 4500,
      description: "Tired of being late everywhere? public transport does not meet your mobility needs? Don't worry, with this tablet you can be where you need, when you need it in an instant.",
      capacity: 750,
      image: [
        "https://img.freepik.com/premium-vector/medicine-round-white-cure-pills-aspirin-antibiotics-vitamin-painkiller-drugs_736051-60.jpg?w=740"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 2,
      brandId: 20,
      packingId: null,
      category: {
        name: "Skills",
        id: 2
      },
      brand: {
        id: 20,
        name: "Amazing Pop Star"
      },
      reviews: []
    },
    {
      id: 6,
      name: "Invisibility",
      stock: 120,
      cost: 7500,
      description: "With this pill you can slip wherever you want without being identified. You will have to use it without clothes and be very careful that the effect only lasts two hours, lest you be exposed somewhere...",
      capacity: 750,
      image: [
        "https://img.freepik.com/premium-photo/pink-capsule-pill-bright-blue-background-pastel-colors-minimalism-concept-3d-render_196767-1494.jpg?w=740"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 2,
      brandId: 20,
      packingId: null,
      category: {
        name: "Skills",
        id: 2
      },
      brand: {
        id: 20,
        name: "Amazing Pop Star"
      },
      reviews: []
    },
    {
      id: 7,
      name: "Creativity",
      stock: 5,
      cost: 9999,
      description: "If you are an artist looking for motivation and discoveries for your works, this will undoubtedly help you. But be careful, can you handle so many new perspectives of your brain? I hope so.",
      capacity: 750,
      image: [
        "https://img.freepik.com/premium-psd/3d-pill_668790-3.jpg?w=740"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 2,
      brandId: 20,
      packingId: null,
      category: {
        name: "Skills",
        id: 2
      },
      brand: {
        id: 30,
        name: "Tuki Paki"
      },
      reviews: []
    },
    {
      id: 8,
      name: "Concentration",
      stock: 200,
      cost: 1700,
      description: "Stop reneging to take exams. With this pill you can dedicate yourself to study for hours without distractions. You will be able to put the cell phone aside and concentrate on the books for real.",
      capacity: 400,
      image: [
        "https://img.freepik.com/premium-vector/medicinal-whole-open-with-composition-isolated-white-background-flat-style_710535-82.jpg?w=740"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 2,
      brandId: 30,
      packingId: null,
      category: {
        name: "Skills",
        id: 2
      },
      brand: {
        id: 30,
        name: "Tuki Paki"
      },
      reviews: []
    },
    {
      id: 9,
      name: "Nature Tripp",
      stock: 250,
      cost: 8240,
      description: "With this substance you will be able to connect with nature as if you were one with it, feel all the vibrations that it constantly transmits to us and be able to breathe the purest air of life.",
      capacity: 750,
      image: [
        "https://img.freepik.com/free-vector/medical-design-poster-with-original-medicinal-capsule-consisting-green-blue-parts-leaves-as-life-symbol-illustration_1284-53606.jpg?w=740&t=st=1667861137~exp=1667861737~hmac=4340983e17ca047f1221c62575cccc7d33327457130eda9090798e4e488e71d4"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 3,
      brandId: 40,
      packingId: null,
      category: {
        name: "Tripps",
        id: 3
      },
      brand: {
        id: 40,
        name: "Forever and Ever Magic"
      },
      reviews: []
    },
    {
      id: 10,
      name: "Space Tripp",
      stock: 120,
      cost: 12250,
      description: "Feel aligned with the stars and planets. You will feel that you can levitate through the infinity of the universe, so light and free you would never imagine it. Maybe you can even touch some stars, if you're lucky.",
      capacity: 700,
      image: [
        "https://img.freepik.com/free-photo/red-yellow-capsules-textured-backdrop_23-2148129549.jpg?w=740&t=st=1667863835~exp=1667864435~hmac=c7908c2f37f1fa3c441d4bcaaf05712c90c91bbad9c396465c429735f37bd1b8"
      ],
      sales: 0,
      createdAt: "2022-11-07",
      updatedAt: "2022-11-07",
      categoryId: 3,
      brandId: 40,
      packingId: null,
      category: {
        name: "Tripps",
        id: 3
      },
      brand: {
        id: 40,
        name: "Forever and Ever Magic"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }
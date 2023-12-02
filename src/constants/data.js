import icons from './icons';
import images from './images';

const onBoarding = [
  {
    id: 1,
    title: 'Get your laundry & dry cleaning within 24 hours',
    subtitle: 'A convenient laundry solution that help protect the environment',
    image: images.onboarding1,
  },
  {
    id: 2,
    title: 'Get your laundry & dry cleaning within 24 hours',
    subtitle: 'A convenient laundry solution that help protect the environment',
    image: images.onboarding2,
  },
  {
    id: 3,
    title: 'Get your laundry & dry cleaning within 24 hours',
    subtitle: 'A convenient laundry solution that help protect the environment',
    image: images.onboarding3,
  },
];

const productList = [
  {
    id: 1,
    productName: 'Shirt',
    price: '₹70',
  },
  {
    id: 2,
    productName: 'T Shirt',
    price: '₹70',
  },
  {
    id: 3,
    productName: 'Ladies Top',
    price: '₹89',
  },
  {
    id: 4,
    productName: 'Trouser',
    price: '₹77',
  },
  {
    id: 5,
    productName: 'Jeans',
    price: '₹95',
  },
  {
    id: 6,
    productName: 'Kids Dress',
    price: '₹55',
  },
  {
    id: 7,
    productName: 'Gown Heavy',
    price: '₹99',
  },
  {
    id: 8,
    productName: 'Gown Medium',
    price: '₹70',
  },
  {
    id: 9,
    productName: 'Jump Suit',
    price: '₹50',
  },
  {
    id: 10,
    productName: 'Dress Designer',
    price: '₹99',
  },
  {
    id: 11,
    productName: 'Dress',
    price: '₹40',
  },
  {
    id: 12,
    productName: 'Skirt Half',
    price: '₹40',
  },
  {
    id: 1,
    productName: 'Skirt Full',
    price: '₹80',
  },
];

const services = [
  {
    id: 1,
    service: 'Standard Wash',
    icon: icons.stanWash,
    content:
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially... ',
  },
  {
    id: 2,
    service: 'Primum Wash',
    icon: icons.primWash,
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 3,
    service: 'Dry Clean',
    icon: icons.dryClean,
    content:
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially... ',
  },
  {
    id: 4,
    service: 'Ironing',
    icon: icons.iron,
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];

const orders = [
  {
    id: 1,
    order_id: 'Order #Dry0010C1',
    pickup_date: '18/May/2023',
    pickup_time: '10:00 am',
    quantity: '09 Items',
    total_amt: '$ 807',
  },
  {
    id: 2,
    order_id: 'Order #Dry0010C2',
    pickup_date: '10/Apr/2023',
    pickup_time: '10:00 am',
    quantity: '09 Items',
    total_amt: '$ 807',
  },
  {
    id: 3,
    order_id: 'Order #Dry0010C3',
    pickup_date: '18/May/2023',
    pickup_time: '10:00 am',
    quantity: '09 Items',
    total_amt: '$ 807',
  },
  {
    id: 4,
    order_id: 'Order #Dry0010C4',
    pickup_date: '18/May/2023',
    pickup_time: '10:00 am',
    quantity: '09 Items',
    total_amt: '$ 807',
  },
];

const notification = [
  {
    id: 1,
    image: images.user1,
    message:
      'A convenient laundry solution that help protect the environment...',
  },
  {
    id: 2,
    image: images.user2,
    message:
      't has survived not only five centuries, but also the leap into...',
  },
  {
    id: 3,
    image: images.user3,
    message: 'Many desktop publishing packages and web page editors now use',
  },
  {
    id: 4,
    image: images.user4,
    message: 'the Internet tend to repeat predefined chunks as necessary',
  },
  {
    id: 5,
    image: images.user1,
    message:
      'A convenient laundry solution that help protect the environment...',
  },
  {
    id: 6,
    image: images.user2,
    message:
      't has survived not only five centuries, but also the leap into...',
  },
  {
    id: 7,
    image: images.user3,
    message: 'Many desktop publishing packages and web page editors now use',
  },
  {
    id: 8,
    image: images.user4,
    message: 'the Internet tend to repeat predefined chunks as necessary',
  },
];

const rateListwholeData = [
  {
    service_id: 1,
    service_name: 'Dry Cleaning',
    categories: [
      {
        category_id: 1,
        category_name: 'Men',
        products: [
          {
            product_id: 1,
            product_name: 'Shirt',
            amount: 90,
          },
          {
            product_id: 2,
            product_name: 'Shirt silk',
            amount: 120,
          },
          {
            product_id: 3,
            product_name: 'Shirt woolen',
            amount: 120,
          },
          {
            product_id: 4,
            product_name: 'T shirt',
            amount: 90,
          },
          {
            product_id: 5,
            product_name: 'Pants',
            amount: 100,
          },
          {
            product_id: 6,
            product_name: 'Jeans',
            amount: 100,
          },
          {
            product_id: 7,
            product_name: 'Coat',
            amount: 250,
          },
          {
            product_id: 8,
            product_name: 'Waist coat',
            amount: 100,
          },
          {
            product_id: 9,
            product_name: 'Long coat',
            amount: 380,
          },
          {
            product_id: 10,
            product_name: 'Jacket full sleeves',
            amount: 250,
          },
          {
            product_id: 11,
            product_name: 'Jacket Half',
            amount: 190,
          },
          {
            product_id: 12,
            product_name: 'Sweat Shirt',
            amount: 220,
          },
          {
            product_id: 13,
            product_name: 'Sweat shirt with hood',
            amount: 280,
          },
          {
            product_id: 14,
            product_name: 'Sweater full sleeves plain',
            amount: 220,
          },
          {
            product_id: 15,
            product_name: 'Sweater full sleeves heavy',
            amount: 260,
          },
          {
            product_id: 16,
            product_name: 'Sweater Half',
            amount: 175,
          },
          {
            product_id: 17,
            product_name: 'Sweater half sleeves heavy',
            amount: 220,
          },
          {
            product_id: 18,
            product_name: 'Long pullover',
            amount: 130,
          },
          {
            product_id: 19,
            product_name: 'Kurta',
            amount: 120,
          },
          {
            product_id: 20,
            product_name: 'Kurta very heavy',
            amount: 175,
          },
          {
            product_id: 21,
            product_name: 'Dhoti',
            amount: 100,
          },
          {
            product_id: 22,
            product_name: 'Safari suit coat',
            amount: 350,
          },
          {
            product_id: 23,
            product_name: 'Achkan',
            amount: 350,
          },
          {
            product_id: 24,
            product_name: 'Safari suit pant',
            amount: 100,
          },
          {
            product_id: 25,
            product_name: 'Shorts',
            amount: 80,
          },
          {
            product_id: 26,
            product_name: 'pyjama',
            amount: 80,
          },
          {
            product_id: 27,
            product_name: 'Capri',
            amount: 80,
          },
          {
            product_id: 28,
            product_name: 'Sweat pants',
            amount: 130,
          },
          {
            product_id: 29,
            product_name: 'Track pants',
            amount: 100,
          },
          {
            product_id: 30,
            product_name: 'Swimming costume',
            amount: 40,
          },
          {
            product_id: 31,
            product_name: 'Under wear',
            amount: 40,
          },
          {
            product_id: 32,
            product_name: 'Vest',
            amount: 40,
          },
          {
            product_id: 33,
            product_name: 'Cap',
            amount: 80,
          },
          {
            product_id: 34,
            product_name: 'woolen cap',
            amount: 100,
          },
          {
            product_id: 35,
            product_name: 'tie',
            amount: 80,
          },
          {
            product_id: 176,
            product_name: 'Sweat Shirt',
            amount: null,
          },
          {
            product_id: 177,
            product_name: 'Sweat Shirt With Hood',
            amount: null,
          },
          {
            product_id: 178,
            product_name: 'Sweat shirt with hood',
            amount: null,
          },
        ],
      },
      {
        category_id: 2,
        category_name: 'Women',
        products: [
          {
            product_id: 36,
            product_name: 'KURTA PLAIN',
            amount: 100,
          },
          {
            product_id: 37,
            product_name: 'KURTA VERY HEAVY',
            amount: 230,
          },
          {
            product_id: 38,
            product_name: 'KURTA HEAVY',
            amount: 160,
          },
          {
            product_id: 39,
            product_name: 'SALWAR PLAIN',
            amount: 80,
          },
          {
            product_id: 40,
            product_name: 'SALWAR HEAVY',
            amount: 120,
          },
          {
            product_id: 41,
            product_name: 'SALWAR VERY HEAVY',
            amount: 160,
          },
          {
            product_id: 42,
            product_name: 'PLAZO PLAIN',
            amount: 80,
          },
          {
            product_id: 43,
            product_name: 'PLAZO HEAVY',
            amount: 120,
          },
          {
            product_id: 44,
            product_name: 'PLAZO VERY HEAVY',
            amount: 160,
          },
          {
            product_id: 45,
            product_name: 'DUPATTA',
            amount: 60,
          },
          {
            product_id: 46,
            product_name: 'DUPATTA',
            amount: 90,
          },
          {
            product_id: 47,
            product_name: 'DUPATTA VERY HEAVY',
            amount: 140,
          },
          {
            product_id: 48,
            product_name: 'SAREE PLAIN',
            amount: 150,
          },
          {
            product_id: 49,
            product_name: 'SAREE HEAVY',
            amount: 230,
          },
          {
            product_id: 50,
            product_name: 'SAREE VERY HEAVY',
            amount: 300,
          },
          {
            product_id: 51,
            product_name: 'SAREE DESIGNER',
            amount: 700,
          },
          {
            product_id: 52,
            product_name: 'BENARASI',
            amount: 300,
          },
          {
            product_id: 53,
            product_name: 'BENARASI HEAVY',
            amount: 400,
          },
          {
            product_id: 54,
            product_name: 'PETTICOAT',
            amount: 60,
          },
          {
            product_id: 55,
            product_name: 'BLOUSE HEAVY',
            amount: 90,
          },
          {
            product_id: 56,
            product_name: 'BLOUSE VERY HEAVY',
            amount: 130,
          },
          {
            product_id: 57,
            product_name: 'DRESS PLAIN',
            amount: 150,
          },
          {
            product_id: 58,
            product_name: 'DRESS VERY HEAVY',
            amount: 230,
          },
          {
            product_id: 59,
            product_name: 'DRESS LONG PLAIN',
            amount: 200,
          },
          {
            product_id: 60,
            product_name: 'DRESS LONG VERY HEAVY',
            amount: 300,
          },
          {
            product_id: 61,
            product_name: 'LEHNGA PLAIN',
            amount: 400,
          },
          {
            product_id: 62,
            product_name: 'LEHNGA HEAVY',
            amount: 550,
          },
          {
            product_id: 63,
            product_name: 'LEHNGA DESIGNER',
            amount: 700,
          },
          {
            product_id: 64,
            product_name: 'SKIRT SHORT PLAIN',
            amount: 100,
          },
          {
            product_id: 65,
            product_name: 'SKIRT SHORT HEAVY',
            amount: 150,
          },
          {
            product_id: 66,
            product_name: 'SKIRT SHORT VERY HEAVY',
            amount: 200,
          },
          {
            product_id: 67,
            product_name: 'SKIRT LONG PLAIN',
            amount: 150,
          },
          {
            product_id: 68,
            product_name: 'SKIRT LONG HEAVY',
            amount: 190,
          },
          {
            product_id: 69,
            product_name: 'SKIRT LONG VERY HEAVY',
            amount: 230,
          },
          {
            product_id: 70,
            product_name: 'TOP PLAIN',
            amount: 100,
          },
          {
            product_id: 71,
            product_name: 'TOP HEAVY',
            amount: 150,
          },
          {
            product_id: 72,
            product_name: 'TOP VERY HEAVY',
            amount: 200,
          },
          {
            product_id: 73,
            product_name: 'TOP WOLLEN',
            amount: 160,
          },
          {
            product_id: 74,
            product_name: 'SHIRT',
            amount: 90,
          },
          {
            product_id: 75,
            product_name: 'TSHIRT',
            amount: 90,
          },
          {
            product_id: 76,
            product_name: 'PANTS',
            amount: 100,
          },
          {
            product_id: 77,
            product_name: 'JEANS',
            amount: 100,
          },
          {
            product_id: 78,
            product_name: 'JUMPER',
            amount: 150,
          },
          {
            product_id: 79,
            product_name: 'DANGREE',
            amount: 150,
          },
          {
            product_id: 80,
            product_name: 'LEGGING',
            amount: 80,
          },
          {
            product_id: 81,
            product_name: 'CAPRI',
            amount: 80,
          },
          {
            product_id: 82,
            product_name: 'SLACKS',
            amount: 80,
          },
          {
            product_id: 83,
            product_name: 'STOLE PLAIN',
            amount: 60,
          },
          {
            product_id: 84,
            product_name: 'STOLE HEAVY',
            amount: 90,
          },
          {
            product_id: 85,
            product_name: 'STOLE VERY HEAVY',
            amount: 140,
          },
          {
            product_id: 86,
            product_name: 'SHAWL PLAIN',
            amount: 200,
          },
          {
            product_id: 87,
            product_name: 'SHAWLHEAVY',
            amount: 275,
          },
          {
            product_id: 88,
            product_name: 'SCARF',
            amount: 50,
          },
          {
            product_id: 89,
            product_name: 'COAT',
            amount: 250,
          },
          {
            product_id: 90,
            product_name: 'LONG COAT',
            amount: 380,
          },
          {
            product_id: 91,
            product_name: 'JACKET FULL SLEEVES',
            amount: 250,
          },
          {
            product_id: 92,
            product_name: 'JACKET HALF SLEEVES',
            amount: 200,
          },
          {
            product_id: 93,
            product_name: 'JACKET WITH HOOD',
            amount: 275,
          },
          {
            product_id: 94,
            product_name: 'SWEATER FULL SLEEVES PLAIN',
            amount: 175,
          },
          {
            product_id: 95,
            product_name: 'SWEATER FULL SLEEVES HEAVY',
            amount: 225,
          },
          {
            product_id: 96,
            product_name: 'SWEATER HALF SLEEVES PLAIN',
            amount: 130,
          },
          {
            product_id: 97,
            product_name: 'SWEATER HALF SLEEVES HEAVY',
            amount: 170,
          },
          {
            product_id: 98,
            product_name: 'LONG PULLOVER',
            amount: 260,
          },
          {
            product_id: 99,
            product_name: 'STOCKING',
            amount: 80,
          },
          {
            product_id: 100,
            product_name: 'TRACK PANT',
            amount: 100,
          },
          {
            product_id: 101,
            product_name: 'BRASSIERES',
            amount: 40,
          },
        ],
      },
      {
        category_id: 3,
        category_name: 'Kids',
        products: [
          {
            product_id: 102,
            product_name: 'SHIRT',
            amount: 70,
          },
          {
            product_id: 103,
            product_name: 'SHIRT WOOLEN',
            amount: 90,
          },
          {
            product_id: 104,
            product_name: 'TSHIRT',
            amount: 70,
          },
          {
            product_id: 105,
            product_name: 'TOP PLAIN',
            amount: 80,
          },
          {
            product_id: 106,
            product_name: 'TOP HEAVY',
            amount: 120,
          },
          {
            product_id: 107,
            product_name: 'PANTS',
            amount: 80,
          },
          {
            product_id: 108,
            product_name: 'CAPRI',
            amount: 60,
          },
          {
            product_id: 109,
            product_name: 'SHORTS',
            amount: 60,
          },
          {
            product_id: 110,
            product_name: 'JUMPER',
            amount: 120,
          },
          {
            product_id: 111,
            product_name: 'DANGREE',
            amount: 120,
          },
          {
            product_id: 112,
            product_name: 'FROCK PLAIN',
            amount: 100,
          },
          {
            product_id: 113,
            product_name: 'FROCK HEAVY',
            amount: 120,
          },
          {
            product_id: 114,
            product_name: 'FROCK VERY HEAVY',
            amount: 150,
          },
          {
            product_id: 115,
            product_name: 'SKIRT PLAIN',
            amount: 220,
          },
          {
            product_id: 116,
            product_name: 'SKIRT HEAVY',
            amount: 275,
          },
          {
            product_id: 117,
            product_name: 'SKIRT VERY HEAVY',
            amount: 350,
          },
          {
            product_id: 118,
            product_name: 'DRESS PLAIN',
            amount: 120,
          },
          {
            product_id: 119,
            product_name: 'DRESS HEAVY',
            amount: 200,
          },
          {
            product_id: 120,
            product_name: 'DRESS VERY HEAVY',
            amount: 250,
          },
          {
            product_id: 121,
            product_name: 'SHERWANI',
            amount: 300,
          },
          {
            product_id: 122,
            product_name: 'KURTA PLAIN',
            amount: 80,
          },
          {
            product_id: 123,
            product_name: 'KURTA VERY HEAVY',
            amount: 180,
          },
          {
            product_id: 124,
            product_name: 'SALWAR PLAIN',
            amount: 60,
          },
          {
            product_id: 125,
            product_name: 'SALWAR HEAVY',
            amount: 100,
          },
          {
            product_id: 126,
            product_name: 'DUPATTA',
            amount: 50,
          },
          {
            product_id: 127,
            product_name: 'DUPATTA HEAVY',
            amount: 70,
          },
          {
            product_id: 128,
            product_name: 'DUPATTA VERY HEAVY',
            amount: 120,
          },
          {
            product_id: 129,
            product_name: 'BLOUSE',
            amount: 50,
          },
          {
            product_id: 130,
            product_name: 'BLOUSE HEAVY',
            amount: 70,
          },
          {
            product_id: 131,
            product_name: 'LEHNGA PLAIN',
            amount: 300,
          },
          {
            product_id: 132,
            product_name: 'LEHNGA HEAVY',
            amount: 450,
          },
          {
            product_id: 133,
            product_name: 'COAT',
            amount: 200,
          },
          {
            product_id: 134,
            product_name: 'WAIST COAT',
            amount: 80,
          },
          {
            product_id: 135,
            product_name: 'LONG COAT',
            amount: 300,
          },
          {
            product_id: 136,
            product_name: 'LONG PULLOVER',
            amount: 220,
          },
          {
            product_id: 137,
            product_name: 'JACKET FULL SLEEVES',
            amount: 200,
          },
          {
            product_id: 138,
            product_name: 'JACKET HALF SLEEVES',
            amount: 150,
          },
          {
            product_id: 139,
            product_name: 'JACKET WITH HOOD',
            amount: 250,
          },
          {
            product_id: 140,
            product_name: 'SWEATER FULL SLEEVES PLAIN',
            amount: 150,
          },
          {
            product_id: 141,
            product_name: 'SWEATER FULL SLEEVES HEAVY',
            amount: 180,
          },
          {
            product_id: 142,
            product_name: 'SWEATER HALF SLEEVES PLAIN',
            amount: 120,
          },
          {
            product_id: 143,
            product_name: 'SWEATER HALF SLEEVES HEAVY',
            amount: 150,
          },
          {
            product_id: 144,
            product_name: 'SWEAT SHIRT',
            amount: 180,
          },
          {
            product_id: 145,
            product_name: 'SWEAT SHIRT WITH HOOD',
            amount: 220,
          },
          {
            product_id: 146,
            product_name: 'SWIMMING COSTUME',
            amount: 30,
          },
          {
            product_id: 147,
            product_name: 'LEGGING',
            amount: 60,
          },
          {
            product_id: 148,
            product_name: 'TRACK PANT',
            amount: 80,
          },
          {
            product_id: 149,
            product_name: 'BABY BLANKET',
            amount: 220,
          },
        ],
      },
      {
        category_id: 5,
        category_name: 'Others',
        products: [
          {
            product_id: 150,
            product_name: 'SOFT TOY SMALL',
            amount: 150,
          },
          {
            product_id: 151,
            product_name: 'SOFT TOY MEDIUM',
            amount: 250,
          },
          {
            product_id: 152,
            product_name: 'SOFT TOY LARGE',
            amount: 350,
          },
          {
            product_id: 153,
            product_name: 'SOFT TOY EXTRA LARGE',
            amount: 450,
          },
          {
            product_id: 154,
            product_name: 'SOFT TOY FULL SIZE',
            amount: 590,
          },
          {
            product_id: 155,
            product_name: 'SUIT CASE SMALL',
            amount: 200,
          },
          {
            product_id: 156,
            product_name: 'SUIT CASE MEDIUM',
            amount: 300,
          },
          {
            product_id: 157,
            product_name: 'SUIT CASE LARGE',
            amount: 420,
          },
          {
            product_id: 158,
            product_name: 'SUIT CASE EXTRA LARGE',
            amount: 550,
          },
          {
            product_id: 159,
            product_name: 'HANDBAG CANVASS JUTE CLOTH BASED LARGE',
            amount: 400,
          },
          {
            product_id: 160,
            product_name: 'HANDBAG CANVASS JUTE CLOTH BASED SMALL',
            amount: 280,
          },
          {
            product_id: 161,
            product_name: 'HANDBAG LEATHER SMALL',
            amount: 400,
          },
          {
            product_id: 162,
            product_name: 'HANDBAG LEATHER LARGE',
            amount: 600,
          },
          {
            product_id: 163,
            product_name: 'HANDERCHIEF',
            amount: 40,
          },
          {
            product_id: 164,
            product_name: 'HAT',
            amount: 160,
          },
          {
            product_id: 165,
            product_name: 'MUFFLER',
            amount: 160,
          },
          {
            product_id: 166,
            product_name: 'RAIN COAT',
            amount: 180,
          },
          {
            product_id: 167,
            product_name: 'BATH ROBE',
            amount: 150,
          },
          {
            product_id: 168,
            product_name: 'WALLET',
            amount: 200,
          },
          {
            product_id: 169,
            product_name: 'CAR SEAT COVER',
            amount: 175,
          },
          {
            product_id: 170,
            product_name: 'GLOVES LEFT',
            amount: 25,
          },
          {
            product_id: 171,
            product_name: 'GLOVES RIGHT',
            amount: 25,
          },
          {
            product_id: 172,
            product_name: 'SOCKS LEFT',
            amount: 25,
          },
          {
            product_id: 173,
            product_name: 'SOCKS RIGHT',
            amount: 25,
          },
          {
            product_id: 174,
            product_name: 'FACE MASK',
            amount: 50,
          },
          {
            product_id: 175,
            product_name: 'BELT',
            amount: 200,
          },
        ],
      },
      {
        category_id: 6,
        category_name: 'Upholstery',
        products: [
          {
            product_id: 179,
            product_name: 'CURTAIN DOOR',
            amount: 130,
          },
          {
            product_id: 180,
            product_name: 'CURTAIN DOOR WITH LINING',
            amount: 250,
          },
          {
            product_id: 181,
            product_name: 'CURTAIN WINDOW',
            amount: 110,
          },
          {
            product_id: 182,
            product_name: 'CURTAIN WINDOW WITH LINING',
            amount: 200,
          },
          {
            product_id: 183,
            product_name: 'CURTAIN BELT',
            amount: 50,
          },
          {
            product_id: 184,
            product_name: 'BLIND DOOR',
            amount: 260,
          },
          {
            product_id: 185,
            product_name: 'BLIND WINDOW',
            amount: 200,
          },
          {
            product_id: 186,
            product_name: 'BLANKET SINGLE',
            amount: 275,
          },
          {
            product_id: 187,
            product_name: 'BLANKET SINGLE 2PLY',
            amount: 350,
          },
          {
            product_id: 188,
            product_name: 'BLANKET DOUBLE',
            amount: 375,
          },
          {
            product_id: 189,
            product_name: 'BLANKET DOUBLE 2 PLY',
            amount: 465,
          },
          {
            product_id: 190,
            product_name: 'QUILT SINGLE',
            amount: 275,
          },
          {
            product_id: 191,
            product_name: 'QUILT DOUBLE',
            amount: 375,
          },
          {
            product_id: 192,
            product_name: 'QUILT COVER SINGLE',
            amount: 220,
          },
          {
            product_id: 193,
            product_name: 'QUILT COVER DOUBLE',
            amount: 270,
          },
          {
            product_id: 194,
            product_name: 'DUVET',
            amount: 80,
          },
          {
            product_id: 195,
            product_name: 'DUVET DOUBLE',
            amount: 110,
          },
          {
            product_id: 196,
            product_name: 'BED SHEET SINGLE',
            amount: 120,
          },
          {
            product_id: 197,
            product_name: 'BED SHEET DOUBLE',
            amount: 150,
          },
          {
            product_id: 198,
            product_name: 'BED SPREAD SINGLE',
            amount: 220,
          },
          {
            product_id: 199,
            product_name: 'BED SPREAD DOUBLE',
            amount: 80,
          },
          {
            product_id: 200,
            product_name: 'SOFA COVER SMALL',
            amount: 50,
          },
          {
            product_id: 201,
            product_name: 'SOFA COVER MEDIUM',
            amount: 100,
          },
          {
            product_id: 202,
            product_name: 'SOFA COVER LARGE',
            amount: 140,
          },
          {
            product_id: 203,
            product_name: 'CUSHION COVERS',
            amount: 50,
          },
          {
            product_id: 204,
            product_name: 'CUSHION COVERS MEDIUM',
            amount: 100,
          },
          {
            product_id: 205,
            product_name: 'CUSHION COVERS LARGE',
            amount: 140,
          },
          {
            product_id: 206,
            product_name: 'CUSHION SMALL',
            amount: 120,
          },
          {
            product_id: 207,
            product_name: 'CUSHION MEDIUM',
            amount: 180,
          },
          {
            product_id: 208,
            product_name: 'CUSHION LARGE',
            amount: 240,
          },
          {
            product_id: 209,
            product_name: 'PILLOW COVERS',
            amount: 50,
          },
          {
            product_id: 210,
            product_name: 'CHAIR COVERS',
            amount: 50,
          },
          {
            product_id: 211,
            product_name: 'HAND TOWEL',
            amount: 40,
          },
          {
            product_id: 212,
            product_name: 'TOWEL LARGE',
            amount: 120,
          },
          {
            product_id: 213,
            product_name: 'TABLE CLOTH SMALL',
            amount: 70,
          },
          {
            product_id: 214,
            product_name: 'TABLE CLOTH LARGE',
            amount: 120,
          },
          {
            product_id: 215,
            product_name: 'TABLE MAT',
            amount: 50,
          },
          {
            product_id: 216,
            product_name: 'FOOT MATS',
            amount: 60,
          },
          {
            product_id: 217,
            product_name: 'MATRRESS DOUBLE',
            amount: 2000,
          },
          {
            product_id: 218,
            product_name: 'BED HEAD',
            amount: 1350,
          },
          {
            product_id: 219,
            product_name: 'MATRESS SINGLE',
            amount: 1000,
          },
        ],
      },
      {
        category_id: 7,
        category_name: 'Laundry by KG',
        products: [
          {
            product_id: 220,
            product_name: 'Wash and iron Per kg',
            amount: 105,
          },
          {
            product_id: 221,
            product_name: 'Wash and fold Per kg',
            amount: 75,
          },
          {
            product_id: 222,
            product_name: 'Premium laundry Per kg',
            amount: 150,
          },
        ],
      },
    ],
  },
  {
    service_id: 2,
    service_name: 'Ironing',
    categories: [
      {
        category_id: null,
        category_name: null,
        products: [
          {
            product_id: null,
            product_name: null,
            amount: null,
          },
        ],
      },
    ],
  },
  {
    service_id: 3,
    service_name: 'Wash & Iron',
    categories: [
      {
        category_id: null,
        category_name: null,
        products: [
          {
            product_id: null,
            product_name: null,
            amount: null,
          },
        ],
      },
    ],
  },
  {
    service_id: 4,
    service_name: 'Laundry By KG',
    categories: [
      {
        category_id: null,
        category_name: null,
        products: [
          {
            product_id: null,
            product_name: null,
            amount: null,
          },
        ],
      },
    ],
  },
];

export default {
  onBoarding,
  productList,
  services,
  orders,
  notification,
  rateListwholeData,
};

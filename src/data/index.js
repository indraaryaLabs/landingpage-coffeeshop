// Phase 2: This data will eventually be fetched from Supabase
// and synced with the POS system (The Atelier).

export const MENU_CATEGORIES = ['Kopi', 'Non-Kopi', 'Pastry'];

export const MENU_DATA = {
  Kopi: [
    { id: 1, name: "Lumina Signature Latte", desc: "Espresso, steamed milk, secret caramel blend, gold flakes.", price: "55k", rating: 4.9, recommended: true, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Charcoal Macchiato", desc: "Activated charcoal, vanilla bean, double ristretto.", price: "48k", rating: 4.7, recommended: false, image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "V60 Pour Over", desc: "Single origin Ethiopian Yirgacheffe. Floral & bright.", price: "65k", rating: 4.8, recommended: true, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" },
    { id: 4, name: "Oat Silk Flat White", desc: "Smooth oat milk micro-foam over classic espresso.", price: "50k", rating: 4.6, recommended: false, image: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&q=80&w=600" },
    { id: 11, name: "Double Espresso", desc: "A robust and intense shot of our house blend.", price: "35k", rating: 4.5, recommended: false, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600" },
    { id: 12, name: "Cold Brew Reserve", desc: "Steeped for 18 hours, served over craft ice.", price: "55k", rating: 4.9, recommended: true, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600" },
  ],
  "Non-Kopi": [
    { id: 5, name: "Matcha Ceremonial", desc: "Grade A Uji Matcha, bamboo whisked, lightly sweetened.", price: "60k", rating: 4.9, recommended: true, image: "https://images.unsplash.com/photo-1515823662415-e0fd0d981814?auto=format&fit=crop&q=80&w=600" },
    { id: 6, name: "Artisan Kombucha", desc: "Fermented locally with passionfruit and mint.", price: "45k", rating: 4.6, recommended: false, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600" },
    { id: 7, name: "Midnight Chocolate", desc: "70% Dark Belgian chocolate, sea salt, steamed milk.", price: "55k", rating: 4.8, recommended: true, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=600" },
    { id: 13, name: "Earl Grey Lemonade", desc: "Cold brewed Earl Grey tea mixed with fresh lemonade.", price: "40k", rating: 4.5, recommended: false, image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=600" },
  ],
  Pastry: [
    { id: 8, name: "Truffle Butter Croissant", desc: "Flaky artisan pastry infused with black truffle oil.", price: "42k", rating: 4.9, recommended: true, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600" },
    { id: 9, name: "Basque Cheesecake", desc: "Burnt caramel exterior, gooey creamy center.", price: "58k", rating: 4.8, recommended: false, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600" },
    { id: 10, name: "Almond Pain au Chocolat", desc: "Double baked, dark chocolate batons, almond frangipane.", price: "45k", rating: 4.7, recommended: false, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600" },
    { id: 14, name: "Fudge Brownie", desc: "Decadent dark chocolate brownie with walnuts.", price: "38k", rating: 4.6, recommended: false, image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=600" },
    { id: 15, name: "Classic Tiramisu", desc: "Espresso soaked ladyfingers with mascarpone cream.", price: "65k", rating: 4.9, recommended: true, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600" },
  ]
};

export const GALLERY_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800", alt: "Interior" },
  { id: 2, url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", alt: "Coffee details" },
  { id: 3, url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800", alt: "Barista equipment" },
  { id: 4, url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800", alt: "Pour over" }
];

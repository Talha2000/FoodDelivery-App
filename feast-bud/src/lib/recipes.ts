export type RecipeSummary = {
  id: number;
  title: string;
  description: string;
  time: string;
  category: string;
  imageUrl: string;
};

export const featuredRecipes: RecipeSummary[] = [
  {
    id: 38,
    title: "Low-Fat Berry Blue Frozen Dessert",
    description: "A cool, creamy berry dessert with a bright lemon finish.",
    time: "24 hr 45 min",
    category: "Dessert",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_800,h_600,c_fit,fl_progressive,q_95/v1/img/recipes/38/YUeirxMLQaeE1h3v3qnM_229%20berry%20blue%20frzn%20dess.jpg",
  },
  {
    id: 39,
    title: "Biryani",
    description:
      "Saffron rice, tender chicken, herbs, nuts, and warming spices.",
    time: "4 hr 25 min",
    category: "Indian",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_800,h_600,c_fit,fl_progressive,q_95/v1/img/recipes/39/picM9Mhnw.jpg",
  },
  {
    id: 40,
    title: "Best Lemonade",
    description: "Fresh lemons and a little zest make this a sunny classic.",
    time: "35 min",
    category: "Drinks",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_800,h_600,c_fit,fl_progressive,q_95/v1/img/recipes/40/picJ4Sz3N.jpg",
  },
  {
    id: 41,
    title: "Carina's Tofu-Vegetable Kebabs",
    description: "Colorful vegetables and tofu with a savory marinade.",
    time: "24 hr 20 min",
    category: "Grill",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_800,h_600,c_fit,fl_progressive,q_95/v1/img/recipes/41/picmbLig8.jpg",
  },
  {
    id: 42,
    title: "Cabbage Soup",
    description:
      "A simple vegetable soup with tomato, cabbage, carrots, and celery.",
    time: "50 min",
    category: "Vegetable",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_800,h_600,c_fit,fl_progressive,q_95/v1/img/recipes/42/picVEMxk8.jpg",
  },
  {
    id: 44,
    title: "Warm Chicken A La King",
    description: "A rich, comforting chicken dish ready in under an hour.",
    time: "38 min",
    category: "Chicken",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_800,h_600,c_fit,fl_progressive,q_95/v1/img/recipes/44/picsSKvFd.jpg",
  },
];

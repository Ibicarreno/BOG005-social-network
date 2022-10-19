export const saveRecipe = () => {};
export const q = () => {};
export const getRecipe = () => {};

export const onGetRecipes = jest.fn(() => Promise.resolve([
  {
    data: () => ({
      title: 'Torta de lenteja',
      description: 'Lentejas, agua, sal',
    }),
  },
]));

export const deletePost = () => Promise.resolve({
  id: 'klasdjfusha21',
  postData: () => ({
    date: '14 de octubre de 2022',
    nameUser: 'Luna',
    description: 'frutas, lecherita, helado, salsa de mora',
    like: [],
    idUser: 'lEdAPou48vSYW84X8Zo',
    title: 'ensalada de frutas',
  }),
});

export const getPost = jest.fn(() => Promise.resolve({
  id: 'klasdjfusha21',
  postData: () => ({
    date: '14 de octubre de 2022',
    nameUser: 'Luna',
    description: 'frutas, lecherita, helado, salsa de mora',
    like: [],
    idUser: 'lEdAPou48vSYW84X8Zo',
    title: 'ensalada de frutas',
  }),
}));

export const updatePost = () => {};
export const likeMe = () => {};
export const dislikeMe = () => {};

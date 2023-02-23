import categories from "data/categorias.json";

type Category = typeof categories[0];

const sortByLength = (categories: Category[]) => {
  return categories.sort((a, b) => {
    const lengthA = a.name.length;
    const lengthB = b.name.length;

    if (lengthA < lengthB) return -1;
    if (lengthA === lengthB) return 0;
    return 1;
  });
};

export default sortByLength;

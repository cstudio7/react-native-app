export const filterFavorites = names => {
  const filter = genderNames => genderNames.filter(name => name.isFavorite);
  const female = filter(names.female);
  const male = filter(names.male);
  return { female, male };
};

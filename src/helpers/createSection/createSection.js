const R = require('ramda');

const createSection = names => {
  const groupByFirstLetter = R.groupBy(nameObj => nameObj.name.substr(0, 1));
  const groups = groupByFirstLetter(names);
  return Object.keys(groups).map(groupName => ({
    title: groupName,
    data: groups[groupName]
  }));
};

export default createSection;

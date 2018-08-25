import { groupBy } from 'lodash';

const createSection = names => {
  const groups = groupBy(names, nameObj => nameObj.name.substr(0, 1));
  return Object.keys(groups).map(groupName => ({
    title: groupName,
    data: groups[groupName]
  }));
};

export default createSection;

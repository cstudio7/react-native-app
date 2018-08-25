import createSection from './createSection';

const mockedNames = Object.freeze([
  {
    name: 'Artur',
    isFavorite: false
  },
  {
    name: 'Alexander',
    isFavorite: false
  },
  {
    name: 'Svetlana',
    isFavorite: true
  }
]);

it('renders correctly', () => {
  expect(createSection(mockedNames)).toEqual([
    {
      title: 'A',
      data: [
        { name: 'Artur', isFavorite: false },
        {
          name: 'Alexander',
          isFavorite: false
        }
      ]
    },
    { title: 'S', data: [{ name: 'Svetlana', isFavorite: true }] }
  ]);
});

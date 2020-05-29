import faker from 'faker';

export const generateSitters = () => {
  const sitters = [];
  for (let i = 0; i <= 9; i++) {
    sitters.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      photoUrl: faker.image.avatar(),
      tagline: faker.lorem.sentence(4),
      distance: faker.random.number({ min: 1, max: 30 }),
    });
  }
  return sitters;
};

export const generateReviews = () => {
  const reviews = [];
  for (let i = 0; i <= 4; i++) {
    reviews.push({
      id: faker.random.uuid(),
      review: faker.lorem.sentence(30),
      ratings: faker.random.number({ min: 1, max: 5 }),
      dateCreated: faker.date.recent(),
    });
  }
  return reviews;
};

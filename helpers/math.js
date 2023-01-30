export function randomFromArray(array) {
  const item = array[Math.floor(Math.random() * array.length)];

  return item;
}

export function randomThreeFromArray(array) {
  let randomItems = [];

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    randomItems.push(array.splice(randomIndex, 1)[0]);
  }

  return randomItems;
}

export function ratingRounder(rating) {
  if (rating % 1 >= 0.6) {
    return Math.ceil(rating);
  } else {
    return Math.floor(rating);
  }
}

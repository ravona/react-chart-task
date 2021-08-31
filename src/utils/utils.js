const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomChartData = (items) => {
  const randomLabels = [];
  const randomData = [];

  for (let i = 0; i < items; i++) {
    randomLabels.push(`item ${i}`);
    randomData.push(getRandomInt(1, 100));
  }

  return {
    randomLabels,
    randomData,
  };
};

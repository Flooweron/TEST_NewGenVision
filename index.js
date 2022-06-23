// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function findByRange(range) {
  const firstRange = range[0] === null ? 0 : range[0];
  const lastRange = range[1];
  const results = courses.filter((el) => {
    el.prices[0] = el.prices[0] === null ? 0 : el.prices[0];
    const term0 =
      el.prices[1] !== null && lastRange !== null
        ? el.prices[1] <= lastRange
        : false;
    const term1 = el.prices[1] === null && lastRange === null;
    const term2 = lastRange === null ? el.prices[1] >= firstRange : false;
    const term3 = el.prices[1] === null ? el.prices[0] <= lastRange : false;
    return el.prices[0] >= firstRange && (term0 || term1 || term2 || term3);
  });
  console.log(results);
}

findByRange(requiredRange1);
findByRange(requiredRange2);
findByRange(requiredRange3);

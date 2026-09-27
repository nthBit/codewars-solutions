function nbYear(p0, percent, aug, p) {
  let years = 0;
  let population = p0;
  while (population < p) {
    population = Math.floor(population + (population * (percent / 100)) + aug);
    years += 1;
  }
  return years;
}
​
nbYear(1000, 2, 50, 1200);
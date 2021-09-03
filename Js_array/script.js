let a = [1, 2, 3, 4, 5], b = [1, "BMW", 2, "Mercedes", 3, "Audi"];
console.log([...a, ...b].filter((v, i, a) => a.indexOf(v) === i));
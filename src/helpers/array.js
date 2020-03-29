export function swapArrayIndexes(a, source, target) {
  [a[source], a[target]] = [a[target], a[source]]
  return a
}

export function shuffleArray(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

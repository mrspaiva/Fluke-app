function showCircle(radius) {
  const size = {x: radius * 2 + 1, y: radius * 2 + 1};
  const center = {x: size.x / 2, y: size.y / 2};

  let output = '';

  for (let x = 0; x < size.x; x++) {
    for (let y = 0; y < size.y; y++) {
      const distanceBetweenPointAndCenter = Math.sqrt(
        Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2),
      );

      if (distanceBetweenPointAndCenter <= radius) {
        output += '^^';
      } else {
        output += '  ';
      }
    }
    output += '\n';
  }

  console.log(output);
}

let radius = 2;

if (!radius || !(radius >= 1 && radius <= 25)) {
  console.log('Raio inválido');
} else {
  showCircle(radius);
}

export function processDiff(image) {
  var rgba = image.data;

  // pixel adjustments are done by reference directly on diffImageData
  var score = 0;
  for (var i = 0; i < rgba.length; i += 4) {
    var pixelDiff = rgba[i] * 0.3 + rgba[i + 1] * 0.6 + rgba[i + 2] * 0.1;
    var normalized = Math.min(255, pixelDiff * (255 / 32));
    rgba[i] = 0;
    rgba[i + 1] = normalized;
    rgba[i + 2] = 0;

    if (pixelDiff >= 32) {
      score++;
    }
  }

  return score;
}

let count = 0;

// Triangle card

getId('btn-triangle').addEventListener('click', function () {
  const getBaseValue = convertToNumber('triangle-base', true);
  const getHeightValue = convertToNumber('triangle-height', true);

  inputClear('triangle-base');
  inputClear('triangle-height');

  if (NaNCheck(getBaseValue, getHeightValue)) {
    if (invalidNumber(getBaseValue, getHeightValue)) {
      count += 1;
      const triangleResult = calculateDrei(getBaseValue, getHeightValue);

      makeElement(count, 'triangle-shape', triangleResult.toFixed(2));
    }
  }
});

// Rectangle card

getId('btn-rectangle').addEventListener('click', function () {
  const getWidthValue = convertToNumber('rectangle-width', true);
  const getLengthValue = convertToNumber('rectangle-length', true);

  inputClear('rectangle-width');
  inputClear('rectangle-length');

  if (NaNCheck(getWidthValue, getLengthValue)) {
    if (invalidNumber(getWidthValue, getLengthValue)) {
      count += 1;
      const rectangleResult = calculateZwei(getWidthValue, getLengthValue);

      makeElement(count, 'rectangle-shape', rectangleResult.toFixed(2));
    }
  }
});

// Parallelogram card

getId('btn-parallelogram').addEventListener('click', function () {
  const getBaseValue = convertToNumber('parallelogram-base', true);
  const getHeightValue = convertToNumber('parallelogram-height', true);

  inputClear('parallelogram-base');
  inputClear('parallelogram-height');

  if (NaNCheck(getBaseValue, getHeightValue)) {
    if (invalidNumber(getBaseValue, getHeightValue)) {
      count += 1;
      const parallelogramResult = calculateZwei(getBaseValue, getHeightValue);

      makeElement(count, 'parallelogram-shape', parallelogramResult.toFixed(2));
    }
  }
});

// Rhombus card

getId('btn-rhombus').addEventListener('click', function () {
  const getBaseValue = convertToNumber('rhombus-diagonal-left', true);
  const getHeightValue = convertToNumber('rhombus-diagonal-right', true);

  inputClear('rhombus-diagonal-left');
  inputClear('rhombus-diagonal-right');

  if (NaNCheck(getBaseValue, getHeightValue)) {
    if (invalidNumber(getBaseValue, getHeightValue)) {
      count += 1;
      const rohmbusResult = calculateDrei(getBaseValue, getHeightValue);

      makeElement(count, 'rhombus-shape', rohmbusResult.toFixed(2));
    }
  }
});

//Pentagon card

getId('btn-pentagon').addEventListener('click', function () {
  const getBaseValue = convertToNumber('pentagon-input', true);
  const getHeightValue = convertToNumber('apothem-input', true);

  inputClear('pentagon-input');
  inputClear('apothem-input');

  if (NaNCheck(getBaseValue, getHeightValue)) {
    if (invalidNumber(getBaseValue, getHeightValue)) {
      count += 1;
      const pentagonResult = calculateDrei(getBaseValue, getHeightValue);

      makeElement(count, 'pentagon-shape', pentagonResult.toFixed(2));
    }
  }
});

//Ellipse card

getId('btn-ellipse').addEventListener('click', function () {
  const getMajorValue = convertToNumber('semi-major', true);
  const getMinorValue = convertToNumber('semi-minor', true);

  inputClear('semi-major');
  inputClear('semi-minor');

  if (NaNCheck(getMajorValue, getMinorValue)) {
    if (invalidNumber(getMajorValue, getMinorValue)) {
      count += 1;
      const ellipseResult = calculateEllipse(getMajorValue, getMinorValue);

      makeElement(count, 'ellipse-shape', ellipseResult.toFixed(2));
    }
  }
});

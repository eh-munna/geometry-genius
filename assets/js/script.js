// get element id

function getId(id) {
  return document.getElementById(id);
}

// get the value or text from html

function getValueOrText(id, isValue) {
  if (isValue) {
    return document.getElementById(id).value;
  } else {
    return document.getElementById(id).innerText;
  }
}

// convert innerText or input value to the number

function convertToNumber(id, isValue) {
  if (isValue) {
    const getElementContent = getId(id).value;
    const convertToNum = parseFloat(getElementContent);
    return convertToNum;
  } else {
    const getElementContent = getId(id).innerText;
    const convertToNum = parseFloat(getElementContent);
    return convertToNum;
  }
}

// random color generation

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
}

const allCardItems = document.getElementsByClassName('card-item');
for (const item of allCardItems) {
  item.addEventListener('mouseover', function () {
    item.style.backgroundColor = randomColor();
  });
  item.addEventListener('mouseout', function () {
    item.style.backgroundColor = 'white';
  });
}

// triangle calculation

function calculateDrei(base, height) {
  const triangleResult = 0.5 * base * height;
  return triangleResult;
}

// rectangle calculation

function calculateZwei(width, length) {
  const rectangleResult = width * length;
  return rectangleResult;
}

function calculateEllipse(major, minor) {
  const ellipseResult = 3.14 * major * minor;
  return ellipseResult;
}

// dynamic element creation

function makeElement(count, titleId, calculation) {
  const div = document.createElement('div');
  div.classList.add('grid', 'grid-cols-5', 'items-center', 'space-y-6');
  const shapeTitle = getId(titleId).innerText;
  div.innerHTML = `
  
          <div class="number mt-6">${count}</div>
          <div class="shape">${shapeTitle}</div>
          <div class="result">
            ${calculation}<span>cm<sup>2</sup></span>
          </div>
          <div class="flex justify-center items-center col-span-2">
            <button
              class=" items-center p-2 text-sm md:text-xl font-bold text-center text-white bg-[#1090D8] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Convert to m<span><sup>2</sup></span>
            </button>
          </div>
          
  `;
  const parentContainer = getId('card-calculation');
  parentContainer.appendChild(div);
}

// clear field
function inputClear(id) {
  const getInputId = getId(id);
  return (getInputId.value = '');
}

//NaN validation

function NaNCheck(value1, value2) {
  if (isNaN(value1 && value2)) {
    alert`Please provide a number`;
    return false;
  }
  return true;
}

//Invalid number checking

function invalidNumber(num1, num2) {
  if (num1 <= 0 || num2 <= 0) {
    alert`Please provide a valid number, not 0 or negative number`;
    return false;
  }
  return true;
}

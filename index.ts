import hazardousLabel from './src/hazardousLabel.js';
import nonhazardousLabel from './src/nonhazardousLabel.js';
import labelPage from './src/labelPage.js';
import wasteForm from './src/wasteForm.js';
import { WasteData } from './src/utils.js';

const form = document.getElementById('waste-form') as HTMLFormElement;
form.addEventListener('change', (e) => {
  const preview = document.getElementById(
    'label-preview'
  ) as unknown as SVGGElement;
  const previewData = getWasteDataFromForm(form);
  const isHazardous = checkHazardous(previewData);
  preview.innerHTML = isHazardous
    ? hazardousLabel(previewData)
    : nonhazardousLabel(previewData);
});

const svgBox = document.getElementById('svg-box') as HTMLDivElement;

const generateButton = document.getElementById('generate') as HTMLInputElement;
const currentID = document.getElementById('current') as HTMLInputElement;
const nextButton = document.getElementById('next') as HTMLInputElement;
const prevButton = document.getElementById('prev') as HTMLInputElement;
const clearButton = document.getElementById('clear') as HTMLInputElement;
const deleteButton = document.getElementById('delete') as HTMLInputElement;
const numPages = document.getElementById('num-pages') as HTMLSpanElement;
const overwriteButton = document.getElementById(
  'overwrite'
) as HTMLInputElement;
let currentIndex = 0;

let submittedWastes: WasteData[] = [];
clearButton.addEventListener('click', (e) => {
  clearForm();
});
const clearForm = () => {
  form.reset();
  currentID.value = 'New';
  currentIndex = submittedWastes.length;
};
deleteButton.addEventListener('click', (e) => {
  if (submittedWastes.length == 0 || currentID.value == 'New') return;
  submittedWastes.splice(currentIndex, 1);

  if (submittedWastes.length == 0) {
    clearForm();
    return;
  }
  if (currentIndex >= submittedWastes.length) {
    currentIndex = submittedWastes.length - 1;
  }
  fillFormFromWasteData(submittedWastes[currentIndex]);
  currentID.value = String(currentIndex + 1);
});
nextButton.addEventListener('click', (e) => {
  if (currentIndex < submittedWastes.length - 1) {
    currentIndex++;
    fillFormFromWasteData(submittedWastes[currentIndex]);
    currentID.value = String(currentIndex + 1);
  }
});

prevButton.addEventListener('click', (e) => {
  if (currentIndex > 0) {
    currentIndex--;
    fillFormFromWasteData(submittedWastes[currentIndex]);
    currentID.value = String(currentIndex + 1);
  }
});
overwriteButton.addEventListener('click', (e) => {
  const data = getWasteDataFromForm(form);
  submittedWastes[currentIndex] = data;
  generatePages();
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = getWasteDataFromForm(form);
  submittedWastes.push(data);
  form.reset();
  currentID.value = 'New';
  currentIndex = submittedWastes.length;
  generatePages();
});

const fillFormFromWasteData = (data: WasteData): undefined => {
  Object.entries(data).forEach(([key, value]) => {
    const element = document.getElementById(key);
    if (element == null) return;
    const castElement = element as HTMLInputElement;
    if (key.includes('toxic-codes')) {
      castElement.checked = value.length > 0;
    } else {
      castElement.value = value;
    }
  });
  return;
};

const getWasteDataFromForm = (form: HTMLFormElement): WasteData => {
  const data: WasteData = { 'listed-codes': [], toxic: false };

  const formFields = form.querySelectorAll('*[id]');

  formFields.forEach((e) => {
    const inputElement = e as HTMLInputElement;
    const key = inputElement.id;
    if (inputElement.type == 'button') return;
    if (inputElement.type == 'checkbox') {
      if (inputElement.checked == true) {
        data[key] = inputElement.value;
        data['listed-codes'].push(inputElement.value);
        data['toxic'] = true;
      } else {
        data[key] = '';
      }
      return;
    }
    if (key == 'ignitable' && inputElement.value != '')
      data['listed-codes'].push('D001');
    if (key == 'corrosive' && inputElement.value != '')
      data['listed-codes'].push('D002');
    if (key == 'reactive' && inputElement.value != '')
      data['listed-codes'].push('D003');
    if (inputElement.id.includes('list-codes')) {
      const regex: RegExp = /[F|U|P][0-9]{3}/gm;
      data[key] = inputElement.value;
      data['listed-codes'] = data['listed-codes'].concat(
        [...inputElement.value.matchAll(regex)].map((e) => e[0])
      );
      return;
    }
    if (inputElement.id.includes('waste-determination')) {
      data[key] = inputElement.checked;
      return;
    }
    data[key] = inputElement.value;
  });
  return data;
};

generateButton.addEventListener('click', (e) => {
  e.preventDefault();
  generatePages();
});

const generatePages = () => {
  svgBox.innerHTML = '';
  const wasteForms: string[] = [];
  const labels: string[] = [];
  submittedWastes.forEach((data: WasteData) => {
    wasteForms.push(wasteForm(data));
    const isHazardous = checkHazardous(data);
    for (let i = 0; i < Number(data['number-of-containers']); i++) {
      if (isHazardous) {
        labels.push(hazardousLabel(data));
      } else {
        labels.push(nonhazardousLabel(data));
      }
    }
  });
  let labelPageCount = 0;
  for (let i = 0; i < labels.length; i += 10) {
    labelPageCount++;
    const labelBuilder: string[] = [];
    for (let j = 0; j < 10; j++) {
      if (i + j < labels.length) {
        labelBuilder.push(labels[i + j]);
      }
    }
    svgBox.innerHTML += labelPage(labelBuilder);
  }
  wasteForms.forEach((form) => {
    svgBox.innerHTML += form;
  });
  numPages.innerHTML = String(labelPageCount);
};

const checkHazardous = (data: WasteData): boolean => {
  const keys = Object.entries(data);
  const isHazardous = keys.reduce((acc, [key, value]) => {
    if (
      key.includes('codes') ||
      key == 'corrosive' ||
      key == 'ignitable' ||
      key == 'reactive'
    ) {
      if (value.length > 0) {
        return true;
      }
    }
    return acc;
  }, false);

  return isHazardous;
};

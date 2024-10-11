import hazardousLabel from './src/hazardousLabel.js';
import nonhazardousLabel from './src/nonhazardousLabel.js';
import labelPage from './src/labelPage.js';
import wasteForm from './src/wasteForm.js';
const form = document.getElementById('waste-form');
const svgBox = document.getElementById('svg-box');
const generateButton = document.getElementById('generate');
const currentID = document.getElementById('current');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const overwriteButton = document.getElementById('overwrite');
let currentIndex = 0;
let submittedWastes = [];
clearButton.addEventListener('click', (e) => {
    clearForm();
});
const clearForm = () => {
    form.reset();
    currentID.value = 'New';
    currentIndex = submittedWastes.length;
};
deleteButton.addEventListener('click', (e) => {
    if (submittedWastes.length == 0 || currentID.value == 'New')
        return;
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
        console.log(String(currentIndex + 1));
        fillFormFromWasteData(submittedWastes[currentIndex]);
        currentID.value = String(currentIndex + 1);
    }
});
prevButton.addEventListener('click', (e) => {
    if (currentIndex > 0) {
        currentIndex--;
        console.log(currentIndex + 1);
        fillFormFromWasteData(submittedWastes[currentIndex]);
        currentID.value = String(currentIndex + 1);
    }
});
overwriteButton.addEventListener('click', (e) => {
    const data = getWasteDataFromForm(form);
    submittedWastes[currentIndex] = data;
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = getWasteDataFromForm(form);
    submittedWastes.push(data);
    form.reset();
    currentID.value = 'New';
    currentIndex = submittedWastes.length;
});
const fillFormFromWasteData = (data) => {
    console.log(data);
    Object.entries(data).forEach(([key, value]) => {
        const element = document.getElementById(key);
        if (element == null)
            return;
        const castElement = element;
        if (key.includes('toxic-codes')) {
            castElement.checked = value.length > 0;
        }
        else {
            castElement.value = value;
        }
    });
    return;
};
const getWasteDataFromForm = (form) => {
    const data = { 'listed-codes': [], toxic: false };
    const formFields = form.querySelectorAll('*[id]');
    formFields.forEach((e) => {
        const inputElement = e;
        const key = inputElement.id;
        if (inputElement.type == 'checkbox') {
            if (inputElement.checked == true) {
                data[key] = inputElement.value;
                data['listed-codes'].push(inputElement.value);
                data['toxic'] = true;
            }
            else {
                data[key] = '';
            }
            return;
        }
        if (inputElement.id.includes('list-codes')) {
            const regex = /[F|U|P][0-9]{3}/gm;
            data[key] = inputElement.value;
            data['listed-codes'] = data['listed-codes'].concat([...inputElement.value.matchAll(regex)].map((e) => e[0]));
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
    svgBox.innerHTML = '';
    const wasteForms = [];
    const labels = [];
    submittedWastes.forEach((data) => {
        wasteForms.push(wasteForm(data));
        const isHazardous = checkHazardous(data);
        for (let i = 0; i < Number(data['number-of-containers']); i++) {
            if (isHazardous) {
                labels.push(hazardousLabel(data));
            }
            else {
                labels.push(nonhazardousLabel(data));
            }
        }
    });
    wasteForms.forEach((form) => {
        svgBox.innerHTML += form;
    });
    for (let i = 0; i < labels.length; i += 10) {
        const labelBuilder = [];
        for (let j = 0; j < 10; j++) {
            if (i + j < labels.length) {
                labelBuilder.push(labels[i + j]);
            }
        }
        svgBox.innerHTML += labelPage(labelBuilder);
    }
});
const checkHazardous = (data) => {
    console.log(data);
    const keys = Object.entries(data);
    const isHazardous = keys.reduce((acc, [key, value]) => {
        if (key.includes('codes') ||
            key == 'corrosive' ||
            key == 'ignitable' ||
            key == 'reactive') {
            if (value.length > 0) {
                return true;
            }
        }
        return acc;
    }, false);
    return isHazardous;
};

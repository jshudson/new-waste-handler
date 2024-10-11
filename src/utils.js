export const splitStringByMaxLength = (str, maxLength) => {
    const words = str.split(' ');
    const result = [];
    let currentLine = '';
    words.forEach((word) => {
        if ((currentLine + word).length <= maxLength) {
            currentLine += (currentLine ? ' ' : '') + word;
        }
        else {
            result.push(currentLine);
            currentLine = word;
        }
    });
    if (currentLine) {
        result.push(currentLine);
    }
    return result;
};
export function* arrayToGenerator(array) {
    for (let item of array) {
        yield item;
    }
    while (true)
        yield '';
}

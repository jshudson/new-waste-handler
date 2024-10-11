export interface WasteData {
  [key: string]: any;
  'listed-codes': string[];
  toxic: boolean;
}

export const splitStringByMaxLength = (str: string, maxLength: number): string[] => {
  const words = str.split(' ');
  const result = [];
  let currentLine = '';

  words.forEach((word) => {
    if ((currentLine + word).length <= maxLength) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      result.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) {
    result.push(currentLine);
  }

  return result;
};
export function* arrayToGenerator(array: any[]) {
  for (let item of array) {
    yield item;
  }
  while (true) yield '';
}
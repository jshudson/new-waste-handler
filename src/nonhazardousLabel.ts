import { WasteData, arrayToGenerator, splitStringByMaxLength } from "./utils.js";
const nonhazardousLabel = (data: WasteData) => {
  const description = arrayToGenerator(
    splitStringByMaxLength(data['waste-description'], 40)
  );
  return `<text class="non-haz-title" x="11.911" y="3.509">NONHAZARDOUS WASTE</text>
      <text class="mailing" x="11.639" y="51.076">Milliken Chemical Regulatory Affairs, M-209</text>
      <text x="11.451" y="76.702">Generator:</text>
      <text x="11.880" y="102.303">Identifier:</text>
      <text x="11.707" y="127.873">Description:</text>
      <path d="M 64.960,86.702 H 253.346" />
      <path d="M 57.760,112.303 H 253.346" />
      <rect class="epa-box" x="265.026" y="49.602" width="108.640" height="70.426" />
      <text id="generator" x="71.220" y="76.702">${data["waste-generator"]}</text>
      <text id="identifier" x="63.988" y="102.303">${data["waste-identifier"]}</text>
      <text x="20" y="140">
        <tspan x="20" dy="0em" id="description1">${
          description.next().value
        }</tspan>
        <tspan x="20" dy="1.1em" id="description2">${
          description.next().value
        }</tspan>
        <tspan x="20" dy="1.1em" id="description3">${
          description.next().value
        }</tspan>
        <tspan x="20" dy="1.1em" id="description4">${
          description.next().value
        }</tspan>
      </text>`;
};
export default nonhazardousLabel
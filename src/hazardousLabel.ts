import { WasteData, arrayToGenerator, splitStringByMaxLength } from "./utils.js";
const hazardousLabel = (data: WasteData) => {
  //40 characters
  const description = arrayToGenerator(
    splitStringByMaxLength(data['waste-description'], 40)
  );
  const wasteCodes = arrayToGenerator(data['listed-codes']);

  return `<text class="haz-title" x="11.911" y="3.509">HAZARDOUS WASTE DATE: _________</text>
  <text class="haz-sub-title" x="11.564" y="26.797">Federal law prohibits improper disposal</text>
  <text class="mailing" x="11.639" y="51.076">Milliken Chemical Regulatory Affairs, M-209</text>
  <text x="11.451" y="76.702">Generator:</text>
  <text x="11.880" y="102.303">Identifier:</text>
  <text x="11.707" y="127.873">Description:</text>
  <text class="epa-codes-header" x="282.407" y="59.622">EPA Waste Codes</text>
  <text x="276.198" y="127.233">Weight:</text>
  <path d="M 64.960,86.702 H 253.346" />
  <path d="M 57.760,112.303 H 253.346" />
  <rect class="epa-box" x="265.026" y="49.602" width="108.640" height="122.267" />
  <path d="M 265.026,75.536 H 373.330" />
  <path d="M 265.026,119.389 H 373.330" />
  <text id="generator" x="71.220" y="76.702">${data['waste-generator']}</text>
  <text id="identifier" x="63.988" y="102.303">${
    data['waste-identifier']
  }</text>
  <text x="20" y="140">
    <tspan x="20" dy="0em" id="description1">${description.next().value}</tspan>
    <tspan x="20" dy="1.1em" id="description2">${
      description.next().value
    }</tspan>
    <tspan x="20" dy="1.1em" id="description3">${
      description.next().value
    }</tspan>
    <tspan x="20" dy="1.1em" id="description4">${
      description.next().value
    }</tspan>
  </text>
  <text class="epa-box-codes" x="282.799" y="77">
    <tspan id="code1" x="282.799" dy="0">${wasteCodes.next().value}</tspan>
    <tspan id="code2" x="282.799" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code3" x="282.799" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code4" x="282.799" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code5" x="319.012" y="77">${wasteCodes.next().value}</tspan>
    <tspan id="code6" x="319.012" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code7" x="319.012" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code8" x="319.012" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code9" x="355.226" y="77">${wasteCodes.next().value}</tspan>
    <tspan id="code10" x="355.226" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code11" x="355.226" dy="1em">${wasteCodes.next().value}</tspan>
    <tspan id="code12" x="355.226" dy="1em">${wasteCodes.next().value}</tspan>
  </text>`;
};

export default hazardousLabel

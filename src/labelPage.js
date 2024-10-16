import { arrayToGenerator } from "./utils.js";
const labelPage = (labels) => {
    const labelIterator = arrayToGenerator(labels);
    return `<div class="print-page">
  <svg height="11in" width="8.5in" xmlns="http://www.w3.org/2000/svg">
    <style type="text/css">
      #label-page * {
        stroke-linecap: butt;
        stroke-width: 0.5pt;
      }

      #r1c1 {
        transform: translate(13.893px, 48px);
      }

      #r2c1 {
        transform: translate(13.893px, 241.293px);
      }

      #r3c1 {
        transform: translate(13.893px, 434.586px);
      }

      #r4c1 {
        transform: translate(13.893px, 627.879px);
      }

      #r5c1 {
        transform: translate(13.893px, 821.172px);
      }

      #r1c2 {
        transform: translate(415.893px, 48px);
      }

      #r2c2 {
        transform: translate(415.893px, 241.293px);
      }

      #r3c2 {
        transform: translate(415.893px, 434.586px);
      }

      #r4c2 {
        transform: translate(415.893px, 627.879px);
      }

      #r5c2 {
        transform: translate(415.893px, 821.172px);
      }

      #label-page text {
        font-family: Arial;
        font-size: 8pt;
        dominant-baseline: hanging;
      }

      #label-page path {
        stroke: black;
      }

      #label-page .haz-title {
        font-size: 10.5pt;
        font-weight: bold;
        fill: red;
      }

      #label-page .non-haz-title {
        font-size: 14pt;
        font-weight: bold;
        fill: #00B050
      }

      #label-page .haz-sub-title {
        font-size: 7pt;
        font-weight: bold;
        fill: red;
      }

      #label-page .mailing {
        font-weight: bold;
      }

      #label-page .epa-codes-header {
        font-family: Calibri;
        font-size: 8pt;
      }

      #label-page .epa-box {
        fill: none;
        stroke: black;
      }

      #label-page .epa-box-codes {
        text-anchor: middle;
      }
    </style>
    <g id="label-page">
      <g id="r1c1">
      ${labelIterator.next().value}
      </g>
      <g id="r2c1">
      ${labelIterator.next().value}
      </g>
      <g id="r3c1">
      ${labelIterator.next().value}
      </g>
      <g id="r4c1">
      ${labelIterator.next().value}
      </g>
      <g id="r5c1">
      ${labelIterator.next().value}
      </g>
      <g id="r1c2">
      ${labelIterator.next().value}
      </g>
      <g id="r2c2">
      ${labelIterator.next().value}
      </g>
      <g id="r3c2">
      ${labelIterator.next().value}
      </g>
      <g id="r4c2">
      ${labelIterator.next().value}
      </g>
      <g id="r5c2">
      ${labelIterator.next().value}
      </g>
    </g>
  </svg>
</div>`;
};
export default labelPage;

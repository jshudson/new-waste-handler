const wasteForm = (data) => {
    return `<div class="print-page">
  <svg height="11in" width="8.5in" xmlns="http://www.w3.org/2000/svg">
    <style type="text/css">
      * {
        stroke-linecap: butt
      }

      #waste-page {
        transform: translate(1in, 0.196in);
      }

      #waste-page #header>text {
        font-size: 9pt;
      }

      #waste-page #footer>text {
        font-size: 9pt;
      }

      #waste-page line {
        stroke: black;
      }

      #waste-page rect {
        fill: none;
        stroke: black;
        stroke-width: 0.5pt;
      }

      #waste-page text {
        font-family: "Calibri";
        font-size: 10pt;
        dominant-baseline: hanging;
        fill: black;
      }

      #waste-page .title {
        font-size: 14pt;
        font-weight: bold;
        text-anchor: middle;
      }

      #waste-page #generator-box {
        font-size: 11pt;
        transform: translate(0in, 1.07in);
      }

      #waste-page #waste-characterization-box {
        transform: translate(0, 1.79in);
      }

      #waste-page #toxic-box {
        transform: translate(0px, 586.759px);
      }

      #waste-page .box-title {
        font-weight: bold;
      }

      #waste-page .box-title-rect {
        fill: #bfbfbf;
        stroke: none;
      }

      #waste-page .background {
        fill: white;
      }

      #waste-page .toxic {
        font-size: 7pt;
      }

      #waste-page path {
        stroke: black;
        stroke-width: 0.7pt;
      }

      .box-border {
        stroke-width: 0.5pt;
      }
    </style>
    <g id="waste-page">
      <g id="header">
        <path d="M 505.92, 9.024 H 624" />
        <path d="M 518.208, 54.912 H 624" />
        <path d="M 66.144, 70.272 H 426.24" />
        <text x="0.21in">RCRA Waste Determination Form FOR SANCTUM STAFF</text>
        <text x="0.261in" y="0.149in">☐</text>
        <text x="0.5in" y="0.154in">Hazardous with waste codes</text>
        <text x="0.261in" y="0.469in">☐</text>
        <text x="0.5in" y="0.474in">Nonhazardous</text>
        <text x="5in" y="0">Date</text>
        <text x="5in" y="0.474in">Weight</text>
        <text x="0.0in" y="0.634in">Accepted by:</text>
      </g>
      <g id="body">
        <text class="title" x="3.25in" y="84.998">Waste Characterization Form</text>
        <g id="generator-box">
          <path d="M 76.661, 23.253 H 287.04" />
          <path d="M 92.821, 42.133 H 287.04" />
          <path d="M 378.648, 42.133 H 607.315" />
          <rect stroke="black" x="0" y="0" width="6.5in" height="0.533in" />
          <text x="0.09in" y="0.117in">Generator:&nbsp&nbsp&nbsp&nbsp${data['waste-generator']}</text>
          <text x="0.09in" y="0.313in">Generator ID:&nbsp&nbsp&nbsp&nbsp&nbsp${data['waste-identifier']}</text>
          <text x="3.347in" y="0.313in">Business:&nbsp&nbsp&nbsp${data['waste-business']}</text>
        </g>
        <g id="waste-characterization-box">
          <g id="waste-description-box">
            <rect class="box-title-rect" x="0" y="0" width="6.5in" height="20.480" />
            <path class="box-border" d="M 0,19.813 H 624" />
            <path class="box-border" d="M 0,80.960 H 624" />

            <text class="box-title" x="7.684" y="4.433">A. Waste process and description</text>
            <text x="7.916" y="33.028">
              <tspan x="7.916" dy="0">Waste description (including the name of the waste stream and chemical/physical
                description):</tspan>
              <tspan id="waste-description" x="7.916" dy="1.3em">
                ${data['waste-description']}
              </tspan>
              <tspan id="waste-description2" x="7.916" dy="1.3em">

              </tspan>
            </text>

            <text x="8.635" y="94.647">
              <tspan x="8.635" dy="0">Process generating the waste:</tspan>
              <tspan id="process-description" x="8.635" dy="1.3em">${data['waste-process']}</tspan>
            </text>
          </g>
          <g id="waste-determination-box">
            <rect class="box-title-rect" x="0" y="142.120" width="6.5in" height="20.480" />
            <path class="box-border" d="M 0,142.120 H 624" />
            <path class="box-border" d="M 0,161.960 H 624" />
            <path class="box-border" d="M 0,226.573 H 624" />
            <path class="box-border" d="M 0,380.680 H 624" />
            <path class="box-border" d="M 0,583.600 H 624" />
            <path class="box-border" d="M 480.035,162.267 V 583.933" />
            <text class="box-title" x="8.434" y="146.553">B. Waste determination</text>
            <text x="7.916" y="175.807">Waste determination is based on:</text>
            <text x="9.475" y="192.590">
              <tspan id="user-knowledge">${data['waste-determination-0'] ? '☒' : '☐'}</tspan>
              <tspan> User knowledge (Process evaluation, SDSs, and interviews)</tspan>
            </text>
            <text x="9.475" y="211.630">
              <tspan id="waste-analysis">${data['waste-determination-1'] ? '☒' : '☐'}</tspan>
              <tspan> Waste analysis (List all sampling dates and attach analytical results)</tspan>
            </text>
            <text x="488.697" y="175.762">Date of Testing:</text>
            <g id="listed-waste-box">
              <text x="8.635" y="240.119">Is the waste a listed hazardous waste? (Detail rationale, as necessary)</text>
              <text x="32.635" y="264.607">
                <tspan x="32.635" dy="0">F‐listed per §261.31</tspan>
                <tspan x="32.635" dy="1.5em">P‐listed per §261.33(e)</tspan>
                <tspan x="32.622" dy="1.5em">U‐listed per §261.33(f)</tspan>
              </text>
              <text x="200.184" y="264.607">
                <tspan x="200.184" dy="0">Code</tspan>
                <tspan x="200.184" dy="1.5em">Code</tspan>
                <tspan x="200.184" dy="1.5em">Code</tspan>
              </text>
              <text x="240" y="264.607">
                <tspan id="f-codes" x="240" dy="0">${data['f-list-codes']}</tspan>
                <tspan id="p-codes" x="240" dy="1.5em">${data['p-list-codes']}</tspan>
                <tspan id="u-codes" x="240" dy="1.5em">${data['u-list-codes']}</tspan>
              </text>
              <path d="M 230.275,276 H 384" />
              <path d="M 230.275,296 H 384" />
              <path d="M 230.275,316 H 384" />
              <text x="32.382" y="335.319">
                <tspan>(FPU LIST can be found at:</tspan>
                <tspan x="32.382" dy="1.2em">https://milliken.sharepoint.com/sites/RMCHub/LabCommunitySafety/SitePages/
                </tspan>
                <tspan x="32.382" dy="1.2em">Waste-Handling.aspx)</tspan>
              </text>
              <text x="503.936" y="264.910">
                <tspan id="f-code-yes" x="503.936" dy="0">${data['f-list-codes'] == '' ? '☐' : '☒'}</tspan>
                <tspan>Yes</tspan>
                <tspan id="p-code-yes" x="503.936" dy="1.5em">${data['p-list-codes'] == '' ? '☐' : '☒'}</tspan>
                <tspan>Yes</tspan>
                <tspan id="u-code-yes" x="503.936" dy="1.5em">${data['u-list-codes'] == '' ? '☐' : '☒'}</tspan>
                <tspan>Yes</tspan>
              </text>
              <text x="578.376" y="264.910">
                <tspan id="f-code-no" x="578.376" dy="0">${data['f-list-codes'] == '' ? '☒' : '☐'}</tspan>
                <tspan>No</tspan>
                <tspan id="p-code-no" x="578.376" dy="1.5em">${data['p-list-codes'] == '' ? '☒' : '☐'}</tspan>
                <tspan>No</tspan>
                <tspan id="u-code-no" x="578.376" dy="1.5em">${data['u-list-codes'] == '' ? '☒' : '☐'}</tspan>
                <tspan>No</tspan>
              </text>
            </g>
            <g id="characteristic-waste-box">
              <text x="8.635" y="394.225">Is the waste a characteristic hazardous waste? (Detail rationale, as
                necessary)</text>
              <text x="32.635" y="418.545">
                <tspan x="32.635" dy="0">Ignitable (D001) per §261.21</tspan>
                <tspan x="32.635" dy="1.5em">Corrosive (D002) per §261.22 </tspan>
                <tspan x="32.635" dy="1.5em">Reactive (D003) per §261.23</tspan>
              </text>
              <text x="200.670" y="418.545">
                <tspan x="200.670" dy="0">FP =</tspan>
                <tspan x="200.670" dy="1.5em">pH =</tspan>
                <tspan x="200.670" dy="1.5em">Statement from SDS</tspan>
              </text>
              <text x="240.670" y="418.545">
                <tspan id="flash-point" x="230" dy="0">${data['ignitable']}</tspan>
                <tspan id="pH" x="240" dy="1.5em">${data['corrosive']}</tspan>
              </text>
              <text id="reactivity" x="32.635" y="480">${data['reactive']}</text>
              <path d="M 226,430 H 384" />
              <path d="M 228,450 H 384" />
              <path d="M 32.635,491.840 H 384" />
              <text x="32.635" y="497.585">Toxic (D004 – D043) per §261.24 (select constituents below)</text>

              <text x="32.635" y="530.225">Underlying Hazardous Constituents (UHC) per 40 CFR 268.40, 268.45, and
                68.48</text>
              <text x="32.635" y="553" id="UHC">${''}</text>
              <path d="M 32.635,565.120 H 464" />
              <text x="503.936" y="419.017">
                <tspan id="D001-yes" x="503.936" dy="0">${data['ignitable'] == '' ? '☐' : '☒'}</tspan>
                <tspan>Yes</tspan>
                <tspan id="D002-yes" x="503.936" dy="1.5em">${data['corrosive'] == '' ? '☐' : '☒'}</tspan>
                <tspan>Yes</tspan>
                <tspan id="D003-yes" x="503.936" dy="1.5em">${data['reactive'] == '' ? '☐' : '☒'}</tspan>
                <tspan>Yes</tspan>
              </text>
              <text x="578.376" y="419.017">
                <tspan id="D001-no" x="578.376" dy="0">${data['ignitable'] == '' ? '☒' : '☐'}</tspan>
                <tspan>No</tspan>
                <tspan id="D002-no" x="578.376" dy="1.5em">${data['corrosive'] == '' ? '☒' : '☐'}</tspan>
                <tspan>No</tspan>
                <tspan id="D003-no" x="578.376" dy="1.5em">${data['reactive'] == '' ? '☒' : '☐'}</tspan>
                <tspan>No</tspan>
              </text>
              <text x="503.936" y="498.057">
                <tspan id="toxic-yes">${data['toxic'] ? '☒' : '☐'}</tspan>
                <tspan>Yes</tspan>
              </text>
              <text x="578.376" y="498.057">
                <tspan id="toxic-no">${data['toxic'] ? '☐' : '☒'}</tspan>
                <tspan>No</tspan>
              </text>

              <g id="toxic-box">
                <text class="toxic" x="8.159" y="0">
                  <tspan class="box-title" x="8.159" dy="0">Metals</tspan>
                  <tspan x="8.159" dy="1.3em">D004 </tspan>
                  <tspan id="D004">${data['toxic-codes-0'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Arsenic </tspan>
                  <tspan x="8.159" dy="1.3em">D005 </tspan>
                  <tspan id="D005">${data['toxic-codes-1'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Barium </tspan>
                  <tspan x="8.159" dy="1.3em">D006 </tspan>
                  <tspan id="D006">${data['toxic-codes-2'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Cadmium </tspan>
                  <tspan x="8.159" dy="1.3em">D007 </tspan>
                  <tspan id="D007">${data['toxic-codes-3'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Chromium </tspan>
                  <tspan x="8.159" dy="1.3em">D008 </tspan>
                  <tspan id="D008">${data['toxic-codes-4'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Lead </tspan>
                  <tspan x="8.159" dy="1.3em">D009 </tspan>
                  <tspan id="D009">${data['toxic-codes-5'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Mercury </tspan>
                  <tspan x="8.159" dy="1.3em">D010 </tspan>
                  <tspan id="D010">${data['toxic-codes-6'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Selenium </tspan>
                  <tspan x="8.159" dy="1.3em">D011 </tspan>
                  <tspan id="D011">${data['toxic-codes-7'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Silver</tspan>
                </text>
                <text class="toxic" x="163.502" y="0">
                  <tspan class="box-title" x="163.502" dy="0">Volatiles</tspan>
                  <tspan x="163.502" dy="1.3em">D018 </tspan>
                  <tspan id="D018">${data['toxic-codes-8'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Benzene </tspan>
                  <tspan x="163.502" dy="1.3em">D019 </tspan>
                  <tspan id="D019">${data['toxic-codes-9'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Carbon Tetrachloride </tspan>
                  <tspan x="163.502" dy="1.3em">D021 </tspan>
                  <tspan id="D021">${data['toxic-codes-10'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Chlorobenzene </tspan>
                  <tspan x="163.502" dy="1.3em">D022 </tspan>
                  <tspan id="D022">${data['toxic-codes-11'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Chloroform </tspan>
                  <tspan x="163.502" dy="1.3em">D028 </tspan>
                  <tspan id="D028">${data['toxic-codes-12'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 1,2‐Dichloroethane </tspan>
                  <tspan x="163.502" dy="1.3em">D029 </tspan>
                  <tspan id="D029">${data['toxic-codes-13'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 1,1‐Dichloroethylene </tspan>
                  <tspan x="163.502" dy="1.3em">D035 </tspan>
                  <tspan id="D035">${data['toxic-codes-14'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Methyl Ethyl Ketone </tspan>
                  <tspan x="163.502" dy="1.3em">D039 </tspan>
                  <tspan id="D039">${data['toxic-codes-15'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Tetrachloroethylene </tspan>
                  <tspan x="163.502" dy="1.3em">D040 </tspan>
                  <tspan id="D040">${data['toxic-codes-16'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Trichloroethylene </tspan>
                  <tspan x="163.502" dy="1.3em">D043 </tspan>
                  <tspan id="D043">${data['toxic-codes-17'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Vinyl Chloride</tspan>
                </text>
                <text class="toxic" x="319.520" y="0">
                  <tspan class="box-title" x="319.520" dy="0">Semi‐Volatiles</tspan>
                  <tspan x="319.520" dy="1.3em">D023 </tspan>
                  <tspan id="D023">${data['toxic-codes-18'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> o‐Cresol </tspan>
                  <tspan x="319.520" dy="1.3em">D024 </tspan>
                  <tspan id="D024">${data['toxic-codes-19'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> m‐Cresol (200.0)</tspan>
                  <tspan x="319.520" dy="1.3em">D025 </tspan>
                  <tspan id="D025">${data['toxic-codes-20'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> p‐Cresol (200.0)</tspan>
                  <tspan x="319.520" dy="1.3em">D026 </tspan>
                  <tspan id="D026">${data['toxic-codes-21'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Cresol ‐ total (200.0)</tspan>
                  <tspan x="319.520" dy="1.3em">D027 </tspan>
                  <tspan id="D027">${data['toxic-codes-22'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 1,4‐Dichlorobenzene (7.5)</tspan>
                  <tspan x="319.520" dy="1.3em">D030 </tspan>
                  <tspan id="D030">${data['toxic-codes-23'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 2,4‐Dinitrotoluene (0.13)</tspan>
                  <tspan x="319.520" dy="1.3em">D032 </tspan>
                  <tspan id="D032">${data['toxic-codes-24'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Hexachlorobenzene (0.13)</tspan>
                  <tspan x="319.520" dy="1.3em">D033 </tspan>
                  <tspan id="D033">${data['toxic-codes-25'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Hexachlorobutadiene (0.5)</tspan>
                  <tspan x="319.520" dy="1.3em">D034 </tspan>
                  <tspan id="D034">${data['toxic-codes-26'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Hexachloroethane (3.0)</tspan>
                  <tspan x="319.520" dy="1.3em">D036 </tspan>
                  <tspan id="D036">${data['toxic-codes-27'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Nitrobenzene (2.0)</tspan>
                  <tspan x="319.520" dy="1.3em">D037 </tspan>
                  <tspan id="D037">${data['toxic-codes-28'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Pentachlorophenol</tspan>
                  <tspan x="319.520" dy="1.3em">D038 </tspan>
                  <tspan id="D038">${data['toxic-codes-29'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Pyridine </tspan>
                  <tspan x="319.520" dy="1.3em">D041 </tspan>
                  <tspan id="D041">${data['toxic-codes-30'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 2,4,5‐Trichlorophenol </tspan>
                  <tspan x="319.520" dy="1.3em">D042 </tspan>
                  <tspan id="D042">${data['toxic-codes-31'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 2,4,6‐Trichlorophenol</tspan>
                </text>
                <text class="toxic" x="475.900" y="0">
                  <tspan class="box-title" x="475.900" dy="0">Pesticides/Herbicides </tspan>
                  <tspan x="475.900" dy="1.3em">D020 </tspan>
                  <tspan id="">${data['toxic-codes-32'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Chlordane (0.03)</tspan>
                  <tspan x="475.900" dy="1.3em">D012 </tspan>
                  <tspan id="">${data['toxic-codes-33'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Endrin (0.02)</tspan>
                  <tspan x="475.900" dy="1.3em">D031 </tspan>
                  <tspan id="">${data['toxic-codes-34'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Heptachlor + epoxide (0.008)</tspan>
                  <tspan x="475.900" dy="1.3em">D013 </tspan>
                  <tspan id="">${data['toxic-codes-35'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Lindane (0.4)</tspan>
                  <tspan x="475.900" dy="1.3em">D014 </tspan>
                  <tspan id="">${data['toxic-codes-36'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Methoxychlor (10.0)</tspan>
                  <tspan x="475.900" dy="1.3em">D015 </tspan>
                  <tspan id="">${data['toxic-codes-37'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> Toxaphene (0.5)</tspan>
                  <tspan x="475.900" dy="1.3em">D016 </tspan>
                  <tspan id="">${data['toxic-codes-38'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 2,4‐D</tspan>
                  <tspan x="475.900" dy="1.3em">D017 </tspan>
                  <tspan id="">${data['toxic-codes-39'] == '' ? '☐' : '☒'}</tspan>
                  <tspan> 2,4,5‐TP (Silvex)</tspan>
                </text>
              </g>
            </g>
          </g>
          <rect x="0" y="0" width="6.5in" height="772.421" />
        </g>
      </g>
      <g id="footer">
        <text x="505.909" y="978.036">Revised August 21, 2023</text>
      </g>
    </g>
  </svg>
</div>`;
};
export default wasteForm;

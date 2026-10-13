"use client";

import { useState } from "react";
import { Calculator, ArrowRightLeft, Scale, Info } from "lucide-react";

// Standard US Imperial Rebar Weights (lbs per linear foot) per ASTM A615
const REBAR_WEIGHTS: Record<string, { diameter: number; weightPerFoot: number }> = {
  "#3": { diameter: 0.375, weightPerFoot: 0.376 },
  "#4": { diameter: 0.500, weightPerFoot: 0.668 },
  "#5": { diameter: 0.625, weightPerFoot: 1.043 },
  "#6": { diameter: 0.750, weightPerFoot: 1.502 },
  "#7": { diameter: 0.875, weightPerFoot: 2.044 },
  "#8": { diameter: 1.000, weightPerFoot: 2.670 },
  "#9": { diameter: 1.128, weightPerFoot: 3.400 },
  "#10": { diameter: 1.270, weightPerFoot: 4.303 },
  "#11": { diameter: 1.410, weightPerFoot: 5.313 },
};

export function CalculatorsSection() {
  const [activeTab, setActiveTab] = useState<"volume" | "converter" | "rebar">("volume");

  // 1. Concrete Volume State
  const [slabLength, setSlabLength] = useState<number>(30); // feet
  const [slabWidth, setSlabWidth] = useState<number>(10); // feet
  const [slabThickness, setSlabThickness] = useState<number>(8); // inches
  const [wasteFactor, setWasteFactor] = useState<number>(5); // percent
  const [densityPcf, setDensityPcf] = useState<number>(145); // lbs/cu ft

  // Calculations for Volume
  const rawCuFt = (slabLength * slabWidth * slabThickness) / 12;
  const withWasteCuFt = rawCuFt * (1 + wasteFactor / 100);
  const cubicYards = withWasteCuFt / 27;
  const cubicMeters = withWasteCuFt * 0.0283168;
  const weightTons = (withWasteCuFt * densityPcf) / 2000;

  // 2. Unit Converter State
  const [convType, setConvType] = useState<"stress" | "force">("stress");
  const [convInput, setConvInput] = useState<number>(4000);
  const [convFrom, setConvFrom] = useState<string>("psi");

  const getConvertedStress = () => {
    let psiVal = convInput;
    if (convFrom === "ksi") psiVal = convInput * 1000;
    if (convFrom === "MPa") psiVal = convInput * 145.038;
    return {
      psi: psiVal.toFixed(1),
      ksi: (psiVal / 1000).toFixed(3),
      MPa: (psiVal / 145.038).toFixed(2),
      psf: (psiVal * 144).toFixed(0),
    };
  };

  const getConvertedForce = () => {
    let lbsVal = convInput;
    if (convFrom === "kips") lbsVal = convInput * 1000;
    if (convFrom === "kN") lbsVal = convInput * 224.809;
    return {
      lbs: lbsVal.toFixed(1),
      kips: (lbsVal / 1000).toFixed(3),
      kN: (lbsVal / 224.809).toFixed(2),
    };
  };

  // 3. Rebar Estimator State
  const [rebarSize, setRebarSize] = useState<string>("#5");
  const [barLengthFt, setBarLengthFt] = useState<number>(20);
  const [barQuantity, setBarQuantity] = useState<number>(50);

  const activeRebar = REBAR_WEIGHTS[rebarSize] || REBAR_WEIGHTS["#5"];
  const totalLinearFt = barLengthFt * barQuantity;
  const totalRebarLbs = totalLinearFt * activeRebar.weightPerFoot;
  const totalRebarTons = totalRebarLbs / 2000;

  return (
    <section id="calculators" className="bg-white border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="badge-tag mb-3">Interactive Engineering Tools</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#032356] tracking-tight">
            Engineering Calculators and Tools
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Working engineering estimators for preliminary volume quantification, rebar weight calculations, and structural unit conversions.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#DCE5F0] mb-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("volume")}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "volume"
                ? "border-[#D4030C] text-[#032356]"
                : "border-transparent text-[#64748B] hover:text-[#032356]"
            }`}
          >
            <Calculator className="w-4 h-4 text-[#D4030C]" />
            <span>Concrete Volume &amp; Weight</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("converter")}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "converter"
                ? "border-[#D4030C] text-[#032356]"
                : "border-transparent text-[#64748B] hover:text-[#032356]"
            }`}
          >
            <ArrowRightLeft className="w-4 h-4 text-[#D4030C]" />
            <span>Unit Conversion Tool</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("rebar")}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "rebar"
                ? "border-[#D4030C] text-[#032356]"
                : "border-transparent text-[#64748B] hover:text-[#032356]"
            }`}
          >
            <Scale className="w-4 h-4 text-[#D4030C]" />
            <span>Reinforcement Quantity Estimator</span>
          </button>
        </div>

        {/* Tab 1: Concrete Volume */}
        {activeTab === "volume" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg p-6 space-y-4">
              <h3 className="text-base font-bold text-[#032356]">
                Rectangular Precast Member Parameters
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Length (feet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={slabLength}
                    onChange={(e) => setSlabLength(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none focus:border-[#032356]"
                  />
                </div>
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Width (feet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={slabWidth}
                    onChange={(e) => setSlabWidth(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none focus:border-[#032356]"
                  />
                </div>
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Thickness (inches)
                  </label>
                  <input
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={slabThickness}
                    onChange={(e) => setSlabThickness(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none focus:border-[#032356]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Waste / Overpour Allowance
                  </label>
                  <select
                    value={wasteFactor}
                    onChange={(e) => setWasteFactor(Number(e.target.value))}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none"
                  >
                    <option value={0}>0% (Exact Precast Mold Net)</option>
                    <option value={3}>3% (Standard Plant Allowance)</option>
                    <option value={5}>5% (Recommended Batching Buffer)</option>
                    <option value={10}>10% (Site / Topping Overpour)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Concrete Density (lb/ft³)
                  </label>
                  <select
                    value={densityPcf}
                    onChange={(e) => setDensityPcf(Number(e.target.value))}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none"
                  >
                    <option value={145}>145 pcf (Normal Weight Plain)</option>
                    <option value={150}>150 pcf (Normal Weight Reinforced)</option>
                    <option value={115}>115 pcf (Structural Lightweight)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#64748B]">
                Formula: Volume (CY) = [Length(ft) × Width(ft) × (Thickness(in)/12)] ÷ 27 × (1 + Waste%)
              </div>
            </div>

            {/* Results Output */}
            <div className="lg:col-span-5 bg-white border border-[#032356] rounded-lg p-6 space-y-4 shadow-sm">
              <span className="text-[11px] font-bold text-[#D4030C] uppercase tracking-wider">
                Calculated Volume &amp; Mass
              </span>

              <div className="space-y-3">
                <div className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between">
                  <span className="text-xs text-[#475569]">Cubic Yards (CY)</span>
                  <span className="text-xl font-black text-[#032356]">
                    {cubicYards.toFixed(2)} CY
                  </span>
                </div>

                <div className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between">
                  <span className="text-xs text-[#475569]">Cubic Meters (m³)</span>
                  <span className="text-base font-bold text-[#032356]">
                    {cubicMeters.toFixed(2)} m³
                  </span>
                </div>

                <div className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between">
                  <span className="text-xs text-[#475569]">Total Volume (ft³)</span>
                  <span className="text-base font-bold text-[#032356]">
                    {withWasteCuFt.toFixed(1)} ft³
                  </span>
                </div>

                <div className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between">
                  <span className="text-xs text-[#475569]">Estimated Precast Weight</span>
                  <span className="text-base font-bold text-[#D4030C]">
                    {weightTons.toFixed(2)} Tons ({Math.round(weightTons * 2000).toLocaleString()} lbs)
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Unit Conversion */}
        {activeTab === "converter" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg p-6 space-y-4">
              <h3 className="text-base font-bold text-[#032356]">
                Structural Unit Converter
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Conversion Category
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setConvType("stress");
                        setConvFrom("psi");
                        setConvInput(4000);
                      }}
                      className={`px-3 py-1.5 rounded border text-xs font-semibold cursor-pointer ${
                        convType === "stress"
                          ? "bg-[#032356] text-white border-[#032356]"
                          : "bg-white text-[#032356] border-[#DCE5F0]"
                      }`}
                    >
                      Stress / Pressure (psi, MPa)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setConvType("force");
                        setConvFrom("kips");
                        setConvInput(50);
                      }}
                      className={`px-3 py-1.5 rounded border text-xs font-semibold cursor-pointer ${
                        convType === "force"
                          ? "bg-[#032356] text-white border-[#032356]"
                          : "bg-white text-[#032356] border-[#DCE5F0]"
                      }`}
                    >
                      Force / Load (kips, kN)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[#032356] font-semibold mb-1">
                      Input Value
                    </label>
                    <input
                      type="number"
                      value={convInput}
                      onChange={(e) => setConvInput(Number(e.target.value))}
                      className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#032356] font-semibold mb-1">
                      Source Unit
                    </label>
                    <select
                      value={convFrom}
                      onChange={(e) => setConvFrom(e.target.value)}
                      className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none"
                    >
                      {convType === "stress" ? (
                        <>
                          <option value="psi">psi (Pounds/sq in)</option>
                          <option value="ksi">ksi (Kilopounds/sq in)</option>
                          <option value="MPa">MPa (Megapascals / N/mm²)</option>
                        </>
                      ) : (
                        <>
                          <option value="kips">kips (1,000 lbf)</option>
                          <option value="lbs">lbs (Pound force)</option>
                          <option value="kN">kN (Kilonewtons)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#032356] rounded-lg p-6 space-y-4">
              <span className="text-[11px] font-bold text-[#D4030C] uppercase tracking-wider">
                Equivalent Structural Values
              </span>

              {convType === "stress" && (
                <div className="space-y-2.5">
                  {Object.entries(getConvertedStress()).map(([unit, val]) => (
                    <div
                      key={unit}
                      className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between text-xs"
                    >
                      <span className="text-[#475569] font-medium uppercase">{unit}</span>
                      <span className="text-base font-bold text-[#032356]">
                        {val} {unit}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {convType === "force" && (
                <div className="space-y-2.5">
                  {Object.entries(getConvertedForce()).map(([unit, val]) => (
                    <div
                      key={unit}
                      className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between text-xs"
                    >
                      <span className="text-[#475569] font-medium uppercase">{unit}</span>
                      <span className="text-base font-bold text-[#032356]">
                        {val} {unit}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Rebar Estimator */}
        {activeTab === "rebar" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg p-6 space-y-4">
              <h3 className="text-base font-bold text-[#032356]">
                ASTM A615 Standard Reinforcing Bar Estimator
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    US Bar Designation
                  </label>
                  <select
                    value={rebarSize}
                    onChange={(e) => setRebarSize(e.target.value)}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none"
                  >
                    {Object.keys(REBAR_WEIGHTS).map((size) => (
                      <option key={size} value={size}>
                        {size} ({REBAR_WEIGHTS[size].weightPerFoot} lb/ft)
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Length per Bar (feet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={barLengthFt}
                    onChange={(e) => setBarLengthFt(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#032356] font-semibold mb-1">
                    Number of Pieces
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={barQuantity}
                    onChange={(e) => setBarQuantity(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white border border-[#DCE5F0] rounded p-2 text-sm text-[#032356] focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 bg-white rounded border border-[#DCE5F0] text-xs text-[#475569] space-y-1">
                <p>
                  <strong>Nominal Diameter:</strong> {activeRebar.diameter} inches ({Math.round(activeRebar.diameter * 25.4)} mm)
                </p>
                <p>
                  <strong>Unit Weight:</strong> {activeRebar.weightPerFoot} lbs per linear foot
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#032356] rounded-lg p-6 space-y-4">
              <span className="text-[11px] font-bold text-[#D4030C] uppercase tracking-wider">
                Total Rebar Takeoff
              </span>

              <div className="space-y-3">
                <div className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between">
                  <span className="text-xs text-[#475569]">Total Linear Footage</span>
                  <span className="text-lg font-bold text-[#032356]">
                    {totalLinearFt.toLocaleString()} LF
                  </span>
                </div>

                <div className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between">
                  <span className="text-xs text-[#475569]">Total Steel Weight</span>
                  <span className="text-xl font-black text-[#D4030C]">
                    {Math.round(totalRebarLbs).toLocaleString()} lbs
                  </span>
                </div>

                <div className="p-3 bg-[#F2F7FF] rounded border border-[#DCE5F0] flex items-center justify-between">
                  <span className="text-xs text-[#475569]">Equivalent Short Tons</span>
                  <span className="text-base font-bold text-[#032356]">
                    {totalRebarTons.toFixed(3)} Tons
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assumptions, Limitations, and Engineering Disclaimer */}
        <div className="mt-8 bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg p-5 flex items-start gap-3 text-xs text-[#475569]">
          <Info className="w-5 h-5 text-[#032356] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-[#032356]">
              Calculator Assumptions, Limitations &amp; Technical Disclaimer
            </h4>
            <p className="leading-relaxed">
              These calculators provide approximate estimates for preliminary planning and takeoff sizing. Assumptions include standard ASTM A615 rebar unit weights and uniform rectangular prism geometry. They do not account for lap splices, hooks, embed plates, or complex cross-section voids. Preliminary tools do not replace qualified structural engineering design, code analysis, or professional engineer (PE) review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

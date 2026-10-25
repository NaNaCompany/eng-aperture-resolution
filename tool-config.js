export const tool = {
  "id": "E046",
  "title": "원형 개구 회절 분해각 계산기",
  "inputs_text": "해당 전파 매질에서의 파장 λ [m], 원형 개구 지름 D [m]",
  "formula": "θ_R ≈ 1.22 λ / D",
  "output_text": "레이리 분해각 θ_R [rad]",
  "assumptions": "λ,D>0, D≫λ인 작은 각도 근사다. 이상 원형 개구의 회절 한계이며 실제 렌즈 수차·노이즈·대기 흔들림은 포함하지 않는다. 이 앱은 근사 범위를 D ≥ 10λ로 제한합니다.",
  "purpose": "회절한계 분해능 각도 / 망원경·광학계 기초 검산",
  "sources": [
    {
      "label": "OpenStax · Circular Apertures and Resolution",
      "url": "https://openstax.org/books/university-physics-volume-3/pages/4-5-circular-apertures-and-resolution"
    }
  ],
  "slug": "eng-aperture-resolution",
  "category": "광학",
  "result_label": "레이리 회절 분해각 θ_R",
  "result_dimension": "angle",
  "fields": [
    {
      "key": "lambda",
      "label": "매질 내 파장 λ",
      "dimension": "length",
      "example": 5e-07,
      "constraint": "positive",
      "display_unit": "nm",
      "display_value": "500"
    },
    {
      "key": "d",
      "label": "원형 개구 지름 D",
      "dimension": "length",
      "example": 0.1,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "0.1"
    }
  ],
  "site": "https://nanalab.kr/eng-aperture-resolution/",
  "repository": "https://github.com/NaNaCompany/eng-aperture-resolution",
  "condition": "",
  "output_unit": "arcsec"
};

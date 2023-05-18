module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#74cdffff",
          "Red": "#ff7e7eff",
          "Morado": "#703b6aff",
          "Green": "#67f881ff",
          "Orange": "#ece442ff"
        },
        "Gray": {
          "500": "#595959",
          "White": "#f9f9f9ff",
          "Black": "#262525ff"
        },
        "foreground": "#262525ff",
        "background": "#f9f9f9ff"
      },
      "spacing": {
        "SixUnits": "96px",
        "HalfUnit": "8px",
        "FiveUnits": "80px",
        "TwoUnits": "32px",
        "Unit": "16px",
        "FourUnits": "64px",
        "OneAndHalfUnits": "24px",
        "ThreeUnits": "48px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius8": "8px",
        "Radius2": "2px",
        "Radius4": "4px"
      },
      "scale": {
        "XSmall": "16px",
        "Large": "144px",
        "Medium": "96px",
        "XXLarge": "288px",
        "Small": "48px",
        "XLarge": "192px",
        "MaxWidth": "1324px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}
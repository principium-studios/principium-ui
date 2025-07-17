import { principium } from "@principium/theme";

export default principium({
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          background: {
            hue: 0,
            saturation: 0
          },
          border: {
            hue: 240,
            saturation: 10
          },
          outline: {
            hue: 212,
            saturation: 100
          },
          primary: {
            hue: 212,
            saturation: 100
          },
          secondary: {
            hue: 270,
            saturation: 67
          },
          success: {
            hue: 146,
            saturation: 55
          },
          warning: {
            hue: 37,
            saturation: 90
          },
          danger: {
            hue: 339,
            saturation: 90
          }
        }
      },
      dark: {
        isDarkTheme: true,
        colors: {
          background: {
            hue: 240,
            saturation: 10
          },
          border: {
            hue: 240,
            saturation: 10
          },
          outline: {
            hue: 212,
            saturation: 100
          },
          primary: {
            hue: 212,
            saturation: 100
          },
          secondary: {
            hue: 270,
            saturation: 67
          },
          success: {
            hue: 146,
            saturation: 55
          },
          warning: {
            hue: 37,
            saturation: 90
          },
          danger: {
            hue: 339,
            saturation: 90
          }
        }
      },
      coffee: {
        isDarkTheme: true,
        colors: {
          background: {
            hue: 30,
            saturation: 20
          },
          border: {
            hue: 30,
            saturation: 15
          },
          outline: {
            hue: 25,
            saturation: 40
          },
          primary: {
            hue: 25,
            saturation: 60
          },
          secondary: {
            hue: 20,
            saturation: 30
          },
          success: {
            hue: 120,
                saturation: 40
          },
          warning: {
            hue: 45,
            saturation: 80
          },
          danger: {
            hue: 0,
            saturation: 70
          }
        }
      }
    }
  }
  );
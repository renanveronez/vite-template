import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {

      background_header: string,

      background_menu: string,
      background_submenu: string,
      textMenuBarOff: string,
      textMenuBarOffHover: string,

      barMenuToggleMobile: string,
      textMenuBarOffMobile: string,
      textMenuBarOffMobileHover,

      itemMenuHover: string,
      textMenuBarActive: string,
      textMenuHover: string,

      background_menu: string,

      text: string,
      textHighlight: string,
      textLight: string,

      base_background: string,
      primary: string,
      feature: string,
      bug: string,
      deploy: string,
      infra: string,
      text_primary: string,
      text_secondary: string,
      text_tertiary: string,
      placeholder: string,
      background: string,
      components_background: string,
      border: string,
      switch: string


    },

    fonts: {
      title: string,
      regular: string,
    }
  }
}
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components/native' {
    export interface DefaultTheme {
      mainBgColor:string,
      textColor:string,
      accentColor:string
    }
  }
import {Appearance} from "react-native";

const colorScheme = Appearance.getColorScheme();


const darkModeColors = {
    main_dark: 'rgb(12, 12, 12)',
    main_light: 'rgb(72, 30, 20)',
    accent_dark: 'rgb(155, 57, 34)',
    accent_light: 'rgb(242, 97, 63)'
}

const lightModeColors = {
     main_light: 'rgb(249, 246, 247)',
     main_dark: 'rgb(255, 215, 181)',
     accent_dark: 'rgb(255, 146, 72)',
     accent_light: 'rgb(255, 103, 0)'
 }

export const colors = colorScheme === 'dark' ? darkModeColors : lightModeColors;



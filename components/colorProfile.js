import {Appearance} from "react-native";

const colorScheme = Appearance.getColorScheme();


const darkModeColors = {
    main_weak: 'rgb(25, 26, 28)',
    main: 'rgb(45, 45, 45)',
    main_strong: 'rgb(0, 0, 0)',
    accent_strong: 'rgb(235, 126, 72)',
    accent: 'rgb(155, 57, 34)',
    accent_weak: 'rgb(242, 97, 63)',
    text_color: 'rgb(255, 255, 255)',
    text_color_weak: 'rgba(180, 180, 180, 0.7)',
    bg_filter_color: 'rgba(0, 0, 0, 0.3)',
    opacity_color: 'rgba(0, 0, 0 ,0.3)',
    opacity_color_strong: 'rgba(0, 0, 0 ,0.3)',
}

const lightModeColors = {
     main_weak: 'rgb(249, 246, 247)',
     main_strong: 'rgb(209, 206, 207)',
     main: 'rgb(228, 226, 227)',
     accent: 'rgb(235, 106, 52)',
     accent_weak: 'rgb(255, 126, 72)',
     accent_strong: 'rgb(255, 103, 0)',
     text_color: 'rgba(0, 0, 0, 1)',
     text_color_weak: 'rgba(190, 190, 190, 0.7)',
     bg_filter_color: 'rgba(200, 120, 90, 0.1)',
     opacity_color: 'rgba(180, 120, 100 , 0.3)',
    opacity_color_strong: 'rgba(100, 60, 60 ,0.3)',
 }

export const colors = colorScheme === 'dark' ? darkModeColors : lightModeColors;



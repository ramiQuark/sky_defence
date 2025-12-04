import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                primary: ['"TT Supermolot Neue"', 'sans-serif'],
            },
            colors: {
                primary: '#030C2C',
                secondary: '#002B61',
                accent: '#0466D7',
                accent2: '#64D3FD',
                accent3: '#B4E3F5',
                accent4: '#3F3F3F',
                accent5: '#FFFFFF',
                accent6: '#DADADA'
            },
            backgroundImage: {
                'linear-1': 'linear-gradient(180deg, rgba(173, 202, 255, 0.5) 2.67%, rgba(88, 120, 209, 0.5) 89.33%)',
                'linear-2': 'linear-gradient(90deg, #2B92E6 0%, #2A9FCC 19.23%, #27BA98 79.33%, #25D366 100%)',
                'linear-3': 'linear-gradient(180deg, rgba(10, 28, 51, 0) 60.1%, rgba(10, 28, 51, 0.75) 90%)',
                'linear-4': 'linear-gradient(180deg, rgba(10, 28, 51, 0) 20%, rgba(10, 28, 51, 0.75) 70%)',
            },
            screens: {
                '1xl': '1439px'
            },
        },
    },

    plugins: [
        forms,
    ],
};

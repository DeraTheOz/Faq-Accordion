/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                white: 'hsl(0, 100%, 100%)',
                purple100: 'hsl(275, 100%, 97%)',
                purple600: 'hsl(292, 16%, 49%)',
                purple950: 'hsl(292, 42%, 14%)'
            },
            fontFamily: {
                worksans: ["'Work Sans'", 'sans-serif']
            },
            backgroundImage: {
                desktop: "url('/assets/images/background-pattern-desktop.svg')",
                mobile: "url('/assets/images/background-pattern-mobile.svg')"
            },
            keyframes: {
                expand: {
                    from: {
                        maxHeight: '0',
                        paddingTop: '0',
                        paddingBottom: '0'
                    },
                    to: {
                        maxHeight: '10rem',
                        paddingTop: '1rem',
                        paddingBottom: '1rem'
                    }
                }
            },
            animation: {
                expand: 'expand .3s ease-out forwards'
            }
        }
    },
    plugins: []
};

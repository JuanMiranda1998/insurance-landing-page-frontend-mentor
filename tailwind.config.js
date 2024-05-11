/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: 'Karla',
        title: 'DM Serif Display'
      },
      backgroundImage: {
        'heroLeftDesktop': "url('/background/bg-pattern-intro-left-desktop.svg')",
        'heroLeftMobile': "url('/background/bg-pattern-intro-left-mobile.svg')",
        'heroRightDesktop': "url('/background/bg-pattern-intro-right-desktop.svg')",
        'heroRightMobile': "url('/background/bg-pattern-intro-right-mobile.svg')",
        'footerDesktop': "url('/background/bg-pattern-footer-desktop.svg')",
        'footerMobile': "url('/background/bg-pattern-footer-mobile.svg')",
        'bannerMobile': "url('/background/bg-pattern-how-we-work-mobile.svg')",
        'bannerDesktop': "url('/background/bg-pattern-how-we-work-desktop.svg')",
        'navbar': "url('/background/bg-pattern-mobile-nav.svg')",
      }
    },
  },
  plugins: [],
}


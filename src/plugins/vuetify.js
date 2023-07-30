/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: true,
  colors: {
    background: '#1E1E1E', // Dark gray background
    surface: '#2D2D2D',    // Slightly lighter gray surface
    primary: '#9B59B6',    // Purple
    secondary: '#E91E63',  // Pink
    error: '#FF4081',      // Bright pink
    info: '#3498DB',       // Light blue
    success: '#8E44AD',    // Deep purple
    warning: '#FF9800',    // Orange
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    },
  },
})

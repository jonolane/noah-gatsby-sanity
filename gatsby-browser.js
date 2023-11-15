import './src/styles/global.css'

// Polyfill for Buffer. not sure if necessary 
global.Buffer = global.Buffer || require('buffer').Buffer;
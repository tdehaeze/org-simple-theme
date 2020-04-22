import './../scss/style.scss'

import 'font-awesome/css/font-awesome.css'

import('./func').then(function(page) {
    page.makeBlocks()
    page.makeQuotes()
})

import('./highlight').then(function(page) {
    page.makeSrcBlocks()
})

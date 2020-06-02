
// import styles
import './main.scss'

// setup jquery
import $ from 'jquery'
window.$ = window.jQuery = $

// setup bootstrap individually
import 'bootstrap/js/dist/popover';

// start logic
$(document).ready(() => {

  // popover example
  $(function() {
    $('[data-toggle="popover"]').popover()
  })

})

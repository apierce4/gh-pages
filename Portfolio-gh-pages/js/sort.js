
//from the original build so that multiple sorting and filtering could happen - AP
var Exports = {
  Modules : {}
};
//the function that is going to have the logic for our shuffle - AP
Exports.Modules.Gallery = (function($, undefined) {
  var $grid,
 // $colors,
  $filterOptions = $('.filter-options'),
  grid = [],
 // colors = [],

//above - we just set variables for whats to come - ap

  // Using shuffle with specific column widths
  columnWidths = {
    1170: 70,
    940: 60,
    724: 42
  },
  gutterWidths = {
    1170: 30,
    940: 20,
    724: 20
  },

//initiate funtion

  init = function() {


// None of these need to be executed synchronously,  calls the functions below - ap
  setTimeout(function() {
        setVars();
        setupFilters();
        initShuffle();
      }, 100);    

 
  },

  setVars = function() {
    $grid = $('.js-shuffle');
  },

  // Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function() {
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.filter-options .active').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  },

  initShuffle = function() {
    // instantiate the plugin
    $grid.shuffle({
      group : 'all',
      initialsort : null,
      speed : 250,
      easing : 'cubic-bezier(0.165, 0.840, 0.440, 1.000)', // easeOutQuart
      columnWidth: function( containerWidth ) {
        var colW = columnWidths[ containerWidth ];

        // Default to container width
        if ( colW === undefined ) {
          colW = containerWidth;
        }
        return colW;
      },
      gutterWidth: function( containerWidth ) {
        var gutter = gutterWidths[ containerWidth ];

        // Default to zero
        if ( gutter === undefined ) {
          gutter = 0;
        }
        return gutter;
      }
    });
  },


  valueInArray = function(value, arr) {
    return $.inArray(value, arr) !== -1;
  };

  return {
    init: init
  };
}(jQuery));


//when the page is loaded, run it - ap
$(document).ready(function() {
  Exports.Modules.Gallery.init();
});
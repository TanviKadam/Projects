// generatePieGraph('myCanvas', {
//     values: [60, 60, 60, 60, 60, 60],
//     colors: [
//         '#3B5BA3',
//         '#49A48C',
//         '#8B2729',
//         '#A7877C',
//         '#BE056B',
//         '#8A70A6'
//       ],
//     // Enable/disable the animation
//     animation: true, 
  
//     // Animation speed
//     animationSpeed: 20, 
  
//     // Percentage of doughnut size
//     doughnutHoleSize: 70,
  
//     // Doughnut color
//     doughnutHoleColor: '#fff',
  
//     // Offeset between two segments & default value is null
//     offset: 3, 
  
//     // or 'stroke' (ring chart)
//     pie: 'stroke',
  
//     // Stroke pie options
//     isStrokePie: {
//       stroke: 20, // Define the stroke of pie graph. It takes number value & default value is 20
//       overlayStroke: true, // Define the background stroke within pie graph. It takes boolean value & default value is false
//       overlayStrokeColor: '#eee', // Define the background stroke colour within pie graph & default value is #eee (Grey)
//       strokeStartEndPoints: 'Yes', // Define the start and end point of pie graph & default value is No
//       strokeAnimation: true, // Used for animation. It takes boolean value & default value is true
//       strokeAnimationSpeed: 40 // Used for animation speed in miliisecond. It takes number & default value is 20ms
//     }
  
//   });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  function showProfile() {
    $('.edit-body').toggleClass('hide')
  }

  function showItems(id) {
      $(`#${id}`).toggleClass('show')
  }
  
  
  // function hideItems(id) {
  //   $(`#${id}`).hide();
  // }

//   $('.first-child').click(function(){
//     $('#collapseSK').hide();
// });
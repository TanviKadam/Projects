$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  items:1,
  center: 1,
  mouseDrag: false,
  touchDrag: false,
  navText:["<button class='nav-btn prev-slide'><i class='fas fa-chevron-left'></button></button>","<button class='nav-btn next-slide'><i class='fas fa-chevron-right'></button>"],
  slideSpeed : 500,
  singleItem : true,
  navigation: false,
  activeClass:true,
  afterMove : function(){
  if(this.currentItem === this.maximumItem){
    alert(
    $('.owl-item').eq(this.maximumItem)
    )
  }
  }
   
});

$(document).ready(function () {
  
  let selectArray = [];
  $('.nav-btn.prev-slide').addClass('disabled');
  $('.owl-prev').removeClass('disabled');
  $('.nav-btn.prev-slide').click('on', function() {
    console.log('hello')
  })
  $('.nav-btn.next-slide').click('on', function() {
    console.log('Next')
  })
  
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Listen to owl events:
  owl.on('changed.owl.carousel', function(event) {
    console.log('change event', event)
    if(event.page.index === 0 ) {
      $('.owl-prev').removeClass('disabled');
      $('.nav-btn.prev-slide').addClass('disabled');
    }
    if (event.page.count - 1 === event.page.index) {
      $('.btn.submit').removeClass('hide')
      $('.owl-next').removeClass('disabled');
      $('.nav-btn.next-slide').addClass('disabled');
    } else {
      $('.nav-btn.next-slide').removeClass('disabled');
      if (event.page.index != 0) {
        $('.nav-btn.prev-slide').removeClass('disabled');
      }
      $('.btn.submit').addClass('hide')
    }
    if (event.page.index > 0) {
      for (let i = 1; i < event.page.index; i++) {
        // $('.owl-dot')[i].addClass('dot-past')
      }
    }
  })

  $('.dropdown-menu label').on('click', function() {
    const value = $(this)
      .find('input:radio')
      .attr('checked', 'checked')
      .val();
    console.log(value);

    $(this).parents('.dropdown').find('button > span').text(value);
    // const value = this.value;
    // console.log(this.name, $('input#'+this.name).val());
    // const oldValue = $('input#'+this.name).val() ? $('input#'+this.name).val() + ', ' + value : value;
    // $('input#qty2').val(value)
  })
  
});

// $(document).ready(function () {
//     $("#check").CreateMultiCheckBox({ width: '230px',
//                defaultText : 'Select Below', height:'250px' });
//   });

// $(document).ready(function() {
//     $('#check').multiselect();
// });

// $('select[multiple]').multiselect();
// $('#check').multiselect({
//     columns: 1,
//     placeholder: 'Select Languages'
// })
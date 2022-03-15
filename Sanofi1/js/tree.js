$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    var children = $(this).parent('li.parent_li').find(' > ul > li');
    $(`.tree-class`).css('display','none');
    $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
  
    $('.tree li.parent_li > span').on('click', function (e) {
      $(this)
        .parents('.grid-content')
        .siblings('.grid-content')
        .each(function() {
          var children = $(this).find('.tree .parent-step.parent_li > ul > li.parent_li');
          if (children.is(":visible")) {
            children.hide('fast');
            $(this)
              .find('.tree .parent-step.parent_li > span.first-child')
                .attr('title', 'Expand this branch')
              .find(' > i')
                .addClass('fa-plus')
                .removeClass('fa-minus');
          }
        });
  
      var children = $(this).parent('li.parent_li').find(' > ul > li');
      if (children.is(":visible")) {
        children.hide('fast');
        $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
      } else {
        children.show('fast');
        $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus').removeClass('fa-plus');
      }
      e.stopPropagation();
    });
  });
  
  
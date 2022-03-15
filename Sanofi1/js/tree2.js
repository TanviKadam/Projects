$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find('span:first-child').attr('title', 'Collapse this branch');
    // $(`.tree-class`).css('display','none');
    $('.tree li.parent_li span:first-child').on('click', function (e) {
        console.log('checked')
        $(this)
            .parents('.grid-content')
            .siblings('.grid-content')
            .each(function () {
                var children = $(this).find('.tree .step-parent.parent_li > ul > li.parent_li');
                if (children.is(":visible")) {

                    console.log('', $(this).find('.tree .step-parent.parent_li > .step1'))
                    children.hide('fast');
                    $(this)
                        .find('.tree .step-parent.parent_li > .step1')
                        .attr('title', 'Expand this branch')
                        .find(' > i')
                        .addClass('fa-plus')
                        .removeClass('fa-minus');
                }
            });

        var children = $(this).parent('li.parent_li ').find(' > ul > li');
        var grandChildren = $(this).parent('li.parent_li ').find(' > ul > li').find(' > ul > li');
        console.log('children', children);
        console.log(`grandChildren ${grandChildren}`);
        if (children.is(":visible")) {
            children.hide('fast');
            grandChildren.hide('fast')
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
        } else {
            children.show('fast');
            grandChildren.show('fast')
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus').removeClass('fa-plus');
            console.log($(this).parent('li.parent_li').find(' > ul '))
        }
        e.stopPropagation();
    });

    var children = $('.tree li.parent_li > span').parent('li.parent_li').find(' > ul > li');

    if (children.is(":visible")) {
        console.log('is visible')

        children.hide('fast');
        $('.tree li.parent_li > span').attr('title', 'Expand this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
    } else {
        console.log('is hide')
    }

    // $('.tree li:has(ul)').addClass('parent_li').find('> div > span').attr('title', 'Collapse this branch');
    // // $(`.tree-class`).css('display','none');
    // $('.tree li.parent_li > div > span').on('click', function (e) {
    //     console.log('ciecked')
    //         $(this)
    //           .parents('.grid-content')
    //           .siblings('.grid-content')
    //           .each(function() {
    //             var children = $(this).find('.tree .step-parent.parent_li > ul > li.parent_li');
    //             if (children.is(":visible")) {

    //                 console.log('', $(this).find('.tree .step-parent.parent_li > .step1'))
    //                 children.hide('fast');
    //                 $(this)
    //                 .find('.tree .step-parent.parent_li > .step1')
    //                   .attr('title', 'Expand this branch')
    //                 .find(' > i')
    //                   .addClass('fa-plus')
    //                   .removeClass('fa-minus');
    //             }
    //           });

    //     var children = $(this).parent('li.parent_li ').find(' > ul > li');
    //     var grandChildren = $(this).parent('li.parent_li ').find(' > ul > li').find(' > ul > li');
    //     if (children.is(":visible")) {
    //         children.hide('fast');
    //         grandChildren.hide('fast')
    //         $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
    //     } else {
    //         children.show('fast');
    //         grandChildren.show('fast')
    //         $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus').removeClass('fa-plus');
    //         console.log($(this).parent('li.parent_li').find(' > ul '))
    //     }
    //     e.stopPropagation();
    // });


});

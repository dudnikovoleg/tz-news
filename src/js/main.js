/**
 * Created by Oleg on 28.03.2017.
 */

$(document).ready(function () {

//sticky for left static

    $("#responsive-menu").stick_in_parent();

// Hamburger
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $(trigger).click(function () {
        $('#responsive-menu').toggleClass('toggled');
    });
});
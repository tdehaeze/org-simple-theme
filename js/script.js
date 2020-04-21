$(function() {
    $('.block').each(function() {
        $(this)
            .wrap("<div class='" + $(this).data("color") + "'></div>");

        var icon = $(this).data('icon');

        if (typeof icon !== typeof undefined && icon !== false) {
            $(this)
                .before("<p class='customtitle'>" + "<i class=\"fa fa-" + icon + "\"></i>" + $(this).prop("title") + "</p>")
        }
        else {
            $(this)
                .before("<p class='customtitle'>" + $(this).prop("title") + "</p>")
        }


    }
                    );
}
 );
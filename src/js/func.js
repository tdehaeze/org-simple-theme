import $ from "jquery";

export function makeBlocks() {
    $('.block').each(function() {
        $(this)
            .wrap("<div class='" + $(this).data("color") + "'></div>");

        var icon = $(this).data('icon');
        var title = $(this).prop('title');

        if (typeof title !== typeof undefined && title !== "") {
            if (typeof icon !== typeof undefined && icon !== false) {
                $(this)
                    .before("<p class='customtitle'>" + "<i class=\"fa fa-" + icon + "\"></i>" + $(this).prop("title") + "</p>");
            } else {
                $(this)
                    .before("<p class='customtitle'>" + $(this).prop("title") + "</p>");
            }
        }

    }
                    );
}

export function makeQuotes() {
    $('blockquote').each(function() {
        var title = $(this).prop('title');

        if (typeof title !== typeof undefined && title !== "") {
            $(this)
                .append("<p class='quote-title'>" + title + "</p>");
        }
    }
                        );
}

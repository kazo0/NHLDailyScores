
$(document).ready(function () {
    $.ajax({
        url: "http://m.thescore.com/nhl"
    }).done(function(html)
    {
        globalHtml = html;
        var date = getDateString();
        var find = "#" + date + ".games";
        offset = 0;
        showScores(html, date);
            
            
    });

    function showScores(html, date)
    {
        $("#games").empty();
        var find = "#" + date + ".games";
        $("p.date").empty();
        $("p.date").append(fancify(date));
        var f = $(html).find(find);
        var str = $(html).find(find).each(function (i, el) {
            $(this).find(".gamelist").each(function (i1, el1) {
                var src = "/pp.png";
                $(el1).find(".go").remove();
                $('img[alt="Nhl_icon_powerplay"]').attr("src", src);
                $("#games").append(el1);
            });

        });
        if (!f)
        {
            $("#games").append("No games to display");
        }

    }

function getDateString(offset)
{
    offset = offset || 0;
    var m = getMonthString();
    var date = new Date();
    var day = date.getDate();
    day = day + offset;
    if (day < 10)
    {
        day = "0" + day;
    }
    
    var d = m + "_" + day;
    return d;

}

function fancify(date)
{
    var m_names = new Array("January", "February", "March", 
    "April", "May", "June", "July", "August", "September", 
    "October", "November", "December");

    var d = new Date();
    var n = d.getMonth();

    var month = m_names[n];
    var day = date.substr(date.length - 2);

    return month + " " + day;
}
function getMonthString()
{
    var d = new Date();
    var n = d.getMonth() + 1;
    var month = "";
    switch(n)
    {
        case 1:
            month = "jan";
            break;
        case 2:
            month = "feb";
            break;
        case 3:
            month = "mar";
            break;
        case 4:
            month = "apr";
            break;
        case 5:
            month = "may";
            break;
        case 6:
            month = "jun";
            break;
        case 7:
            month = "jul";
            break;
        case 8:
            month = "aug";
            break;
        case 9:
            month = "sep";
            break;
        case 10:
            month = "oct";
            break;
        case 11:
            month = "nov";
            break;
        case 12:
            month = "dec";
            break;
    }
    return month;
}

    $("a.navNext").click(function () {
        offset = offset + 1;
        showScores(globalHtml, getDateString(offset));
    });


    $("a.navPrev").click(function () {
        offset = offset - 1;
        showScores(globalHtml, getDateString(offset));
    });
});
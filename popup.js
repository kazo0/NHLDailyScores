
    $.ajax({
        url: "http://m.thescore.com/nhl"
    }).done(function( html )
        {
            var date = getDateString();
            var find = "#" + date + ".games";
            
            var str = $(html).find(find).each(function(i, el)
            {
                $(this).find(".gamelist").each(function(i1, el1)
                {
                    var src = "/pp.png";
                    $(el1).find(".go").remove();   
                    $('img[alt="Nhl_icon_powerplay"]').attr("src", src);                
                    $("p").append(el1);
                });
                
            });
            
            
        });

function getDateString()
{
    var m = getMonthString();
    var date = new Date();
    var day = date.getDate();
    
    if (day < 10)
    {
        day = "0" + day;
    }
    
    var d = m + "_" + day;
    return d;

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

$("#dayNav").click(function ()
{
    alert("HI");
});
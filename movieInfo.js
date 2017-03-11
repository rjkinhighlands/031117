 <button>arnold</button>
    <div id="movieInfo"></div>

    $('button').on('click', function(){
            var hitThis = "http://www.omdbapi.com/?t=the+terminator";
            $.ajax({
                url: hitThis,
                method: "GET"
            }).done(function(data){
                    //and add the Year, Awards, Actors to div with an id of movieInfo
                    $('#movieInfo').append(data.Year);
                    $('#movieInfo').append(data.Awards);
                    $('#movieInfo').append(data.Actors);
            });
    });
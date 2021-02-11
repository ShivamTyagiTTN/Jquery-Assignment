// 1.Console "Hello Word" in document.ready function
$(document).ready(function(){
    console.log("Hello World"); });

// 2.Select a ID name "#test" and add class "load" when DOM is loaded
$(document).ready(function(){
    $("#test").addClass("load");   });

// 3.Change the color of element which class name end with "-new"
$(document).ready(function(){
    $("[class$=new]").css("color","red");   });

// 4.Disable submit button using jquery attr method
$(document).ready(function(){
    $(":submit").attr("disabled", true);   });

// 5.Change the font size of ".target" which has parent element with id name "#main"
$(document).ready(function(){
    $("#main > .target").css("font-size","18");   });

// 6.After page load change the HTML of div element with "p" element
$(document).ready(function(){
    $("div").html("<p> HTML changed </p>")    });

// 7.Bind a click function to an "click" element and append next "click" next to it.
$(".b1").click(function(){
    var btn = $("<button>New Button</button>");
    $("body").append(btn);
});

// 8.Click event not working on element which added dynamicly or via script, make it work using .on method
$(document).ready(function(){
	var newButton = $("<button id ='new-button'>Click here</button>");
	$(".test8").append(newButton);
	$("#new-button").on("click",function(){
		console.log("Click triggered");

	});
});

// 9.Get dropdown selected value on onchanage event and append in div container    
$(document).ready(function(){
     $("div").append($("#os").val());      });

// 10.Create a dropdown menu using hover method in jquery
$(document).ready(function(){
    $(".button").hover(function(){
        $(".dropdown").slideToggle();
    });
});

// 11.On clicking on "google" tag. It is taking us to google home page. Stop it from happening.
$("li > a").click(function(){
	return false;
})

// 12.We have bind a click funtion to parent div but we want stop it from performing when user clicks on its child li
$('.test12').on('click', function () {  
	console.log( 'clicked the parent div' );}).children().on('click', function (event) {
    event.stopPropagation();
   
});

// 13.Get the max height of elements using jquery each method
$(document).ready(function(){
	var maxHeight = -1;
	$('.container').each(function() {
		maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	console.log(maxHeight);
});

// 14.Chagne color of every cell which has numberl larger than 10.
$(document).ready(function(){
    $('tr td').each(function() {
        if($(this).text()>10)
        $(this).css("background","blue");
    });
});


// 15.Retrive the data from server using ajax get call
$(document).ready(function(){
$("#b1").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/posts", success:     function(result){
        console.log(result);
        $("#result").html(JSON.stringify(result));}});
    });});


// 16.Add cross button on row and bind click function which make a delete request to server, after success event remove the row from dom
      
$(document).ready(function(){
    $(document).on('click','.del',function(e){
        let id =$(this).attr('name')
        $.ajax({url: 'https://jsonplaceholder.typicode.com/posts/'+id,
        type: 'DELETE',
        success: function(result) {
        	alert("successfully deleted")
        	$('div#'+id).remove();
        	}
        	});
        	});
        	$("#b1").click(function(){
        		$.ajax({
        			url: 'https://jsonplaceholder.typicode.com/posts/',
        			success: function(result) {
        			for(var i in result)
        			{
        				$('.test16').append(
        				'<div id='+result[i].id+'> <span id='+result[i].id+'>'+result[i].title+'</span> <button class="del" name='+result[i].id+'>X</button></div>'
        			);
        		}
        	}
        });
    });
});

// 17.Create a image array and in div create a slide show to animate images of delay of 500ms.
$(document).ready(function(){
    var interval;
    $('#start').on("click",function()
    {
        var i=0;
        var arr = new Array("https://picsum.photos/200", "https://picsum.photos/201","https://picsum.photos/202","https://picsum.photos/203");
        interval = setInterval(function(){
            $('#images').html('<img src="'+arr[i]+'" height="500px" width="500px"/>');
                i++;
                if(i==4)
                	i=0;
            }, 2000);
        });
        $('#stop').on("click",function()
        {
            clearInterval(interval);
        });
	});





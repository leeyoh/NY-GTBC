	
var key = '5mJ5HwRpAb5oLreksAYwN8wldXKAH8Gb'


$("form").submit(function(e){
	e.preventDefault();
	
	var term = $("input[name='searchTerm']").val()
	var numRecords = $("input[name='numRecords']").val()
	var syear = $("input[name='syear']").val()
	var eyear = $("input[name='eyear']").val()
	var movie = $(this).attr("data-name");
	var startYear = '' 
	var endYear = '' 

	$('#articles').html('') 

	if(syear != ''){
		startYear = '&begin_date=' + syear + '0101'
	}

	if(eyear != ''){
		endYear = '&end_date=' + eyear  + '0101'
	}

	if(numRecords == ''){
		numRecords = 10 
	}

	var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + startYear + 
		endYear + '&api-key=' + key;
	
	// Creating an AJAX call for the specific movie button being clicked
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		let i = 0; 
		response.response.docs.forEach(function(element){ 					
			console.log(numRecords)
			if( i < numRecords){
				console.log(i)
				var title = $('<p></p>').text(element.headline.main)
				title.addClass('article')
				$('#articles').append(title)
			}
			i++;
		});
	})

});

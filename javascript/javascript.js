$("document").ready(function() {

    /*----------Automatic Question Generation HTML----------*/
    $.each(addquestions, function(index, value){

    	var addq_index = index;

    	$('#' + addquestions[addq_index].id).html(
    		'<h4>'+addquestions[addq_index].title+'</h4>'
	    );

	    /*----------Type = Radio Question----------*/
	    if (addquestions[addq_index].type == "radio") {

	    	/*----------Single Radio question----------*/
	    	if (!addquestions[addq_index].subquestions){

	    		/*----------Adding h4 subtitles----------*/
	    		$('#'+addquestions[addq_index].id).append(
		            '<h4><small>'+addquestions[addq_index].description+'</small></h4>'
		            );

	    		/*----------Adding Radio buttons----------*/
	    		var radiobtns = '<div class="btn-section q1btn">';

		        $.each(addquestions[addq_index].answers, function(index, value){

		            radiobtns+='<div class="formbtns btnradio"><input name="'+addquestions[addq_index].title+'" type="radio" value="'+value+'" id="'+addquestions[addq_index].id+index+'"';

		            /*----------Open Form on attr----------*/
		            if($.inArray(value,addquestions[addq_index].formon) > -1)
		            	radiobtns+='attr="form"';

		            radiobtns += '/><label for="'+addquestions[addq_index].id+index+'">'+value+'</label></div>';
		        });

		        $('#' + addquestions[addq_index].id).append( radiobtns + '</div>' );

		        /*----------Add Text Area----------*/
		        if(addquestions[addq_index].txtform)
		        	$('#' + addquestions[addq_index].id).append('<textarea name="' + addquestions[addq_index].tf_name + '" rows="3" class="form-control" placeholder="' + addquestions[addq_index].tf_comments + '"></textarea>');
		        
		        /*----------Back and Next buttons----------*/	        
		        if(addq_index == 0){
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q' + (addq_index+2) + '" id="q' + (addq_index+1) + 'next">Next Question</a></div>'
		            	);
		        } else if (addq_index < addquestions.length-1){
		        	$('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q'+addq_index+'">Previous Question</a><a href="#q'+(addq_index+2)+'">Next Question</a></div>'
		            	);
		        } else {
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="text-center submitsection"><span><a class="mybtn" id="submitbtn">Submit</a></span><p>*Note: Clicking the above button in IE will prompt an <i>Internet Explorer Security dialogue.</i><br>Please click on <i>Allow</i> to send the feedback via your Outlook.</p></div>'
		            	);
	            };

	        /*----------Multiple Radio questions----------*/
	    	} else {

	    		/*----------Adding multi question section----------*/
		        $.each(addquestions[addq_index].multi, function(index, value){
		        	
		        	var multiq_index = index;
		        	var radiobtns = '<div class="btn-section q1btn">';

		        	/*----------h5 multi question subtitles----------*/
		        	$('#' + addquestions[addq_index].id).append(
		        		'<h5>'+addquestions[addq_index].multi[multiq_index].subtitle+'<br><small>'+addquestions[addq_index].multi[multiq_index].description+'</small></h5>'
		        		);

		        	/*----------multi question radio buttons----------*/
		        	$.each(addquestions[addq_index].multi[multiq_index].answers, function(index, value){

			            radiobtns += '<div class="formbtns btnradio"><input name="'+(multiq_index+1)+'. '+addquestions[addq_index].multi[multiq_index].subtitle+ '" type="radio" value="'+value+'" id="'+addquestions[addq_index].id+multiq_index+index+'"';

			            if($.inArray(value,addquestions[addq_index].multi[multiq_index].formon) > -1)
			            	radiobtns += 'attr="form"';

			            radiobtns += '/><label for="'+addquestions[addq_index].id+multiq_index+index+'">'+value+'</label></div>';
			        });

			        radiobtns += "</div>";

			        /*---------Text form if needed----------*/
			        if(addquestions[addq_index].txtform)
		            	radiobtns += '<textarea name="' + addquestions[addq_index].multi[multiq_index].tf_name + '" rows="3" class="form-control" placeholder="' + addquestions[addq_index].multi[multiq_index].tf_comments + '"></textarea>';

		            /*----------Spacing between multi question sections----------*/
		            if(index!=(addquestions[addq_index].multi[multiq_index].length-1))
		            	radiobtns += "<br>";

		            $('#' + addquestions[addq_index].id).append(radiobtns);

		        });

				/*----------Back and Next buttons----------*/	        
		        if(addq_index == 0){
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q' + (addq_index+2) + '" id="q' + (addq_index+1) + 'next">Next Question</a></div>'
		            	);
		        } else if (addq_index < addquestions.length-1){
		        	$('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q'+addq_index+'">Previous Question</a><a href="#q'+(addq_index+2)+'">Next Question</a></div>'
		            	);
		        } else {
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="text-center submitsection"><span><a class="mybtn" id="submitbtn">Submit</a></span><p>*Note: Clicking the above button in IE will prompt an <i>Internet Explorer Security dialogue.</i><br>Please click on <i>Allow</i> to send the feedback via your Outlook.</p></div>'
		            	);
	            };
	    	};

	    };

	    /*----------Type = Form Question----------*/
	    if (addquestions[addq_index].type == "form") {

		    /*----------Single Form question----------*/
		    if (!addquestions[addq_index].subquestions){

		    	/*----------Adding h4 subtitles----------*/
	    		$('#' + addquestions[addq_index].id).append(
		            '<h4><small>' + addquestions[addq_index].description + '</small></h4>'
		            );

	    		/*----------Adding text form----------*/
	    		$('#' + addquestions[addq_index].id).append(
	    			'<textarea name="' + addquestions[addq_index].name + '" rows="'+addquestions[addq_index].rows+'" class="form-control" placeholder="' + addquestions[addq_index].comments + '"></textarea>'
	    			);

	    		/*----------Back and Next buttons----------*/	        
		        if(addq_index == 0){
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q' + (addq_index+2) + '" id="q' + (addq_index+1) + 'next">Next Question</a></div>'
		            	);
		        } else if (addq_index < addquestions.length-1){
		        	$('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q'+addq_index+'">Previous Question</a><a href="#q'+(addq_index+2)+'">Next Question</a></div>'
		            	);
		        } else {
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="text-center submitsection"><span><a class="mybtn" id="submitbtn">Submit</a></span><p>*Note: Clicking the above button in IE will prompt an <i>Internet Explorer Security dialogue.</i><br>Please click on <i>Allow</i> to send the feedback via your Outlook.</p></div>'
		            	);
	            };

		    } else {

	    		$.each(addquestions[addq_index].multi, function(index, value){

	    			var multiq_index = index;

	    			/*----------Multi Form titles----------*/
	    			$('#'+addquestions[addq_index].id).append(
	    				'<h5>'+addquestions[addq_index].multi[multiq_index].subname+'<br><small>'+addquestions[addq_index].multi[multiq_index].description+'</small></h5>'
	    				);

	    			/*----------Adding text form----------*/
	    			$('#'+addquestions[addq_index].id).append(
	    				'<textarea name="'+addquestions[addq_index].name+addquestions[addq_index].multi[multiq_index].subname+'" rows="'+addquestions[addq_index].multi[multiq_index].rows+'" class="form-control" placeholder="'+addquestions[addq_index].multi[multiq_index].comments+'"></textarea>'
	    				);

	    		});

	    		/*----------Back and Next buttons----------*/	        
		        if(addq_index == 0){
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q' + (addq_index+2) + '" id="q' + (addq_index+1) + 'next">Next Question</a></div>'
		            	);
		        } else if (addq_index < addquestions.length-1){
		        	$('#' + addquestions[addq_index].id).append(
		            	'<div class="backnext_btns"><a href="#q'+addq_index+'">Previous Question</a><a href="#q'+(addq_index+2)+'">Next Question</a></div>'
		            	);
		        } else {
		            $('#' + addquestions[addq_index].id).append(
		            	'<div class="text-center submitsection"><span><a class="mybtn" id="submitbtn">Submit</a></span><p>*Note: Clicking the above button in IE will prompt an <i>Internet Explorer Security dialogue.</i><br>Please click on <i>Allow</i> to send the feedback via your Outlook.</p></div>'
		            	);
	            };
		    };
	    };

    });

	$('.parallax-window').parallax({imageSrc: 'https://theturf.io/images/sized/work-864960_1280-1801b5e7f916ca62fd3a51869634ccb4.jpg'});

	/*----------Adjust all buttons to the max height----------*/
	function btn_height() {
		var btnsection = $('#searchForm .btn-section');
		var windowWidth = $(window).width();

		btnsection.each(function(btnsection, heightvalue){

			$(this).css('height','auto');

	    	var heights = $(this).find('.formbtns').map(function () {
		        return $(this).height();
		    }).get();
		    
		    maxHeight = Math.max.apply(null, heights) + $(window).innerHeight()*0.1;

		    $(this).css('height',maxHeight);
	    });
		
	}
	btn_height();
	
	/*----------Next question appear upon answering previous----------*/
	$('#surveyform .backnext_btns a, #surveyform .btnradio').on("click", function(){
		var idnum = $(this).parent().parent().attr('id').replace(/q/, '');
		idnum = parseInt(idnum)+1;

		$(this).parent().parent().parent().find('#q'+(idnum)).fadeIn("50");
		$(this).parent().parent().find('a').fadeIn("100");

		btn_height();
	});

	/*----------Display one question at a time----------*/
	function onepage_questions() {
	    windowHeight = $(window).innerHeight();

	    $('#surveyform > div').css('min-height', windowHeight);
		$('#surveyform > div:first-child').css('min-height', windowHeight-$("#headtitle").outerHeight());

	   };
	onepage_questions();

	/*----------Refresh sizing fuctions on window adjust----------*/
	$(window).resize(function() {
	    onepage_questions();
	    btn_height();
	});

	/*----------Activate form on certain checkboxes----------*/
	$('#surveyform input').on('click', function(){
		if (($(this).attr('attr') == "form")) {
			$(this).parent().parent().parent().find('textarea').fadeIn("200");
		} else {
			$(this).parent().parent().parent().find('textarea').fadeOut("100");
		}
	});

	/*----------Back & Next Button auto scrolling----------*/
	$('a[href^="#"]').on('click', function(event) {
	    var target = $($(this).attr('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({ scrollTop: target.offset().top - $(window).innerHeight()*0.01 }, 800);
	    }
	});

	/*----------Submitting form----------*/
	$('#submitbtn').click(function(){
		var inputs = $('#searchForm input:checked');
		var comments = $('#searchForm textarea')
	    var bodyStr = "";

	    inputs.each(function(index, value){	
	    	bodyStr += value.name + "%0A * " + value.value + "%0A%0A";
	    });
	    comments.each(function(comments, value){
	    	if (value.value != ""){
				bodyStr += value.name + "%0A * " + value.value + "%0A%0A";
	    	};
	    })

	    window.location = "mailto:DigitalLabCanada@aexp.com?subject=Digital%20Lab%20Feedback:%20Klover&body=" + bodyStr;
	});
});
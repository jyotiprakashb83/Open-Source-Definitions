/**
 * 
 */
// Create the XHR object.
/*function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
//  var url = 'http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html';
	var url = "http://www/gspann.com"

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
   // var title = getTitle(text);
    var title = "Sunil Kumar Yadav";
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
*/
//$('#container').load('http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html'); // SERIOUSLY!
function getDetails(){
	//alert("Working...   "+text.lang);
	console.log(" <<<<<<<<<<< ajax createProfileOnServer!! >>>>>>>>>>");
	$('#container').load('http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html'); // SERIOUSLY!
	$.ajax({
    url: 'http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html',
    type: 'GET',
    success: function(res) {
        //var headline = $(res.responseText).find('a.tsh').text();
        alert("headline");
    }
});
	//var data =  {"WISMID":123};
	/*$.ajax({ 
		//async : true ,
		//data : "java/lang/StringBuffer.html", 
    //    url : "http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html", 
      //  dataType : 'html', // from server 
       // type : "GET",
		  
    //    beforeSend : function() { 
      //       console.log("<<<<<<<<< beforeSend data >>>>> "); 
             // console.log("/<<<<<<< jason >>>> " + ); 
    //    }, 
		
		
		// The 'type' property sets the HTTP method.
		  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
		  type: 'GET',

		  // The URL to make the request to.
		  url: 'http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html',

		  // The 'contentType' property sets the 'Content-Type' header.
		  // The JQuery default for this property is
		  // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
		  // a preflight. If you set this value to anything other than
		  // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
		  // you will trigger a preflight request.
		  //contentType: 'text/html',
		  dataType: "text",

		  xhrFields: {
		    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
		    // This can be used to set the 'withCredentials' property.
		    // Set the value to 'true' if you'd like to pass cookies to the server.
		    // If this is enabled, your server must respond with the header
		    // 'Access-Control-Allow-Credentials: true'.
		    withCredentials: false
		  },
        success : function(responseData) { 
				//console.log("<<<<<<<<< Successful>>>>> "); 
				alert("Done");
          //   console.log(" <<<<<<<<<<< ajax Success !!! >>>>>>>>>>" + responseData.FBFRIENDS); 
            // console.log(" <<<<<<<<<<< ajax Success !!! >>>>>>>>>>" + responseData.FBFRIENDS[1]); 
            // stopLoader(); 
        }, 
        error : function(e) { 
           //  stopLoader(); 
             console.log(" <<<<<<<<<<< Request failed !!! >>>>>>>>>>"); 
        }, 

        complete : function() { 
             console.log(" <<<<<<<<<<< Request complete !!! >>>>>>>>>>"); 
        } 
   }); */
 /*  $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html') + '&callback=?', function(data){
	alert(data.contents);
});*/


}

//url = "http://docs.oracle.com/javase/7/docs/api/";
//toBeChanged = "java/lang/StringBuffer.html";

/*var json = (function() {
    var json = null;
    $.ajax({
		'cache':false,
        'async': false,
        'global': false,
        'url': "./json/flightsearch.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();*/

/*function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html",true);
	//xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//xmlhttp.send("fname=Henry&lname=Ford");
	xmlhttp.send();
}*/




/*function requestCrossDomain( site, callback ) {
     
    // If no url was passed, exit.
    if ( !site ) {
        alert('No site was passed.');
        return false;
    }
     
    // Take the provided url, and add it to a YQL query. Make sure you encode it!
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=xml&callback=cbFunc';
     
    // Request that YSQL string, and run a callback function.
    // Pass a defined function to prevent cache-busting.
    $.getJSON( yql, cbFunc );
     
    function cbFunc(data) {
    // If we have something to work with...
    if ( data.results[0] ) {
        // Strip out all script tags, for security reasons.
        // BE VERY CAREFUL. This helps, but we should do more. 
        data = data.results[0].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
         
        // If the user passed a callback, and it
        // is a function, call it, and send through the data var.
        if ( typeof callback === 'function') {
            callback(data);
        }
    }
    // Else, Maybe we requested a site that doesn't exist, and nothing returned.
    else throw new Error('Nothing returned from getJSON.');
    }
}


requestCrossDomain('http://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html', function(results) {
   $('#container').html(results);
});*/






$(document).ready(function(){
  var container = $('#target');
  container.attr('tabIndex','-1');
  $('.ajaxtrigger').click(function(){
    var trigger = $(this);
    var url = trigger.attr('href');
    if(!trigger.hasClass('loaded')){
      trigger.append('<span></span>');
      trigger.addClass('loaded');
      var msg = trigger.find('span').last();
    } else {
      var msg = trigger.find('span').last();
    }
    doAjax(url,container);
    return false;
  });
  
  function doAjax(url,container){
    // if the URL starts with http
    if(url.match('^http')){
      // assemble the YQL call
     /* $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                "q=select%20*%20from%20html%20where%20url%3D%22"+
                encodeURIComponent(url)+
                "%22&format=xml'&callback=?",*/
		var classToExtract = ".description";
		var yqlUrl = "http://query.yahooapis.com/v1/public/yql";
		$.getJSON(yqlUrl+"?q=use%0A'\
		http%3A%2F%2Fyqlblog.net%2Fsamples%2Fdata.html.cssselect.xml'\
		%20as%20data.html.cssselect%3B%0Aselect%20*%20from%20data.html.\
		cssselect%20where%20url%3D%22"+encodeURIComponent(url)+"\
		%22%20and%0Acss%3D%22"+classToExtract+"%22&diagnostics=true\
		&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys%22&format=xml'&callback=?",
        function(data){
          if(data.results[0]){
            var data = filterData(data.results[0]);
            //container.html(data);
			//$(container).modal();
			var pop = new myPop();
			pop.popOut(data);
			//myPop(data);
          } else {
            var errormsg = '<p>Error: could not load the page.</p>';
            container.html(errormsg);
          }
        }
      );
    } else {
      $.ajax({
        url: url,
        timeout:5000,
        success: function(data){
          container.html(data);
        },
        error: function(req,error){
          if(error === 'error'){error = req.statusText;}
          var errormsg = 'There was a communication error: '+error;
            container.html(errormsg);
        }
      });
    }
  }
  function filterData(data){
    // filter all the nasties out
    // no body tags
    data = data.replace(/<?\/body[^>]*>/g,'');
	data = data.replace('<p>','');
	
	
	data = data.replace('</span>','</span><br>');
	
   // // no linebreaks
    data = data.replace(/[\r|\n]+/g,'');
    // no comments
    data = data.replace(/<--[\S\s]*?-->/g,'');
    // no noscript blocks
    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
    // no script blocks
    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
    // no self closing scripts
    data = data.replace(/<script.*\/>/,'');
    // [... add as needed ...]
	
    return data;
  }
});
function myPop() { 
    this.square = null;
    this.overdiv = null;

    this.popOut = function(msgtxt) {
        //filter:alpha(opacity=25);-moz-opacity:.25;opacity:.25;
        this.overdiv = document.createElement("div");
        this.overdiv.className = "overdiv";

        this.square = document.createElement("div");
        this.square.className = "square";
        this.square.Code = this;
        var msg = document.createElement("div");
        msg.className = "msg";
        msg.innerHTML = msgtxt;
        this.square.appendChild(msg);
        var closebtn = document.createElement("button");
        closebtn.onclick = function() {
            this.parentNode.Code.popIn();
        }
        closebtn.innerHTML = "Close";
        this.square.appendChild(closebtn);

        document.body.appendChild(this.overdiv);
        document.body.appendChild(this.square);
    }
    this.popIn = function() {
        if (this.square != null) {
            document.body.removeChild(this.square);
            this.square = null;
        }
        if (this.overdiv != null) {
        document.body.removeChild(this.overdiv);
        this.overdiv = null;
        }

    }
}


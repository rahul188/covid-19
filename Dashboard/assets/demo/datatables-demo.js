      
$(document).ready(function(){
          $.getJSON( "database/df1.json", function( data ) {
              $('#d1').DataTable({
                 "data" : data,
                 columns : [
                  {"data" : "Type"},
                  {"data" : "HectorID"},
                  {"data" : "Submission"},
                  {"data" : "Test Configuration"},
				  {"data" : "New\/Repeat"},
                  {"data" : "Reason"},
                  {"data" : "URL"}				  
                 ]
            });
            });  
			
			
          $.getJSON( "database/df2.json", function( data ) {
              $('#d2').DataTable({
                 "data" : data,
                 columns : [
                  {"data" : "Test Configuration"},
                  {"data" : "Total Failures"},
                  {"data" : "Submission"},
                  {"data" : "Junit"},
				  {"data" : "Integration"},
                  {"data" : "Interaction"},
                  {"data" : "Selenium"}				  
                 ]
            });
            });  
						
          $.getJSON( "database/df3.json", function( data ) {
              $('#d3').DataTable({
                 "data" : data,
                 columns : [
                  {"data" : "Type"},
                  {"data" : "SubmissionIssue"},
                  {"data" : "Hector Already Assigned"},
                  {"data" : "Previous Build Failure"},
				  {"data" : "UnIdentified Failures"},
                  {"data" : "Total Failures"}	  
                 ]
            });
            });  
			
});

 
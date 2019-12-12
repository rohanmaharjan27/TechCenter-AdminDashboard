$(document).ready(function() { 
	  
    var tok=localStorage.getItem('token');
    var usertype=localStorage.getItem('usertype');

    $.ajax({
    type:'get',
    url:'http://localhost:8000/users/check',
    beforeSend:function(xhr){
    if(tok && usertype=="admin"){
        xhr.setRequestHeader('Authorization','Bearer '+tok);
    }
    },
    success:function(data){
    },
    error:function(){
        alert("Not logged in or no admin privileges");
        location.href="login.html"
        return;
    }

    }); 
    });   
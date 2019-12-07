$(document).ready(function() { 
	  
    var tok=localStorage.getItem('token');
    var user_type=localStorage.getItem('usertype');

    $.ajax({
    type:'get',
    url:'http://localhost:8080/users/check',
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
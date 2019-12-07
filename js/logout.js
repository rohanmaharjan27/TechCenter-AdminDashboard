$(document).ready(function(){

	 var tok=localStorage.getItem('token');

	 $("#logout").on("click",function(){

        $.ajax({
            type:"POST",
            url:"http://localhost:8000/users/logout",
            beforeSend: function(xhr){
                if(tok){
                    xhr.setRequestHeader('Authorization','Bearer '+tok);
                }
            },
             success:function(responseData,textStatus,jqXHR){
                 console.log(responseData);
                 location.href="login.html";
             },
             error:function(jqXHR,textStatus,errorThrown){
                 console.log(errorThrown)
                 alert(errorThrown)
             }
        })
        return false;
    })

	 })
$(document).ready(function() {  
    var tok=localStorage.getItem('token');
                                                    
            $.getJSON('http://localhost:8000/users/', function(res) {     
              var users="";
                  users+="<div class='table-responsive'>"
                  users+="<table class='table' id='table'>";
                  users+="<thead class='thead-dark'>";  
                  users+="<tr><th scope='col' class='text-center'>First Name</th>";
                  users+="<th scope='col' class='text-center'>Last Name</th>";
                  users+="<th scope='col' class='text-center'>Phone Number</th>";
                  users+="<th scope='col' class='text-center'>Address</th>";
                  users+="<th scope='col' class='text-center'>Email</th>";     
                  users+="<th scope='col' class='text-center'>Password</th>";
                  users+="<th scope='col' class='text-center'>User Image</th>";
                  users+="</thead>";                     
                $.each(res, function(index) { 
                  users+="<tbody>"
                  users+="<tr><td align='center'>"+res[index].firstname +"</td>";
                  users+="<td align='center'>"+res[index].lastname +"</td>";
                  users+="<td align='center'>"+res[index].phone +"</td>";
                  users+="<td align='center'>"+res[index].address +"</td>";
                  users+="<td align='center'>"+res[index].email +"</td>";  
                  users+="<td align='center'>"+res[index].password +"</td>";
                  users+="<td align='center'><img src='http://localhost:8000/user-images/"+res[index].userimagename+"' alt='user image' width='100px' height='80px'></td>";
                })

                users+="</tbody>";
                users+="</table>";
                users+="</div>";
                  $('#view').append(users);
                    });                                                                     
                    });  
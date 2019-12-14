$(document).ready(function() {  

    var tok=localStorage.getItem('token'); 
                                                     
            $.getJSON('http://localhost:8000/products/', function(res) {     
              var products="";
                  products+="<div class='table-responsive'>"
                  products+="<table class='table' id='table'>";
                  products+="<thead class='thead-dark'>";  
                  products+="<tr><th scope='col' class='text-center'>Name</th>";
                  products+="<th scope='col' class='text-center'>Price</th>";
                  products+="<th scope='col' class='text-center'>Category</th>";
                  products+="<th scope='col' class='text-center'>Description</th>";
                  products+="<th scope='col' class='text-center'>Manufacturer</th>";
                  products+="<th scope='col' class='text-center'>Image</th>";
                  products+="<th scope='col' class='text-center'>Action</th></tr>";
                  products+="</thead>";  
                                     
                $.each(res, function(index) { 
                  products+="<tbody>";
                  products+="<tr><td>"+res[index].product_name +"</td>";
                  products+="<td>"+res[index].product_price +"</td>";
                  products+="<td>"+res[index].product_category +"</td>";
                  products+="<td>"+res[index].product_description +"</td>";
                  products+="<td>"+res[index].product_manufacturer +"</td>";
                  products+="<td><img src='http://localhost:8000/images/"+res[index].product_imagename+"' alt='product image' width='100px' height='90px'></td>";
                  products+="<td><p><button id='delete' class='btn btn-primary' value="+res[index]._id+">Delete</button></p></td></tr>";
                })

                products+="</tbody>";
                products+="</table>";
                products+="</div>";
                  $('#view').append(products);

                        $('#view').on('click','#delete',function () {                                 
    id = $(this).val();   
    var result=confirm("Are you sure?");
    if(result){
    	$.ajax({                        
        url: 'http://localhost:8000/products/deleteproduct/'+id,                        
        type: 'DELETE',                        
        dataType: 'json',                        
        data:id,
        beforeSend: function(xhr){
                if(tok){
                    xhr.setRequestHeader('Authorization','Bearer '+tok);
                }
            },                        
        success: function (data, textStatus, xhr) { 
         		alert("Product Deleted Successfully!");
            window.location.reload();
                
                  },                    
            error: function (xhr, textStatus, errorThrown) {                            
                console.log('Error in Operation'); 
                alert(errorThrown);                       
            }                    
        });   
    }
    else{

    }
    });  
                    });                                                                     
                    });   
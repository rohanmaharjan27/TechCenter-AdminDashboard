 $(document).ready(function() {  

    var tok=localStorage.getItem('token');
     
                                                     
            $.getJSON('http://localhost:8000/orders/', function(res) {    
              var products="";
                  products+="<div class='table-responsive'>"
                  products+="<table class='table' id='table'>";
                  products+="<thead class='thead-dark'>";  
                  products+="<tr><th scope='col' class='text-center'>Email</th>";
                  products+="<th scope='col' class='text-center'>Product Name</th>";
                  products+="<th scope='col' class='text-center'>Quantity</th>";
                  products+="<th scope='col' class='text-center'>Total Price</th>";
                  products+="<th scope='col' class='text-center'>Product Image</th>";
                  products+="<th scope='col' class='text-center'>Payment Method</th>";
                  products+="<th scope='col' class='text-center'>Ordered Date</th>";
                  products+="<th scope='col' class='text-center'>Status</th></tr>";
                  products+="</thead>";                     
                $.each(res, function(index) {
                  products+="<tbody>"
                  products+="<tr><td align='center'>"+res[index].email +"</td>";
                  products+="<td align='center'>"+res[index].product_name +"</td>";
                  products+="<td align='center'>"+res[index].product_quantity +"</td>";
                  products+="<td align='center'>"+res[index].product_price +"</td>";
                  
                  products+="<td align='center'><img src='http://localhost:8000/images/"+res[index].product_imagename+"' alt='product image' width='100px' height='90px'></td>";
                  products+="<td align='center'>"+res[index].payment_type +"</td>";
                  products+="<td align='center'>"+res[index].date +"</td>";
                  products+="<td align='center'>"+res[index].status +"</td>";
                })

                products+="</tbody>";
                products+="</table>";
                products+="</div>";
                  $('#view').append(products);        
                    });                                                                     
                    });   
 $(document).ready(function() {  

    var tok=localStorage.getItem('token'); 
                                                     
            $.ajax({
              type:'get',
              url:'http://localhost:8000/products/',
              beforeSend:function(xhr){
                if(tok){
                  xhr.setRequestHeader('Authorization','Bearer',+tok);

                }
              },
              success:function(data){
                console.log(data.length);
                let count=data.length;
                $("#products").append(count);
              },
              error:function(){

              }
            });


            $.ajax({
              type:'get',
              url:'http://localhost:8000/users/',
              beforeSend:function(xhr){
                if(tok){
                  xhr.setRequestHeader('Authorization','Bearer',+tok);

                }
              },
              success:function(data){
                console.log(data.length);
                let count=data.length;
                $("#customers").append(count);
              },
              error:function(){

              }
            });

            $.ajax({
              type:'get',
              url:'http://localhost:8000/orders/',
              beforeSend:function(xhr){
                if(tok){
                  xhr.setRequestHeader('Authorization','Bearer',+tok);

                }
              },
              success:function(data){
                console.log(data.length);
                let count=data.length;
                $("#orders").append(count);
              },
              error:function(){

              }
            });
            
          });
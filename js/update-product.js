 $(document).ready(function(){

          
    var tok=localStorage.getItem('token');
    
            var urlParams=new URLSearchParams(window.location.search);

            var id=urlParams.get("id");
            $.getJSON("http://localhost:8080/getsingleproduct/"+id,function(result){
                $('#productName').val(result.productName);
                $('#productPrice').val(result.productPrice);
                $('#productDescription').val(result.productDescription);
                $('#productCategory').val(result.productCategory);
                var imageFile=result.productImageName;

                $('#img_display').html('<img src="http://localhost:8080/images/'+imageFile+'" class="img-thumbnail" alt="Sample image" height="300px" width="300px">');
            });
            
            let imageFile='';
        $("#productImageName").on('change',function(){
        let formData = new FormData();
        let files = $("#productImageName").get(0).files;
        if(files.length>0){
        formData.append("imageFile",files[0]);
    }
    $.ajax({
      url: 'http://localhost:8080/imageupload/',
      type: 'POST',  
      contentType:false,
      cache:false,
      processData:false,  
      data:formData,  

      success:function(data){
        imageFile=data.imageFile;

        $('#img_display').html('<img src="http://localhost:8080/images/'+imageFile+'" class="img-thumbnail" alt="Sample image" height="300px" width="300px">');

      },
      error:function(){
        alert("Image upload failed");
      }

    });
   });


            $("form.updateProduct").on("submit",function(){
                var productName=$('#productName').val();
                var productPrice=$('#productPrice').val();
                var productDescription=$('#productDescription').val();
                var productCategory=$('#productCategory').val();
                var productImageName=imageFile;

                var data={
                    "productName":productName,
                    "productPrice":productPrice,
                    "productDescription":productDescription,
                    "productImageName":productImageName,
                    "productCategory":productCategory
                }

                $.ajax({
                    type:"PUT",
                    url:"http://localhost:8080/updateproduct/"+id,
                    data:data,
                    beforeSend: function(xhr){
                if(tok){
                    xhr.setRequestHeader('Authorization','Bearer '+tok);
                }
            }, 
                    success:function(result){
                        alert("Product Update Successfully!");
                        window.location.reload();
                    }
                });
                return false;
            });
        });
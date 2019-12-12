$(document).ready(function(){

    var tok=localStorage.getItem('token');


 let imageFile='';
        $("#productImageName").on('change',function(){
        let formData = new FormData();
        let files = $("#productImageName").get(0).files;
        if(files.length>0){
        formData.append("imageFile",files[0]);
    }
    $.ajax({
      url: 'http://localhost:8000/products/imageupload',
      type: 'POST',  
      contentType:false,
      cache:false,
      processData:false,  
      data:formData,  

      success:function(data){
        imageFile=data.imageFile;

        $('#img_display').html('<img src="http://localhost:8000/images/'+imageFile+'" class="img-thumbnail" alt="Sample image" height="300px" width="300px">');

      },
      error:function(){
        alert("Image upload failed");
      }

    });
   });

    $("form.addProductForm").on("submit",function(){
       // e.preventDefault();
        var prodName=$("#productName").val();
        var prodPrice=$("#productPrice").val();
        var productDescription=$("#productDescription").val();
        var productManufacturer=$("#productManufacturer").val();
        var prodCategory=$("#productCategory").val();
        var prodImageName=imageFile;
 
        var data={
            product_name:prodName,
            product_price:prodPrice,
            product_category:prodCategory,
            product_description:productDescription,
            product_manufacturer:productManufacturer,
            product_imagename:prodImageName
        };

        console.log(data);
 
    

        $.ajax({
            type:"POST",
            url:"http://localhost:8000/products/addProduct",
            data:data,
            beforeSend: function(xhr){
                if(tok){
                    xhr.setRequestHeader('Authorization','Bearer '+tok);
                }
            },
             success:function(responseData,textStatus,jqXHR){
                 console.log(responseData);
                 alert(responseData.message);
                 window.location.reload();
             },
             error:function(jqXHR,textStatus,errorThrown){
                 console.log(errorThrown)
                 alert(errorThrown)
             }
        })
        return false;
    })
 
 })
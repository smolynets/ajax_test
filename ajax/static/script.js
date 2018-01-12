$(document).ready(function(){
    var form = $('#form_buying_product');
    console.log(form);


    function basketUpdating(name, nmb){
        var data = {};
        data.name = name;
        data.nmb = nmb;
         var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
         data["csrfmiddlewaretoken"] = csrf_token;

         var url = form.attr("action");

        console.log(data)
         $.ajax({
             url: url,
             type: 'POST',
             data: data,
             cache: true,
             success: function (data) {}
         })

    }

    form.on('submit', function(e){
        e.preventDefault();
        var submit_btn = $('#submit_btn');
        var name = submit_btn.data("name");
        console.log(name);
        var nmb = $('#number').val();
        console.log(nmb);

        basketUpdating(name, nmb)

    });

    
     $(document).on('click', '.delete-item', function(e){
         e.preventDefault();
         product_id = $(this).data("product_id")
         nmb = 0;
         basketUpdating(product_id, nmb, is_delete=true)
     })

});
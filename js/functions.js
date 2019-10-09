/* global $ */ 
/* global _ */ 

// $.ajax({

// method: "GET",
// url: "",
// dataType: "",
// data: { "": },
// success: function(result,status) {
// //alert(result);
// }

// });//ajax
$(document).ready(function()
{
    //var key ; 
    var likes = 0 ; 
    var dislikes = 0 ; 
    $("#like").change( like());
    $("#dislike").change( dislike());
   // $("#video").change(function(){
    $.ajax({
    
    method: "GET",
    url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=sB2T0sQBUdw",
    dataType: "json",
    //data: { "": },
    success: function(result,status) {
        
    //alert(result);
        likes = result.likes; 
        dislikes = result.dislikes; 
        $("#likes").html(result.likes);
        $("#dislikes").html(result.dislikes);
    
    }
    
    });//ajax
   
    

    function like()
    {
        $("#likes").html(likes+1); 
        
    }
    function dislike()
    {
        $("#dislikes").html(dislikes+1); 
    }
    function unlike()
    {
        $("#likes").html(likes-1); 
    }
    function undislike()
    {
        $("#dislikes").html(dislikes-1);
    }
    
    $("#comment").on("click", function(){
        //alert("test");
        $.ajax({
    
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=sB2T0sQBUdw&action=comments",
        dataType: "json",
        //data: { "key": comment },
        success: function(result,status) {
        _.shuffle(result);
        //alert(result);
        alert("result:"+ result.comment[0]);
        for(var i = 0 ; i < result.length ; i++)
        {
            $("#commentBox").html(result.comment[i]);
            $("#rating").html(result.rating[i]);
            $("#author").html(result.author[i]);
            $("#date").html(result.date[i]);
        }
            // $("#commentBox").html(result.comment);
            // $("#rating").html(result.rating);
            // $("#author").html(result.author);
            // $("#date").html(result.date);
        
        }
        
        });//ajax 
    });
    $("#feedback").on("click", function(){
       $("feedback").html("We enjoy your feedback!"); 
       $("#feedback").css("color" , "red");
    });
            
   
});//END DOC READY
    
//});


// //Event Listeners
//             $(".qty").change(calculateTotal);
//             $("#shipping").on("change", calculateTotal);
//             $("#applyPromo").click(getDiscount);

//             //Global Variables
//             var discount = 0;


//             //Making AJAX call as soon as the page loads to get a random product
//             $.ajax({

//                 method: "GET",
//                   url: "https://cst336.herokuapp.com/projects/api/promo_products.php",
//               dataType: "json",
//                   //data: { },  //data is NOT needed, the end point doesn't use any parameter
//               success: function(result,status) {
//                     let index = Math.floor(Math.random() * result.length);  //random number 
//                     $("#product").html(result[index].productName);
//                     $("#price").html(result[index].price);
//                     $("#qty").val(result[index].qty);
//                     calculateTotal();
//                 }
                
//             });//ajax


//         });//document.ready

//         function calculateTotal(){
            
//             let totalItem1 = $("#price").html() * $("#qty").val();
//             $("#totalItem1").html( `$${totalItem1}`);

//             let appliedDiscount =  (totalItem1 * (discount/100))
//             $("#appliedDiscount").html( `-$${appliedDiscount}`);

//             let shipping = $("#shipping").val(); 
//             document.getElementById("shippingCost").innerHTML = "$" + shipping;

//             let subtotal =  totalItem1 - appliedDiscount + parseInt(shipping);
            
//             document.getElementById("subtotal").innerHTML = "$" + parseInt(subtotal);
        
//             document.getElementById("tax").innerHTML = "$" + parseInt(subtotal * .10);
//             document.getElementById("total").innerHTML = "$" + (Math.round(subtotal * 1.10));
            
//         }

//         function getDiscount(){

//             $("#promoError").html("");

//             $.ajax({

//                 method: "GET",
//                   url: "https://cst336.herokuapp.com/projects/api/promo_codes.php",
//               dataType: "json",
//                   data: { "promoCode": $("#promo").val()},
//               success: function(result,status) {
//                     discount = result.discount;
//                     if (!discount) {
//                         $("#promoError").html("Promo code doesn't exist!");
//                         $("#discount").html("")
//                         discount = 0;
//                     }
//                     else{
//                       $("#discount").html(result.discount + "%");
//                     }
//                     calculateTotal();
//                 }
                
//             });//ajax

//         }
   

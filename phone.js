

$('.nav ul li:eq(1)').click(function(e){
    e.preventDefault();
    $('.rate').slideToggle(500);
})
$('.rating i').click(function(){
    $(this).toggleClass('fa-star-o fa-star')
})


$('.links button').click(function(){
    $('.links').toggleClass('show');
    $('.links button i').toggleClass('fa-chevron-right fa-chevron-left')
})


$('.ml button').click(function(){
    $('.ml').toggleClass('show');
    $('.ml button i').toggleClass('fa-chevron-right fa-chevron-left')
})
$('.ml  i').click(function(){
    $(this).toggleClass('op');
})



$('.fform span').click(function(e){
    e.preventDefault();
    $('.fform form').fadeOut(500);
    $('.vari').fadeIn(1500);
})





   
 $('.vari button').click(function(){
  $('.menu .us').text($('.fform .1').val()).prepend('<i class="fa fa-user" aria-hidden="true"></i> ')
          $('.welcome').slideUp(800);
            $('.menu').slideDown(1800)
            $('.vari').remove()
            $('.fform h2').hide()
            $('.rating').fadeIn(1700)
            })
          /*    */
         




       
$('.mainmenu #lin ').click(function(){
    $('.mainmenu').slideUp(700);
    $('.fdi').slideDown(1500)
})
  
$('.cl').click(function(){
    if(fromm=='menu'){
        $(this).parent().slideUp(1500);
        $('.menu').slideDown(700);
    }else{
    $(this).parent().slideUp(1500);
    var order= $(this).parent().data('ord')-1;
    $('[data-ord="'+order+'"]').slideDown(700);}
  
})

$('.studio ul li img').click(function(){
    $(this).addClass('select').parent().siblings().children().removeClass('select');
    $('.sh').hide().attr('src',$(this).attr('src')).fadeIn(400);
})
var fromm;
$("i:not('.cl')").click(function(){
    fromm='';
    if($(this).data('par')=='nd'){
        $('.menu').slideUp(700);
    $('#'+$(this).data('atach')).slideDown(1500)
   fromm='menu';
    }
    else{
        $('.mainmenu').slideUp(700);
        $('#'+$(this).data('atach')).slideDown(1500) 
    }

})   
 


var rez='';
var type='';
var rez=0;
var tex='';

$('.calc ul li').click(function(){
$('.calc input').val($('.calc input').val()+$(this).text());

var num =parseInt($(this).text());
if(tex==''){
rez=num;
}
tex='d';
if(type=='+'){
rez=rez+num;
type='';
}
if(type=='-'){
    rez=rez-num;
    type='';
    }
    if(type=='*'){
        rez=rez*num;
        type='';
        }
        if(type=='/'){
            rez=rez/num;
            type='';
            }
if($(this).text()=='+'){
    type='+';
}
if($(this).text()=='-'){
    type='-';
}
if($(this).text()=='*'){
    type='*';
}
if($(this).text()=='/'){
    type='/';
}
if($(this).text()=='='){
    $('.calc input').val(rez);
}
if($(this).text()=='clear'){
    type='';
    rez=0;
    tex='';
    $('.calc input').val('');

}})
$('.tdlist button').click(function(){
    if($('.tdlist input').val()!=''){
$('.tdlist ul').append(" <li><span>"+$('.tdlist input').val()+"</span></li>");
$('.tdlist input').val('');
}})
$('.tdlist').on('click','li',function(){
    $(this).css('text-decoration','line-through').delay(500).fadeOut(1000,function(){
    $(this).remove();
    });
});
$('.fa-plus').click(function(){
$('.inter').hide();
$('.add').show(1000);

})
$('.add button').click(function(){
    $('.contacts ul ').append('<li class="created"><span>'+$('.add input:first-of-type').val()+ ' '+ $('.add div:nth-child(2) input').val()+'</span><span>'+$('.add div:last-of-type input').val() +'</span></li>')
    if($(this).has('created')){
    $('.created').append('<i class="fa fa-window-minimize" aria-hidden="true"></i>')
    $('.created').removeClass('created');}
    $('.add input').val('');
    $('.add').hide();
    $('.inter').show(1000);})


   $('ul').on('click','.fa-window-minimize',function(){
       $(this).parent().hide(1000);
   })
   $('.fa-search').click(function(){
     console.log($('.inter input').val())
     $(".inter ul li:not( :contains("+$('.inter input').val()+"))") .hide();
   })



   var d = new Date();
   var zone='';
   if(d.getHours()>12)
   zone='pm';
   else 
   zone='am'
   document.getElementById("demo").innerHTML = d.getHours()+':'+d.getMinutes() +' '+zone;






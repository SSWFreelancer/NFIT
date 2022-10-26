AOS.init();

$(document).ready(function () {
   (function (){
      $(window).scroll(function (event) {
           var st = $(this).scrollTop();
           if(st > 0){
               $('.header').addClass('scroll');
           }
           else{
               $('.header').removeClass('scroll');
           }
       });    
   })();   
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .header__bottom').toggleClass('active');
      $('.header').addClass('scroll');
      $('body').toggleClass('lock');
      if(!$('.header__burger').hasClass('active')){
         $('.header').removeClass('scroll');
      }
   });
   $('.menu__link').click(function (event) {
      $('.header__burger, .menu, .header__bottom').removeClass('active');
       $('body').removeClass('lock');
       $('.header').removeClass('scroll');
   }); 
   $('.menu__item:last-child .menu__link').click(function (event) {
      $('.header__burger, .menu, .header__bottom').addClass('active');
       $('body').addClass('lock');
       $('.header').addClass('scroll');
   });    
    $('.menu__item').mouseenter(function (event) {
      $(this).addClass('hover');
   });  
   $('.menu__item').mouseleave(function (event) {  
    $(this).removeClass('hover');
   });
   $('.menu__link').click(function (event) {  
    if ($(window).width() <= '991'){
      $(this).next('ul').slideToggle();
      $(this).toggleClass('active');
    }
   }); 
   var leg=$('.iframe').attr("src");
    $('.video__play').click(function (event) {
       $('.popup').addClass('open');
       $('.iframe').attr("src",leg);
    });
   $('.tokens__address img, .header__contact img').click(function (event) {
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("copy");
        $(this).parent().addClass('active');
         setTimeout(function(){
             $('.tokens__address p').removeClass('active');
              $('.header__contact p').removeClass('active');
         },3000);        
    });       
    $('.popup__body span').click(function (event) {
       $('.popup').removeClass('open');
        $('.iframe').attr("src","");
    }); 

    $('.popup__body p').click(function (event) {
      $('.popup').removeClass('open');
      $('.iframe').attr("src","");
    });   
   $('.header__checkbox').on('change', function() {
      $('body, .button, .header__top, .header__bottom, .header__burger, .union, .main, .sell, .title, .burn, .road, .tokens, .team, .partners, .join, .early, .footer').toggleClass('black');
          if (!$(".main").hasClass('black')) {
              $(".header__contact img").attr('src','img/header/copy.svg');
              $(".header__logo img").attr('src','img/header/logo.svg');  
              $(".to-up img").attr('src','img/main/arrow.svg');  
              $(".main__image img:last-child").attr('src','img/main/dots.svg');  
              $(".sell__image img").attr('src','img/sell/tshirt.png');
              $(".road__body>img").attr('src','img/road/road.png');
              $(".tokens__image-desktop").attr('src','img/tokens/diagram.png');
              $(".tokens__image-mobile").attr('src','img/tokens/diagram-mobile.png');
              $(".partners__images a:nth-child(1) img").attr('src','img/partners/1.svg');
              $(".partners__images a:nth-child(2) img").attr('src','img/partners/2.svg');
              $(".partners__images a:nth-child(3) img").attr('src','img/partners/3.svg');
              $(".partners__images a:nth-child(4) img").attr('src','img/partners/4.svg');
              $(".partners__images a:nth-child(5) img").attr('src','img/partners/5.svg');
              $(".partners__images a:nth-child(6) img").attr('src','img/partners/6.svg');
              $(".partners__images a:nth-child(7) img").attr('src','img/partners/7.svg');
              $(".partners__images a:nth-child(8) img").attr('src','img/partners/8.svg');
              $(".partners__images a:nth-child(9) img").attr('src','img/partners/9.svg');
              $(".partners__images a:nth-child(10) img").attr('src','img/partners/10.svg');
              $(".partners__images a:nth-child(11) img").attr('src','img/partners/11.svg');
              $(".partners__images a:nth-child(12) img").attr('src','img/partners/12.svg');
              $(".partners__images a:nth-child(14) img").attr('src','img/partners/14.svg');  
              $(".join__dec").attr('src','img//join/dec.png');      
              $(".join__image a:nth-child(3) img").attr('src','img/join/telegram.png');  
              $(".join__image a:nth-child(4) img").attr('src','img/join/Discord.png');    
              $(".join__image a:nth-child(5) img").attr('src','img/join/Facebook.png'); 
              $(".join__image a:nth-child(6) img").attr('src','img/join/Youtube.png');
              $(".join__image a:nth-child(7) img").attr('src','img/join/Twitter.png'); 
              $(".join__image a:nth-child(8) img").attr('src','img/join/Instagram.png');   
              $(".main__image>img").attr('src','img/main/photo.png');   
              $(".early__image img").attr('src','img/early/1.png'); 

          } else  {
              $(".header__contact img").attr('src','img/header/copyw.svg');
              $(".header__logo img").attr('src','img/header/logow.svg');  
              $(".to-up img").attr('src','img/main/arroww.svg'); 
              $(".main__image img:last-child").attr('src','img/main/dotsw.svg');  
              $(".sell__image img").attr('src','img/sell/tshirtw.png');
              $(".road__body>img").attr('src','img/road/roadw.png');
              $(".tokens__image-desktop").attr('src','img/tokens/diagramw.png');
              $(".tokens__image-mobile").attr('src','img/tokens/diagram-mobilew.png');
              $(".partners__images a:nth-child(1) img").attr('src','img/partners/1w.svg');
              $(".partners__images a:nth-child(2) img").attr('src','img/partners/2w.svg');
              $(".partners__images a:nth-child(3) img").attr('src','img/partners/3w.svg');
              $(".partners__images a:nth-child(4) img").attr('src','img/partners/4w.svg');
              $(".partners__images a:nth-child(5) img").attr('src','img/partners/5w.svg');
              $(".partners__images a:nth-child(6) img").attr('src','img/partners/6w.svg');
              $(".partners__images a:nth-child(7) img").attr('src','img/partners/7w.svg');
              $(".partners__images a:nth-child(8) img").attr('src','img/partners/8w.svg');
              $(".partners__images a:nth-child(9) img").attr('src','img/partners/9w.svg');    
              $(".partners__images a:nth-child(10) img").attr('src','img/partners/10w.svg'); 
              $(".partners__images a:nth-child(11) img").attr('src','img/partners/11w.svg');
              $(".partners__images a:nth-child(12) img").attr('src','img/partners/12w.svg');
              $(".partners__images a:nth-child(14) img").attr('src','img/partners/14w.svg'); 
              $(".join__dec").attr('src','img//join/decw.png');
              $(".join__image a:nth-child(3) img").attr('src','img/join/telegramw.png');   
              $(".join__image a:nth-child(4) img").attr('src','img/join/Discordw.png');    
              $(".join__image a:nth-child(5) img").attr('src','img/join/Facebookw.png'); 
              $(".join__image a:nth-child(6) img").attr('src','img/join/Youtubew.png');
              $(".join__image a:nth-child(7) img").attr('src','img/join/Twitterw.png'); 
              $(".join__image a:nth-child(8) img").attr('src','img/join/Instagramw.png');  
              $(".main__image>img").attr('src','img/main/photow.png');    
              $(".early__image img").attr('src','img/early/1w.png');                     
          }      
   });     
});


$(document).ready(function () {

   $('.earn__cards').slick({
      slidesToShow: 4,
      responsive: [
         {
            breakpoint:1164,
            settings:{
               arrows: true,
               dots: false,
               adaptiveHeight: true,
               slidesToShow: 3,
               speed: 700,
               easing: 'ease-in',
               initialSlide: 2,
               infinite: true,
               draggable: true,
               swipe: true,
               touchThreshold: 5,
            }
         },
         {
            breakpoint:961,
            settings:{
               slidesToShow: 2,
            }            
         },
         {
            breakpoint:593,
            settings:{
               slidesToShow: 1.4,
               infinite:false,
            }            
         },
         {
            breakpoint:422,
            settings:{
               slidesToShow: 1,
               infinite:true,
            }            
         }         
      ],

      
   });

});



 var chartDom = document.getElementById('graphic__graph');
 var myChart = echarts.init(chartDom);
 var option;

 option = {
   title: {
     text: '',
   },
   // backgroundColor:'#000',
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'cross',
       label: {
         backgroundColor: '#6a7985'
       }
     }
   },
   legend: {
    top:'0',  
    textStyle:{
      color:'#000'
    },            
    data: ['Seed Round', 'Private Round', 'Public sale', 'Team', 'Development', 'Marketing', 'Token Liquidity', 'Advisors', 'Ecosystem Fund', 'Move 2 Earn', 'Reserve']
   },
   // toolbox: {
   //   feature: {
   //     saveAsImage: {}
   //   }
   // },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     containLabel: true,
   },

   xAxis: [
     {
      axisLabel: {
          textStyle: {
              color: '#000'
          }
      },      
       type: 'category',
       boundaryGap: false,     
       data: ['Day 0', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12', 'Month 13', 'Month 14', 'Month 15', 'Month 16', 'Month 17', 'Month 18', 'Month 19', 'Month 20', 'Month 21', 'Month 22', 'Month 23', 'Month 24', 'Month 25'] 
     }
   ],
   yAxis: [
     {
      axisLabel: {
          textStyle: {
              color: '#000'
          }
      },       
       type: 'value'
     }
   ],



   series: [
     {
       name: 'Seed Round',
       type: 'line',
       color: '#40C1D3',
       stack: 'Total',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data: [11500000, 17250000, 23000000, 28750000, 34500000, 40250000, 46000000, 51750000, 57500000, 63250000, 69000000, 74750000, 80500000, 86250000, 92000000, 97750000, 103500000, 109250000, 115000000, 115000000, 115000000, 115000000, 115000000, 115000000, 115000000, 115000000] 
     },
     {
       name: 'Private Round',
       type: 'line',
       stack: 'Total',
       color: '#ED4831',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data: [6000000, 9000000, 12000000, 12000000, 18000000, 18000000, 24000000, 24000000, 30000000, 30000000, 36000000, 39000000, 42000000, 45000000, 48000000, 51000000, 54000000, 57000000, 60000000, 60000000, 60000000, 60000000, 60000000, 60000000, 60000000, 60000000 ]
     },
     {
       name: 'Public sale',
       type: 'line',
       stack: 'Total',
       color: '#C1F1CE',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data: [4000000, 6000000, 8000000, 10000000, 12000000, 14000000, 16000000, 18000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000]
     },   
     {
       name: 'Team',
       type: 'line',
       stack: 'Total',
       color: '#ED7631',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 0, 0, 0, 0, 0, 12000000, 24000000, 36000000, 48000000, 60000000, 72000000, 84000000, 96000000, 108000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000]
     },   
     {
       name: 'Development',
       type: 'line',
       stack: 'Total',
       color: '#8A40D3',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 0, 0, 3000000, 6000000, 9000000, 12000000, 15000000, 18000000, 21000000, 24000000, 27000000, 30000000, 33000000, 36000000, 39000000, 42000000, 45000000, 48000000, 51000000, 54000000, 57000000, 60000000, 60000000, 60000000, 60000000]
     },         
     {
       name: 'Marketing',
       type: 'line',
       stack: 'Total',
       color: '#D340AA',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000, 14000000, 16000000, 18000000, 20000000, 22000000, 24000000, 26000000, 28000000, 30000000, 32000000, 34000000, 36000000, 38000000, 40000000, 40000000, 40000000, 40000000, 40000000, 40000000]
     },
     {
       name: 'Token Liquidity',
       type: 'line',
       stack: 'Total',
       color: '#4BED31',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[5000000, 14000000, 23000000, 32000000, 41000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000]
     },   
     {
       name: 'Advisors',
       type: 'line',
       stack: 'Total',
       color: '#4A86C5',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 0, 0, 0, 0, 0, 1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 11000000, 12000000, 13000000, 14000000, 15000000, 16000000, 17000000, 18000000, 19000000, 20000000]
     },      
     {
       name: 'Ecosystem Fund',
       type: 'line',
       stack: 'Total',
       color: '#5CA19C',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000, 110000000, 120000000, 130000000, 140000000, 150000000, 160000000, 170000000, 180000000, 190000000, 200000000, 210000000, 220000000, 230000000, 240000000, 250000000, 250000000]
     },
     {
       name: 'Move 2 Earn',
       type: 'line',
       stack: 'Total',
       color: '#FECF02',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000, 110000000, 120000000, 130000000, 140000000, 150000000, 160000000, 170000000, 180000000, 190000000, 200000000, 210000000, 220000000, 230000000, 240000000, 250000000, 250000000]
     },   
     {
       name: 'Reserve',
       type: 'line',
       stack: 'Total',
       color: '#75F7FF',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[750000, 1500000, 2250000, 3000000, 3750000, 4500000, 5250000, 6000000, 6750000, 7500000, 8250000, 9000000, 9750000, 10500000, 11250000, 12000000, 12750000, 13500000, 14250000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000]
     },                                                                      
   ]
 };
 option1 = {
   title: {
     text: '',
   },
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'cross',
       label: {
         backgroundColor: '#6a7985'
       }
     }
   },
   legend: {
    top:'0',
    textStyle:{
      color:'white'
    },              
    data: ['Seed Round', 'Private Round', 'Public sale', 'Team', 'Development', 'Marketing', 'Token Liquidity', 'Advisors', 'Ecosystem Fund', 'Move 2 Earn', 'Reserve']
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     containLabel: true,
   },
   xAxis: [
     {
      axisLabel: {
          textStyle: {
              color: 'white'
          }
      },        
       type: 'category',
       boundaryGap: false,
       data: ['Day 0', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12', 'Month 13', 'Month 14', 'Month 15', 'Month 16', 'Month 17', 'Month 18', 'Month 19', 'Month 20', 'Month 21', 'Month 22', 'Month 23', 'Month 24', 'Month 25'] 
     }
   ],
   yAxis: [
     {
      axisLabel: {
          textStyle: {
              color: 'white'
          }
      },       
       type: 'value'
     }
   ],



   series: [
     {
       name: 'Seed Round',
       type: 'line',
       color: '#40C1D3',
       stack: 'Total',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data: [11500000, 17250000, 23000000, 28750000, 34500000, 40250000, 46000000, 51750000, 57500000, 63250000, 69000000, 74750000, 80500000, 86250000, 92000000, 97750000, 103500000, 109250000, 115000000, 115000000, 115000000, 115000000, 115000000, 115000000, 115000000, 115000000] 
     },
     {
       name: 'Private Round',
       type: 'line',
       stack: 'Total',
       color: '#ED4831',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data: [6000000, 9000000, 12000000, 12000000, 18000000, 18000000, 24000000, 24000000, 30000000, 30000000, 36000000, 39000000, 42000000, 45000000, 48000000, 51000000, 54000000, 57000000, 60000000, 60000000, 60000000, 60000000, 60000000, 60000000, 60000000, 60000000 ]
     },
     {
       name: 'Public sale',
       type: 'line',
       stack: 'Total',
       color: '#C1F1CE',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data: [4000000, 6000000, 8000000, 10000000, 12000000, 14000000, 16000000, 18000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000]
     },   
     {
       name: 'Team',
       type: 'line',
       stack: 'Total',
       color: '#ED7631',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 0, 0, 0, 0, 0, 12000000, 24000000, 36000000, 48000000, 60000000, 72000000, 84000000, 96000000, 108000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000, 120000000]
     },   
     {
       name: 'Development',
       type: 'line',
       stack: 'Total',
       color: '#8A40D3',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 0, 0, 3000000, 6000000, 9000000, 12000000, 15000000, 18000000, 21000000, 24000000, 27000000, 30000000, 33000000, 36000000, 39000000, 42000000, 45000000, 48000000, 51000000, 54000000, 57000000, 60000000, 60000000, 60000000, 60000000]
     },         
     {
       name: 'Marketing',
       type: 'line',
       stack: 'Total',
       color: '#D340AA',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000, 14000000, 16000000, 18000000, 20000000, 22000000, 24000000, 26000000, 28000000, 30000000, 32000000, 34000000, 36000000, 38000000, 40000000, 40000000, 40000000, 40000000, 40000000, 40000000]
     },
     {
       name: 'Token Liquidity',
       type: 'line',
       stack: 'Total',
       color: '#4BED31',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[5000000, 14000000, 23000000, 32000000, 41000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000]
     },   
     {
       name: 'Advisors',
       type: 'line',
       stack: 'Total',
       color: '#4A86C5',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[0, 0, 0, 0, 0, 0, 1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 11000000, 12000000, 13000000, 14000000, 15000000, 16000000, 17000000, 18000000, 19000000, 20000000]
     },      
     {
       name: 'Ecosystem Fund',
       type: 'line',
       stack: 'Total',
       color: '#5CA19C',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000, 110000000, 120000000, 130000000, 140000000, 150000000, 160000000, 170000000, 180000000, 190000000, 200000000, 210000000, 220000000, 230000000, 240000000, 250000000, 250000000]
     },
     {
       name: 'Move 2 Earn',
       type: 'line',
       stack: 'Total',
       color: '#FECF02',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000, 110000000, 120000000, 130000000, 140000000, 150000000, 160000000, 170000000, 180000000, 190000000, 200000000, 210000000, 220000000, 230000000, 240000000, 250000000, 250000000]
     },   
     {
       name: 'Reserve',
       type: 'line',
       stack: 'Total',
       color: '#75F7FF',
       areaStyle: {},
       emphasis: {
         focus: 'series'
       },
       data:[750000, 1500000, 2250000, 3000000, 3750000, 4500000, 5250000, 6000000, 6750000, 7500000, 8250000, 9000000, 9750000, 10500000, 11250000, 12000000, 12750000, 13500000, 14250000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000]
     },                                                                      
   ]
 };
    option && myChart.setOption(option);
   $('.header__checkbox').on('change', function() {
        if (!$(".main").hasClass('black')) {
          option1 && myChart.setOption(option1);   
        }
        else{
          option && myChart.setOption(option);
        }
  });
         



function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
  if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
      console.log(json);
        
      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == "success") {
        // Если сообщение отправлено
        $('#mail').val('Your e-mail submited');
        $('.early__button').css('transform', 'scale(0)');
        $('.early__button').css('transition', 'all 0.3s ease 0s');
        $('.early__button').css('visibility', 'hidden');
        $('.early__form input').css('padding-right', '32px');
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {
  alert("Ошибка отправки запроса"); 
};
req.send(new FormData(event.target));
}
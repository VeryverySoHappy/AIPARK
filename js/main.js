$(document).ready(function(){
  var nav = $('#nav ul li');
  var cont = $('#contents > div');
  
  nav.click(function(e){
    // #nav ul li를 클릭하면
    e.preventDefault();
    var target=$(this);
    var index=target.index();

    // console.log(index)
    var section=cont.eq(index);
    var offset=section.offset().top;
    // 누른거의 탑의 값
    $('html,body').animate({
      scrollTop:offsest
    },600,'easeInOutExpo')
  })

  $(window).scroll(function(){
    var wScroll=$(this).scrollTop();
    // console.log(wScroll)
    for(var i=0; i<cont.length; i++){
      if(wScroll>=cont.eq(i).offset().top){
        // 첫번째 div, 두번째 div, 세번째 div...의 offset().top의 값보다 크거나 같으면
        nav.removeClass('active');
        nav.eq(i).addClass('active');
      }
    }

    // show넣다 뺏다 작업 start
    for(var i=0; i<cont.length; i++){
      // if(wScroll>=cont.eq(i).offset().top){
      // 이렇게까지만 해놓으면 '탑에 딱 붙어있는 순간'이라는 말
      // 윈도우창 끝이 페이지 끝에 붙었을 때 
      if(wScroll>=cont.eq(i).offset().top - $(window).height()/3){
        // 페이지의 1/3이 보였을 때
        cont.eq(i).addClass('show')
      }else{
        cont.eq(i).removeClass('show')
      }
    }
    // show넣다 뺏다 작업 end
  })


  // sound btn start
  
  // sound btn end
})
(function(){
  // Форма заявки собирает сообщение для WhatsApp
  var form=document.getElementById('req'),send=document.getElementById('req-send');
  if(form&&send){
    var base=send.href.split('?')[0],update=function(){
      var picked=[].map.call(form.querySelectorAll('input:checked'),function(i){return i.value});
      var text=picked.length?'Здравствуйте! Нужно: '+picked.join(', ')+'. Прикладываю фото.':'Здравствуйте! Хочу записаться на кузовной ремонт';
      send.href=base+'?text='+encodeURIComponent(text);
    };
    form.addEventListener('submit',function(e){e.preventDefault()});
    form.addEventListener('change',update);
    update();
  }
  // Меню закрывается после выбора пункта
  var menu=document.querySelector('.menu');
  if(menu){
    menu.addEventListener('click',function(e){if(e.target.closest('a'))menu.removeAttribute('open')});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')menu.removeAttribute('open')});
    document.addEventListener('click',function(e){if(!menu.contains(e.target))menu.removeAttribute('open')});
  }
  // Цели счётчика: работают, только если счётчик подключён
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href]');
    if(!a||!window.ym||!window.METRIKA_ID)return;
    var h=a.getAttribute('href');
    if(h.indexOf('wa.me')>-1)window.ym(window.METRIKA_ID,'reachGoal','whatsapp');
    if(h.indexOf('tel:')===0)window.ym(window.METRIKA_ID,'reachGoal','phone');
  });
})();

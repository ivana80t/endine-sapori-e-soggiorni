
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.faq').forEach(function(group){
    const items=[...group.querySelectorAll('details')];
    items.forEach(function(item){
      item.addEventListener('toggle',function(){
        if(!item.open)return;
        items.forEach(function(other){if(other!==item)other.open=false;});
      });
    });
  });
});

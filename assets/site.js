(function(){
      var copy = {1:'Lower demand → test oxygen loading and retention.',2:'Baseline demand → characterize reversible release.',3:'Higher demand → test greater release as local pO₂ falls.'};
      var buttons = document.querySelectorAll('[data-demand]');
      var dots = document.querySelectorAll('.oxygen-dot');
      buttons.forEach(function(button){button.addEventListener('click',function(){
        var value = Number(button.getAttribute('data-demand'));
        buttons.forEach(function(b){b.setAttribute('aria-pressed',b===button?'true':'false');});
        dots.forEach(function(dot){dot.style.opacity = Number(dot.getAttribute('data-level'))<=value?'1':'.09';});
        document.getElementById('demand-copy').textContent = copy[value];
      });});
      dots.forEach(function(dot){dot.style.opacity=Number(dot.getAttribute('data-level'))<=2?'1':'.09';});
      document.querySelectorAll('[data-panel-target]').forEach(function(button){
        button.addEventListener('click',function(){
          var card = button.closest('.phase');
          var target = document.getElementById(button.getAttribute('data-panel-target'));
          var opening = target.hidden;
          card.querySelectorAll('.phase-panel').forEach(function(panel){panel.hidden=true;});
          card.querySelectorAll('[data-panel-target]').forEach(function(other){other.setAttribute('aria-expanded','false');});
          target.hidden = !opening;
          button.setAttribute('aria-expanded',opening?'true':'false');
        });
      });
    }());

// Joan Peramas - 17-03-2011 - http://pixelesycodigos.com 
var app = {  
// slide
  nav_main: function() {
		var v = 1,
				$total = $('.photo'),
				$body = $('body'),
				$loading = '<em id="loading">Cargando Imagen de fondo ...</em>',
				$count = $('#count');

		$count.html(v+' de '+$total.size());		
		$body.addClass($total.eq(v-1).attr('rel'));		
		if( $total.size() > 0  ){		

			var $next = $('#next_btn'),
				$prev = $('#prev_btn');
				
			$next.bind('click', function(e) {
				e.preventDefault();
				var self = $(this);	
				
				if( !self.hasClass('inactive')){
					v = v + 1; 
					
					if( v == 2){
						$prev.removeClass('inactive');
					}

					loadData();
					
					if ( $total.size() == v )
					{
						self.addClass('inactive');
					}
				
				}
				

			});
			
			$prev.bind('click', function(e) {
				e.preventDefault();			
				var self = $(this);

				if( !self.hasClass('inactive')){				
					v = v - 1; 	

					if( v > 1 ){
						$next.removeClass('inactive');
					}

					loadData();

					if ( v == 1 ){
						self.addClass('inactive');
					}
						
				}	
				
			});	

			function loadData(){
				$count.html(v+' de '+$total.size());
				$body.attr('class','').addClass($total.eq(v-1).attr('rel')).append($loading);
				$total.animate({'opacity': 0}, function(){
					$('#loading').remove();
					$total.addClass('hide');
					$total.eq(v-1).removeClass('hide').animate({'opacity': 1});
				});	
			}			
			
		}		

  }

};

$(function() {
  // init
  app.nav_main();
});


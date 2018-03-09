// JavaScript Document for Vintageo

//Countdown
$(function () {
	jQuery('#defaultCountdown').countdown({
	until: new Date(2018, 4 - 1, 9, 0, 0, 0), 
	format: 'DHMS',
	layout: '<div id="vals">'+
				                '<div id="d" class="numbers">{dnn}</div>'+
								'<div id="h_name" class="numbers">天 </div>'+
								'<div id="h" class="numbers">{hnn}</div>'+
								'<div id="h_name" class="numbers">小时 </div>'+
								'<div id="m" class="numbers">{mnn}</div>'+
								'<div id="m_name" class="numbers">分钟</div>'+
								'<div id="s" class="numbers">{snn}</div>'+
								'<div id="s_name" class="numbers">秒</div>'+
							    '</div>'
});
});

$(document).ready(function() {	
//Subscribe form
$(function() {
		var v = $("#subform").validate({
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					target: "#result_sub",
					clearForm: true
				});
			}
		});
		
});
});

$(document).ready(function(){
	$(".btn").on('click', function(){

		$(this).hide();

		$('.individual-payouts').append(
		'<li>Paid out $110 for John Doe.</li>' +
		'<li>Paid out $0 for Jane Doe.</li>' +
		'<li>Paid out $31000 for Joe Johnson.</li>' +
		'<li>Paid out $1300 for Sharon Smith.</li>' +
		'<li>Paid out $385 for Steve Wright.</li>' +
		'<li>Paid out $400 for Walker Dalton.</li>' +
		'<li>Paid out $1200 for Myles Jeffery.</li>' +
		'<li>Paid out $0 for Brynn Kelvin.</li>' +
		'<li>Paid out $100 for Rene Arleen.</li>' +
		'<li>Paid out $1500 for Astor Quinn.</li>');

		$('h2').replaceWith("<h2>The total amount payed out equals $35995!</h2>");
	});
});

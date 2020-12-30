$(function () {
	$("#calculatebutton").click(calculations);
});
const result = $(".result");

const food = [
	{ name: "Hot Chocolate (1 cup)", Carbohydrates: 26, Calories: 208 },
	{ name: "Tea with Low fat milk (2%)", Carbohydrates: 12, Calories: 180 },
	{ name: "Yummy Pie (1 medium)", Carbohydrates: 21, Calories: 81 },
	{ name: "Delicious Delight (1 bowl)", Carbohydrates: 28, Calories: 114 },
	{ name: "Flavored Cake (1 slice)", Carbohydrates: 16, Calories: 65 },
	{ name: "Fruit Smoothie (1 cup)", Carbohydrates: 19, Calories: 77 },
	{ name: "Cheesy Lasagne (1 dish)", Carbohydrates: 53, Calories: 201 },
	{ name: "Desi Handi (1 bowl)", Carbohydrates: 11, Calories: 45 },
	{ name: "Desi Rice (1 dish", Carbohydrates: 12, Calories: 50 },
	{ name: "Desi Dessert (1 bowl)", Carbohydrates: 14, Calories: 61 },
];

const main = $(".main");
for (let i = 0; i < food.length; i++) {
	main.append(
		`<li class="list" calories="${food[i].Calories}" carbs="${food[i].Carbohydrates}"> ${food[i].name}  <span style="display:none"> ${food[i].Carbohydrates} or  ${food[i].Calories}</span> </li>`
	);
}
function calculations() {
	
	let calories=0,carbs=0;
	$('.add').each(function(){
			calories+=parseInt($(this).attr('calories'));
			carbs+=parseInt($(this).attr('carbs'));
		
	});
	$('#result').html('Calories:'+calories+' carbs:'+carbs)

}

var length = document.querySelectorAll(".list").length;

for (var i = 0; i < length; i++) {
	document.querySelectorAll(".list")[i].addEventListener("click", function () {
		$(this).toggleClass('add');
	});

}

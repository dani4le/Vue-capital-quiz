const quizApp = new Vue({
	el: '#quiz',
		data: {
		country: '',
		capital: '',
		answer: '',
		correct: false,
		feedback: '',
	},
	created: function(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true);
		xhr.responseType = 'json';
		xhr.onload = function() {
		  var status = xhr.status;
		  if (status === 200) {
			var item = xhr.response[Math.floor(Math.random() * xhr.response.length)];
			quizApp.country = item.name;
			quizApp.capital = item.capital;
			
		  } else {
			alert('incorrect countries URL');
		  }
		};
		xhr.send();
	},
	methods: {
	  check() {
		quizApp.correct = quizApp.answer.trim().toLowerCase() === quizApp.capital.toLowerCase();
		quizApp.feedback = quizApp.setFeedback;
		console.log(quizApp.feedback);
	  },
	},
	computed: {
	  setFeedback() {
		return quizApp.correct ? 'Good!' : "wrong, it's " + quizApp.capital + "...";
	  },
	},
});
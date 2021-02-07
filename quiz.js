var myQuestions = [
    {
        question: "What does WWW stands for?",
        answers: {
            a:  "World War Win",
            b:  "World Wide Web",
            c:  "Wonderful World of Windows",
            d:  "World Wide Woman",
        },
        correctAnswer: 'b'
    },
    {
        question: "Whose assassination caused World War One?",
        answers: {
            a: "Archduke Franz Ferdinand",
            b: "George V",
            c: "Tsar Nicholas II",
            d: "Kaiser Wilhelm II",
        },
        correctAnswer: 'a'
    },
    {
        question: "Who founded Mongol Empire",
        answers: {
            a: "Kublai Khan",
            b: "Eogedei Khan",
            c: "Guyuk Khan",
            d: "Genghis Khan",
        },
        correctAnswer: 'd'
    },
    {
        question: "Which empire from the following is the oldest?",
        answers: {
            a: "Roman Empire",
            b: "Greek Empire",
            c: "Egyptian Empire",
            d: "British Empire",
        },
        correctAnswer: 'c'
    },
    {
        question: "Constantin Fahlberg is known for inventing which of these?",
        answers: {
            a: "Microwave",
            b: "Saccharin",
            c: "Microscope",
            d: "Mineral Acids",
        },
        correctAnswer: 'b'
    },
    {
        question: "Who invented Atomic Bomb?",
        answers: {
            a: "Robert Oppenheimer",
            b: "Albert Einstein",
            c: "Homi J. Bhabha",
            d: "Fritz Strassmann",
        },
        correctAnswer: 'a'
    },
    {
        question: "When Coronavirus started?",
        answers: {
            a: "December 2019",
            b: "January 2020",
            c: "March 2020",
            d: "April 2020",
        },
        correctAnswer: 'a'
    },
    {
        question: "Who is CEO of Microsoft Corporation?",
        answers: {
            a: "Sundar Pichai",
            b: "Satya Nadella",
            c: "Ajaypal Singh Bangra",
            d: "None of These",
        },
        correctAnswer: 'b'
    },
    {
        question: "Who made Mughal Empire?",
        answers: {
            a: "Babur",
            b: "Ibrahim Lodi",
            c: "Akbar",
            d: "Humayun",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which city's former name is Madras?",
        answers: {
            a: "Chennai",
            b: "Delhi",
            c: "Mumbai",
            d: "Kolkata",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which war ended in 1991, which saw the fall of USSR?",
        answers: {
            a: "WW2",
            b: "Russian Civil War",
            c: "The October Revolution",
            d: "Cold War",
        },
        correctAnswer: 'd'
    },
    {
        question: "Which of these is the first computer in the world?",
        answers: {
            a: "UNIVAC",
            b: "EDSAC",
            c: "ENIAC",
            d: "BINAC",
        },
        correctAnswer: 'c'
    },
    {
        question: "Who founded Microsoft along with Bill Gates?",
        answers: {
            a: "Satya Nadella",
            b: "Steve Jobs",
            c: "Tim Cook",
            d: "Paul Allen",
        },
        correctAnswer: 'd'
    },
    {
        question: "Who is the richest man in the world as per 2021?",
        answers: {
            a: "Jeff Bezos",
            b: "Tim Cook",
            c: "Bill Gates",
            d: "Elon Musk",
        },
        correctAnswer: 'd'
    },
    {
        question: "Which company owns google",
        answers: {
            a: "Alphabet Inc.",
            b: "Apple",
            c: "Microsoft",
            d: "None of these",
        },
        correctAnswer: 'a'
    },
    {
        question: "Where was coffee first invented?",
        answers: {
            a: "Europe",
            b: "Arabia",
            c: "Africa",
            d: "East Asia",
        },
        correctAnswer: 'b'
    },
    {
        question: "Pashto & Dari are officially recognised languages in which country?",
        answers: {
            a: "Iran",
            b: "Israel",
            c: "Afghanistan",
            d: "Yemen",
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of these Hollywood personalities was born in modern day Darjeeling?",
        answers: {
            a: "Vivien Leigh",
            b: "Paulette Goddard",
            c: "James Stewart",
            d: "Oliver Hardy",
        },
        correctAnswer: 'a'
    },
    {
        question: "In which country you will find cities like Peshawar, Karachi, & Lahore?",
        answers: {
            a: "Pakistan",
            b: "Turkey",
            c: "India",
            d: "Iraq",
        },
        correctAnswer: 'a'
    },
    {
        question: "What was the original nationality of Khan Abdul Ghaffar Khan?",
        answers: {
            a: "Afghani",
            b: "Persian",
            c: "Egyptian",
            d: "Arabian",
        },
        correctAnswer: 'a'
    },
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = '#3cca3c';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}
const questions = [
	{
		id: 1,
		question: "What is the capital of France?",
		options: ["London", "Berlin", "Paris", "Madrid"],
		correct: "Paris",
	},
	{
		id: 2,
		question: "Which planet is known as the Red Planet?",
		options: ["Mars", "Venus", "Jupiter", "Saturn"],
		correct: "Mars",
	},
	{
		id: 3,
		question: "Who wrote 'Hamlet'?",
		options: [
			"Jane Austen",
			"Charles Dickens",
			"Leo Tolstoy",
			"William Shakespeare",
		],
		correct: "William Shakespeare",
	},
	{
		id: 4,
		question: "Which of these is a mammal?",
		options: ["Snake", "Lion", "Crocodile", "Turtle"],
		correct: "Lion",
	},
	{
		id: 5,
		question: "What is the chemical symbol for water?",
		options: ["CO2", "NaCl", "O2", "H2O"],
		correct: "H2O",
	},
	{
		id: 6,
		question: "Who painted the Mona Lisa?",
		options: [
			"Pablo Picasso",
			"Vincent van Gogh",
			"Leonardo da Vinci",
			"Michelangelo",
		],
		correct: "Leonardo da Vinci",
	},
	{
		id: 7,
		question: "Which country is known as the Land of the Rising Sun?",
		options: ["China", "Japan", "India", "South Korea"],
		correct: "Japan",
	},
	{
		id: 8,
		question: "Who discovered penicillin?",
		options: [
			"Louis Pasteur",
			"Marie Curie",
			"Isaac Newton",
			"Alexander Fleming",
		],
		correct: "Alexander Fleming",
	},
	{
		id: 9,
		question: "Which city hosted the 2016 Summer Olympics?",
		options: ["Tokyo", "Rio de Janeiro", "London", "Sydney"],
		correct: "Rio de Janeiro",
	},
	{
		id: 10,
		question: "Who wrote 'The Great Gatsby'?",
		options: [
			"Ernest Hemingway",
			"Mark Twain",
			"Charles Dickens",
			"F. Scott Fitzgerald",
		],
		correct: "F. Scott Fitzgerald",
	},
];

localStorage.setItem("Questions", JSON.stringify(questions));

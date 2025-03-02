const ktBank = [
    {
        original: "They say the storm caused the delay.",
        transformed: "The delay ________ the storm.",
        keyword: "SAID",
        answers: ["is said to have been caused by", "was said to have caused"]
    },
    {
        original: "I last saw David five years ago.",
        transformed: "I ________ David five years.",
        keyword: "SEEN",
        answers: ["haven't seen", "have not seen"]
    },
    {
        original: "We couldn't go out because of the heavy rain.",
        transformed: "The heavy rain ________ go out.",
        keyword: "PREVENTED",
        answers: ["prevented us from going", "prevented us going"]
    },
    {
        original: "She started working here three months ago.",
        transformed: "She ________ here for three months.",
        keyword: "BEEN",
        answers: ["has been working", "'s been working"]
    },
    {
        original: "This is the best pizza I've ever eaten!",
        transformed: "I've ________ pizza before!",
        keyword: "NEVER",
        answers: ["never eaten such a good", "never had a better"]
    },
    {
        original: "You should take a jacket in case it gets cold.",
        transformed: "You should take a jacket ________ cold.",
        keyword: "MIGHT",
        answers: ["in case it might get", "because it might get"]
    },
    {
        original: "The test was so difficult that nobody finished it.",
        transformed: "It was ________ nobody finished it.",
        keyword: "SUCH",
        answers: ["such a difficult test that"]
    },
    {
        original: "I'll help you if you promise to be careful.",
        transformed: "I'll help you ________ promise to be careful.",
        keyword: "LONG",
        answers: ["as long as you"]
    },
    {
        original: "They cancelled the match due to bad weather.",
        transformed: "The match ________ bad weather.",
        keyword: "BECAUSE",
        answers: ["was cancelled because of"]
    },
    {
        original: "This is the first time I've visited Paris.",
        transformed: "I ________ Paris before.",
        keyword: "NEVER",
        answers: ["have never visited"]
    },
    {
        original: "I think you should apologize to your sister.",
        transformed: "If I ________ apologize to your sister.",
        keyword: "WERE",
        answers: ["were you, I would"]
    },
    {
        original: "The car was too expensive for me to buy.",
        transformed: "The car wasn't ________ buy.",
        keyword: "ENOUGH",
        answers: ["cheap enough for me to"]
    },
    {
        original: "They're installing new software on all computers.",
        transformed: "All computers ________ new software.",
        keyword: "HAVING",
        answers: ["are having installed"]
    },
    {
        original: "We arrived late because there was heavy traffic.",
        transformed: "We wouldn't have arrived late ________ heavy traffic.",
        keyword: "IF",
        answers: ["if there hadn't been"]
    },
    {
        original: "Someone should check these figures immediately.",
        transformed: "These figures ________ immediately.",
        keyword: "CHECKED",
        answers: ["should be checked"]
    },
    {
        original: "It's possible that John forgot about the meeting.",
        transformed: "John ________ about the meeting.",
        keyword: "MIGHT",
        answers: ["might have forgotten"]
    },
    {
        original: "I regret not studying harder for the exam.",
        transformed: "I wish ________ harder for the exam.",
        keyword: "HAD",
        answers: ["I had studied"]
    },
    {
        original: "The teacher let us leave early.",
        transformed: "We ________ leave early.",
        keyword: "ALLOWED",
        answers: ["were allowed to"]
    },
    {
        original: "It's been ages since I last went to the cinema.",
        transformed: "I ________ to the cinema for ages.",
        keyword: "NOT",
        answers: ["haven't been"]
    },
    {
        original: "They're demolishing the old factory next week.",
        transformed: "The old factory ________ next week.",
        keyword: "BEING",
        answers: ["is being demolished"]
    },
    {
        original: "You can borrow my car but you must fill the tank.",
        transformed: "I'll let ________ you fill the tank.",
        keyword: "AS",
        answers: ["you borrow my car as long as"]
    },
    {
        original: "The book was so interesting that I read it in one day.",
        transformed: "It was ________ I read it in one day.",
        keyword: "SUCH",
        answers: ["such an interesting book that"]
    },
    {
        original: "I didn't recognize you with your new haircut!",
        transformed: "You ________ your new haircut!",
        keyword: "WOULD",
        answers: ["wouldn't have recognized me with"]
    },
    {
        original: "We've been waiting for over an hour.",
        transformed: "We ________ over an hour ago.",
        keyword: "SHOULD",
        answers: ["should have been here"]
    },
    {
        original: "It's forbidden to park here after 6 PM.",
        transformed: "You ________ here after 6 PM.",
        keyword: "MUST",
        answers: ["must not park", "mustn't park"]
    },
    {
        original: "The test results will be announced tomorrow.",
        transformed: "They ________ the test results tomorrow.",
        keyword: "ANNOUNCING",
        answers: ["will be announcing"]
    },
    {
        original: "I prefer cycling to work rather than driving.",
        transformed: "I ________ cycle to work than drive.",
        keyword: "WOULD",
        answers: ["would rather"]
    },
    {
        original: "The restaurant was fully booked so we went elsewhere.",
        transformed: "If the restaurant ________ fully booked, we wouldn't have gone elsewhere.",
        keyword: "NOT",
        answers: ["hadn't been"]
    },
    {
        original: "They say the new stadium will be completed by June.",
        transformed: "The new stadium ________ completed by June.",
        keyword: "SAID",
        answers: ["is said to be"]
    },
    {
        original: "I didn't have time to finish the report.",
        transformed: "I ________ the report if I'd had more time.",
        keyword: "HAVE",
        answers: ["would have finished"]
    },
    {
        original: "It's possible that we'll need to stay late.",
        transformed: "We ________ stay late.",
        keyword: "MIGHT",
        answers: ["might need to"]
    }
];

let currentQuestions = [];

function generateNewSet() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    currentQuestions = [];
    
    // Generate 6 questions (Cambridge Part 4 format)
    for(let i = 0; i < 6; i++) {
        const question = getRandomQuestion();
        currentQuestions.push(question);
        
        const questionHTML = `
            <div class="card question-card">
                <div class="card-body">
                    <div class="mb-3">
                        <p class="fw-bold">${i + 1}. ${question.original}</p>
                        <div class="d-flex align-items-center">
                            <span class="me-2">${question.transformed}</span>
                            <span class="keyword">(${question.keyword})</span>
                        </div>
                    </div>
                    <input type="text" 
                           class="form-control transformation-input" 
                           data-index="${i}"
                           placeholder="Type your transformation">
                    <div class="feedback mt-2" data-index="${i}"></div>
                </div>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', questionHTML);
    }
}

function getRandomQuestion() {
    const availableQuestions = ktBank.filter(q => 
        !currentQuestions.some(cq => cq.keyword === q.keyword)
    );
    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
}

function checkAllAnswers() {
    currentQuestions.forEach((question, index) => {
        const input = document.querySelector(`input[data-index="${index}"]`);
        const feedback = document.querySelector(`.feedback[data-index="${index}"]`);
        const userAnswer = input.value.trim().replace(/\s+/g, ' '); // Normalize spaces
        
        input.classList.remove('correct', 'incorrect');
        feedback.innerHTML = '';

        const isCorrect = question.answers.some(correct => 
            userAnswer.toLowerCase() === correct.toLowerCase()
        );

        if(isCorrect) {
            input.classList.add('correct');
            feedback.innerHTML = '<span class="text-success">✓ Correct!</span>';
        } else {
            input.classList.add('incorrect');
            feedback.innerHTML = `
                <span class="text-danger">
                    ✗ Possible answers:<br>
                    ${question.answers.join('<br>')}
                </span>
            `;
        }
    });
}

// Initial set
generateNewSet();

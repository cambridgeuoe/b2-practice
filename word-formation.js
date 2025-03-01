const wordBank = [
    {
        root: "CREATE",
        sentence: "The _____ of the new shopping mall took three years.",
        answers: ["creation"]
    },
    {
        root: "DECIDE",
        sentence: "We need to make a final _____ by tomorrow.",
        answers: ["decision"]
    },
    {
        root: "INVENT",
        sentence: "The _____ of the telephone revolutionized communication.",
        answers: ["invention"]
    },
    {
        root: "IMAGINE",
        sentence: "The story shows great _____ in its character design.",
        answers: ["imagination"]
    },
    {
        root: "RESPONSIBLE",
        sentence: "The manager takes full _____ for the project.",
        answers: ["responsibility"]
    },
    {
        root: "SUCCESS",
        sentence: "The team's tournament run was _____.",
        answers: ["successful"]
    },
    {
        root: "ARGUE",
        sentence: "There was a heated _____ about the new policy.",
        answers: ["argument"]
    },
    {
        root: "COMPARE",
        sentence: "There's no _____ between these two models.",
        answers: ["comparison"]
    },    
    {
        root: "ANALYZE",
        sentence: "The _____ of the data took several days.",
        answers: ["analysis"]
    },
    {
        root: "BEAUTY",
        sentence: "The _____ landscape took our breath away.",
        answers: ["beautiful"]
    }
  

  
];

let currentQuestions = [];

function generateNewSet() {
    // Clear previous state
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    currentQuestions = [];
    
    // Create 8 questions (duplicate if needed for demo)
    for(let i = 0; i < 8; i++) {
        const question = getRandomQuestion();
        currentQuestions.push(question);
        
        // Create question element
        const questionHTML = `
            <div class="card question-card">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-2">
                        <span class="text-muted me-3">${i + 1}.</span>
                        <p class="mb-0">${question.sentence.replace('_____', '<u class="gap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>')}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="root-word me-2">(${question.root})</span>
                        <input type="text" class="form-control answer-input" 
                               data-index="${i}" 
                               placeholder="Your answer">
                    </div>
                    <div class="feedback mt-2" data-index="${i}"></div>
                </div>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', questionHTML);
    }
}

function getRandomQuestion() {
    // In real implementation, ensure unique questions by managing used indexes
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}

function checkAllAnswers() {
    currentQuestions.forEach((question, index) => {
        const input = document.querySelector(`input[data-index="${index}"]`);
        const feedback = document.querySelector(`.feedback[data-index="${index}"]`);
        const userAnswer = input.value.trim().toLowerCase();
        
        input.classList.remove('correct', 'incorrect');
        feedback.innerHTML = '';

        if(question.answers.map(a => a.toLowerCase()).includes(userAnswer)) {
            input.classList.add('correct');
            feedback.innerHTML = '<span class="text-success">✓ Correct!</span>';
        } else {
            input.classList.add('incorrect');
            feedback.innerHTML = `
                <span class="text-danger">
                    ✗ Correct answer: ${question.answers[0]}
                </span>
            `;
        }
    });
}

// Initial set
generateNewSet();

function getRandomQuestion() {
    let availableQuestions = wordBank.filter(q => !currentQuestions.includes(q));
    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
}

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

    // Prefix Examples (un-, dis-, mis-, im-, etc.)
    {
        root: "ABLE",
        sentence: "She was _____ to attend the meeting due to prior commitments.",
        answers: ["unable"]
    },
    {
        root: "HONEST",
        sentence: "The politician's _____ conduct led to public outrage.",
        answers: ["dishonest"]
    },
    {
        root: "LEGAL",
        sentence: "The new regulations made previously acceptable practices _____.",
        answers: ["illegal"]
    },
    {
        root: "POSSIBLE",
        sentence: "It's _____ to finish this project without proper funding.",
        answers: ["impossible"]
    },
    {
        root: "BEHAVE",
        sentence: "The child's _____ at the restaurant was unacceptable.",
        answers: ["misbehavior"]
    },
    {
        root: "TRUST",
        sentence: "After the scandal, customers felt _____ toward the brand.",
        answers: ["distrust"]
    },
    {
        root: "LEAD",
        sentence: "The newspaper accused the government of _____ information.",
        answers: ["misleading"]
    },
    {
        root: "FORTUNATE",
        sentence: "_____ weather forced cancellation of the outdoor event.",
        answers: ["Unfortunate"]
    },
    {
        root: "EXPECT",
        sentence: "The _____ arrival of guests caused chaos in the kitchen.",
        answers: ["unexpected"]
    },
    {
        root: "AGREE",
        sentence: "There was widespread _____ with the proposed changes.",
        answers: ["disagreement"]
    },

    // Irregular Forms
    {
        root: "LONG",
        sentence: "The _____ of the tunnel surprised engineers.",
        answers: ["length"]
    },
    {
        root: "WIDE",
        sentence: "They're planning to _____ the road next year.",
        answers: ["widen"]
    },
    {
        root: "STRONG",
        sentence: "Regular exercise helps _____ your muscles.",
        answers: ["strengthen"]
    },
    {
        root: "BROAD",
        sentence: "The committee decided to _____ the scope of their research.",
        answers: ["broaden"]
    },
    {
        root: "DEEP",
        sentence: "The _____ of their friendship was evident to everyone.",
        answers: ["depth"]
    },
    {
        root: "SIMPLE",
        sentence: "The instructions need _____ for better understanding.",
        answers: ["simplification"]
    },
    {
        root: "HOT",
        sentence: "The _____ caused several forest fires last summer.",
        answers: ["heat"]
    },
    {
        root: "LIVE",
        sentence: "The concert _____ exceeded all expectations.",
        answers: ["livelihood"]
    },
    {
        root: "SICK",
        sentence: "Preventive measures reduced workplace _____.",
        answers: ["sickness"]
    },
    {
        root: "THINK",
        sentence: "This problem requires careful _____.",
        answers: ["thought"]
    },

    // Advanced Prefixes (re-, pre-, over-)
    {
        root: "APPROVE",
        sentence: "The committee voted to _____ the revised proposal.",
        answers: ["reapprove"]
    },
    {
        root: "CLEAR",
        sentence: "Meteorologists _____ the storm warning this morning.",
        answers: ["precleared"]
    },
    {
        root: "COMFORT",
        sentence: "The hotel's _____ beds led to negative reviews.",
        answers: ["uncomfortable"]
    },
    {
        root: "CONNECT",
        sentence: "Technicians will _____ the power lines tomorrow.",
        answers: ["reconnect"]
    },
    {
        root: "COVER",
        sentence: "Journalists _____ the scandal despite official denials.",
        answers: ["uncovered"]
    },
    {
        root: "DIRECT",
        sentence: "The police officer _____ traffic to avoid the wreck.",
        answers: ["redirected"]
    },
    {
        root: "EMPLOYEE",
        sentence: "The factory _____ several hundred workers last year.",
        answers: ["employed"]
    },
    {
        root: "ESSENTIAL",
        sentence: "Many consider this step _____ for the sake of time.",
        answers: ["nonessential"]
    },
    {
        root: "FORMAL",
        sentence: "The wedding reception will have a/n _____ dress code.",
        answers: ["informal"]
    },
    {
        root: "HARM",
        sentence: "These chemicals are _____ to marine life.",
        answers: ["harmful"]
    }
];

  
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

// reading-part1.js
const readingPart1Bank = [
    {
        text: `The concept of remote work has (1)______ significant attention in recent years. While some companies initially (2)______ the idea, many have now embraced it as a viable option. One major (3)______ is the potential for reduced overhead costs. However, experts (4)______ out that isolation can still be an issue. Proper communication tools are (5)______ to maintaining team cohesion. Ultimately, the (6)______ towards flexible work arrangements appears (7)______, though challenges (8)______.`,
        gaps: {
            1: {
                correct: "gained",
                options: ["gained", "won", "earned", "achieved"]
            },
            2: {
                correct: "resisted",
                options: ["resisted", "opposed", "rejected", "denied"]
            },
            3: {
                correct: "advantage",
                options: ["advantage", "benefit", "profit", "gain"]
            },
            4: {
                correct: "point",
                options: ["point", "show", "indicate", "mark"]
            },
            5: {
                correct: "crucial",
                options: ["crucial", "important", "vital", "critical"]
            },
            6: {
                correct: "trend",
                options: ["trend", "tendency", "direction", "movement"]
            },
            7: {
                correct: "irreversible",
                options: ["irreversible", "permanent", "fixed", "stable"]
            },
            8: {
                correct: "persist",
                options: ["persist", "remain", "stay", "keep"]
            }
        }
    },
    {
        text: `Modern urban planning (1)______ heavily on sustainable development principles. City planners now (2)______ particular emphasis on green spaces and pedestrian zones. A (3)______ concern is reducing carbon emissions through improved public transport. Many cities have (4)______ up ambitious cycling infrastructure projects. However, (5)______ these efforts, traffic congestion continues to (6)______ a major challenge. The (7)______ between private and public transportation needs remains delicate. Most experts (8)______ that multimodal solutions are essential.`,
        gaps: {
            1: {
                correct: "relies",
                options: ["relies", "depends", "counts", "banks"]
            },
            2: {
                correct: "place",
                options: ["place", "put", "set", "lay"]
            },
            3: {
                correct: "key",
                options: ["key", "main", "central", "prime"]
            },
            4: {
                correct: "taken",
                options: ["taken", "set", "put", "brought"]
            },
            5: {
                correct: "despite",
                options: ["despite", "although", "however", "while"]
            },
            6: {
                correct: "pose",
                options: ["pose", "present", "offer", "show"]
            },
            7: {
                correct: "balance",
                options: ["balance", "equilibrium", "middle", "center"]
            },
            8: {
                correct: "argue",
                options: ["argue", "discuss", "claim", "state"]
            }
        }
    }
];

let currentTest;

function generateNewTest() {
    currentTest = readingPart1Bank[Math.floor(Math.random() * readingPart1Bank.length)];
    const container = document.getElementById('text-container');
    let textHtml = currentTest.text;
    
    // Replace gaps with dropdowns
    for(let i = 1; i <= 8; i++) {
        const gap = currentTest.gaps[i];
        const options = gap.options.map((opt, idx) => 
            `<option value="${opt}" ${opt === gap.correct ? 'class="correct-option"' : ''}>${String.fromCharCode(65 + idx)}. ${opt}</option>`
        ).join('');
        
        textHtml = textHtml.replace(
            `(${i})______`,
            `<select class="form-select cloze-gap" data-gap="${i}">${options}</select>`
        );
    }
    
    container.innerHTML = `<div class="lead">${textHtml}</div>`;
}

function checkAnswers() {
    const gaps = document.querySelectorAll('.cloze-gap');
    gaps.forEach(select => {
        const gapNumber = select.dataset.gap;
        const correctAnswer = currentTest.gaps[gapNumber].correct;
        const userAnswer = select.value;
        
        select.classList.remove('correct', 'incorrect');
        if(userAnswer === correctAnswer) {
            select.classList.add('correct');
        } else {
            select.classList.add('incorrect');
        }
    });
}

// Initial generation
generateNewTest();

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
    },
    {
        text: `The digital revolution has (1)______ how we consume media. Streaming platforms now (2)______ traditional TV viewing for many users. A key (3)______ is the instant access to global content. However, experts (4)______ concerns about data privacy issues. The (5)______ towards on-demand entertainment appears (6)______, though some older demographics still (7)______ to conventional methods. Industry analysts (8)______ this trend will accelerate.`,
        gaps: {
            1: { correct: "transformed", options: ["transformed", "changed", "altered", "modified"] },
            2: { correct: "replace", options: ["replace", "substitute", "exchange", "displace"] },
            3: { correct: "attraction", options: ["attraction", "appeal", "draw", "pull"] },
            4: { correct: "raise", options: ["raise", "lift", "elevate", "heighten"] },
            5: { correct: "shift", options: ["shift", "change", "move", "transition"] },
            6: { correct: "irreversible", options: ["irreversible", "permanent", "fixed", "set"] },
            7: { correct: "cling", options: ["cling", "stick", "hold", "adhere"] },
            8: { correct: "predict", options: ["predict", "forecast", "anticipate", "estimate"] }
        }
    },
    {
        text: `Sustainable fashion has (1)______ momentum in recent years. Consumers increasingly (2)______ for ethically produced clothing. A major (3)______ remains the higher cost of eco-friendly materials. Many brands now (4)______ transparency in their supply chains. The (5)______ between style and sustainability often (6)______ careful balancing. Despite progress, critics (7)______ that more radical changes are (8)______.`,
        gaps: {
            1: { correct: "gained", options: ["gained", "acquired", "obtained", "attained"] },
            2: { correct: "opt", options: ["opt", "choose", "select", "prefer"] },
            3: { correct: "hurdle", options: ["hurdle", "obstacle", "barrier", "challenge"] },
            4: { correct: "prioritize", options: ["prioritize", "emphasize", "focus", "stress"] },
            5: { correct: "balance", options: ["balance", "equilibrium", "middle", "center"] },
            6: { correct: "requires", options: ["requires", "needs", "demands", "necessitates"] },
            7: { correct: "argue", options: ["argue", "contend", "assert", "declare"] },
            8: { correct: "essential", options: ["essential", "crucial", "vital", "critical"] }
        }
    },
    // Additional templates (expand to 50)
    {
        text: `Remote healthcare services have (1)______ dramatically since 2020. Patients now (2)______ virtual consultations for routine check-ups. A significant (3)______ is maintaining the quality of diagnosis through screens. Technical glitches sometimes (4)______ unexpected complications. Nevertheless, advocates (5)______ to the convenience and accessibility benefits. The (6)______ towards telemedicine seems (7)______, though some practitioners (8)______ reservations about its limitations.`,
        gaps: {
            1: { correct: "expanded", options: ["expanded", "grown", "increased", "developed"] },
            2: { correct: "utilize", options: ["utilize", "use", "employ", "apply"] },
            3: { correct: "challenge", options: ["challenge", "difficulty", "problem", "issue"] },
            4: { correct: "create", options: ["create", "cause", "produce", "generate"] },
            5: { correct: "point", options: ["point", "refer", "allude", "direct"] },
            6: { correct: "transition", options: ["transition", "shift", "change", "movement"] },
            7: { correct: "inevitable", options: ["inevitable", "unavoidable", "certain", "inescapable"] },
            8: { correct: "express", options: ["express", "voice", "state", "share"] }
        }
    }
    // Continue this pattern...
];

// Expansion Method:
function generateTextTemplate(topic, verbs, nouns, adjectives) {
    return {
        text: `[${topic} introduction] (1)______ [${verbs[0]}]. [Development] (2)______ [${verbs[1]}]. 
        [Challenge] (3)______ [${nouns[0]}]. [Solution] (4)______ [${verbs[2]}]. 
        [Contrast] (5)______ [${adjectives[0]}]. [Conclusion] (6-8)______ [complex vocab].`,
        gaps: { /* Auto-generate gaps */ }
    };
}

    
];


let currentTest;

function generateNewTest() {
    currentTest = readingPart1Bank[Math.floor(Math.random() * readingPart1Bank.length)];
    const container = document.getElementById('text-container');
    let textHtml = currentTest.text;
    
    // Replace gaps with randomized dropdowns
    for(let i = 1; i <= 8; i++) {
        const gap = currentTest.gaps[i];
        
        // Create shuffled options with blank first
        const options = [gap.correct, ...gap.options.filter(o => o !== gap.correct)];
        const shuffledOptions = shuffleArray(options);
        
        const selectOptions = [
            '<option value="" disabled selected>Select...</option>',
            ...shuffledOptions.map((opt, idx) => 
                `<option value="${opt}">${String.fromCharCode(65 + idx)}. ${opt}</option>`
            )
        ].join('');
        
        textHtml = textHtml.replace(
            `(${i})______`,
            `<select class="form-select cloze-gap" data-gap="${i}">${selectOptions}</select>`
        );
    }
    
    container.innerHTML = `<div class="lead">${textHtml}</div>`;
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function checkAnswers() {
    const gaps = document.querySelectorAll('.cloze-gap');
    gaps.forEach(select => {
        const gapNumber = select.dataset.gap;
        const correctAnswer = currentTest.gaps[gapNumber].correct;
        const userAnswer = select.value;
        
        select.classList.remove('correct', 'incorrect');
        
        if(userAnswer === "") {
            select.classList.add('incorrect');
            return;
        }

        if(userAnswer === correctAnswer) {
            select.classList.add('correct');
        } else {
            select.classList.add('incorrect');
        }
    });
}

// Initial generation
generateNewTest();

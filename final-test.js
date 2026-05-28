// ============================================
// FINAL TEST — Pflege 1: Körperpflege
// 25 întrebări în 5 categorii (5 fiecare)
// 1. Vocabular Pflege (5)
// 2. Verbe trennbare + modale (5)
// 3. Sie formal + imperativ politicos (5)
// 4. Traducere RO → DE (5)
// 5. Recunoaștere structuri Pattern Pflege (5)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

const finalTestData = [
    // === 1. VOCABULAR PFLEGE (5) ===
    { id: 1, category: 'Vocabular', type: 'mc', question: 'Cum se numește „ligheanul" în germană?', options: ['das Waschbecken', 'die Waschschüssel', 'die Dusche', 'das Handtuch'], correctIndex: 1, correct: 'die Waschschüssel' },
    { id: 2, category: 'Vocabular', type: 'mc', question: 'Cum se numește „chiuveta" în germană?', options: ['die Waschschüssel', 'das Waschbecken', 'die Badewanne', 'das Becken'], correctIndex: 1, correct: 'das Waschbecken' },
    { id: 3, category: 'Vocabular', type: 'mc', question: '„crema de protecție" se traduce prin:', options: ['die Schutzcreme', 'die Hautschutzcreme', 'das Hautöl', 'die Wundcreme'], correctIndex: 1, correct: 'die Hautschutzcreme' },
    { id: 4, category: 'Vocabular', type: 'mc', question: 'Care e cuvântul pentru „partea de SUS a corpului"?', options: ['der Unterkörper', 'der Oberkörper', 'der Rückenkörper', 'der Hochkörper'], correctIndex: 1, correct: 'der Oberkörper' },
    { id: 5, category: 'Vocabular', type: 'mc', question: 'Care din articole e CORECT pentru „die Haare"?', options: ['singular masculin', 'plural', 'singular feminin', 'singular neutru'], correctIndex: 1, correct: 'plural (mereu — die Haare)' },

    // === 2. VERBE TRENNBARE + MODALE (5) ===
    { id: 6, category: 'Verbe', type: 'fill', question: 'Completează cu prefixul trennbar: „Ich spüle das Shampoo ____"', correct: 'aus', accept: ['aus'] },
    { id: 7, category: 'Verbe', type: 'fill', question: 'Completează cu prefixul trennbar: „Ich trockne Ihren Rücken ____"', correct: 'ab', accept: ['ab'] },
    { id: 8, category: 'Verbe', type: 'fill', question: 'Completează cu verbul modal: „____ ich Ihnen die Beine eincremen?" (ofertă)', correct: 'Soll', accept: ['soll'] },
    { id: 9, category: 'Verbe', type: 'fill', question: 'Completează cu verbul modal: „____ Sie sich selbst waschen?" (capacitate)', correct: 'Können', accept: ['koennen', 'können'] },
    { id: 10, category: 'Verbe', type: 'mc', question: 'Care e forma CORECTĂ a frazei?', options: ['Ich abdusche Sie jetzt.', 'Ich dusche Sie jetzt ab.', 'Ich dusche ab Sie jetzt.', 'Ich ab Sie dusche jetzt.'], correctIndex: 1, correct: 'Ich dusche Sie jetzt ab. (prefixul „ab" zboară la final)' },

    // === 3. SIE FORMAL + IMPERATIV (5) ===
    { id: 11, category: 'Sie formal', type: 'fill', question: 'Transformă în imperativ politicos: „Dreh dich auf die Seite." → „____ auf die Seite."', correct: 'Drehen Sie sich', accept: ['drehen sie sich'] },
    { id: 12, category: 'Sie formal', type: 'fill', question: 'Transformă în imperativ politicos: „Heb dein Bein." → „____ Ihr Bein."', correct: 'Heben Sie', accept: ['heben sie'] },
    { id: 13, category: 'Sie formal', type: 'mc', question: 'În Pflege, cu pacientul vorbești ÎNTOTDEAUNA cu:', options: ['du', 'Sie', 'ihr', 'depinde de vârstă'], correctIndex: 1, correct: 'Sie (formal, indiferent de vârstă)' },
    { id: 14, category: 'Sie formal', type: 'mc', question: 'Care e schema CORECTĂ a imperativului politicos?', options: ['Sie + verb infinitiv', 'Verb infinitiv + Sie', 'Verb conjugat + Sie', 'Sie + verb conjugat'], correctIndex: 1, correct: 'Verb infinitiv + Sie (ex: Drehen Sie sich)' },
    { id: 15, category: 'Sie formal', type: 'fill', question: 'Cum spui politicos „Aplecați-vă în față"? → „____ nach vorne."', correct: 'Beugen Sie sich', accept: ['beugen sie sich'] },

    // === 4. TRADUCERE RO → DE (5) ===
    { id: 16, category: 'Traducere', type: 'fill', question: '🇷🇴 „Vă ajut la spălat." → 🇩🇪 ?', correct: 'Ich helfe Ihnen beim Waschen.', accept: ['ich helfe ihnen beim waschen', 'ich helfe ihnen beim waschen.'] },
    { id: 17, category: 'Traducere', type: 'fill', question: '🇷🇴 „Vă spăl spatele." → 🇩🇪 ?', correct: 'Ich wasche Ihnen den Rücken.', accept: ['ich wasche ihnen den ruecken', 'ich wasche ihnen den rücken'] },
    { id: 18, category: 'Traducere', type: 'fill', question: '🇷🇴 „Aveți nevoie de ajutorul meu?" → 🇩🇪 ?', correct: 'Brauchen Sie meine Hilfe?', accept: ['brauchen sie meine hilfe', 'brauchen sie meine hilfe?'] },
    { id: 19, category: 'Traducere', type: 'fill', question: '🇷🇴 „Apa este destul de caldă?" → 🇩🇪 ?', correct: 'Ist das Wasser warm genug?', accept: ['ist das wasser warm genug', 'ist das wasser warm genug?'] },
    { id: 20, category: 'Traducere', type: 'fill', question: '🇷🇴 „Vă ajut la duș." → 🇩🇪 ?', correct: 'Ich helfe Ihnen beim Duschen.', accept: ['ich helfe ihnen beim duschen', 'ich helfe ihnen beim duschen.'] },

    // === 5. RECUNOAȘTERE PATTERN PFLEGE (5) ===
    { id: 21, category: 'Pattern', type: 'mc', question: 'În fraza „Ich wasche IHNEN den Rücken" — ce CAZ e „Ihnen"?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], correctIndex: 2, correct: 'Dativ (Ihnen = persoană → vouă/dumneavoastră)' },
    { id: 22, category: 'Pattern', type: 'mc', question: 'În fraza „Ich wasche Ihnen DEN Rücken" — ce CAZ e „den Rücken"?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], correctIndex: 1, correct: 'Akkusativ (obiect direct, masculin → den)' },
    { id: 23, category: 'Pattern', type: 'mc', question: 'În fraza „Können Sie SICH selbst waschen?" — ce este „sich"?', options: ['articolul', 'pronume reflexiv', 'pronume posesiv', 'particulă'], correctIndex: 1, correct: 'pronume reflexiv (sich = se / pe sine)' },
    { id: 24, category: 'Pattern', type: 'fill', question: 'Completează fraza pe pattern: „Ich helfe Ihnen ____ Körperpflege." (la igiena → bei + Dat)', correct: 'bei der', accept: ['bei der'] },
    { id: 25, category: 'Pattern', type: 'mc', question: 'Care e diferența dintre „beim Waschen" și „bei der Körperpflege"?', options: ['beim = singur, bei der = plural', 'beim = bei+dem (n/m), bei der = feminin', 'sunt identice', 'beim e formal'], correctIndex: 1, correct: 'beim = bei+dem (substantiv masculin/neutru) · bei der = feminin (NU se contractă)' }
];

// ============================================
// BUILD FINAL TEST UI
// ============================================
function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;

    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Vocabular · Verbe · Sie formal · Traducere · Pattern</strong>. Termen estimat: 15-20 minute.</p>
            <p>📝 Diacriticele DE și RO sunt opționale — totul se acceptă.</p>
        </div>
        <div id="ft-questions">
    `;

    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;

        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }

        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });

    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>
    `;

    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;

        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }

        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });

    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;

    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Ești pregătită să intri în prima ta zi de Pflege!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine! Ești pregătită — mai recapitulează propozițiile cu greșeli.`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine. Reia teoria pe părți și încearcă din nou.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează. Reia teoria + flashcards apoi încearcă testul din nou.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();

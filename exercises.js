// ============================================
// EXERCISES.JS — Pflege 1: Körperpflege
// 7 exerciții (6 cu corectare + 1 Schreiben deschis)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// ============================================
// EX 1: Match propoziție DE → traducere RO (input scurt)
// ============================================
const ex1Data = [
    { id: 'a', de: 'Brauchen Sie meine Hilfe?', accept: ['aveti nevoie de ajutorul meu', 'aveti nevoie de ajutorul meu?'], correct: 'Aveți nevoie de ajutorul meu?' },
    { id: 'b', de: 'Ich helfe Ihnen bei der Körperpflege.', accept: ['va ajut la igiena corporala', 'va ajut la igiena'], correct: 'Vă ajut la igiena corporală.' },
    { id: 'c', de: 'Ist das Wasser warm genug?', accept: ['apa este destul de calda', 'apa e destul de calda', 'apa este suficient de calda'], correct: 'Apa este destul de caldă?' },
    { id: 'd', de: 'Können Sie sich selbst waschen?', accept: ['va puteti spala singur', 'va puteti spala singura', 'puteti sa va spalati singur'], correct: 'Vă puteți spăla singur?' },
    { id: 'e', de: 'Drehen Sie sich auf die Seite.', accept: ['intoarceti-va pe o parte', 'intoarceti va pe o parte', 'intoarceti-va pe parte'], correct: 'Întoarceți-vă pe o parte.' },
    { id: 'f', de: 'Ich wasche Ihnen den Rücken.', accept: ['va spal spatele', 'spal spatele'], correct: 'Vă spăl spatele.' },
    { id: 'g', de: 'Ich spüle das Shampoo aus.', accept: ['clatesc samponul', 'clatesc samponul.'], correct: 'Clătesc șamponul.' },
    { id: 'h', de: 'Ich trockne Ihnen die Haare.', accept: ['va usuc parul', 'usuc parul'], correct: 'Vă usuc părul.' },
    { id: 'i', de: 'Soll ich Ihnen die Beine eincremen?', accept: ['sa va dau cu crema pe picioare', 'sa va pun crema pe picioare'], correct: 'Să vă dau cu cremă pe picioare?' },
    { id: 'j', de: 'Ich helfe Ihnen beim Duschen.', accept: ['va ajut la dus', 'va ajut la dus.'], correct: 'Vă ajut la duș.' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎯 Scrie traducerea în română</strong> pentru fiecare propoziție germană. Diacriticele sunt opționale — totul merge.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea în română..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 2: Completează cu verbul TRENNBAR potrivit (prefix + bază)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Ich ____ Ihnen den Rücken ab. (a șterge cu prosop)', translation: 'Vă șterg spatele.', correct: 'trockne', accept: ['trockne'] },
    { id: 'b', sentence: 'Ich ____ das Shampoo aus. (a clăti)', translation: 'Clătesc șamponul.', correct: 'spüle', accept: ['spuele', 'spüle'] },
    { id: 'c', sentence: 'Ich werde Sie jetzt ____. (a clăti cu apă)', translation: 'Acum vă clătesc.', correct: 'abduschen', accept: ['abduschen'] },
    { id: 'd', sentence: 'Ich ____ Hautschutzcreme auf. (a aplica)', translation: 'Aplic cremă de protecție.', correct: 'trage', accept: ['trage'] },
    { id: 'e', sentence: 'Soll ich Ihnen die Beine ____? (a da cu cremă)', translation: 'Să vă dau cu cremă pe picioare?', correct: 'eincremen', accept: ['eincremen'] },
    { id: 'f', sentence: 'Wir können mit der Körperpflege ____. (a începe)', translation: 'Putem începe igiena.', correct: 'anfangen', accept: ['anfangen'] },
    { id: 'g', sentence: 'Ich helfe Ihnen beim ____ . (substantivul din anziehen — îmbrăcat)', translation: 'Vă ajut la îmbrăcat.', correct: 'Anziehen', accept: ['anziehen'] },
    { id: 'h', sentence: 'Ich ____ Ihnen die Haare. (a usca)', translation: 'Vă usuc părul.', correct: 'trockne', accept: ['trockne'] },
    { id: 'i', sentence: 'Drehen Sie sich auf die Seite, damit ich Ihnen den Rücken waschen ____. (modal: pot)', translation: 'Întoarceți-vă pe o parte, ca să vă pot spăla spatele.', correct: 'kann', accept: ['kann'] },
    { id: 'j', sentence: 'Den Unterkörper ____ ich im Bett. (a spăla — eu)', translation: 'Partea de jos o spăl eu în pat.', correct: 'wasche', accept: ['wasche'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>⚡ Verbe trennbare + verbe Pflege.</strong> Completează cu forma corectă. Atenție: prefixul „zboară" la final!</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 3: Audio dictat — Hedda spune, scrii
// ============================================
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'Ich helfe Ihnen.', accept: ['ich helfe ihnen', 'ich helfe ihnen.'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'Brauchen Sie meine Hilfe?', accept: ['brauchen sie meine hilfe', 'brauchen sie meine hilfe?'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'Ich wasche Ihnen den Rücken.', accept: ['ich wasche ihnen den ruecken', 'ich wasche ihnen den rücken'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'Ist das Wasser warm genug?', accept: ['ist das wasser warm genug', 'ist das wasser warm genug?'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'Ich spüle das Shampoo aus.', accept: ['ich spuele das shampoo aus', 'ich spüle das shampoo aus'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'Drehen Sie sich auf die Seite.', accept: ['drehen sie sich auf die seite', 'drehen sie sich auf die seite.'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'Ich trockne Ihnen die Haare.', accept: ['ich trockne ihnen die haare', 'ich trockne ihnen die haare.'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'Soll ich Ihnen die Beine eincremen?', accept: ['soll ich ihnen die beine eincremen', 'soll ich ihnen die beine eincremen?'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'Können Sie sich selbst waschen?', accept: ['koennen sie sich selbst waschen', 'können sie sich selbst waschen'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'Ich kämme Ihre Haare.', accept: ['ich kaemme ihre haare', 'ich kämme ihre haare'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat.</strong> Ascultă fraza Heddei și scrie-o exact așa cum o auzi. Punctuația finală e opțională.</div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie ce auzi:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie ce auzi..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 4: Du-form → Sie-form (imperativ politicos)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'du-Form: Dreh dich auf die Seite. → Sie-Form: ____ auf die Seite.', translation: 'Întoarceți-vă pe o parte.', correct: 'Drehen Sie sich', accept: ['drehen sie sich'] },
    { id: 'b', sentence: 'du-Form: Heb dein Bein. → Sie-Form: ____ Ihr Bein.', translation: 'Ridicați piciorul.', correct: 'Heben Sie', accept: ['heben sie'] },
    { id: 'c', sentence: 'du-Form: Beug dich nach vorne. → Sie-Form: ____ nach vorne.', translation: 'Aplecați-vă în față.', correct: 'Beugen Sie sich', accept: ['beugen sie sich'] },
    { id: 'd', sentence: 'du-Form: Versuch dich selbst zu waschen. → Sie-Form: ____ sich selbst zu waschen.', translation: 'Încercați să vă spălați singur.', correct: 'Versuchen Sie', accept: ['versuchen sie'] },
    { id: 'e', sentence: 'du-Form: Mach die Augen zu. → Sie-Form: ____ die Augen zu.', translation: 'Închideți ochii.', correct: 'Machen Sie', accept: ['machen sie'] },
    { id: 'f', sentence: 'du-Form: Dreh den Kopf nach rechts. → Sie-Form: ____ den Kopf nach rechts.', translation: 'Întoarceți capul spre dreapta.', correct: 'Drehen Sie', accept: ['drehen sie'] },
    { id: 'g', sentence: 'du-Form: Gib mir die Hand. → Sie-Form: ____ mir bitte die Hand.', translation: 'Dați-mi vă rog mâna.', correct: 'Geben Sie', accept: ['geben sie'] },
    { id: 'h', sentence: 'du-Form: Stell dein linkes Bein an. → Sie-Form: ____ Ihr linkes Bein an.', translation: 'Îndoiți piciorul stâng.', correct: 'Stellen Sie', accept: ['stellen sie'] },
    { id: 'i', sentence: 'du-Form: Sitz an der Bettkante. → Sie-Form: ____ an der Bettkante.', translation: 'Stați pe marginea patului.', correct: 'Sitzen Sie', accept: ['sitzen sie'] },
    { id: 'j', sentence: 'du-Form: Steh allein auf. → Sie-Form: ____ allein auf.', translation: 'Ridicați-vă singur.', correct: 'Stehen Sie', accept: ['stehen sie'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎩 Imperativ politicos cu Sie.</strong> Transformă forma cu „du" (informal) în forma politicoasă cu „Sie" (cu pacientul SIE întotdeauna). 💡 Pattern: <strong>Verb la infinitiv + Sie</strong>.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="Scrie forma cu Sie..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 5: Dialog Gap-Fill — completează replicile lipsă
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Andreea: Guten Morgen, Frau Müller! Wie ____ Sie geschlafen?', translation: 'Bună dimineața, Doamna Müller! Cum ați dormit?', correct: 'haben', accept: ['haben'] },
    { id: 'b', sentence: 'Andreea: ____ Sie meine Hilfe bei der Körperpflege?', translation: 'Aveți nevoie de ajutorul meu la igiena corporală?', correct: 'Brauchen', accept: ['brauchen'] },
    { id: 'c', sentence: 'Andreea: Ich bringe gleich die Waschschüssel ____ Zimmer.', translation: 'Aduc imediat ligheanul în cameră.', correct: 'ins', accept: ['ins', 'in das'] },
    { id: 'd', sentence: 'Andreea: ____ Sie sich selbst waschen oder brauchen Sie meine Hilfe?', translation: 'Vă puteți spăla singură sau aveți nevoie de ajutorul meu?', correct: 'Können', accept: ['koennen', 'können'] },
    { id: 'e', sentence: 'Andreea: Den Unterkörper wasche ich ____ Bett.', translation: 'Partea de jos o spăl eu în pat.', correct: 'im', accept: ['im', 'in dem'] },
    { id: 'f', sentence: 'Andreea: Drehen Sie sich bitte auf die ____, damit ich Ihnen den Rücken waschen kann.', translation: 'Întoarceți-vă vă rog pe o parte, ca să vă pot spăla spatele.', correct: 'Seite', accept: ['seite'] },
    { id: 'g', sentence: 'Frau Müller: Ist das Wasser warm ____?', translation: 'Apa este destul de caldă?', correct: 'genug', accept: ['genug'] },
    { id: 'h', sentence: 'Andreea: Ich werde Sie jetzt ____. (verb trennbar — a clăti cu apă)', translation: 'Acum vă clătesc.', correct: 'abduschen', accept: ['abduschen'] },
    { id: 'i', sentence: 'Andreea: Jetzt spüle ich das Shampoo ____. (prefixul trennbar)', translation: 'Acum clătesc șamponul.', correct: 'aus', accept: ['aus'] },
    { id: 'j', sentence: 'Andreea: ____ ich Ihnen die Beine eincremen?', translation: 'Să vă dau cu cremă pe picioare?', correct: 'Soll', accept: ['soll'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>💬 Dialog gap-fill.</strong> Completează replicile lipsă din dialogul Andreea ↔ Frau Müller.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 6: Traducere RO → DE
// ============================================
const ex6Data = [
    { id: 'a', ro: 'Vă ajut la spălat.', correct: 'Ich helfe Ihnen beim Waschen.', accept: ['ich helfe ihnen beim waschen', 'ich helfe ihnen beim waschen.'] },
    { id: 'b', ro: 'Aveți nevoie de ajutorul meu?', correct: 'Brauchen Sie meine Hilfe?', accept: ['brauchen sie meine hilfe', 'brauchen sie meine hilfe?'] },
    { id: 'c', ro: 'Vă spăl spatele.', correct: 'Ich wasche Ihnen den Rücken.', accept: ['ich wasche ihnen den ruecken', 'ich wasche ihnen den rücken'] },
    { id: 'd', ro: 'Apa este destul de caldă?', correct: 'Ist das Wasser warm genug?', accept: ['ist das wasser warm genug', 'ist das wasser warm genug?'] },
    { id: 'e', ro: 'Întoarceți-vă pe o parte.', correct: 'Drehen Sie sich auf die Seite.', accept: ['drehen sie sich auf die seite', 'drehen sie sich auf die seite.'] },
    { id: 'f', ro: 'Vă usuc părul.', correct: 'Ich trockne Ihnen die Haare.', accept: ['ich trockne ihnen die haare', 'ich trockne ihnen die haare.'] },
    { id: 'g', ro: 'Vă puteți spăla singur?', correct: 'Können Sie sich selbst waschen?', accept: ['koennen sie sich selbst waschen', 'können sie sich selbst waschen'] },
    { id: 'h', ro: 'Aplic cremă de protecție.', correct: 'Ich trage Hautschutzcreme auf.', accept: ['ich trage hautschutzcreme auf', 'ich trage hautschutzcreme auf.'] },
    { id: 'i', ro: 'Vă ajut la duș.', correct: 'Ich helfe Ihnen beim Duschen.', accept: ['ich helfe ihnen beim duschen', 'ich helfe ihnen beim duschen.'] },
    { id: 'j', ro: 'Putem începe igiena.', correct: 'Wir können mit der Körperpflege anfangen.', accept: ['wir koennen mit der koerperpflege anfangen', 'wir können mit der körperpflege anfangen'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> Scrie propoziția în germană. Diacriticele DE sunt opționale (ue=ü, oe=ö, ae=ä, ss=ß).</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 7: Schreiben deschis — Cum o ajuți pe Frau Müller dimineața
// ============================================
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere</h4>
                <p>Imaginează-ți că ești îngrijitoare la Frau Müller. <strong>Descrie în 5-7 propoziții cum decurge o rutină de dimineață cu ea.</strong></p>
                <p>Folosește minimum 3 propoziții din lecție.</p>

                <div class="schreiben-hints">
                    <h5>💡 Verbe utile</h5>
                    <p>helfen · waschen · trocknen · ausspülen · eincremen · auftragen · kämmen · anziehen · anfangen</p>
                    <h5>💡 Structuri utile</h5>
                    <p>Ich helfe Ihnen bei... · Ich wasche Ihnen den/die/das... · Soll ich...? · Brauchen Sie...?</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier auf Deutsch...
Beispiel:
Ich gehe um 7 Uhr ins Zimmer von Frau Müller.
Ich frage: 'Guten Morgen! Wie haben Sie geschlafen?'
Dann frage ich..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Ich gehe um 7 Uhr ins Zimmer von Frau Müller. Ich sage: „Guten Morgen, Frau Müller! Wie haben Sie geschlafen?" Dann frage ich: „Brauchen Sie meine Hilfe bei der Körperpflege?" Wenn sie ja sagt, bringe ich die Waschschüssel ins Zimmer. Ich wasche ihr den Rücken und die Füße. Danach trockne ich sie ab und trage Hautschutzcreme auf. Zum Schluss kämme ich ihr die Haare.</p>
                    <p class="model-translation"><em>Traducere:</em> Merg la ora 7 în camera Doamnei Müller. Spun: „Bună dimineața, Doamnă Müller! Cum ați dormit?" Apoi întreb: „Aveți nevoie de ajutorul meu la igiena corporală?" Dacă spune da, aduc ligheanul în cameră. Îi spăl spatele și picioarele. După aceea o șterg și aplic cremă de protecție. La sfârșit îi pieptăn părul.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/REPLACE_WITH_PFLEGE_FORM" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite-ți textul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24 de ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

// ============================================
// MAIN HANDLER — checkExercise(N) wrapper
// ============================================
function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) {
        const pct = Math.round((result.correct / result.total) * 100);
        let msg = `Scor: ${result.correct}/${result.total} (${pct}%)`;
        if (pct === 100) msg += ' — Perfect! 🎉';
        else if (pct >= 80) msg += ' — Foarte bine! 💪';
        else if (pct >= 60) msg += ' — Bine, mai exersează puțin. 🙂';
        else msg += ' — Reia teoria și încearcă din nou. 📚';
        scoreEl.textContent = msg;
        scoreEl.className = 'score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
    }
}

function resetExercise(n) {
    const containerId = `ex${n}-container`;
    const c = document.getElementById(containerId);
    if (!c) return;
    c.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    c.querySelectorAll('.feedback').forEach(fb => { fb.className = 'feedback'; fb.textContent = ''; });
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'score'; }
}

// ============================================
// INIT — build all exercises
// ============================================
buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();

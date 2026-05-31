// ============================================
// FLASHCARDS — Pflege 1: Körperpflege
// 48 carduri în 6 categorii (8 fiecare)
// ZERO ghilimele interne — folosesc CAPS pentru emfază
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const flashcardsData = [
    // === 1. VERBE CHEIE PFLEGE (8) ===
    { de: "waschen + Akk", ro: "🧼 a spăla · Ich wasche Ihnen den Rücken (Pflege CHEIE!)", audio: "audio/letters/waschen.mp3" },
    { de: "duschen / abduschen", ro: "🚿 a face duș / a clăti cu apă · TRENNBAR — Ich dusche Sie AB", audio: "audio/letters/duschen.mp3" },
    { de: "trocknen / abtrocknen", ro: "🍃 a usca / a șterge cu prosop · TRENNBAR — Ich trockne Sie AB", audio: "audio/letters/trocknen.mp3" },
    { de: "ausspülen", ro: "💧 a clăti (părul, gura) · TRENNBAR — Ich spüle das Shampoo AUS", audio: "audio/letters/ausspuelen.mp3" },
    { de: "eincremen", ro: "🧴 a da cu cremă · TRENNBAR — Ich creme Sie EIN", audio: "audio/letters/eincremen.mp3" },
    { de: "auftragen + Akk", ro: "🧴 a aplica (cremă) · TRENNBAR — Ich trage Creme AUF", audio: "audio/letters/auftragen.mp3" },
    { de: "kämmen + Akk", ro: "💇 a pieptăna · Ich kämme Ihre Haare (NU trennbar)", audio: "audio/letters/kaemmen.mp3" },
    { de: "rasieren + Akk", ro: "🪒 a rade · Können Sie sich selbst rasieren? (reflexiv)", audio: "audio/letters/rasieren.mp3" },

    // === 2. PĂRȚI ALE CORPULUI (8) ===
    { de: "der Rücken / den Rücken", ro: "💪 spatele (m) · Ich wasche Ihnen DEN Rücken", audio: "audio/letters/ruecken.mp3" },
    { de: "der Oberkörper / den Oberkörper", ro: "💪 partea de SUS (m) · Den Oberkörper können Sie selbst", audio: "audio/letters/oberkoerper.mp3" },
    { de: "der Unterkörper / den Unterkörper", ro: "🦵 partea de JOS (m) · Den Unterkörper wasche ich im Bett", audio: "audio/letters/unterkoerper.mp3" },
    { de: "der Kopf / den Kopf", ro: "🧠 capul (m) · Drehen Sie DEN Kopf nach rechts", audio: "audio/letters/kopf.mp3" },
    { de: "die Hand / die Hand", ro: "✋ mâna (f) · Geben Sie mir DIE Hand", audio: "audio/letters/hand.mp3" },
    { de: "die Haare (Pl)", ro: "💇 părul (Pl mereu!) · Ich kämme DIE Haare", audio: "audio/letters/haare.mp3" },
    { de: "die Füße (Pl)", ro: "🦶 picioarele/tălpile (Pl) · Ich wasche Ihnen DIE Füße", audio: "audio/letters/fuesse.mp3" },
    { de: "die Beine (Pl) / das Bein", ro: "🦵 picioarele (Pl) · Soll ich Ihnen DIE Beine eincremen?", audio: "audio/letters/beine.mp3" },

    // === 3. OBIECTE DE ÎNGRIJIRE (8) ===
    { de: "die Waschschüssel", ro: "🪣 ligheanul (f) · Ich bringe DIE Waschschüssel ins Zimmer", audio: "audio/letters/waschschuessel.mp3" },
    { de: "das Waschbecken", ro: "🚰 chiuveta (n) · Ich helfe Ihnen ZUM Waschbecken", audio: "audio/letters/waschbecken.mp3" },
    { de: "das Shampoo", ro: "🧴 șamponul (n) · Ich spüle DAS Shampoo aus", audio: "audio/letters/shampoo.mp3" },
    { de: "die Hautschutzcreme", ro: "🧴 crema de protecție (f) · Ich trage Hautschutzcreme auf", audio: "audio/letters/hautschutzcreme.mp3" },
    { de: "das Handtuch", ro: "🏖️ prosopul (n) · pentru abtrocknen", audio: "audio/letters/handtuch.mp3" },
    { de: "die Zahnbürste", ro: "🪥 periuța de dinți (f) · pentru Mundpflege", audio: "audio/letters/zahnbuerste.mp3" },
    { de: "der Rasierer", ro: "🪒 aparatul de ras (m) · sich rasieren cu...", audio: "audio/letters/rasierer.mp3" },
    { de: "der Kamm", ro: "💇 pieptenele (m) · pentru kämmen", audio: "audio/letters/kamm.mp3" },

    // === 4. FRAZE IMPERATIVE POLITICOASE (Sie-form) (8) ===
    { de: "Drehen Sie sich auf die Seite.", ro: "🎩 Întoarceți-vă pe o parte. · IMPERATIV cu Sie", audio: "audio/letters/drehen-sie.mp3" },
    { de: "Heben Sie das Bein.", ro: "🎩 Ridicați piciorul. · IMPERATIV cu Sie", audio: "audio/letters/heben-sie.mp3" },
    { de: "Beugen Sie sich nach vorne.", ro: "🎩 Aplecați-vă în față. · reflexiv sich + Sie", audio: "audio/letters/beugen-sie.mp3" },
    { de: "Versuchen Sie sich selbst zu waschen.", ro: "🎩 Încercați să vă spălați singur. · zu + Infinitiv", audio: "audio/letters/versuchen-sie.mp3" },
    { de: "Machen Sie die Augen zu.", ro: "🎩 Închideți ochii. · zumachen TRENNBAR", audio: "audio/letters/machen-sie-zu.mp3" },
    { de: "Drehen Sie den Kopf nach rechts.", ro: "🎩 Întoarceți capul spre dreapta. · direcție nach", audio: "audio/letters/drehen-kopf.mp3" },
    { de: "Geben Sie mir bitte die Hand.", ro: "🎩 Dați-mi vă rog mâna. · politicos bitte", audio: "audio/letters/geben-sie.mp3" },
    { de: "Stellen Sie Ihr Bein an.", ro: "🎩 Îndoiți piciorul. · anstellen TRENNBAR", audio: "audio/letters/stellen-sie-an.mp3" },

    // === 5. ÎNTREBĂRI POLITICOASE (8) ===
    { de: "Brauchen Sie meine Hilfe?", ro: "❓ Aveți nevoie de ajutorul meu? · modal brauchen", audio: "audio/letters/brauchen-hilfe.mp3" },
    { de: "Können Sie sich selbst waschen?", ro: "❓ Vă puteți spăla singur? · modal können + reflexiv", audio: "audio/letters/koennen-waschen.mp3" },
    { de: "Soll ich Ihnen die Beine eincremen?", ro: "❓ Să vă dau cu cremă pe picioare? · modal sollen (ofertă)", audio: "audio/letters/soll-eincremen.mp3" },
    { de: "Ist das Wasser warm genug?", ro: "❓ Apa este destul de caldă? · check temperatură", audio: "audio/letters/wasser-warm.mp3" },
    { de: "Wie haben Sie geschlafen?", ro: "❓ Cum ați dormit? · Perfekt + Sie · DESCHIDERE de zi", audio: "audio/letters/wie-geschlafen.mp3" },
    { de: "Brauchen Sie Hilfe beim Aufstehen?", ro: "❓ Aveți nevoie de ajutor să vă ridicați? · beim + substantiv", audio: "audio/letters/hilfe-aufstehen.mp3" },
    { de: "Können Sie sich selbst rasieren?", ro: "❓ Vă puteți rade singur? · modal + reflexiv (bărbierit)", audio: "audio/letters/koennen-rasieren.mp3" },
    { de: "Brauchen Sie noch ein Kissen oder eine Decke?", ro: "❓ Mai aveți nevoie de o pernă sau o pătură?", audio: "audio/letters/kissen-decke.mp3" },

    // === 6. PATTERN-uri multi-folos (8) ===
    { de: "Ich helfe Ihnen bei ___", ro: "🔑 Model Pflege #1 · Ich helfe Ihnen BEI DER Körperpflege", audio: "audio/letters/helfe-bei.mp3" },
    { de: "Ich helfe Ihnen beim ___", ro: "🔑 Model Pflege #2 · Ich helfe Ihnen BEIM Waschen/Duschen/Anziehen", audio: "audio/letters/helfe-beim.mp3" },
    { de: "Ich wasche Ihnen den/die/das ___", ro: "🔑 Model Pflege #3 · IHNEN (Dat) + Akk · den Rücken / die Haare / das Bein", audio: "audio/letters/wasche-ihnen.mp3" },
    { de: "Ich trockne Ihnen ___ ab", ro: "🔑 Model Pflege #4 · TRENNBAR abtrocknen · die Haare AB / den Rücken AB", audio: "audio/letters/trockne-ab.mp3" },
    { de: "Soll ich Ihnen ___ eincremen?", ro: "🔑 Model Pflege #5 · ofertă politicoasă · die Beine / den Rücken EINCREMEN", audio: "audio/letters/soll-eincremen-pattern.mp3" },
    { de: "Ich werde Sie jetzt ___", ro: "🔑 Model Pflege #6 · FUTUR cu werden · abduschen / waschen / anziehen", audio: "audio/letters/werde-sie.mp3" },
    { de: "Ich bringe gleich ___ ins Zimmer", ro: "🔑 Model Pflege #7 · ANUNȚ acțiune · die Waschschüssel / das Handtuch", audio: "audio/letters/bringe-gleich.mp3" },
    { de: "Damit ich Ihnen ___ waschen kann", ro: "🔑 Model Pflege #8 · SCOP cu damit · den Rücken / die Füße WASCHEN KANN", audio: "audio/letters/damit-waschen.mp3" }
];

// ============================================
// BUILD FLASHCARDS UI
// ============================================
let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Verbe · Părți corp · Obiecte · Imperativ · Întrebări · Modele.</p>
            <p>Apasă pe card pentru traducere · Apasă 🔊 pentru pronunție Hedda · Folosește săgețile pentru navigare.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');

    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) {
        audio.pause();
        audio.src = card.audio;
        audio.load();
    }

    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';

    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => { /* missing file - silent fail */ });
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();

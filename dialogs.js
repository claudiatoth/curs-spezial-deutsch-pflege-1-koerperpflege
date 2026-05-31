// ============================================
// DIALOGS.JS — Pflege 1: Dialoguri animate
// 2 dialoguri Andreea ↔ Frau Müller cu animație CSS + audio
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

// ============================================
// DIALOG 1: Guten Morgen, Frau Müller
// 12 replici, ~80 secunde estimate
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Guten Morgen, Frau Müller',
    context: 'Andreea intră în camera Doamnei Müller dimineața — începe rutina de igienă.',
    audioFile: 'audio/dialog-01.wav',
    totalDuration: 80,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 6, de: 'Guten Morgen, Frau Müller! Wie haben Sie geschlafen?', ro: 'Bună dimineața, Doamnă Müller! Cum ați dormit?' },
        { id: 2, speaker: 'fraumueller', start: 6,  duration: 5, de: 'Guten Morgen, Andreea. Gut, danke.', ro: 'Bună dimineața, Andreea. Bine, mulțumesc.' },
        { id: 3, speaker: 'andreea',     start: 11, duration: 7, de: 'Brauchen Sie meine Hilfe bei der Körperpflege?', ro: 'Aveți nevoie de ajutorul meu la igiena corporală?' },
        { id: 4, speaker: 'fraumueller', start: 18, duration: 4, de: 'Ja, bitte.', ro: 'Da, vă rog.' },
        { id: 5, speaker: 'andreea',     start: 22, duration: 7, de: 'Ich bringe gleich die Waschschüssel ins Zimmer.', ro: 'Aduc imediat ligheanul în cameră.' },
        { id: 6, speaker: 'andreea',     start: 29, duration: 9, de: 'Können Sie sich selbst waschen oder brauchen Sie meine Hilfe?', ro: 'Vă puteți spăla singură sau aveți nevoie de ajutorul meu?' },
        { id: 7, speaker: 'fraumueller', start: 38, duration: 5, de: 'Den Oberkörper kann ich selbst.', ro: 'Partea de sus pot singură.' },
        { id: 8, speaker: 'andreea',     start: 43, duration: 8, de: 'Sehr gut. Den Unterkörper wasche ich im Bett.', ro: 'Foarte bine. Partea de jos o spăl eu în pat.' },
        { id: 9, speaker: 'andreea',     start: 51, duration: 10, de: 'Drehen Sie sich bitte auf die Seite, damit ich Ihnen den Rücken waschen kann.', ro: 'Întoarceți-vă vă rog pe o parte, ca să vă pot spăla spatele.' },
        { id: 10, speaker: 'fraumueller', start: 61, duration: 5, de: 'Ist das Wasser warm genug?', ro: 'Apa este destul de caldă?' },
        { id: 11, speaker: 'andreea',     start: 66, duration: 5, de: 'Ja, ich habe es schon geprüft.', ro: 'Da, am verificat deja.' },
        { id: 12, speaker: 'andreea',     start: 71, duration: 9, de: 'Wir können mit der Körperpflege anfangen.', ro: 'Putem începe igiena.' }
    ]
};

// ============================================
// DIALOG 2: Beim Duschen
// 10 replici, ~65 secunde estimate
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Beim Duschen',
    context: 'În baie — Andreea o ajută pe Frau Müller la duș, șampon, cremă.',
    audioFile: 'audio/dialog-02.wav',
    totalDuration: 65,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 6, de: 'Frau Müller, heute machen wir Duschen.', ro: 'Doamna Müller, astăzi facem duș.' },
        { id: 2, speaker: 'fraumueller', start: 6,  duration: 6, de: 'Schön. Ich brauche aber Hilfe.', ro: 'Frumos. Dar am nevoie de ajutor.' },
        { id: 3, speaker: 'andreea',     start: 12, duration: 7, de: 'Natürlich. Ich helfe Ihnen beim Duschen.', ro: 'Bineînțeles. Vă ajut la duș.' },
        { id: 4, speaker: 'andreea',     start: 19, duration: 5, de: 'Ist das Wasser warm genug?', ro: 'Apa este destul de caldă?' },
        { id: 5, speaker: 'fraumueller', start: 24, duration: 4, de: 'Ja, perfekt.', ro: 'Da, perfect.' },
        { id: 6, speaker: 'andreea',     start: 28, duration: 6, de: 'Ich werde Sie jetzt abduschen.', ro: 'Acum vă clătesc.' },
        { id: 7, speaker: 'andreea',     start: 34, duration: 6, de: 'Jetzt spüle ich das Shampoo aus.', ro: 'Acum clătesc șamponul.' },
        { id: 8, speaker: 'andreea',     start: 40, duration: 6, de: 'Ich trockne Ihren Rücken ab.', ro: 'Vă șterg spatele.' },
        { id: 9, speaker: 'andreea',     start: 46, duration: 8, de: 'Soll ich Ihnen die Beine eincremen?', ro: 'Să vă dau cu cremă pe picioare?' },
        { id: 10, speaker: 'fraumueller', start: 54, duration: 11, de: 'Ja, das wäre lieb. Danke.', ro: 'Da, ar fi drăguț. Mulțumesc.' }
    ]
};

// ============================================
// BUILD ANIMATED DIALOG HTML
// ============================================
function buildAnimatedDialog(data) {
    const repliciHTML = data.replici.map(r => `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${r.speaker === 'andreea' ? '🧑‍⚕️ Andreea' : '👵 Frau Müller'}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>
    `).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context">
                <strong>📍 Situația:</strong> ${data.context}
            </div>

            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andreea" data-speaker="andreea">
                        <div class="character-avatar">
                            <img src="images/andreea.png" alt="Andreea">
                        </div>
                        <div class="character-label">Andreea</div>
                        <div class="speech-bubble speech-andreea" id="bubble-${data.id}-andreea">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>

                    <div class="character-wrapper character-fraumueller" data-speaker="fraumueller">
                        <div class="character-avatar frau-mueller-avatar-large">
                            <span class="avatar-hair">⚪</span>
                            <span class="avatar-face">👵</span>
                        </div>
                        <div class="character-label">Frau Müller</div>
                        <div class="speech-bubble speech-fraumueller" id="bubble-${data.id}-fraumueller">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>
                </div>

                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>

                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>

                <audio id="audio-${data.id}" preload="none">
                    <source src="${data.audioFile}" type="audio/wav">
                </audio>
            </div>

            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv)</summary>
                <div class="transcript-list">
                    ${repliciHTML}
                </div>
            </details>
        </div>
    `;
}

// ============================================
// STATE MANAGEMENT for each dialog
// ============================================
const dialogState = {};

function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = {
            isPlaying: false,
            currentReply: 0,
            timeouts: [],
            data: dialogId === 'dialog1' ? dialog1Data : dialog2Data
        };
    }
    return dialogState[dialogId];
}

// ============================================
// PLAY DIALOG (with timer-based animation)
// Works WITH or WITHOUT MP3 — timer drives the animation
// If MP3 exists, audio plays in parallel for sound
// ============================================
function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;

    state.isPlaying = true;
    const data = state.data;

    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;

    // Try to play audio (silently fail if MP3 missing)
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = state.currentReply > 0 ? data.replici[state.currentReply - 1].start : 0;
        audio.play().catch(() => { /* MP3 missing — animation still works */ });
    }

    // Schedule each reply with setTimeout
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;

    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;

        const timeout = setTimeout(() => {
            showReply(dialogId, reply);
            state.currentReply = i + 1;
            updateProgress(dialogId);

            // If last reply, schedule end
            if (i === data.replici.length - 1) {
                setTimeout(() => endDialog(dialogId), reply.duration * 1000);
            }
        }, delayMs);

        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const data = (dialogId === 'dialog1') ? dialog1Data : dialog2Data;

    // Detectează dacă același speaker continuă (Andreea poate avea 2-4 replici consecutive)
    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');

    // Marchează speakerul activ (păstrează speaking dacă același continuă — fără reset pulse)
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => {
        if (c !== activeChar) c.classList.remove('speaking');
    });
    if (activeChar) activeChar.classList.add('speaking');

    // Ascunde bubble-uri ale ALTOR speakeri (NU al celui care continuă)
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => {
        if (!b.id.endsWith('-' + reply.speaker)) {
            b.classList.remove('visible');
        }
    });

    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;

    if (sameSpeakerContinues) {
        // ANDREEA CONTINUĂ — fade text out → swap → fade text in (bubble rămâne)
        bubble.classList.add('text-fading');
        setTimeout(() => {
            bubble.querySelector('.bubble-de').textContent = reply.de;
            bubble.querySelector('.bubble-ro').textContent = reply.ro;
            bubble.classList.remove('text-fading');
        }, 180);
    } else {
        // SCHIMBARE speaker — text instant + bubble fade-in
        bubble.querySelector('.bubble-de').textContent = reply.de;
        bubble.querySelector('.bubble-ro').textContent = reply.ro;
        bubble.classList.add('visible');
    }

    // Highlight matching reply in transcript
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const replyItem = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (replyItem) replyItem.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false;
    state.timeouts.forEach(t => clearTimeout(t));
    state.timeouts = [];

    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) audio.pause();

    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0;
    state.timeouts = [];

    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));

    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) { audio.pause(); audio.currentTime = 0; }

    updateProgress(dialogId);

    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false;
    state.currentReply = 0;
    state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length;
    const pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`);
    const text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

// ============================================
// REPLAY single reply
// ============================================
function replayReply(dialogId, replyId) {
    const data = (dialogId === 'dialog1') ? dialog1Data : dialog2Data;
    const reply = data.replici.find(r => r.id === replyId);
    if (!reply) return;
    showReply(dialogId, reply);

    const state = initDialogState(dialogId);
    state.currentReply = replyId;
    updateProgress(dialogId);
}

// ============================================
// INJECT DIALOGS INTO PAGE
// ============================================
document.getElementById('dialog1-container').innerHTML = buildAnimatedDialog(dialog1Data);
document.getElementById('dialog2-container').innerHTML = buildAnimatedDialog(dialog2Data);

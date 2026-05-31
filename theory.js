// ============================================
// THEORY.JS — Pflege 1: Körperpflege
// Cele 24 propoziții esențiale ale Claudiei + gramatică integrată
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>💚 Bun venit în lecția specială Pflege</h4>
  <p>Acest material e construit pe <strong>propozițiile reale</strong> pe care le folosești în îngrijirea bătrânilor. Nu am inventat nimic — toate fac parte din lista pregătită de Claudia după experiența ei directă.</p>
  <p>În această parte (1 din 2) învățăm tot ce ține de <strong>igiena corporală</strong>: spălat, duș, șampon, cremă, pieptănat, bărbierit. Partea 2 acoperă mobilizarea + lenjeria + îmbrăcatul.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 4 piloni gramaticali ai lecției</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🎩</div>
      <div class="pillar-title">Sie formal</div>
      <div class="pillar-text">Cu pacientul vorbești ÎNTOTDEAUNA cu Sie. Niciodată „du" — chiar dacă are 95 de ani și par ca o bunică dragă.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">❓</div>
      <div class="pillar-title">Verbe modale</div>
      <div class="pillar-text">Können, brauchen, sollen — întrebi politicos „Puteți...?", „Aveți nevoie...?", „Să vă...?"</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">⚡</div>
      <div class="pillar-title">Trennbare verben</div>
      <div class="pillar-text">Prefixul zboară la final: abduschen, ausspülen, eincremen, abtrocknen, anziehen.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🤝</div>
      <div class="pillar-title">Dativ persoană</div>
      <div class="pillar-text">„Ich helfe IHNEN", „Ich wasche IHNEN den Rücken" — Ihnen = vouă/dumneavoastră.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB-SECȚIUNEA 1 — Întrebări de start
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Întrebări de start — Cum deschizi îngrijirea</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-fragen-start.wav" type="audio/wav"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Înainte să atingi pacientul, întrebi politicos. Acesta e <strong>RESPECTUL</strong> de bază în Pflege. Cele 5 fraze de aici le vei spune zilnic.</p>

    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Germană</th><th>🇷🇴 Română</th><th>💡 Notă</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Brauchen Sie meine Hilfe?</span></td><td>Aveți nevoie de ajutorul meu?</td><td>Verb modal <strong>brauchen</strong> + Akkusativ</td></tr>
          <tr><td><span class="pflege-fraza">Können Sie sich selbst waschen?</span></td><td>Vă puteți spăla singur?</td><td>Modal <strong>können</strong> + reflexiv <strong>sich</strong></td></tr>
          <tr><td><span class="pflege-fraza">Können Sie sich selbst rasieren?</span></td><td>Vă puteți rade singur?</td><td>La fel cu rasieren (a se rade)</td></tr>
          <tr><td><span class="pflege-fraza">Soll ich Ihnen die Beine eincremen?</span></td><td>Să vă dau cu cremă pe picioare?</td><td>Modal <strong>sollen</strong> + Dativ Ihnen + trennbar <strong>ein</strong>cremen</td></tr>
          <tr><td><span class="pflege-fraza">Brauchen Sie Hilfe beim Aufstehen?</span></td><td>Aveți nevoie de ajutor să vă ridicați?</td><td><strong>beim</strong> + infinitiv-substantiv (Aufstehen)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcană românește</h5>
      <p>„<strong>Können Sie</strong>?" = „Puteți?" (sens fizic — sunteți capabil?)<br>
      „<strong>Möchten Sie</strong>?" = „Doriți?" (sens preferință — vreți să?)</p>
      <p>Cu pacientul care nu mai poate, prima e mai potrivită. Cu pacientul care e capabil dar vrea ajutor, a doua e politicoasă.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB-SECȚIUNEA 2 — Spălat în pat
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Spălatul în pat — Ober- + Unterkörper</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-waschen-bett.wav" type="audio/wav"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Pacientul imobilizat la pat se spală în 2 etape: <strong>Oberkörper</strong> (partea de sus) + <strong>Unterkörper</strong> (partea de jos). Iar tu îi explici fiecare mișcare.</p>

    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Germană</th><th>🇷🇴 Română</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Ich bringe gleich die Waschschüssel ins Zimmer.</span></td><td>Aduc imediat ligheanul în cameră.</td></tr>
          <tr><td><span class="pflege-fraza">Wir können mit der Körperpflege anfangen.</span></td><td>Putem începe igiena.</td></tr>
          <tr><td><span class="pflege-fraza">Ich helfe Ihnen bei der Körperpflege.</span></td><td>Vă ajut la igiena corporală.</td></tr>
          <tr><td><span class="pflege-fraza">Ich helfe Ihnen beim Waschen.</span></td><td>Vă ajut la spălat.</td></tr>
          <tr><td><span class="pflege-fraza">Den Oberkörper können Sie selbst waschen.</span></td><td>Partea de sus o puteți spăla singur.</td></tr>
          <tr><td><span class="pflege-fraza">Den Unterkörper wasche ich im Bett.</span></td><td>Partea de jos o spăl eu în pat.</td></tr>
          <tr><td><span class="pflege-fraza">Ich werde Sie komplett im Bett waschen.</span></td><td>Vă spăl complet în pat.</td></tr>
          <tr><td><span class="pflege-fraza">Versuchen Sie sich selbst zu waschen.</span></td><td>Încercați să vă spălați singur.</td></tr>
          <tr><td><span class="pflege-fraza">Drehen Sie sich auf die Seite.</span></td><td>Întoarceți-vă pe o parte.</td></tr>
          <tr><td><span class="pflege-fraza">Damit ich Ihnen den Rücken waschen kann.</span></td><td>Ca să vă pot spăla spatele.</td></tr>
          <tr><td><span class="pflege-fraza">Ich wasche Ihnen den Rücken.</span></td><td>Vă spăl spatele.</td></tr>
          <tr><td><span class="pflege-fraza">Ich wasche Ihnen die Füße.</span></td><td>Vă spăl picioarele.</td></tr>
          <tr><td><span class="pflege-fraza">Ich helfe Ihnen zum Waschbecken.</span></td><td>Vă ajut până la chiuvetă.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>🧱 Atenție la pattern</h5>
      <p><strong>Ich wasche Ihnen den Rücken.</strong> — Schema fixă în Pflege: <code>Ich + verb + IHNEN (Dativ persoană) + den/die/das + obiect spălat (Akkusativ)</code>.</p>
      <p>La fel: <em>Ich wasche Ihnen die Füße / die Haare / die Hände</em>. Persoana e ALTUL, obiectul e PARTEA corpului.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB-SECȚIUNEA 3 — Duș + șampon + uscare
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Duș + șampon + uscare — Verbele trennbare</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-duschen-schampoo.wav" type="audio/wav"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Aici intră în joc <strong>verbele trennbare</strong> care fac igiena: <em>abduschen</em>, <em>ausspülen</em>, <em>abtrocknen</em>. Prefixul lor zboară mereu la final.</p>

    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Germană</th><th>🇷🇴 Română</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Ich helfe Ihnen beim Duschen.</span></td><td>Vă ajut la duș.</td></tr>
          <tr><td><span class="pflege-fraza">Ist das Wasser warm genug?</span></td><td>Apa este destul de caldă?</td></tr>
          <tr><td><span class="pflege-fraza">Ich werde Sie jetzt <strong>abduschen</strong>.</span></td><td>Acum vă clătesc.</td></tr>
          <tr><td><span class="pflege-fraza">Ich <strong>spüle</strong> das Shampoo <strong>aus</strong>.</span></td><td>Clătesc șamponul.</td></tr>
          <tr><td><span class="pflege-fraza">Ich <strong>trockne</strong> Ihnen die Haare.</span></td><td>Vă usuc părul.</td></tr>
          <tr><td><span class="pflege-fraza">Ich <strong>trockne</strong> Ihren Rücken <strong>ab</strong>.</span></td><td>Vă șterg spatele.</td></tr>
          <tr><td><span class="pflege-fraza">Ich kämme Ihre Haare.</span></td><td>Vă pieptăn părul.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="trennbare-recap-box">
      <h5>⚡ Verbele trennbare din Pflege — recap rapid</h5>
      <table class="trennbare-mini-table">
        <thead>
          <tr><th>Verb infinitiv</th><th>Conjugat (eu)</th><th>Sens</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>ab</strong>duschen</td><td>ich dusche... <strong>ab</strong></td><td>a clăti cu apă</td></tr>
          <tr><td><strong>aus</strong>spülen</td><td>ich spüle... <strong>aus</strong></td><td>a clăti (părul, gura)</td></tr>
          <tr><td><strong>ab</strong>trocknen</td><td>ich trockne... <strong>ab</strong></td><td>a șterge (cu prosop)</td></tr>
          <tr><td><strong>auf</strong>tragen</td><td>ich trage... <strong>auf</strong></td><td>a aplica (cremă)</td></tr>
          <tr><td><strong>ein</strong>cremen</td><td>ich creme... <strong>ein</strong></td><td>a da cu cremă</td></tr>
          <tr><td><strong>an</strong>ziehen</td><td>ich ziehe... <strong>an</strong></td><td>a îmbrăca</td></tr>
        </tbody>
      </table>
      <p class="trennbare-note">💡 <strong>Toate</strong> aceste verbe au prefixul care zboară la final: <em>Ich dusche Sie <strong>ab</strong>.</em> NU: <em>Ich abdusche Sie.</em></p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB-SECȚIUNEA 4 — Mundpflege + cremă + bărbierit
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Mundpflege, cremă și bărbierit</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-mundpflege-creme.wav" type="audio/wav"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Detaliile fac diferența: gură curată, piele hrănită, bărbie netedă. Aceste propoziții închid rutina de dimineață.</p>

    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Germană</th><th>🇷🇴 Română</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Ich helfe Ihnen bei der Mundpflege.</span></td><td>Vă ajut la igiena gurii.</td></tr>
          <tr><td><span class="pflege-fraza">Soll ich Ihnen die Beine eincremen?</span></td><td>Să vă dau cu cremă pe picioare?</td></tr>
          <tr><td><span class="pflege-fraza">Ich trage Hautschutzcreme auf.</span></td><td>Aplic cremă de protecție.</td></tr>
          <tr><td><span class="pflege-fraza">Können Sie sich selbst rasieren?</span></td><td>Vă puteți rade singur?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="vocab-bonus">
      <h5>💎 Vocabular bonus — produsele de îngrijire</h5>
      <div class="vocab-grid">
        <div class="vocab-item"><strong class="der">die Waschschüssel</strong><span>ligheanul</span></div>
        <div class="vocab-item"><strong class="der">das Waschbecken</strong><span>chiuveta</span></div>
        <div class="vocab-item"><strong class="der">das Shampoo</strong><span>șamponul</span></div>
        <div class="vocab-item"><strong class="der">die Hautschutzcreme</strong><span>crema de protecție</span></div>
        <div class="vocab-item"><strong class="der">die Zahnbürste</strong><span>periuța de dinți</span></div>
        <div class="vocab-item"><strong class="der">das Handtuch</strong><span>prosopul</span></div>
        <div class="vocab-item"><strong class="der">der Rasierer</strong><span>aparatul de ras</span></div>
        <div class="vocab-item"><strong class="der">der Kamm</strong><span>pieptenele</span></div>
      </div>
    </div>

  </div>
</div>

<!-- ============================================
     SUB-SECȚIUNEA 5 — Părți ale corpului
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ Părțile corpului care apar zilnic</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-koerperteile.wav" type="audio/wav"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Cuvintele de mai jos le folosești zi de zi cu pattern-ul <em>„Ich wasche Ihnen DEN/DIE/DAS ..."</em>. Atenție la articol — el îți spune ce vine după (den, die, das în Akkusativ).</p>

    <div class="korper-grid">
      <div class="korper-card masculin">
        <span class="article der">der</span>
        <strong>Oberkörper</strong>
        <span class="ro">partea de sus</span>
        <span class="akk">→ den Oberkörper</span>
      </div>
      <div class="korper-card masculin">
        <span class="article der">der</span>
        <strong>Unterkörper</strong>
        <span class="ro">partea de jos</span>
        <span class="akk">→ den Unterkörper</span>
      </div>
      <div class="korper-card masculin">
        <span class="article der">der</span>
        <strong>Rücken</strong>
        <span class="ro">spatele</span>
        <span class="akk">→ den Rücken</span>
      </div>
      <div class="korper-card masculin">
        <span class="article der">der</span>
        <strong>Kopf</strong>
        <span class="ro">capul</span>
        <span class="akk">→ den Kopf</span>
      </div>
      <div class="korper-card feminin">
        <span class="article die">die</span>
        <strong>Hand</strong>
        <span class="ro">mâna</span>
        <span class="akk">→ die Hand</span>
      </div>
      <div class="korper-card feminin">
        <span class="article die">die</span>
        <strong>Haare</strong> (Pl)
        <span class="ro">părul</span>
        <span class="akk">→ die Haare</span>
      </div>
      <div class="korper-card neutru">
        <span class="article das">das</span>
        <strong>Bein</strong>
        <span class="ro">piciorul</span>
        <span class="akk">→ das Bein</span>
      </div>
      <div class="korper-card feminin">
        <span class="article die">die</span>
        <strong>Beine</strong> (Pl)
        <span class="ro">picioarele</span>
        <span class="akk">→ die Beine</span>
      </div>
      <div class="korper-card masculin">
        <span class="article der">der</span>
        <strong>Fuß</strong>
        <span class="ro">talpa/piciorul</span>
        <span class="akk">→ den Fuß</span>
      </div>
      <div class="korper-card feminin">
        <span class="article die">die</span>
        <strong>Füße</strong> (Pl)
        <span class="ro">picioarele</span>
        <span class="akk">→ die Füße</span>
      </div>
      <div class="korper-card neutru">
        <span class="article das">das</span>
        <strong>Auge</strong>
        <span class="ro">ochiul</span>
        <span class="akk">→ das Auge</span>
      </div>
      <div class="korper-card feminin">
        <span class="article die">die</span>
        <strong>Augen</strong> (Pl)
        <span class="ro">ochii</span>
        <span class="akk">→ die Augen</span>
      </div>
    </div>

  </div>
</div>

<!-- ============================================
     SUB-SECȚIUNEA 6 — Gramatica pe scurt
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ 🧱 Gramatica pe scurt — Pflege Edition</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-gramatica-recap.wav" type="audio/wav"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Toate regulile lecției într-un tabel mare. Folosește-l ca recap rapid înainte de orice tură.</p>

    <div class="grammar-summary">
      <table class="summary-table">
        <thead>
          <tr><th>Regulă</th><th>Pattern</th><th>Exemplu din lecție</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sie formal</strong></td>
            <td>Verb + Sie + Ihnen</td>
            <td>Können <strong>Sie</strong> sich selbst waschen?</td>
          </tr>
          <tr>
            <td><strong>Imperativ politicos</strong></td>
            <td>Verb la finalul propoziției + Sie</td>
            <td><strong>Drehen Sie sich</strong> auf die Seite.</td>
          </tr>
          <tr>
            <td><strong>Verbe modale</strong></td>
            <td>Modal + ... + verb principal la final (Infinitiv)</td>
            <td><strong>Können</strong> Sie sich selbst <strong>waschen</strong>?</td>
          </tr>
          <tr>
            <td><strong>Trennbare prezent</strong></td>
            <td>Verb la poz. 2 + prefix la final</td>
            <td>Ich <strong>spüle</strong> das Shampoo <strong>aus</strong>.</td>
          </tr>
          <tr>
            <td><strong>Dativ persoană (Ihnen)</strong></td>
            <td>Verb + Ihnen + Akkusativ</td>
            <td>Ich wasche <strong>Ihnen</strong> <strong>den</strong> Rücken.</td>
          </tr>
          <tr>
            <td><strong>Reflexiv (sich)</strong></td>
            <td>... sich (selbst) + verb</td>
            <td>Können Sie <strong>sich</strong> selbst waschen?</td>
          </tr>
          <tr>
            <td><strong>Futur cu „werde"</strong></td>
            <td>werde + ... + Infinitiv la final</td>
            <td>Ich <strong>werde</strong> Sie jetzt <strong>abduschen</strong>.</td>
          </tr>
          <tr>
            <td><strong>beim + substantiv (din verb)</strong></td>
            <td>beim Waschen / Duschen / Anziehen</td>
            <td>Ich helfe Ihnen <strong>beim Duschen</strong>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>💖 De reținut</h5>
      <p>Limbajul Pflege e <strong>cald + clar + politicos</strong>. Tonul e mai important decât perfecțiunea gramaticală. Dacă pacientul te înțelege și se simte respectat, ai reușit.</p>
    </div>

  </div>
</div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

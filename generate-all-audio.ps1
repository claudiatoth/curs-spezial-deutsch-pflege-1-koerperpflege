# Generare TOATE WAV-uri Hedda pentru Pflege L1 - Korperpflege
# 4 teorie + 10 dictat + 2 dialoguri + 48 flashcards = 64 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1  # Putin mai lent pentru claritate la cei care invata

# ====================
# SECTIUNEA 1: AUDIO TEORIE (4 fisiere)
# ====================
$teoria = @(
    @{ file='01-fragen-start.wav';     text='Brauchen Sie meine Hilfe? Konnen Sie sich selbst waschen? Konnen Sie sich selbst rasieren? Soll ich Ihnen die Beine eincremen? Brauchen Sie Hilfe beim Aufstehen?' },
    @{ file='02-waschen-bett.wav';     text='Ich bringe gleich die Waschschussel ins Zimmer. Wir konnen mit der Korperpflege anfangen. Ich helfe Ihnen bei der Korperpflege. Ich helfe Ihnen beim Waschen. Den Oberkorper konnen Sie selbst waschen. Den Unterkorper wasche ich im Bett. Ich werde Sie komplett im Bett waschen. Versuchen Sie sich selbst zu waschen. Drehen Sie sich auf die Seite. Damit ich Ihnen den Rucken waschen kann. Ich wasche Ihnen den Rucken. Ich wasche Ihnen die Fusse. Ich helfe Ihnen zum Waschbecken.' },
    @{ file='03-duschen-schampoo.wav'; text='Ich helfe Ihnen beim Duschen. Ist das Wasser warm genug? Ich werde Sie jetzt abduschen. Ich spule das Shampoo aus. Ich trockne Ihnen die Haare. Ich trockne Ihren Rucken ab. Ich kamme Ihre Haare.' },
    @{ file='04-mundpflege-creme.wav'; text='Ich helfe Ihnen bei der Mundpflege. Soll ich Ihnen die Beine eincremen? Ich trage Hautschutzcreme auf. Konnen Sie sich selbst rasieren?' }
)

# ====================
# SECTIUNEA 2: DICTAT (10 fisiere)
# ====================
$dictat = @(
    @{ file='dictat-01.wav'; text='Ich helfe Ihnen.' },
    @{ file='dictat-02.wav'; text='Brauchen Sie meine Hilfe?' },
    @{ file='dictat-03.wav'; text='Ich wasche Ihnen den Rucken.' },
    @{ file='dictat-04.wav'; text='Ist das Wasser warm genug?' },
    @{ file='dictat-05.wav'; text='Ich spule das Shampoo aus.' },
    @{ file='dictat-06.wav'; text='Drehen Sie sich auf die Seite.' },
    @{ file='dictat-07.wav'; text='Ich trockne Ihnen die Haare.' },
    @{ file='dictat-08.wav'; text='Soll ich Ihnen die Beine eincremen?' },
    @{ file='dictat-09.wav'; text='Konnen Sie sich selbst waschen?' },
    @{ file='dictat-10.wav'; text='Ich kamme Ihre Haare.' }
)

# ====================
# SECTIUNEA 3: DIALOGURI (2 fisiere lungi)
# ====================
$dialoguri = @(
    @{ file='dialog-01.wav'; text='Guten Morgen, Frau Muller! Wie haben Sie geschlafen? ... Guten Morgen, Andreea. Gut, danke. ... Brauchen Sie meine Hilfe bei der Korperpflege? ... Ja, bitte. ... Ich bringe gleich die Waschschussel ins Zimmer. ... Konnen Sie sich selbst waschen oder brauchen Sie meine Hilfe? ... Den Oberkorper kann ich selbst. ... Sehr gut. Den Unterkorper wasche ich im Bett. ... Drehen Sie sich bitte auf die Seite, damit ich Ihnen den Rucken waschen kann. ... Ist das Wasser warm genug? ... Ja, ich habe es schon gepruft. ... Wir konnen mit der Korperpflege anfangen.' },
    @{ file='dialog-02.wav'; text='Frau Muller, heute machen wir Duschen. ... Schon. Ich brauche aber Hilfe. ... Naturlich. Ich helfe Ihnen beim Duschen. ... Ist das Wasser warm genug? ... Ja, perfekt. ... Ich werde Sie jetzt abduschen. ... Jetzt spule ich das Shampoo aus. ... Ich trockne Ihren Rucken ab. ... Soll ich Ihnen die Beine eincremen? ... Ja, das ware lieb. Danke.' }
)

# ====================
# SECTIUNEA 4: FLASHCARDS (48 fisiere)
# ====================
$flashcards = @(
    # Verbe (8)
    @{ file='waschen.wav';        text='waschen.' },
    @{ file='duschen.wav';        text='duschen. abduschen.' },
    @{ file='trocknen.wav';       text='trocknen. abtrocknen.' },
    @{ file='ausspuelen.wav';     text='ausspulen.' },
    @{ file='eincremen.wav';      text='eincremen.' },
    @{ file='auftragen.wav';      text='auftragen.' },
    @{ file='kaemmen.wav';        text='kammen.' },
    @{ file='rasieren.wav';       text='rasieren.' },
    # Parti corp (8)
    @{ file='ruecken.wav';        text='der Rucken. Den Rucken.' },
    @{ file='oberkoerper.wav';    text='der Oberkorper. Den Oberkorper.' },
    @{ file='unterkoerper.wav';   text='der Unterkorper. Den Unterkorper.' },
    @{ file='kopf.wav';           text='der Kopf. Den Kopf.' },
    @{ file='hand.wav';           text='die Hand. Die Hand.' },
    @{ file='haare.wav';          text='die Haare.' },
    @{ file='fuesse.wav';         text='die Fusse.' },
    @{ file='beine.wav';          text='die Beine. Das Bein.' },
    # Obiecte (8)
    @{ file='waschschuessel.wav'; text='die Waschschussel.' },
    @{ file='waschbecken.wav';    text='das Waschbecken.' },
    @{ file='shampoo.wav';        text='das Shampoo.' },
    @{ file='hautschutzcreme.wav';text='die Hautschutzcreme.' },
    @{ file='handtuch.wav';       text='das Handtuch.' },
    @{ file='zahnbuerste.wav';    text='die Zahnburste.' },
    @{ file='rasierer.wav';       text='der Rasierer.' },
    @{ file='kamm.wav';           text='der Kamm.' },
    # Imperativ (8)
    @{ file='drehen-sie.wav';     text='Drehen Sie sich auf die Seite.' },
    @{ file='heben-sie.wav';      text='Heben Sie das Bein.' },
    @{ file='beugen-sie.wav';     text='Beugen Sie sich nach vorne.' },
    @{ file='versuchen-sie.wav';  text='Versuchen Sie sich selbst zu waschen.' },
    @{ file='machen-sie-zu.wav';  text='Machen Sie die Augen zu.' },
    @{ file='drehen-kopf.wav';    text='Drehen Sie den Kopf nach rechts.' },
    @{ file='geben-sie.wav';      text='Geben Sie mir bitte die Hand.' },
    @{ file='stellen-sie-an.wav'; text='Stellen Sie Ihr Bein an.' },
    # Intrebari (8)
    @{ file='brauchen-hilfe.wav';  text='Brauchen Sie meine Hilfe?' },
    @{ file='koennen-waschen.wav'; text='Konnen Sie sich selbst waschen?' },
    @{ file='soll-eincremen.wav';  text='Soll ich Ihnen die Beine eincremen?' },
    @{ file='wasser-warm.wav';     text='Ist das Wasser warm genug?' },
    @{ file='wie-geschlafen.wav';  text='Wie haben Sie geschlafen?' },
    @{ file='hilfe-aufstehen.wav'; text='Brauchen Sie Hilfe beim Aufstehen?' },
    @{ file='koennen-rasieren.wav';text='Konnen Sie sich selbst rasieren?' },
    @{ file='kissen-decke.wav';    text='Brauchen Sie noch ein Kissen oder eine Decke?' },
    # Pattern-uri (8)
    @{ file='helfe-bei.wav';            text='Ich helfe Ihnen bei der Korperpflege.' },
    @{ file='helfe-beim.wav';           text='Ich helfe Ihnen beim Waschen.' },
    @{ file='wasche-ihnen.wav';         text='Ich wasche Ihnen den Rucken.' },
    @{ file='trockne-ab.wav';           text='Ich trockne Ihnen die Haare ab.' },
    @{ file='soll-eincremen-pattern.wav';text='Soll ich Ihnen die Beine eincremen?' },
    @{ file='werde-sie.wav';            text='Ich werde Sie jetzt abduschen.' },
    @{ file='bringe-gleich.wav';        text='Ich bringe gleich die Waschschussel ins Zimmer.' },
    @{ file='damit-waschen.wav';        text='Damit ich Ihnen den Rucken waschen kann.' }
)

$total = $teoria.Count + $dictat.Count + $dialoguri.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

# Generare teorie (in audio/)
Write-Host "=== TEORIE ($($teoria.Count)) ===" -ForegroundColor Cyan
foreach ($w in $teoria) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file) -> $($_.Exception.Message)" -ForegroundColor Red }
}

# Generare dictat (in audio/)
Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

# Generare dialoguri (in audio/)
Write-Host "=== DIALOGURI ($($dialoguri.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dialoguri) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

# Generare flashcards (in audio/letters/)
Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })

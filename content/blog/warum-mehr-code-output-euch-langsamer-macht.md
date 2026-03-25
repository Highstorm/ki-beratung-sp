---
title: "Warum mehr Code-Output euch langsamer macht"
description: "Der KI-Coding-Hype und das Bottleneck-Problem: "
date: "2026-03-25"
tags: ["KI", "Automation", "Code"]
---

Es ist Dienstagmorgen. Ich sitze in einem Workshop mit dem CTO eines regionalen, mittelständischen Softwareunternehmens. Er hat gerade eine Folie aufgemacht: _„KI-Coding-Assistenten – 40% mehr Output.”._
Seine Worte*: “Das wird unsere Velocity transformieren."*

Ich kenne diesen Moment. Ich habe ihn oft erlebt – als Entwickler, als Product Owner, als Berater. Und jedes Mal denke ich dasselbe:

**Velocity… velocity wohin?**

Denn was hier gerade passiert, ist klassisch: Man hat die gesamte SDLC analysiert, den einen Schritt gefunden, der ohnehin schon halbwegs funktioniert, und beschlossen, genau den zu beschleunigen. Den Schritt, der nicht der Flaschhals ist.

Und das macht nicht nur nichts besser. Es macht alles aktiv schlechter.

---

## Goldratt hatte das schon 1984 verstanden

Wer in Eli Goldratt’s T*he Goal* die Theory of Constraints gelesen hat, wird es kennen. Kernaussage: Jedes System hat genau einen Engpass. Der Durchsatz des gesamten Systems wird durch diesen Engpass bestimmt – und durch nichts sonst.

Den ersten Teil kennen die meisten. Den zweiten nicht:

> **Wenn du einen Schritt optimierst, der nicht das Constraint ist, wird das System nicht schneller. Es wird schlechter.**

Ein Beispiel:
Station A produziert doppelt so schnell, aber Station B – das eigentliche Constraint – schafft immer noch gleich viel.
Das Ergebnis: Zwischen A und B wächst ein Berg halbfertiger Arbeit. Lead Time steigt. Die Leute an Station B ertrinken in WIP. Qualität fällt.

Ihr habt keinen Prozess beschleunigt. Ihr habt einen Stau gebaut und ihn Produktivität genannt.

---

## Was wirklich passiert, wenn ihr „10x Code-Output" habt

Ich hab das selbst erlebt. Spaß macht das nicht.

Eure Entwickler produzieren PRs schneller als je zuvor. Wunderbar.
Gleichzeitig haben sich eure Reviewer nicht verzehnfacht.
Die waren nicht auf der Folie. Also warten PRs. Einen Tag. Zwei Tage. Eine Woche.

Der Entwickler hat längst auf das nächste Feature gewechselt. Wenn Reviewkommentare ankommen, starrt er auf Code, den er vor acht Tagen geschrieben hat – Für einen Entwickler ist das Aeonen her. Reviews werden durchgewinkt, weil der Stapel zu groß ist. Ein PR merged, der nicht wirklich gelesen wurde. Die Pipeline braucht 45 Minuten, schlägt an einem flaky Test fehl, wird neu gestartet, läuft durch. Das Deployment braucht eine manuelle Freigabe von jemandem, der gerade in einem Meeting über Meetings sitzt.

Das Feature liegt drei Tage in Staging. Niemand fühlt sich für dafür verantwortlich, es in Produktion zu bringen.

Währenddessen hat der Entwickler zwei weitere PRs geöffnet. Der Stapel wächst. WIP explodiert. Alle haben sechs Dinge in Arbeit, nichts ist fertig.

**Ihr produziert mehr Code und shipt weniger Software.**
Euer Dashboard zeigt +40% Produktivität. Cycle Time – die Metrik, die wirklich zählt – wird schlechter.

Und das ist noch nicht das Schlimmste: Ein Großteil dieses KI-generierten Codes wurde von niemandem wirklich verstanden. Jemand hat geprompted, überflogen, vielleicht einmal ausgeführt. Wenn das um 2 Uhr nachts in Production bricht, kann weder der Kollege auf Bereitschaft noch der ursprüngliche Entwickler erklären, was da eigentlich passiert.

Mehr Code, weniger Verständnis. Das ist kein Produktivitätsgewinn. Das ist eine Zeitbombe mit einem schönerem Dashboard.

---

## Wo ist das eigentliche Bottleneck?

Als Berater mache ich als erstes eine Value Stream Map. Ich folge einem Feature von „jemand hatte eine Idee" bis „ein Nutzer bekommt Mehrwert". Das Bottleneck winkt einem immer entgegen.

### 1. Ihr wisst nicht, was ihr bauen sollt

Das ist das unbequemste, weil es niemand zugeben will. Euer Product Owner hat seit zwei Monaten nicht mit einem echten Nutzer gesprochen. Anforderungen kommen aus dem Projektmanagement als Jira-Ticket mit drei Sätzen und einem Figma-Link zu einem Design, das jemand abgesegnet hat, der das Produkt selbst nie benutzt.

Entwickler treffen täglich fünfzig Micro-Entscheidungen über Verhalten, Edge Cases und Error Handling – weil niemand darüber nachgedacht hat.

Ich habe Teams gesehen, die sechs Wochen an einem Feature gearbeitet haben, das auf einer Slack-Nachricht basierte, was ein Sales-Rep glaubte, dass ein möglicher Kunde vielleicht gesagt hatte. Das Feature wurde von elf Personen genutzt – neun davon interne QA-Mitarbeiter.

Das ist kein Delivery-Problem. Das ist ein „was machen wir hier eigentlich"-Problem.

Und KI-Coding-Assistenten beschleunigen genau das: die Rate, mit der ihr das Falsche baut.
Ihr automatisiert das Raten. Ihr liefert das falsche Feature schneller, shipt es, schaut zu wie es floppt, macht ein Retro, in dem jemand sagt „wir müssen mehr mit Nutzern sprechen", alle nicken – und dann ändert sich nichts.

### 2. Alles nach „Code ist fertig"

In den meisten Unternehmen macht das Schreiben von Code vielleicht 20% der Reise aus. Die anderen 80% ist Code, der in diversen Queues sitzt und langsam altert.

Ich habe Features begleitet, wo der Code einen Nachmittag gedauert hat und zwei Monate bis Production brauchte.

PR Review. CI/CD. Staging. QA. Security Review. UAT. Release Freigabe, Product Sign-off. Deploy Window. Canary Rollout. Das ist eine lange Kette aus Übergaben, Wartezeiten und Queues. Meistens bewegt sich euer Code nicht. Er wartet darauf, dass ein Mensch ihn anschaut. Wartet auf eine Pipeline. Wartet auf eine Freigabe.

Wenn ihr verstehen wollt, warum ihr langsam seid: Zählt die Stunden aktiver Arbeit versus die Stunden des Wartens in einer Queue. Das Verhältnis ist meist erschrecken.

### 3. Die Deploy-Angst-Spirale

Ich kenne viele Teams, die Angst vor dem Deployment haben. Tests sind flaky. Observability ist ein Chaos. Das letzte Freitags-Deployment hat das Wochenende aller ruiniert. Also werden Änderungen in größere Releases gebündelt. Die sind riskanter. Deploys werden angsteinflößender. Also bündelt man noch mehr.

Eine Angst-Spirale. Jetzt fügt man schnelleren Code-Output hinzu. Mehr Code, gleiche Angst-Kultur. Die Batches werden größer. Das Risiko steigt. Releases werden seltener.

Fantastisch. Ihr habt einem Team, das sich bereits vor dem Shippen fürchtet, noch mehr Gründe gegeben, nicht zu shippen.

### 4. Ihr habt geshippt. Hat es funktioniert? Keine Ahnung.

Ihr habt das Feature gebaut. Ihr habt es ausgeliefert. Und dann... nichts. Keine verwertbaren Analytics. Keine User-Interviews nach dem Launch. Niemand schaut nach, ob das Feature das Problem gelöst hat, für das es gedacht war.

Also raten wir beim nächsten Feature auch. Der gesamte Produkt-Roadmap ist eine Kette von educated guesses ohne Feedback zwischen den Iterationen.

Schnellerer Code-Output dreht diesen Cycle nur schneller: Bauen, shippen, Schultern zucken. Ihr lernt nichts. Und nennt das Velocity.

### 5. Euer Kalender ist eine tragende Wand

Manchmal ist das Bottleneck nicht technisch. Es ist das Meeting, das ihr für eine Entscheidung braucht. Die drei Teams, die sich auf einen API-Vertrag einigen müssen, aber seit einem Monat nicht miteinander gesprochen haben. Der eine Architekt, der als Single Point of Approval für jede größere Design-Entscheidung fungiert und einen zwei Wochen langen Backlog hat.

Ich saß in Meetings, wo die gesamte Diskussion darum kreiste, warum ein Feature noch nicht geshippt ist – und die Antwort war: „Wir warten auf ein Meeting mit jemandem, der im Urlaub ist."

Das ist kein technisches Problem. Kein Code-Problem. Ein Koordinationsproblem. Ein menschliches Problem. Das unbequeme, politische, das-will-niemand-besitzen-Problem.

KI-Coding-Assistenten helfen hier null.
Euer Bottleneck ist das Organigramm.
Kein Copilot refactored das.

---

## Was stattdessen zu tun ist

Ich verspreche nicht, dass das sexy ist. Ist es mit sicherheit nicht.
Niemand schreibt einen LinkedIn-Post darüber. Kein Konferenz-Keynote-Slot dafür.

**Mapped euren Value Stream.**
Folgt einem Feature von der Idee bis zur Production. Schreibt jeden Schritt auf. Schreibt auf, wie lange jeder Schritt dauert. Und vor allem: wie lange Dinge _zwischen_ den Schritten warten. Dort lebt eure Cycle Time. Das wird deprimierend. Macht es trotzdem. Es ist der Anfang.

**Messt Cycle Time, nicht Output.**
Lines of Code, gemergte PRs, Story Points – all das sind Metriken für Station A. Sie sagen euch nichts über die vor euch liegende Arbeit.
Messt, wie lange es von Commit bis Production dauert. Wenn ihr das nicht messt, optimiert ihr blind.

**Findet Wait States und eliminiert sie.**
PRs warten zwei Tage auf Review?
Kleinere PRs, dedizierte Review-Zeit, Pair Programming.
Deployments warten auf manuelle Freigabe?
Automatisiert das oder macht einen Slack-Button draus.

**Hört auf, anzufangen. Fangt an, fertigzumachen.**
WIP-Limits existieren aus gutem Grund. Drei fertige Dinge sind Wertvoller als zehn halbfertige Dinge. Jedes Item in Arbeit ist Kontextwechsel. Gute Entwickler verlieren damit langsam aber sicher ihre Motivation.

**Redet mit den Menschen, die die Arbeit machen.**
Eure Entwickler wissen, wo das Bottleneck ist. Sie beschweren sich seit Monaten darüber – in Standups, in Slack-Memes, in Kommentaren, die niemand liest.
Sie haben nur aufgehört zu glauben, dass jemand zuhört.

---

## Der Punkt

Zurück zu dem CTO mit seiner Folie. Was er hätte sagen sollen – was tatsächlich nützlich gewesen wäre:

_„Wir haben unseren Value Stream analysiert und festgestellt, dass Features im Schnitt neun Tage zwischen den einzelnen Schritten warten. Das halbieren wir."_

Das ist nicht sexy. Das sieht im Pitch-Deck nicht schön aus.
Aber es ist das Einzige, das euch tatsächlich schneller macht.

Die Geschwindigkeit des Code-Schreibens war nie euer Problem. Und wenn ihr geglaubt habt, dass sie es war – dann wohnen genau in diesem Gap zwischen Glauben und Realität eure eigentlichen Probleme.

Der Wettbewerbsvorteil geht nicht an das Team, das am schnellsten Code schreibt. Er geht an das Team, das verstanden hat, was gebaut werden soll, es gebaut hat, und es in die Hände von Nutzern gebracht hat – während alle anderen noch in einer Review-Queue voll KI-generierter PRs ertrinken, für die niemand Zeit hat.

**Fixt das Bottleneck. Es ist nicht die Tastatur.**

---

_Du willst wissen, wo das Bottleneck in deiner Delivery-Pipeline liegt? [Dann lass uns reden.](https://ki-beratung.vercel.com/)_

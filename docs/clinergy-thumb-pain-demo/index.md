---
layout: default
title: "Clinergy 'thumb pain' demo: screen-by-screen walkthrough"
permalink: /docs/clinergy-thumb-pain-demo/
---

# Clinergy "thumb pain" demo: screen-by-screen walkthrough

This page goes through every screen state in the **"thumb pain"** part of the live demo in
[Alan Rector interview, part 1](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/).
It is written for developers who want to rebuild these screens and the choices on them.

**What is shown.** In the interview, Alan Rector explains a running copy of the PEN&PAD-based **Clinergy** user interface
(window title *Clinergy GP*). Erik Sundvall operates it. The chapter list calls it "Live demo of the PEN & PAD-based Clinergy user interface, explained by Alan"
([11:25](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=685)–[22:19](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1339)).
Erik says it "runs on a Windows XP emulator" ([11:26](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=686)).
Alan describes it as "the second stage of the screens that we use to enter a patient encounter", "intended to be used by a doctor on a system that was sitting on their desk while the patient was there" ([11:34](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=694)).
For background on PEN&PAD and GALEN, see "Papers and links" on the [front page](https://pen-pad-revival.github.io/).

**The segment.** From the click on **SYM** ([12:24](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=744)) to the end of the demo chapter ([22:19](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1339)).
The actual thumb path starts at [13:48](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=828). Before that, the Topics picker is explored (body parts and icon filters), which is included here because it is the same picker.
The patient is the mock-up "Mr John Parsons".

**How the states were picked.** Frames were extracted from the part 1 master video (3840×2160) with scene-change analysis at 2 frames per second.
One clean frame was chosen per distinct screen state, and near-identical frames were dropped. Pure window moves and pointer movement are not counted as states, but are mentioned where they happen.
Screenshots are cropped to the shared remote-desktop area (webcam tiles and the remote-desktop title bar removed) and scaled to 1405×1003 px (50%). That is close to the resolution of the original screen, which was upscaled in the recording. They are saved as 128-colour PNG.

**Timestamps** link to the interview page, which starts the player at that second (`#t=SECONDS`). Each time is when the state first appears, rounded down to the second.

**Narration** is quoted word for word from the published part 1 transcript and subtitles. Speaker names come from the transcript; [mm:ss] times are the start of the subtitle cue. Where the narration is not about the screen, this is said. All the UI text below was read from the screenshots. Anything that could not be read is marked *unreadable*.

**Licence.** The screenshots are derived from the video *PEN&PAD interview with Alan Rector – part 1 of 4* (Alan Rector interviewed by Erik Sundvall and Daniel Karlsson; recorded 21 October 2021), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Changes: single frames were cropped, scaled to 50% and reduced to 128 colours. Nothing else was edited. Source: [Internet Archive item pen-pad-interview-alan-rector-part1](https://archive.org/details/pen-pad-interview-alan-rector-part1).

## Contents

- [A. Launch and the Topics picker (states 1–10)](#a-launch-and-the-topics-picker)
- [B. Icon filters (states 11–23)](#b-icon-filters)
- [C. Thumb → pain → Form (states 24–27)](#c-thumb--pain--form)
- [D. The Thumb pain form and its pop-ups (states 28–51)](#d-the-thumb-pain-form-and-its-pop-ups)
- [Interaction pattern and data-model notes (inference)](#interaction-pattern-and-data-model-notes-inference)
- [Table of all states](#table-of-all-states)

## A. Launch and the Topics picker

### 1. Host system with the Clinergy launch panel

![State 1: Host system with the Clinergy launch panel](img/01-host-system-clinergy-launch.png)

- **Time:** [12:24](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=744) (744 s)
- **Action / choice:** The mouse pointer is on **SYM** in the Clinergy Launch group.
- **Change from previous state:** Starting point of the segment. (The Clinergy GP window had been opened earlier in the demo; the host window was brought to the front at about 11:50.)
- **Visible UI:** Window **Host System - Mock up** (black terminal-style text). Header: `No 13459. Mr John Parsons, 56 Belvidere Road South, London SE68 9PP` / `Male 38 years Married`. Dated problem history: `04-01-92 Constipation / Abdominal pain present / Rectum normal`; `15-05-94 Diarrhoea / Borborygmi present / Rectum normal / Drug side effect`; `21-07-95 Depressed mood / Loss of appetite present / Schizophrenia`; `30-11-97 Occasional, gradual onset, moderately severe constipation / Abdomen: normal bowel sounds / Drug side effect`; `10-03-98 Gastroenteritis / Abdominal pain present / Abdomen: guarding present`; `10-03-98 Influenza / A bit unwell`; `21-10-21 Thumb pain`. Function key line (red): `F2-Up F3-Down F4-QDE F5-Patient sex F6-Reset F7-Read codes F8-Exit`. Footer: `Dr J Brown, Green Room` and `Usual doctor: Dr Brown`. Below the terminal: **Patient Sex (F5)** radio buttons (**Male** selected, Female), a **Show Read Codes (F6)** checkbox (unchecked), a **Clinergy Launch (Control + Key)** group with buttons **QDE SYM DIS CHK FH PMH INT**, and **Reset (F7)** / **Exit (F8)**. Behind it the Clinergy GP window is partly visible.
- **Narration:** Erik Sundvall, [12:23]: "So if I click the symptom here and then I've got this"

### 2. Topics picker: all symptoms

![State 2: Topics picker: all symptoms](img/02-topics-symptoms-all.png)

- **Time:** [12:28](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=748) (748 s)
- **Action / choice:** SYM was clicked in the launch panel; **All** is the active icon.
- **Change from previous state:** The Clinergy GP window comes to the front showing the Topics tab for symptoms (SYM). (Between this state and the next, the window is dragged slightly to the left; nothing else changes.)
- **Visible UI:** Clinergy GP window, **Topics** tab active; the **Form** tab is greyed out. Top right: **Customise** and **Help** buttons. Left column of category buttons: **SYM** (pressed: dark grey with pale cyan text), **DIS**, **CHK**, **FH**, **PMH**, **INT**. Row of 15 icon buttons: **All** (red text), a standing figure, heart, lungs, stomach/intestine, a genito-urinary drawing, red tick-like strokes, a bent arm, brain, eye, ear, a face/neck drawing with red marks, red blood cells, a skin cross-section, and **Ψ**. **Location** text field. Large picture panel (front and back views of a male body, the 'homunculus'), and to its right a scrollable pick-list of terms. Below: an empty text field and a disabled **Form** button. Location: `None`. The list starts `abdominal colic, abdominal cramp, abdominal distension, abnormal texture, abrasion, absences, absent testis, agitation, anal discharge, ankle swelling, anxiousness, auditory canal foreign body, aural bleeding, bad breath, bite, bleeding gum, blister, blocked nose, bodily weakness, borborygmi, bruise, burn, catarrh, change in bowel habit, change of appearance` and continues below (scroll bar).
- **Narration:** Alan Rector, [12:30]: "we found it was very important to have people be able to select things in various ways so as a starting point you could either point at the homunculus the drawings that we had like the little icons that we had at the top or or pick up from the text lists at the side."

### 3. Icon filter: bent-arm (joints) icon

![State 3: Icon filter: bent-arm (joints) icon](img/03-topics-musculoskeletal-filter.png)

- **Time:** [12:44](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=764) (764 s)
- **Action / choice:** Bent-arm icon (by its list, the joints / musculoskeletal group; the icon has no visible caption).
- **Change from previous state:** The list is filtered from all symptoms to the joint-related ones.
- **Visible UI:** Topics layout as described in state 2. The bent-arm icon (8th) is pressed. Location: `None`. The list is short enough to need no scrolling: `chest pain, deformity, difficulty walking, elbow swelling, foot swelling, generalised joint pain, generalised joint stiffness, hand swelling, joint clicking, joint locking, joint stiffness, knee swelling, lump, neck stiffness, pain, tenderness, wrist swelling`.
- **Narration:** Alan Rector, [12:54]: "And some doctors liked one and some doctors liked the other."

### 4. Hovering over the arm

![State 4: Hovering over the arm](img/04-hover-arm.png)

- **Time:** [12:49](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=769) (769 s)
- **Action / choice:** Nothing chosen; the pointer hovers over the arm.
- **Change from previous state:** Hover feedback: a bounding rectangle and a text label name the body part under the pointer. The Location field does not change on hover.
- **Visible UI:** Topics layout as described in state 2. Bent-arm icon still pressed, Location `None`, same list as state 3. On the body picture a rectangle outlines the right arm of the front view, and the label `arm` is shown at the top left of the picture panel.
- **Narration:** Alan Rector, [12:59]: "The graphics were fun and they helped sell the system and get people to enjoy it."

### 5. Arm selected: enlarged arm drawing

![State 5: Arm selected: enlarged arm drawing](img/05-arm-zoom.png)

- **Time:** [12:50](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=770) (770 s)
- **Action / choice:** Click on the arm.
- **Change from previous state:** Location changes from `None` to `arm`; the picture zooms into an arm inset; the list is cut down to findings that apply to the arm.
- **Visible UI:** Topics layout as described in state 2. A white inset with a drop shadow shows an enlarged arm drawing on top of the body picture; the label `arm` is at the inset's top left. Location: `arm`. List: `deformity, elbow swelling, hand swelling, lump, pain, tenderness, wrist swelling`.
- **Narration:** (Same narration as state 4.)

### 6. Arm inset: hovering over the hand

![State 6: Arm inset: hovering over the hand](img/06-arm-zoom-hover-hand.png)

- **Time:** [12:52](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=772) (772 s)
- **Action / choice:** Nothing chosen; hover over the hand inside the arm inset.
- **Change from previous state:** Hover label inside a zoomed inset.
- **Visible UI:** Topics layout as described in state 2. Arm inset as in state 5; a small rectangle outlines the hand and the inset label reads `hand`. Location still `arm`, same list.
- **Narration:** (Same narration as state 4.)

### 7. Hand selected (first pass): enlarged hand

![State 7: Hand selected (first pass): enlarged hand](img/07-hand-zoom-first-pass.png)

- **Time:** [12:55](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=775) (775 s)
- **Action / choice:** Click on the hand. (Between states 6 and 7 the inset briefly closed and the whole body was shown again with `hand` hovered, then the hand inset opened.)
- **Change from previous state:** Location `arm` → `hand`; list reduced to 5 items. Hovering over the fingers shows their names: `thumb`, `index finger`, `ring finger`, `little finger` and `middle finger` appear in turn during this pass.
- **Visible UI:** Topics layout as described in state 2. Inset with an enlarged hand (palm view). The pointer is over a finger and the inset label reads `middle finger`. Location: `hand`. List: `deformity, joint stiffness, lump, pain, tenderness`.
- **Narration:** Alan Rector, [13:08]: "But many people actually use the text much more than they use the graphics."

### 8. Body as a whole selected

![State 8: Body as a whole selected](img/08-body-as-a-whole-selected.png)

- **Time:** [12:59](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=779) (779 s)
- **Action / choice:** Click on the body outside a specific part.
- **Change from previous state:** The hand inset closes; Location becomes `body as a whole` and the list shows the generalised joint items.
- **Visible UI:** Topics layout as described in state 2. No inset; full body pictures with the label `body as a whole`. Location: `body as a whole`. List: `deformity, generalised joint pain, generalised joint stiffness, joint stiffness`.
- **Narration:** Alan Rector, [13:14]: "They were also slightly worried that the patients would think that they weren't clever enough to figure out what the words meant or something."

### 9. Head selected: enlarged head in profile

![State 9: Head selected: enlarged head in profile](img/09-head-zoom-hover-jaw.png)

- **Time:** [13:01](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=781) (781 s)
- **Action / choice:** Click on the head; the pointer then hovers over the jaw.
- **Change from previous state:** Location → `head`; list → 4 items. While hovering in this inset the labels `nose`, `jaw`, `head` and `scalp` appear in turn.
- **Visible UI:** Topics layout as described in state 2. Inset with an enlarged head in profile (facing left). A rectangle outlines the jaw and the label reads `jaw`. Location: `head`. List: `deformity, lump, pain, tenderness`.
- **Narration:** Alan Rector, [13:23]: "There was slight worry about using icons at that point."

### 10. Back to the whole body, Location None

![State 10: Back to the whole body, Location None](img/10-location-reset.png)

- **Time:** [13:05](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=785) (785 s)
- **Action / choice:** Click that leaves the head inset (the exact target is not visible; the pointer is near the Location field).
- **Change from previous state:** Back to the unlocalised joint list.
- **Visible UI:** Topics layout as described in state 2. Bent-arm icon still pressed, no inset, Location `None`, list as in state 3 (`chest pain, deformity, difficulty walking, elbow swelling, foot swelling, generalised joint pain, generalised joint stiffness, hand swelling, joint clicking, joint locking, joint stiffness, knee swelling, lump, neck stiffness, pain, tenderness, wrist swelling`).
- **Narration:** Alan Rector, [13:27]: "This was in 1992. Mice were new."

## B. Icon filters

In this run the icons were clicked one by one. The icons have no captions. The group names given below are an *inference from the lists*, not labels shown in the program.

### 11. Icon filter: 7th icon (red strokes)

![State 11: Icon filter: 7th icon (red strokes)](img/11-icon-filter-muscle.png)

- **Time:** [13:08](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=788) (788 s)
- **Action / choice:** Click on the 7th icon (red strokes) (muscle and general aches; inferred from the list).
- **Change from previous state:** Only the pick-list changes; the body picture and Location stay the same. The icons are clicked one after another from right to left (7th, 6th, … 2nd), then from the 9th to the 15th.
- **Visible UI:** Topics layout as described in state 2. The 7th icon (red strokes) is pressed, Location `None`, no inset. Visible list items: `bruise, chest pain, deformity, difficulty walking, elbow swelling, fatigue, foot swelling, generalised aching, generalised muscular atrophy, generalised muscular spasm, hand swelling, knee swelling, lethargy, lump, muscular atrophy, muscular spasm, muscular weakness, myalgia, neck stiffness, numbness, pain, paraesthesia, soreness, swelling, tenderness` … (scroll bar present).
- **Narration:** Alan Rector, [13:30]: "Some of the doctors had never met a mouse when they met this system, let alone use things that were mostly graphical."

### 12. Icon filter: 6th icon (genito-urinary drawing)

![State 12: Icon filter: 6th icon (genito-urinary drawing)](img/12-icon-filter-genitourinary.png)

- **Time:** [13:10](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=790) (790 s)
- **Action / choice:** Click on the 6th icon (genito-urinary drawing) (genito-urinary; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 6th icon (genito-urinary drawing) is pressed, Location `None`, no inset. Visible list items: `absent testis, ankle swelling, blister, dark urine, dysuria, enuresis, erythema, failure of erection, genital ulcer, haematuria, impotence, itching, large penis, large testis, leg swelling, loss of libido, lump, nocturia, non normal skin texture, oedema, oliguria, pain, painful erection, polyuria, poor stream of urine` … (continues; scroll bar).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 13. Icon filter: 5th icon (stomach and intestine)

![State 13: Icon filter: 5th icon (stomach and intestine)](img/13-icon-filter-digestive.png)

- **Time:** [13:12](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=792) (792 s)
- **Action / choice:** Click on the 5th icon (stomach and intestine) (digestive; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 5th icon (stomach and intestine) is pressed, Location `None`, no inset. Visible list items: `abdominal colic, abdominal cramp, abdominal distension, anal discharge, ankle swelling, bad breath, bleeding gum, blister, borborygmi, change in bowel habit, chest pain, constipation, dark urine, diarrhoea, dyspepsia, dysphagia, faecal incontinence, finger clubbing, flatulence, food appetite increase, gum swelling, haematemesis, heartburn, hyperacidity, indigestion` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 14. Icon filter: 4th icon (lungs)

![State 14: Icon filter: 4th icon (lungs)](img/14-icon-filter-respiratory.png)

- **Time:** [13:14](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=794) (794 s)
- **Action / choice:** Click on the 4th icon (lungs) (respiratory; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 4th icon (lungs) is pressed, Location `None`, no inset. Visible list items: `blocked nose, catarrh, chest pain, chest tightness, cough, cyanosis, deformity, dyspnoea, finger clubbing, haemoptysis, hyperventilation, pain, skin discolouration, sneezing, sputum, stridor, swelling, wheezing` (whole list visible).
- **Narration:** Alan Rector, [13:41]: "So there were things like that that we just didn't know."

### 15. Icon filter: 3rd icon (heart)

![State 15: Icon filter: 3rd icon (heart)](img/15-icon-filter-cardiovascular.png)

- **Time:** [13:17](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=797) (797 s)
- **Action / choice:** Click on the 3rd icon (heart) (cardiovascular; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 3rd icon (heart) is pressed, Location `None`, no inset. Visible list items: `ankle swelling, bruise, chest pain, chest tightness, cold arm, cold finger, cold foot, cold forearm, cold hand, cold leg, cold lower leg, cold toe, collapse, confusion, convulsion, cough, cut, cyanosis, dizziness, dyspnoea, erythema, finger clubbing, haemoptysis, intermittent claudication, leg cramp` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 16. Icon filter: 2nd icon (standing figure)

![State 16: Icon filter: 2nd icon (standing figure)](img/16-icon-filter-general.png)

- **Time:** [13:24](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=804) (804 s)
- **Action / choice:** Click on the 2nd icon (standing figure) (general / whole person; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 2nd icon (standing figure) is pressed, Location `None`, no inset. Visible list items: `abnormal texture, absences, agitation, anxiousness, bodily weakness, bruise, change of appearance, collapse, confusion, convulsion, crying, deformity, delusion, depressed mood, discolouration, disturbed sleep wake cycle, early morning wakening, erythema, excessive sleep, fatigue, fever, food appetite increase, foreign body, frequent infections, generalised aching` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 17. Icon filter: 9th icon (brain)

![State 17: Icon filter: 9th icon (brain)](img/17-icon-filter-neurological.png)

- **Time:** [13:27](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=807) (807 s)
- **Action / choice:** Click on the 9th icon (brain) (neurological; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 9th icon (brain) is pressed, Location `None`, no inset. Visible list items: `absences, bodily weakness, collapse, confusion, convulsion, dizziness, dysphagia, dysphasia, fatigue, generalised aching, headache, itching, lethargy, loss of hearing, loss of memory, loss of smell, loss of taste, loss of vision, muscle twitch, muscular atrophy, muscular spasm, muscular weakness, nausea, neck stiffness, numbness` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 18. Icon filter: 10th icon (eye)

![State 18: Icon filter: 10th icon (eye)](img/18-icon-filter-eye.png)

- **Time:** [13:28](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=808) (808 s)
- **Action / choice:** Click on the 10th icon (eye) (eye; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 10th icon (eye) is pressed, Location `None`, no inset. Visible list items: `abrasion, blister, bruise, burn, cut, dry eye, erythema, eye discharge, eye foreign body, foreign body, gritty eye, itching, loss of vision, lump, mole, non normal skin texture, numbness, pain, paraesthesia, photophobia, rash, red eye, skin dryness, soreness, spot` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 19. Icon filter: 11th icon (ear)

![State 19: Icon filter: 11th icon (ear)](img/19-icon-filter-ear-nose-throat.png)

- **Time:** [13:30](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=810) (810 s)
- **Action / choice:** Click on the 11th icon (ear) (ear, nose and throat; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 11th icon (ear) is pressed, Location `None`, no inset. Visible list items: `abrasion, auditory canal foreign body, aural bleeding, bad breath, bite, blister, blocked nose, bruise, burn, catarrh, congested sinus, cut, deformity, dizziness, ear discharge, earache, epistaxis, erythema, foreign body, hearing disturbance, hoarse voice, itching, loss of hearing, loss of smell, loss of taste` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 20. Icon filter: 12th icon (face and neck with red marks)

![State 20: Icon filter: 12th icon (face and neck with red marks)](img/20-icon-filter-endocrine.png)

- **Time:** [13:33](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=813) (813 s)
- **Action / choice:** Click on the 12th icon (face and neck with red marks) (endocrine / metabolic; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 12th icon (face and neck with red marks) is pressed, Location `None`, no inset. Visible list items: `frequent infections, heat intolerance, hot flushes, hyperhidrosis, itching, large body, large breast, large ear, large foot, large hand, large head, large jaw, large lip, large mouth, large nipple, large nose, large penis, large testis, large tongue, lump, oedema, pallor, polydipsia, polyuria, sensitivity to cold` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 21. Icon filter: 13th icon (red blood cells)

![State 21: Icon filter: 13th icon (red blood cells)](img/21-icon-filter-blood.png)

- **Time:** [13:34](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=814) (814 s)
- **Action / choice:** Click on the 13th icon (red blood cells) (blood / haematology; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 13th icon (red blood cells) is pressed, Location `None`, no inset. Visible list items: `bleeding gum, bruise, cyanosis, dyspnoea, erythema, frequent infections, itching, jaundice, lump, lymphadenopathy, oral bleeding, pallor, skin discolouration, skin dryness, spot, swelling, weight gain, weight loss` (whole list visible).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 22. Icon filter: 14th icon (skin cross-section)

![State 22: Icon filter: 14th icon (skin cross-section)](img/22-icon-filter-skin.png)

- **Time:** [13:36](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=816) (816 s)
- **Action / choice:** Click on the 14th icon (skin cross-section) (skin; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 14th icon (skin cross-section) is pressed, Location `None`, no inset. Visible list items: `abnormal texture, abrasion, bite, blister, bruise, burn, cut, dandruff, deformity, discolouration, erythema, foreign body, hair loss, hyperhidrosis, itching, lump, mole, non normal skin texture, numbness, pain, paraesthesia, plaque, rash, scald, skin discolouration` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

### 23. Icon filter: 15th icon (Ψ)

![State 23: Icon filter: 15th icon (Ψ)](img/23-icon-filter-psychological.png)

- **Time:** [13:37](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=817) (817 s)
- **Action / choice:** Click on the 15th icon (Ψ) (psychological / psychiatric; inferred).
- **Change from previous state:** Only the pick-list (and the pressed icon) changes.
- **Visible UI:** Topics layout as described in state 2. The 15th icon (Ψ) is pressed, Location `None`, no inset. Visible list items: `abrasion, agitation, anxiousness, bite, blister, bruise, burn, confusion, crying, cut, deformity, delusion, depressed mood, disturbed sleep wake cycle, early morning wakening, erythema, excessive sleep, failure of erection, fatigue, foreign body, generalised aching, hallucination, hyperventilation, irritability, itching` … (continues).
- **Narration:** (No narration about this particular icon; Alan is talking about icons versus text lists, [12:30]–[13:41].)

## C. Thumb → pain → Form

### 24. Thumb path: hand selected straight from the body

![State 24: Thumb path: hand selected straight from the body](img/24-hand-zoom-from-body.png)

- **Time:** [13:48](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=828) (828 s)
- **Action / choice:** Bent-arm icon, then (after hovering `arm`) a click on the hand of the full-body picture.
- **Change from previous state:** This time the hand is reached in one click from the whole body; the arm inset is skipped.
- **Visible UI:** Topics layout as described in state 2. The bent-arm icon is pressed again. Inset with the enlarged hand; a rectangle outlines the palm and the label reads `palm`. Location: `hand`. List: `deformity, joint stiffness, lump, pain, tenderness`.
- **Narration:** Alan Rector, [13:46]: "If you go and you select the hand, you'll see that each time you select a part, it will reduce the number of possibilities and eventually you get down to a list of words."

### 25. Hand inset: hovering over the thumb

![State 25: Hand inset: hovering over the thumb](img/25-hand-zoom-hover-thumb.png)

- **Time:** [13:51](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=831) (831 s)
- **Action / choice:** Nothing chosen; hover over the thumb.
- **Change from previous state:** Hover label `thumb`.
- **Visible UI:** Topics layout as described in state 2. Hand inset; a rectangle outlines the thumb and the label reads `thumb`. Location still `hand`, same 5-item list.
- **Narration:** Alan Rector, [14:01]: "That's just the way people communicate."

### 26. Thumb selected

![State 26: Thumb selected](img/26-thumb-selected.png)

- **Time:** [14:01](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=841) (841 s)
- **Action / choice:** Click on the thumb.
- **Change from previous state:** Location `hand` → `thumb`; the list gains `joint clicking` and `joint locking`.
- **Visible UI:** Topics layout as described in state 2. Hand inset with the thumb outlined and labelled `thumb`. Location: `thumb`. List: `deformity, joint clicking, joint locking, joint stiffness, lump, pain, tenderness`.
- **Narration:** Alan Rector, [14:04]: "And you've got down actually to the thumb there, nicely located, and if you pick pain."

### 27. 'pain' picked: Thumb pain ready

![State 27: 'pain' picked: Thumb pain ready](img/27-pain-selected-form-enabled.png)

- **Time:** [14:14](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=854) (854 s)
- **Action / choice:** Click on `pain` in the list.
- **Change from previous state:** Location + finding are combined into the phrase `Thumb pain`, which names the tab and fills the bottom field; Form becomes clickable.
- **Visible UI:** As state 26, but `pain` is highlighted (white on dark blue) in the list. The second tab, previously the greyed **Form** tab, is now labelled **Thumb pain**. The bottom text field contains `Thumb pain` and the **Form** button beside it is enabled. The pointer later moves to the Form button.
- **Narration:** Erik Sundvall, [14:11]: "So thumb and then pain. It says thumb pain down here." Alan Rector, [14:18]: "Thumb pain, and then you press form. And that's one more click than we wanted. We were trying to get the clicks down, but for technical reasons, which I cannot remember, we couldn't get rid of that last click."

## D. The Thumb pain form and its pop-ups

### 28. The Thumb pain form

![State 28: The Thumb pain form](img/28-thumb-pain-form-initial.png)

- **Time:** [14:21](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=861) (861 s)
- **Action / choice:** Click on **Form**.
- **Change from previous state:** The Topics picker is replaced by a data-entry form built for 'thumb pain'.
- **Visible UI:** **Thumb pain** tab of the Clinergy GP window (the window is now wider). Left part, in labelled groups: **Descriptors** — *Laterality* (green label) `left` `right`; *Duration* a number field with ◂ ▸ spin arrows and a `days` drop-down; *Character* `aching` `piercing` `dull` `throbbing` `pressing` `burning`; *Severity* `mild` `moderate` `severe`; *Frequency* `infrequent` `occasional` `frequent`; and a `>>` button. **Associated Symptoms** `all...` — *Thumb swelling* `absent` `present` `more...`. **Further History** — `FH` `PMH` and a greyed-out `SH`. **Examinations** `all...` — *Examination* `normal`; *Left thumb* `normal` `not examined` `more...`; *Right thumb* `normal` `not examined` `more...`. **Diagnoses** `all...` with an empty drop-down; **Interventions** `all...`. Field labels are dark red, group headings blue. Right part: a **Summary** text box, a **Comment** text box, and **Accept** **Reset** **Cancel** buttons. Top right: **Customise**, **Help**. Nothing is selected. The `left` button has a dotted focus rectangle. Summary: `Thumb pain`. Comment: empty. The Topics tab is still shown in normal text.
- **Narration:** Alan Rector, [14:37]: "you popped up a form and just a few things about these forms." [14:42]: "They were meant to be fairly large and easy to click on." [14:45]: "We didn't, we didn't use the dominant pattern at the time for forms, it was radio buttons and little round buttons and we wanted things that were big, that people could hit easily." [14:58]: "And we also wanted people to be able to turn away at any time."

### 29. 'more...' on Thumb swelling (nothing set yet)

![State 29: 'more...' on Thumb swelling (nothing set yet)](img/29-more-on-thumb-swelling-empty.png)

- **Time:** [15:09](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=909) (909 s)
- **Action / choice:** Click on `more...` next to Thumb swelling.
- **Change from previous state:** A second-level detail form for the associated symptom pops up and stays open (it is not a pull-down).
- **Visible UI:** A pop-up window **More on Thumb swelling** over the form, with a **Descriptors** group: *Thumb swelling* `absent` `present`; *Laterality* (green) `left` `right`; *Sublocation* `thumb nail` `proximal phalanx` / `distal phalanx` `I-P joint` `MCP joint` / `thenar eminence`; *Duration* number field with ◂ ▸ and a `days` drop-down; *Onset* `gradual` `rapid` `sudden`; *Severity* `mild` `moderate` `severe`; a `>>` button; and at the bottom **Accept** **Reset** **Cancel**. Nothing is selected; `absent` has the focus rectangle; **Accept** and **Reset** are greyed out, only **Cancel** is active. The main form behind is unchanged; Summary `Thumb pain`.
- **Narration:** Alan Rector, [15:05]: "So the reason there are “more”-buttons there, rather than click and press on present, which was: if you click on 'Thumb swelling' 'present', you just get present."

### 30. Thumb swelling: present

![State 30: Thumb swelling: present](img/30-thumb-swelling-present.png)

- **Time:** [15:19](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=919) (919 s)
- **Action / choice:** Cancel in the pop-up, then click `present` on the main form.
- **Change from previous state:** One click records the finding; the summary gets a new line generated from it.
- **Visible UI:** Form layout as described in state 28. The pop-up has been cancelled (at about 15:14). *Thumb swelling* `present` is now selected (black background, white text). Summary: `Thumb pain` / `Thumb swelling present`. The **Topics** tab label is now greyed out.
- **Narration:** Alan Rector, [15:12]–[15:21]: "if you click on 'Thumb swelling' 'present', you just get present."

### 31. 'more...' again, with 'present' carried over

![State 31: 'more...' again, with 'present' carried over](img/31-more-on-thumb-swelling-present.png)

- **Time:** [15:30](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=930) (930 s)
- **Action / choice:** Click on `more...` next to Thumb swelling.
- **Change from previous state:** The detail pop-up opens with the value already chosen on the main form.
- **Visible UI:** Pop-up **More on Thumb swelling** (layout as described in state 29). `present` is already selected in the pop-up; Accept still greyed, Reset and Cancel active. On the main form `present` stays selected.
- **Narration:** Alan Rector, [15:21]: "If you click on 'more…', you'll get a further form with details. And here I see text also generated. And it's also generated some text."

### 32. Laterality: left

![State 32: Laterality: left](img/32-laterality-left.png)

- **Time:** [15:47](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=947) (947 s)
- **Action / choice:** Click `left`.
- **Change from previous state:** The summary sentence is regenerated: 'Thumb swelling present' → 'Swelling of left thumb present'.
- **Visible UI:** Pop-up **More on Thumb swelling** (layout as described in state 29). Selected: `present`, `left`. Accept, Reset and Cancel all active. Summary: `Thumb pain` / `Swelling of left thumb present`.
- **Narration:** Alan Rector, [15:29]: "And if you click there, you'll get, and another form comes up. It isn't something you have to hold on. It's not a pull-down. It's something that pops up and stays there." [15:42]: "So you can turn away to the patient."

### 33. Sublocation: distal phalanx

![State 33: Sublocation: distal phalanx](img/33-sublocation-distal-phalanx.png)

- **Time:** [15:54](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=954) (954 s)
- **Action / choice:** Click `distal phalanx`.
- **Change from previous state:** The sublocation is woven into the sentence.
- **Visible UI:** Pop-up **More on Thumb swelling** (layout as described in state 29). Selected: `present`, `left`, `distal phalanx`. Summary: `Thumb pain` / `Swelling of distal phalanx of left thumb present`.
- **Narration:** Alan Rector, [15:45]: "And again, one of the things we were very concerned about is that doctors didn't have to pay too much attention."

### 34. Duration: 2, unit list open

![State 34: Duration: 2, unit list open](img/34-duration-2-unit-dropdown.png)

- **Time:** [15:59](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=959) (959 s)
- **Action / choice:** Click the ▸ spin arrow twice (value 2), then open the unit drop-down.
- **Change from previous state:** Duration is added to the sentence immediately, using the default unit `days`.
- **Visible UI:** Pop-up **More on Thumb swelling** (layout as described in state 29). Duration field shows `2` (set with the ▸ arrow); the unit drop-down is open with the options `seconds minutes hours days weeks months years` (`days` highlighted). Summary: `Thumb pain` / `Swelling of distal phalanx of left thumb for 2 days, present`.
- **Narration:** Alan Rector, [15:52]: "We tried to make the forms actually as big as we could given the screens of the day."

### 35. Duration unit: weeks

![State 35: Duration unit: weeks](img/35-duration-weeks.png)

- **Time:** [16:01](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=961) (961 s)
- **Action / choice:** Choose `weeks`.
- **Change from previous state:** 'for 2 days' → 'for 2 weeks'.
- **Visible UI:** Pop-up **More on Thumb swelling** (layout as described in state 29). Duration `2` `weeks`. Summary: `Thumb pain` / `Swelling of distal phalanx of left thumb for 2 weeks, present`.
- **Narration:** (Narration continues about screen size, [15:59]–[16:06].)

### 36. Onset: gradual

![State 36: Onset: gradual](img/36-onset-gradual.png)

- **Time:** [16:05](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=965) (965 s)
- **Action / choice:** Click `gradual`.
- **Change from previous state:** Onset is put at the front of the sentence.
- **Visible UI:** Pop-up **More on Thumb swelling** (layout as described in state 29). Adds `gradual` (Onset). Summary: `Thumb pain` / `Gradual onset swelling of distal phalanx of left thumb for 2 weeks, present`.
- **Narration:** (Same as state 35.)

### 37. Severity: moderate

![State 37: Severity: moderate](img/37-severity-moderate.png)

- **Time:** [16:06](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=966) (966 s)
- **Action / choice:** Click `moderate`.
- **Change from previous state:** Severity becomes the adverbial phrase 'moderately severe'.
- **Visible UI:** Pop-up **More on Thumb swelling** (layout as described in state 29). Selected: `present`, `left`, `distal phalanx`, `2` `weeks`, `gradual`, `moderate`. Summary: `Thumb pain` / `Gradual onset, moderately severe swelling of distal phalanx of left thumb for 2 weeks, present`. (The pop-up stays like this until about 16:47.)
- **Narration:** Alan Rector, [16:11]: "We had some long discussions with Patrice Degoulet in France, who had a system in which they tried to cram as much information as humanly possible on a form because people didn't wanna change the forms very often." [16:31]: "We went the other way." [16:33]: "We were trying to keep each individual form as simple as possible."

### 38. Pop-up accepted: back on the main form

![State 38: Pop-up accepted: back on the main form](img/38-swelling-accepted-main-form.png)

- **Time:** [16:48](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1008) (1008 s)
- **Action / choice:** Click **Accept** in the pop-up.
- **Change from previous state:** The pop-up closes; its data is kept, and the `more...` button stays highlighted.
- **Visible UI:** Form layout as described in state 28. *Thumb swelling*: both `present` and `more...` are shown selected (black), marking that details exist. Summary: `Thumb pain` / `Gradual onset, moderately severe swelling of distal phalanx of left thumb for 2 weeks, present`.
- **Narration:** Alan Rector, [16:38]: "That one doesn't have any further levels but you, you could get a third level on some things. If, if you cancel what you have there, or accept it, and you go to more on right thumb."

### 39. 'more...' on Right thumb (examination)

![State 39: 'more...' on Right thumb (examination)](img/39-more-on-right-thumb.png)

- **Time:** [16:53](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1013) (1013 s)
- **Action / choice:** Click `more...` on the *Right thumb* examination row.
- **Change from previous state:** Second-level pop-up for the examination of the right thumb. It offers its own `more...` buttons.
- **Visible UI:** Pop-up **More on Right thumb** with a group heading **Right thumb** `all...`: *Right thumb* `normal` `not examined`; *Tenderness* `absent` `present` `more...`; *Right thumb joint* `normal` `not examined` `more...`; bottom **Accept** **Reset** **Cancel**. Nothing selected; `normal` has the focus rectangle; Accept and Reset greyed. Summary unchanged.
- **Narration:** Alan Rector, [16:47]: "or accept it, and you go to more on right thumb."

### 40. 'more...' on Right thumb joint (third level)

![State 40: 'more...' on Right thumb joint (third level)](img/40-more-on-right-thumb-joint.png)

- **Time:** [17:00](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1020) (1020 s)
- **Action / choice:** Click `more...` on *Right thumb joint* in the Right thumb pop-up.
- **Change from previous state:** A third level opens.
- **Visible UI:** Third-level pop-up **More on Right thumb joint**, heading **Right thumb joint** `all...`: *Right thumb joint* `normal` `not examined`; then four movements, each with two rows — **Flexion**, **Extension**, **Abduction**, **Adduction**: *Range* `full` `reduced` `limited` `minimal`; *Pain on movement* `absent` `mild` `moderate` `severe`. Bottom **Accept** **Reset** **Cancel**. Nothing selected; Accept and Reset greyed. It overlaps the Right thumb pop-up and the main form.
- **Narration:** Alan Rector, [16:53]: "Yes, you see there, the right thumb joint, you still get another more, and you can keep going."

### 41. Flexion range: full

![State 41: Flexion range: full](img/41-flexion-range-full.png)

- **Time:** [17:07](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1027) (1027 s)
- **Action / choice:** Click `full` (Flexion Range).
- **Change from previous state:** A new 'On Examination' block is added to the summary, indented by body part.
- **Visible UI:** Pop-up **More on Right thumb joint** (layout as described in state 40). Flexion *Range* `full` selected. Accept, Reset active. Summary now: `Thumb pain` / `Gradual onset, moderately severe swelling of distal phalanx of left thumb for 2 weeks, present` / (blank line) / `On Examination` / `Right thumb:` / `  Right thumb joint: flexion full range`.
- **Narration:** Alan Rector, [17:02]: "Now the other thing about these forms and the reason you could have so many of them is they weren't built individually in advance."

### 42. Flexion pain on movement: mild

![State 42: Flexion pain on movement: mild](img/42-flexion-pain-mild.png)

- **Time:** [17:09](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1029) (1029 s)
- **Action / choice:** Click `mild` (Flexion, Pain on movement).
- **Change from previous state:** 'mildly painful' added to the flexion phrase.
- **Visible UI:** Pop-up **More on Right thumb joint** (layout as described in state 40). Adds Flexion *Pain on movement* `mild`. Summary last line: `Right thumb joint: flexion full range, mildly painful`.
- **Narration:** Alan Rector, [17:10]: "All of the forms were built out of fragmentary forms that were assembled on the fly."

### 43. Extension range: reduced

![State 43: Extension range: reduced](img/43-extension-reduced.png)

- **Time:** [17:18](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1038) (1038 s)
- **Action / choice:** Click `reduced` (Extension Range).
- **Change from previous state:** A second movement phrase, separated by a semicolon.
- **Visible UI:** Pop-up **More on Right thumb joint** (layout as described in state 40). Adds Extension *Range* `reduced`. Summary: `Right thumb joint: flexion full range, mildly painful; extension reduced range`.
- **Narration:** Alan Rector, [17:18]: "And a great deal of the trick was the techniques that we used took a long time to build and the classification process that was essential to making this work, was very slow at the time."

### 44. Abduction range: reduced

![State 44: Abduction range: reduced](img/44-abduction-reduced.png)

- **Time:** [17:19](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1039) (1039 s)
- **Action / choice:** Click `reduced` (Abduction Range).
- **Change from previous state:** Third movement phrase added.
- **Visible UI:** Pop-up **More on Right thumb joint** (layout as described in state 40). Adds Abduction *Range* `reduced`. Summary: `Right thumb joint: flexion full range, mildly painful; extension reduced range; abduction reduced range`. (At 17:24 the pop-up is dragged a little; then it stays open until 18:15.)
- **Narration:** Alan Rector, [17:34]: "But the retrieval technique that I'll talk about again in the technical section, is very fast."

### 45. Joint pop-up accepted: back in Right thumb

![State 45: Joint pop-up accepted: back in Right thumb](img/45-joint-accepted-right-thumb-popup.png)

- **Time:** [18:15](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1095) (1095 s)
- **Action / choice:** Click **Accept** in the Right thumb joint pop-up. (Two black frames in the recording at about 18:10 and 18:13 are recording glitches, not UI states.)
- **Change from previous state:** The third-level pop-up closes; the second-level `more...` is highlighted to show stored detail.
- **Visible UI:** Pop-up **More on Right thumb** (layout as described in state 39). *Right thumb joint* `more...` is shown selected (black). Accept, Reset, Cancel active. Main form behind; summary unchanged from state 44.
- **Narration:** Alan Rector, [17:51]: "You actually could change the underlying structure and talk about fingers one to five rather than thumb something of that sort, that's a silly example, but nevermind. Or you could, the things that we hung on the ontology, which were these fragments that we assembled, all those fragments were hung on the ontology and you could add it to those."

### 46. Right thumb pop-up accepted: main form

![State 46: Right thumb pop-up accepted: main form](img/46-right-thumb-accepted-main-form.png)

- **Time:** [18:24](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1104) (1104 s)
- **Action / choice:** Click **Accept** in the Right thumb pop-up.
- **Change from previous state:** All pop-ups closed; the main form shows which rows hold detail.
- **Visible UI:** Form layout as described in state 28. Selected: Thumb swelling `present` + `more...`; Right thumb `more...` (black). Summary as in state 44 (pain line, swelling sentence, On Examination block).
- **Narration:** Alan Rector, [18:24]: "But you added to them in fairly small bits, roughly each little section you see there."

### 47. Right thumb pop-up reopened

![State 47: Right thumb pop-up reopened](img/47-more-on-right-thumb-reopened.png)

- **Time:** [18:35](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1115) (1115 s)
- **Action / choice:** Click `more...` on Right thumb again.
- **Change from previous state:** Re-opening shows the stored state.
- **Visible UI:** Pop-up **More on Right thumb** (layout as described in state 39). *Right thumb joint* `more...` is selected (black); Accept greyed, Reset and Cancel active.
- **Narration:** Alan Rector, [18:26]: "The thing that would be the examination and whether there was anything more than normal an examination would be in that particular location for the left thumb would be something that would be assembled out of well, what is there for examinations always?"

### 48. Right thumb joint pop-up reopened with stored values

![State 48: Right thumb joint pop-up reopened with stored values](img/48-right-thumb-joint-reopened.png)

- **Time:** [18:37](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1117) (1117 s)
- **Action / choice:** Click `more...` on Right thumb joint.
- **Change from previous state:** The earlier choices are kept and displayed.
- **Visible UI:** Pop-up **More on Right thumb joint** (layout as described in state 40). Stored values are shown: Flexion `full` + `mild`, Extension `reduced`, Abduction `reduced`. Accept greyed; Reset, Cancel active. (At about 18:39 it is dragged to the right so that it overlaps the Right thumb pop-up less; it then stays open until 21:35.)
- **Narration:** Alan Rector, [18:49]: "There's always present or absent for certain kinds of things. What is there for the thumb? What are the specific things? Well, there's flexion, there's extension, there's abduction, there's adduction. What can be the values of those things?" [19:05]: "That's what was actually held as additional information and getting that correctly balanced between what was in the terminology and what was hung on the terminology was the clever bit."

### 49. Joint pop-up cancelled

![State 49: Joint pop-up cancelled](img/49-joint-cancelled-right-thumb-popup.png)

- **Time:** [21:35](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1295) (1295 s)
- **Action / choice:** Click **Cancel** in the Right thumb joint pop-up (the pointer is on Cancel just before it closes).
- **Change from previous state:** Cancel closes the pop-up without losing the earlier accepted data.
- **Visible UI:** Pop-up **More on Right thumb** (layout as described in state 39). `more...` on Right thumb joint still selected; Accept, Reset, Cancel visible (Accept appears active).
- **Narration:** Alan Rector, [21:32]: "But an important part of QA was also both our own checks and immediately checks, because this did actually get deployed in about 15 or 20 practices before the national program for IT saw fit to put a halt on GPs acquiring new systems."

### 50. All pop-ups closed

![State 50: All pop-ups closed](img/50-main-form-after-popups-closed.png)

- **Time:** [21:39](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1299) (1299 s)
- **Action / choice:** The Right thumb pop-up is closed (the pointer is on **Accept** just before it closes).
- **Change from previous state:** Back to the main form.
- **Visible UI:** Form layout as described in state 28. Same selections and summary as state 46.
- **Narration:** (Same narration as state 49.)

### 51. Laterality: right

![State 51: Laterality: right](img/51-laterality-right.png)

- **Time:** [22:15](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1335) (1335 s)
- **Action / choice:** Click `right` in the Descriptors group.
- **Change from previous state:** The main finding's sentence is regenerated: 'Thumb pain' → 'Pain in right thumb'. (Note that the swelling, entered earlier, is still recorded as left.)
- **Visible UI:** Form layout as described in state 28. *Laterality* `right` selected (black). Summary first line changes: `Pain in right thumb` / `Gradual onset, moderately severe swelling of distal phalanx of left thumb for 2 weeks, present` / `On Examination` / `Right thumb:` / `  Right thumb joint: flexion full range, mildly painful; extension reduced range; abduction reduced range`. The screen stays like this until about 23:37.
- **Narration:** Erik Sundvall, [22:16]: "Yeah, so this actually looks more advanced than many systems you see today."

## Interaction pattern and data-model notes (inference)

*Everything in this section is **inference** from the screens and narration above. It is not documentation of the original code.*

**Interaction pattern**

1. **Category, then topic.** The launch panel (and the left column inside Clinergy) picks a *kind* of entry: SYM (symptom, as Erik calls it at 12:23), then DIS, CHK, FH, PMH, INT. Going by the form sections, these probably mean diagnoses/disorders, examination ("check"), family history, past medical history and interventions, but only SYM is used in the demo. QDE is not explained.
2. **Three ways to narrow the topic list, used together:**
   - icon filters (body system);
   - a clickable body picture with drill-down insets: body → arm → hand → thumb, or body → hand directly; body → head → jaw/nose/scalp. Hover shows a rectangle and a label. Clicking sets **Location** and opens a closer inset;
   - the plain text list.
   Each choice cuts down the list. Alan: "each time you select a part, it will reduce the number of possibilities and eventually you get down to a list of words."
3. **Topic = location + finding.** Picking `pain` at Location `thumb` gives the phrase "Thumb pain", which names the form tab and fills the bottom field. Then **Form** is pressed: one extra click that Alan says they wanted to remove.
4. **Generated form.** The form has fixed groups: Descriptors, Associated Symptoms, Further History, Examinations, Diagnoses, Interventions. Their rows depend on the topic: thumb swelling as an associated symptom, and left and right thumb examinations.
5. **Big toggle buttons instead of radio buttons.** Choices are large buttons that turn black when selected. One click on a value (e.g. `present`) records it.
6. **"more..." opens a modeless detail pop-up**, which stays open, so the clinician can turn to the patient. Pop-ups nest; three levels are shown (form → Right thumb → Right thumb joint).
   **Accept** is disabled until something changes. **Accept** keeps the data; **Cancel** closes the pop-up and does not undo earlier accepted data. After Accept, the parent's `more...` button stays highlighted to show that detail is stored.
   Re-opening a pop-up shows the stored values.
7. **Live natural-language summary.** Every click regenerates the summary text, e.g.
   `Thumb swelling present` → `Swelling of left thumb present` → `… distal phalanx of left thumb …` → `… for 2 days, present` → `… 2 weeks …` → `Gradual onset …` → `Gradual onset, moderately severe swelling …`.
   Examination findings go into a separate `On Examination` block, nested by body part (`Right thumb:` → `Right thumb joint: …`), with movements separated by semicolons. Choosing laterality on the main topic rewrites its line: `Thumb pain` → `Pain in right thumb`.
8. **Defaults** show up in the generated text: once a duration number is set, the default unit `days` is used before a unit is chosen.

**Data-model implications**

- A finding seems to be built up as a *compositional description* around a body location and a finding type, with optional qualifiers: laterality, sublocation, duration (value + unit), onset, severity, character and frequency. The text is generated from that structure, not stored as text.
  This matches Alan's account: forms "were built out of fragmentary forms that were assembled on the fly", from fragments "hung on the ontology" ([17:10](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1030), [18:11](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1091)).
- Which rows appear depends on the anatomy. The thumb joint offers flexion, extension, abduction and adduction, each with range and pain-on-movement values. Alan names exactly these as "what is there for the thumb" ([18:49](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1129)).
  The generic parts include present/absent, normal/not examined, and severity scales. A rebuild could keep (a) an anatomy/finding ontology and (b) small reusable form fragments attached to ontology classes, and put the form together at run time.
- The available sublocations of the thumb (thumb nail, proximal phalanx, distal phalanx, I-P joint, MCP joint, thenar eminence) and the laterality pair also suggest that part-of relations in the anatomy model drive the choices.
- Each finding has its own laterality. In the final state the main topic is right-sided while the associated swelling stays left-sided, so qualifiers belong to each finding, not to the whole encounter.
- The host record shows a coded history (`F7-Read codes`, `Show Read Codes (F6)`). That suggests each structured entry maps to Read codes, but the demo does not show the mapping in this segment.

**Other observations**

- The host history already lists `21-10-21 Thumb pain`, the recording date, so the same demo was probably run earlier that day.
- Hover labels seen: `arm`, `hand`, `palm`, `thumb`, `index finger`, `middle finger`, `ring finger`, `little finger`, `body as a whole`, `head`, `nose`, `jaw`, `scalp`.

## Table of all states

| # | Time | State | Action | Summary text after the action (new or changed part) |
|---|------|-------|--------|------------------------------------------------------|
| 1 | [12:24](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=744) | [Host system with the Clinergy launch panel](img/01-host-system-clinergy-launch.png) | The mouse pointer is on **SYM** in the Clinergy Launch group. | — |
| 2 | [12:28](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=748) | [Topics picker: all symptoms](img/02-topics-symptoms-all.png) | SYM was clicked in the launch panel; **All** is the active icon. | — |
| 3 | [12:44](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=764) | [Icon filter: bent-arm (joints) icon](img/03-topics-musculoskeletal-filter.png) | Bent-arm icon (by its list, the joints / musculoskeletal group; the icon has no visible caption). | — |
| 4 | [12:49](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=769) | [Hovering over the arm](img/04-hover-arm.png) | Nothing chosen; the pointer hovers over the arm. | — |
| 5 | [12:50](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=770) | [Arm selected: enlarged arm drawing](img/05-arm-zoom.png) | Click on the arm. | — |
| 6 | [12:52](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=772) | [Arm inset: hovering over the hand](img/06-arm-zoom-hover-hand.png) | Nothing chosen; hover over the hand inside the arm inset. | — |
| 7 | [12:55](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=775) | [Hand selected (first pass): enlarged hand](img/07-hand-zoom-first-pass.png) | Click on the hand | — |
| 8 | [12:59](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=779) | [Body as a whole selected](img/08-body-as-a-whole-selected.png) | Click on the body outside a specific part. | — |
| 9 | [13:01](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=781) | [Head selected: enlarged head in profile](img/09-head-zoom-hover-jaw.png) | Click on the head; the pointer then hovers over the jaw. | — |
| 10 | [13:05](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=785) | [Back to the whole body, Location None](img/10-location-reset.png) | Click that leaves the head inset (the exact target is not visible; the pointer is near the Location field). | — |
| 11 | [13:08](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=788) | [Icon filter: 7th icon (red strokes)](img/11-icon-filter-muscle.png) | Click on the 7th icon (red strokes) (muscle and general aches; inferred from the list). | — |
| 12 | [13:10](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=790) | [Icon filter: 6th icon (genito-urinary drawing)](img/12-icon-filter-genitourinary.png) | Click on the 6th icon (genito-urinary drawing) (genito-urinary; inferred). | — |
| 13 | [13:12](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=792) | [Icon filter: 5th icon (stomach and intestine)](img/13-icon-filter-digestive.png) | Click on the 5th icon (stomach and intestine) (digestive; inferred). | — |
| 14 | [13:14](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=794) | [Icon filter: 4th icon (lungs)](img/14-icon-filter-respiratory.png) | Click on the 4th icon (lungs) (respiratory; inferred). | — |
| 15 | [13:17](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=797) | [Icon filter: 3rd icon (heart)](img/15-icon-filter-cardiovascular.png) | Click on the 3rd icon (heart) (cardiovascular; inferred). | — |
| 16 | [13:24](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=804) | [Icon filter: 2nd icon (standing figure)](img/16-icon-filter-general.png) | Click on the 2nd icon (standing figure) (general / whole person; inferred). | — |
| 17 | [13:27](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=807) | [Icon filter: 9th icon (brain)](img/17-icon-filter-neurological.png) | Click on the 9th icon (brain) (neurological; inferred). | — |
| 18 | [13:28](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=808) | [Icon filter: 10th icon (eye)](img/18-icon-filter-eye.png) | Click on the 10th icon (eye) (eye; inferred). | — |
| 19 | [13:30](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=810) | [Icon filter: 11th icon (ear)](img/19-icon-filter-ear-nose-throat.png) | Click on the 11th icon (ear) (ear, nose and throat; inferred). | — |
| 20 | [13:33](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=813) | [Icon filter: 12th icon (face and neck with red marks)](img/20-icon-filter-endocrine.png) | Click on the 12th icon (face and neck with red marks) (endocrine / metabolic; inferred). | — |
| 21 | [13:34](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=814) | [Icon filter: 13th icon (red blood cells)](img/21-icon-filter-blood.png) | Click on the 13th icon (red blood cells) (blood / haematology; inferred). | — |
| 22 | [13:36](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=816) | [Icon filter: 14th icon (skin cross-section)](img/22-icon-filter-skin.png) | Click on the 14th icon (skin cross-section) (skin; inferred). | — |
| 23 | [13:37](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=817) | [Icon filter: 15th icon (Ψ)](img/23-icon-filter-psychological.png) | Click on the 15th icon (Ψ) (psychological / psychiatric; inferred). | — |
| 24 | [13:48](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=828) | [Thumb path: hand selected straight from the body](img/24-hand-zoom-from-body.png) | Bent-arm icon, then (after hovering `arm`) a click on the hand of the full-body picture. | — |
| 25 | [13:51](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=831) | [Hand inset: hovering over the thumb](img/25-hand-zoom-hover-thumb.png) | Nothing chosen; hover over the thumb. | — |
| 26 | [14:01](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=841) | [Thumb selected](img/26-thumb-selected.png) | Click on the thumb. | — |
| 27 | [14:14](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=854) | ['pain' picked: Thumb pain ready](img/27-pain-selected-form-enabled.png) | Click on `pain` in the list. | (no summary yet; bottom field `Thumb pain`) |
| 28 | [14:21](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=861) | [The Thumb pain form](img/28-thumb-pain-form-initial.png) | Click on **Form**. | `Thumb pain` |
| 29 | [15:09](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=909) | ['more...' on Thumb swelling (nothing set yet)](img/29-more-on-thumb-swelling-empty.png) | Click on `more...` next to Thumb swelling. | — |
| 30 | [15:19](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=919) | [Thumb swelling: present](img/30-thumb-swelling-present.png) | Cancel in the pop-up, then click `present` on the main form. | `Thumb swelling present` |
| 31 | [15:30](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=930) | ['more...' again, with 'present' carried over](img/31-more-on-thumb-swelling-present.png) | Click on `more...` next to Thumb swelling. | — |
| 32 | [15:47](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=947) | [Laterality: left](img/32-laterality-left.png) | Click `left`. | `Swelling of left thumb present` |
| 33 | [15:54](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=954) | [Sublocation: distal phalanx](img/33-sublocation-distal-phalanx.png) | Click `distal phalanx`. | `Swelling of distal phalanx of left thumb present` |
| 34 | [15:59](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=959) | [Duration: 2, unit list open](img/34-duration-2-unit-dropdown.png) | Click the ▸ spin arrow twice (value 2), then open the unit drop-down. | `… for 2 days, present` |
| 35 | [16:01](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=961) | [Duration unit: weeks](img/35-duration-weeks.png) | Choose `weeks`. | `… for 2 weeks, present` |
| 36 | [16:05](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=965) | [Onset: gradual](img/36-onset-gradual.png) | Click `gradual`. | `Gradual onset swelling …` |
| 37 | [16:06](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=966) | [Severity: moderate](img/37-severity-moderate.png) | Click `moderate`. | `Gradual onset, moderately severe swelling …` |
| 38 | [16:48](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1008) | [Pop-up accepted: back on the main form](img/38-swelling-accepted-main-form.png) | Click **Accept** in the pop-up. | — |
| 39 | [16:53](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1013) | ['more...' on Right thumb (examination)](img/39-more-on-right-thumb.png) | Click `more...` on the *Right thumb* examination row. | — |
| 40 | [17:00](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1020) | ['more...' on Right thumb joint (third level)](img/40-more-on-right-thumb-joint.png) | Click `more...` on *Right thumb joint* in the Right thumb pop-up. | — |
| 41 | [17:07](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1027) | [Flexion range: full](img/41-flexion-range-full.png) | Click `full` (Flexion Range). | `On Examination / Right thumb: / Right thumb joint: flexion full range` |
| 42 | [17:09](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1029) | [Flexion pain on movement: mild](img/42-flexion-pain-mild.png) | Click `mild` (Flexion, Pain on movement). | `… flexion full range, mildly painful` |
| 43 | [17:18](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1038) | [Extension range: reduced](img/43-extension-reduced.png) | Click `reduced` (Extension Range). | `…; extension reduced range` |
| 44 | [17:19](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1039) | [Abduction range: reduced](img/44-abduction-reduced.png) | Click `reduced` (Abduction Range). | `…; abduction reduced range` |
| 45 | [18:15](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1095) | [Joint pop-up accepted: back in Right thumb](img/45-joint-accepted-right-thumb-popup.png) | Click **Accept** in the Right thumb joint pop-up | — |
| 46 | [18:24](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1104) | [Right thumb pop-up accepted: main form](img/46-right-thumb-accepted-main-form.png) | Click **Accept** in the Right thumb pop-up. | — |
| 47 | [18:35](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1115) | [Right thumb pop-up reopened](img/47-more-on-right-thumb-reopened.png) | Click `more...` on Right thumb again. | — |
| 48 | [18:37](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1117) | [Right thumb joint pop-up reopened with stored values](img/48-right-thumb-joint-reopened.png) | Click `more...` on Right thumb joint. | — |
| 49 | [21:35](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1295) | [Joint pop-up cancelled](img/49-joint-cancelled-right-thumb-popup.png) | Click **Cancel** in the Right thumb joint pop-up (the pointer is on Cancel just before it closes). | — |
| 50 | [21:39](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1299) | [All pop-ups closed](img/50-main-form-after-popups-closed.png) | The Right thumb pop-up is closed (the pointer is on **Accept** just before it closes). | — |
| 51 | [22:15](https://pen-pad-revival.github.io/interviews/alan-rector-part-1/#t=1335) | [Laterality: right](img/51-laterality-right.png) | Click `right` in the Descriptors group. | first line → `Pain in right thumb` |

---

*Prepared for the PEN&PAD revival site. Screenshots: CC BY 4.0, derived from the part 1 interview video (Alan Rector interviewed by Erik Sundvall and Daniel Karlsson, 2021). Corrections are welcome as issues or pull requests.*

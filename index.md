# Join the PEN&PAD revieval community!

This is the humble beginning of a website for the PEN &amp; PAD revival community - https://pen-pad-revival.github.io

## [Interviews](https://github.com/pen-pad-revival/interviews/)

### A conversation with Alan Rector about PEN&PAD, recorded in 4 parts, October 21, 2021
Alan Rector, a central researcher in the PEN&PAD approach to electronic health records, in a conversation with Erik Sundvall and Daniel Karlsson

The transcripts on the part pages were machine-assisted and then proofread, and they may still contain errors. Please send corrections as an [issue](https://github.com/pen-pad-revival/pen-pad-revival.github.io/issues/new) or a pull request on the transcript file in the [PEN&PAD revival site repository](https://github.com/pen-pad-revival/pen-pad-revival.github.io); each part page links to its file, and the subtitle files are regenerated from the transcript.

1. [Intro & Demo of PEN&PAD](interviews/alan-rector-part-1/) - Now available at [https://youtu.be/PGEAmJJ4frU](https://youtu.be/PGEAmJJ4frU)
    * Who is Alan Rector and how did he get involved in this?
    * What was PEN&PAD? (Including live demo of the PEN & PAD-based Clinergy user interface)
    * Where did it lead?
    * Chapters:
        * [0:00](https://www.youtube.com/watch?v=PGEAmJJ4frU) Who is Alan Rector and how did he get involved in this? An innovative research environment.
        * [1:23](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=83s) 'Expert systems' for clinicians - 'bonkers idea' - but the user centered research gave birth to the PEN&PAD approach.
        * [4:21](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=261s) (Anecdote - the Arnold Schwarzenegger laptop)
        * [5:12](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=312s) User centered design + the "swiss army knife" of knowledge representation (description logics, GALEN etc.)
        * [6:33](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=393s) The ICD-11 project and it's relation to SNOMED CT
        * [11:25](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=685s) Live demo of the PEN & PAD-based Clinergy user interface, explained by Alan
        * [22:19](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=1339s) Was it used? What eventually killed PEN&PAD and GALEN commercially?
        * [25:24](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=1524s) What about user Acceptance? Could 'death by a thousand clicks' be avoided? Different user preferences, keyboard shortcuts etc.
        * [28:58](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=1738s) 'The user is always right, but they are usually wrong'
        * [29:49](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=1789s) Ahead of it's time & technological challenges. + Info about interview parts 2 & 3
        * [31:58](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=1918s) About generating 'Read codes' (Bonus track)
        * [32:53](https://www.youtube.com/watch?v=PGEAmJJ4frU&t=1973s) The end
2. [The User Centered Design Process, Human Factors, Problem & Solution Space](interviews/alan-rector-part-2/)
    * Chapters (provisional times, will be checked against the final edit):
        * 0:00 How the user centered design ideas came about: workshops with GPs, programmers and psychologists
        * 1:53 Photos from the workshops ('three ring circuses') - circular menus and radio buttons were a disaster; actors playing patients
        * 4:12 Rapid prototyping in Smalltalk - 'cardboard' interfaces built before the guts behind them; useful and usable
        * 5:33 Summarizing the medical record: problem lists, graphs and timelines - 'exhaustive is the enemy of the useful'
        * 6:59 Typing and Read codes by heart - fast paths for experienced users
        * 8:21 Tailoring to each doctor and practice - favourite prescriptions, and AI for personalization today?
        * 10:16 Different forms for different trials, CLEF - 'it's very easy to do things that aren't helpful'
        * 12:00 'Death by a thousand clicks' - throwing out a prototype isn't painful. Low code/no code prototyping today? 'Essential.'
        * 13:22 What works in general practice doesn't work everywhere: geriatrics, radiologists and light boxes
        * 15:37 One record system for the whole hospital and general practice? Modules and tailoring (cath lab, dermatology photos)
        * 17:29 Individual options per doctor, and typing or voice into a big tree - record exactly what was said, or offer alternatives?
        * 21:56 'Medicine is a humanly impossible task' and a wicked problem - errors, interruptions and reminders
        * 25:16 You don't need a computer to fix everything (incompatible gas connectors, coloured syringes) - but slow deterioration is hard to catch
        * 27:50 The end
3. [Technical details, terminology systems, ontologies and logic](interviews/alan-rector-part-3/)
    * Chapters (provisional times, will be checked against the final edit):
        * 0:00 The technology and semantics underneath: tailoring forms beyond hand programming meets knowledge representation
        * 2:04 SMK, later GRAIL - a language for 'conceptual Lego'; frame systems and tangled semantic networks
        * 4:53 Inheriting the most specific things and collecting them onto a form (the hypertension example)
        * 7:07 Extrinsics in GALEN, and normalizing the ontology: primitive trees stuck together with properties
        * 9:20 Pulling apart part-whole, function and structure - primitive hierarchies without exceptions (supernumerary fingers, dextrocardia: 'it's biology, not physics')
        * 13:17 Classifiers and most specific generalizations (more in the 'On beyond Gruber' paper)
        * 16:11 Collecting forms, treatments and codes (ICD, Read codes); negation in description logics and the need for queries
        * 18:42 Querying an OWL ontology - the 'hypertension not in pregnancy' trap
        * 21:32 Why check after classification? Errors propagate - getting the foot out of the pelvis in SNOMED
        * 24:58 12 hours per classifier run - regression queries 'just like software testing'; user interfaces and language generation as QA
        * 28:49 Pre- or post-coordination? Clean, normalized hierarchies; axioms vs generalizations (penicillins, Tweety the bird)
        * 34:02 Modular ontologies and property patterns - contributions to OWL
        * 35:51 Final words for techies: the same technique in ICD-11, queries to coordinate SNOMED and ICD, 'rigid' properties
        * 40:10 The end
4. [Lessons learned – how we’d do it today + some advice to those entering the health informatics space](interviews/alan-rector-part-4/)
    * Chapters (provisional times, will be checked against the final edit):
        * 0:00 How would you do this today? Where do SNOMED CT, openEHR archetypes, HL7 FHIR and queries fit in? (The 'propeller' paper)
        * 0:48 Terminology is just one part of the system: concept model, information/EHR model and inference model - coordinated, but not the same thing
        * 4:19 If doing it today: archetypes hung on a concept model? Grading and staging of cancers in a cancer trial project
        * 7:34 openEHR, FHIR and finding the right granularity - 'I'd certainly use SNOMED if I were starting today'
        * 8:37 Query SNOMED rather than create new concepts. Lessons from the ICD-11 project: statistics need stability, and ICD wouldn't work for PEN&PAD
        * 14:20 Building on SNOMED: watch out for primitives with more than one parent, and terminologies built by committee
        * 18:02 Redoing PEN&PAD today: rethink user centered design for touch screens, pens, voice and natural language - 'Is this what you meant?'
        * 22:51 Don't make one thing serve too many purposes (HL7 V3 prescriptions) - a flexible combination of modules
        * 26:27 Centering the record on the patient, and language generation for clinicians and for patients
        * 29:44 Sharing records between institutions and departments - find the nugget that needs to be transmitted; how do you summarize?
        * 35:19 Systems built out of bits and pieces - lessons from SGML and HTML ('Page not found')
        * 39:58 Advice to students coming into health informatics from the computer or the medical side - talk to psychologists, nurses and junior doctors
        * 48:04 Alan's acknowledgements: the PEN&PAD, GALEN and OWL teams
        * 49:50 The end

### Interview updates
To be notified of new uploads, subscribe to the pen-pad-revival YouTube channel [https://www.youtube.com/channel/UCWAejpmEBhz7gGutdYUNJyw/](https://www.youtube.com/channel/UCWAejpmEBhz7gGutdYUNJyw/)

## Papers and links
* [The PEN&PAD data entry system: from prototype to practical system](https://pubmed.ncbi.nlm.nih.gov/8947757/) J Kirby, A L Rector. Proc AMIA Annu Fall Symp. 1996;709-13.
* [On beyond Gruber:“Ontologies” in today’s biomedical information systems and the limits of OWL.](https://www.sciencedirect.com/science/article/pii/S2590177X19300010) Alan Rector, Stefan Schulz, Jean Marie Rodrigues, Christopher G. Chute, and Harold Solbrig. Journal of Biomedical Informatics: X 2 (2019): 100002.
* The [opengalen.org frozen copy via archive.org]([https://www.opengalen.org/](https://web.archive.org/web/20220308122743/https://opengalen.org/)) website contains a lot of background information, downloadable ontology and links to more informaton.

## Snomed CT Expo 2021 talk
* At [SNOMED CT Expo 2021](https://www.snomed.org/news-and-events/events/snomedct-expo) Daniel Karlsson and Erik Sundvall presented the PEN & PAD inspired talk "Context-aware interactive use of SNOMED CT and terminology services in openEHR-based electronic health records"
    * Slides: [https://docs.google.com/presentation/d/1BQxf-2NGhoFjlYEdRCdNoBWtUAS1qpn0/edit?usp=sharing&ouid=112660550613841635682&rtpof=true&sd=true](https://docs.google.com/presentation/d/1BQxf-2NGhoFjlYEdRCdNoBWtUAS1qpn0/edit?usp=sharing&ouid=112660550613841635682&rtpof=true&sd=true) 
    * Video recording is available at [https://youtu.be/G0NI-xF2AXM](https://youtu.be/G0NI-xF2AXM) and the [SNOMED CT Expo website](https://www.snomed.org/news-and-events/events/snomedct-expo)
    * Thanks to [Better](https://www.better.care/) for providing free trial access to [EHR Studio](https://playground.better.care/studio/) Low/No-code openEHR tool.
    * Thanks to [Håkan Örman](https://liu.se/en/employee/hakpe59) for providing remote login to a working Clinergy demo installation at Linköping University (It is still used in teaching!)

## Help wanted
* Experd/nerd-competence needed for exploring and documenting how the old Windows XP based Clinergy demo can be installed and run in emulators on Linux, Mac OS and Windows 10+
* Website editing
* Creation of pedagogical material from interviews and PEN&PAD-related papers (focused video snippets, transcriptions, summaries, tutorials etc.) in order to inspire a new generation of developers, clinicians and informaticians to revive the PEN & PAD approach using the tools available today.

## Challenge
This can be suitable as student projects, hackathon challenges, personal learning projects etc. 
* Use low/no-code tools and user centered design to recreate appraches from PEN&PAD... 
* ...then fork this repository, and create a subdirectory of your own under the `challenge` subdirectory with a readme.md file including a description (and links to your project site if available) including ways to contact you.
* Add other relevant description-related files (like screenshots) in your subdirectory.
* Then edit the readme file in the `challenge` directory to include a describing title with a link to your subdirectory
* Finally submit a pull request so that we can include your addition here.

Ask a local GIT-nerd for help if the process above sounds too complicated.


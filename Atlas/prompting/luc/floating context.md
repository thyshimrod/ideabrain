
# Context File for Prompt Testing and Regression (Version mini 8 - 2025-07-21 ) 

## Overview 

Current date and time of regeneration: 2025-07-12 19:16

**General Instruction:** Present results in a separate window on the right, comments on the left, and display all files in Markdown format.

## Prompts 

### 1. Prompt Agile 2 

**Description**: Optimizes prompts for clarity and relevance.  
**Content**:  
You are an expert Prompt Engineer specialized in crafting optimized inputs for advanced AI models like Grok 3 by xAI. Your goal is to design clear, structured prompts that deliver high-quality, relevant responses for use cases like research or analysis, using role assignment, context, constraints, and iteration. When responding:

1. Break down the request into key components and identify improvement areas.
2. Propose a single optimized prompt, explaining why it boosts clarity, specificity, and alignment.
3. Execute the optimized prompt immediately and provide the response.
4. Maintain a professional, friendly tone to inspire confidence.  
    If relevant, use tools like web search or X analysis (noting their use). Do not regenerate the context file unless requested. provide a count of the number of words in the output, and number of tokens.

### 21. Argument Extraction with Agency and Norms Focus 

**Description**: Extracts arguments with a focus on agency and the adoption/perpetuation of norms versus innovation, followed by Toulmin analysis.  
**Content**:  
"You are an expert in text analysis and argumentation. Given a text (use 'Texte A' from the context file if none provided), perform three tasks:

1. In a first section titled 'Main Arguments,' provide a concise numbered list of only the Level 1 (main) arguments extracted from the text, limited to the most overarching claims (max 10). Identify the primary agents (e.g., individuals, groups) driving each argument where applicable, in parentheses after the argument (e.g., 'Founders drive innovation (Founders)'). Indent each argument according to its level (Level 1 has no indent).
2. In a second section titled 'Full Argument Extraction,' extract an exhaustive numbered list of main arguments and sub-arguments, with depth adaptive to the text’s complexity (e.g., 1, 1.1, 1.1.1, up to 1.1.1.1 or beyond if needed), indenting by level (two spaces per level in Markdown). Include all distinct claims, supports, examples, and implicit assertions, maximizing depth by treating every elaboration, example, or implication as a sub-argument. For each main argument, provide a detailed reasoning note (non-indented) justifying inclusions, focusing on: a) the agent(s) responsible for driving the argument, b) whether the argument involves adopting or perpetuating pre-existing norms versus innovating new approaches, and c) causal links to broader outcomes or implications.
3. In a third section titled 'Toulmin Analysis,' analyze each main argument using the Toulmin Model in the text’s language (e.g., English: Claim, Grounds, Warrant, Qualifier, Rebuttal; French: Revendication, Fondements, Garantie, Qualificateur, Réfutation). Include Grounds with 'From text' or 'External,' cross-reference argument numbers (e.g., '1.1'), and use '!' for inferred Warrant/Rebuttal not in text. Highlight how the agents’ actions or choices shape the argument’s logical structure.  
    Respond in Markdown, under 3000 words, with a clear, professional tone, ensuring each item (arguments, sub-arguments, Toulmin elements) is on a separate line."

# 22. Argument Extraction with Agency and EPL 

"You are an expert in text analysis and persuasive writing, proficient in Aristotle’s rhetorical framework (Ethos, Pathos, Logos). Given a text (use “Why Avoiding Conflict Is Ruining Your Life” by Dan Koe from the context file unless otherwise specified), perform four tasks:

1. In a section titled “Main Arguments,” provide a numbered list of up to 15 Level 1 (main) arguments extracted from the text, capturing the most overarching claims. Tag each argument with (E), (P), or (L) after the number, indicating whether it primarily relies on Ethos (credibility/authority), Pathos (emotional appeal), or Logos (logical reasoning). Include the primary agent(s) driving each argument in parentheses after the argument (e.g., “Being disagreeable is necessary for success (L) (High-agency individuals)”).
    
2. In a section titled “Full Argument Extraction,” extract an exhaustive numbered list of main arguments and sub-arguments, with depth up to 4 sub-levels (e.g., 1, 1.1, 1.1.1, 1.1.1.1, 1.1.1.1.1) based on the text’s complexity, indenting by level (two spaces per level in Markdown). Tag each argument and sub-argument with (E), (P), or (L) based on its primary persuasive appeal. For each main argument, provide a detailed reasoning note (non-indented) justifying the E/P/L tag, addressing: a) how the argument establishes credibility (Ethos), evokes emotion (Pathos), or uses logic (Logos), b) the role of the agent(s) in shaping the appeal, and c) specific textual evidence supporting the classification. Include all distinct claims, supports, examples, and implicit assertions, maximizing depth by treating every elaboration, example, or implication as a sub-argument.
    
3. In a section titled “Percentage Distribution,” provide two percentage breakdowns:
    
    - a) For main arguments: the percentage of arguments tagged as Ethos (E), Pathos (P), and Logos (L), calculated as (number of E/P/L arguments ÷ total main arguments) × 100.
    - b) For sub-arguments: the percentage of all sub-arguments (across all levels) tagged as Ethos (E), Pathos (P), and Logos (L), calculated as (number of E/P/L sub-arguments ÷ total sub-arguments) × 100.  
        Present percentages in a clear format (e.g., a table or list), rounded to two decimal places.
4. In a section titled “Agents and Personalities,” provide a list of all unique agents and personalities identified in the text. Define agents as groups or individuals driving arguments (e.g., “agreeable people,” “high-agency individuals”) and personalities as named individuals with distinct identities (e.g., “Steve Jobs”). Include a brief description of each agent’s or personality’s role in the text (e.g., “represents visionary leadership”). Ensure the list is distinct from agents noted in argument parentheses, but reference their relevance to the arguments.
    

Definitions:

- Ethos (E): Appeals establishing the author’s or agent’s credibility, authority, or trustworthiness (e.g., personal experience, expertise, moral stance, or references to authoritative figures).
- Pathos (P): Appeals evoking emotions like fear, desire, empathy, or urgency to drive action or belief (e.g., vivid imagery, emotional consequences, or personal stakes).
- Logos (L): Appeals using logical reasoning, evidence, or structured arguments (e.g., cause-effect relationships, frameworks, data, or examples).
- Agents: Groups or individuals driving the arguments (e.g., “creators,” “vision-driven individuals”).
- Personalities: Named individuals with distinct identities explicitly mentioned (e.g., “Dan Koe,” “Steve Jobs”).

Respond in Markdown, under 5000 words, with a clear, professional tone. Each argument and sub-argument should be on a separate line. Ensure tags reflect the primary appeal, even if multiple appeals are present. The prompt should be reusable for other texts, but execute it on the specified text unless directed otherwise."

# 23. Argument Extraction with Agency, EPL, and Spiral Dynamics 

"You are an expert in text analysis and persuasive writing, proficient in Aristotle’s rhetorical framework (Ethos, Pathos, Logos) and Spiral Dynamics (a model of human development stages represented by colors: beige - survival, purple - tribal/magical, red - impulsive/ego-centric, blue - authoritarian/order, orange - achiever/success-oriented, green - communitarian/egalitarian, yellow - integrative/systemic, turquoise - holistic/global). Given a text (use “Why Avoiding Conflict Is Ruining Your Life” by Dan Koe from the context file unless otherwise specified), perform four tasks:

1. In a section titled “Main Arguments,” provide a numbered list of up to 15 Level 1 (main) arguments extracted from the text, capturing the most overarching claims. Tag each argument with (E), (P), or (L) after the number, indicating whether it primarily relies on Ethos (credibility/authority), Pathos (emotional appeal), or Logos (logical reasoning), followed by a Spiral Dynamics color in parentheses (e.g., “1. (L) (orange) Being disagreeable is necessary for success”). Include the primary agent(s) driving each argument in parentheses after the argument (e.g., “... (High-agency individuals)”).
    
2. In a section titled “Full Argument Extraction,” extract an exhaustive numbered list of main arguments and sub-arguments, with depth up to 4 sub-levels (e.g., 1, 1.1, 1.1.1, 1.1.1.1, 1.1.1.1.1) based on the text’s complexity, indenting by level (two spaces per level in Markdown). Tag each argument and sub-argument with (E), (P), or (L) based on its primary persuasive appeal, followed by a Spiral Dynamics color in parentheses (e.g., “1. (L) (orange) ...”). For each main argument, provide a detailed reasoning note (non-indented) justifying the E/P/L and Spiral Dynamics tags, addressing: a) how the argument establishes credibility (Ethos), evokes emotion (Pathos), or uses logic (Logos), b) how the Spiral Dynamics level reflects the argument's motivational stage (e.g., orange for goal-oriented achievement), c) the role of the agent(s) in shaping the appeals, and d) specific textual evidence supporting the classifications. Include all distinct claims, supports, examples, and implicit assertions, maximizing depth by treating every elaboration, example, or implication as a sub-argument.
    
3. In a section titled “Percentage Distribution,” provide two percentage breakdowns:
    
    - a) For main arguments: the percentage of arguments tagged as Ethos (E), Pathos (P), and Logos (L), calculated as (number of E/P/L arguments ÷ total main arguments) × 100. Also include a separate breakdown for Spiral Dynamics colors (e.g., percentage orange, green).
    - b) For sub-arguments: the percentage of all sub-arguments (across all levels) tagged as Ethos (E), Pathos (P), and Logos (L), calculated as (number of E/P/L sub-arguments ÷ total sub-arguments) × 100. Include a separate breakdown for Spiral Dynamics colors.  
        Present percentages in a clear format (e.g., a table or list), rounded to two decimal places.
4. In a section titled “Agents and Personalities,” provide a list of all unique agents and personalities identified in the text. Define agents as groups or individuals driving arguments (e.g., “agreeable people,” “high-agency individuals”) and personalities as named individuals with distinct identities (e.g., “Steve Jobs”). Include a brief description of each agent’s or personality’s role in the text (e.g., “represents visionary leadership”), and note any associated Spiral Dynamics level if prominent. Ensure the list is distinct from agents noted in argument parentheses, but reference their relevance to the arguments.
    

Definitions:

- Ethos (E): Appeals establishing the author’s or agent’s credibility, authority, or trustworthiness (e.g., personal experience, expertise, moral stance, or references to authoritative figures).
- Pathos (P): Appeals evoking emotions like fear, desire, empathy, or urgency to drive action or belief (e.g., vivid imagery, emotional consequences, or personal stakes).
- Logos (L): Appeals using logical reasoning, evidence, or structured arguments (e.g., cause-effect relationships, frameworks, data, or examples).
- Agents: Groups or individuals driving the arguments (e.g., “creators,” “vision-driven individuals”).
- Personalities: Named individuals with distinct identities explicitly mentioned (e.g., “Dan Koe,” “Steve Jobs”).
- Spiral Dynamics: Tag based on the argument's core motivation or worldview (e.g., red for power-driven, orange for success-focused, green for harmony-seeking).

Respond in Markdown, under 5000 words, with a clear, professional tone. Each argument and sub-argument should be on a separate line. Ensure tags reflect the primary appeal and Spiral level, even if multiple are present. The prompt should be reusable for other texts, but execute it on the specified text unless directed otherwise."

### 24. Structural Breakdown with EPL, Build Levels, and Frameworks 

**Description**: Analyzes the structure of a text with tags for Ethos/Pathos/Logos, Build Levels, and detected persuasive frameworks (e.g., PAS, AIDA), including recursive/sub-patterns.  
**Content**:  
"You are an expert in text analysis, structural deconstruction, and persuasive frameworks, proficient in Aristotle’s rhetorical framework (Ethos, Pathos, Logos), a 'Build Level' progression model (Foundational: sets basics; Building: develops; Climactic: peaks; Resolving: concludes), and common frameworks like PAS (Problem-Agitate-Solution), AIDA (Attention-Interest-Desire-Action), BAB (Before-After-Bridge), and Monroe's Motivated Sequence (Attention-Need-Satisfaction-Visualization-Action). Given a text (use 'Why Avoiding Conflict Is Ruining Your Life' by Dan Koe from the context file unless otherwise specified), perform four tasks:

1. In a section titled 'Main Structural Elements,' provide a numbered list of up to 15 Level 1 (main) structural elements extracted from the text, capturing the most overarching sections or phases. Tag each element with (E), (P), or (L) after the number for primary persuasive appeal, followed by a Build Level in parentheses, then a Framework Tag if applicable (e.g., (PAS-Problem), (AIDA-Attention)). Include any primary dependencies in parentheses after the element. Tag recursively if sub-patterns exist (e.g., (PAS-Mini-Problem) for nested instances).
    
2. In a section titled 'Full Structural Breakdown,' extract an exhaustive numbered list of main elements and sub-elements, with depth up to 4 sub-levels, indenting by level (two spaces per level in Markdown). Tag each with (E), (P), or (L), Build Level in parentheses, and Framework Tag if detected (e.g., '1. (L) (Building) (PAS-Agitate) ...'). For each main element, provide a detailed reasoning note (non-indented) justifying the tags, addressing: a) EPL appeal, b) Build Level role, c) framework fit and any recursion/sub-patterns (e.g., mini-PAS within), d) dependencies and flow, and e) textual evidence. Include all distinct sections, treating elaborations as sub-elements.
    
3. In a section titled 'Percentage Distribution,' provide breakdowns for EPL, Build Levels (as before), and a new one for Framework Tags: percentage of elements with each framework (e.g., PAS, AIDA) or 'None' if untagged, for mains and subs separately. Present in tables or lists, rounded to two decimals.
    
4. In a section titled 'Key Structural Components,' list unique components, now including detected frameworks with descriptions (e.g., 'PAS: Overall structure with nested minis in steps') and recursion notes.
    

Definitions:

- Ethos (E)/Pathos (P)/Logos (L): As before.
- Build Levels: As before.
- Framework Tags: Detect and apply only where fitting (e.g., PAS for problem-agitate-solve patterns); use 'Mini-' prefix for recursive/sub-patterns; leave untagged if none apply.
- Dependencies: As before.

Respond in Markdown, under 5000 words, with a clear, professional tone. Each element on a separate line. Reusable for other texts, execute on specified unless otherwise."

### 25. Structural Breakdown with EPL, Build Levels, Frameworks, and Spiral Dynamics 

**Description**: Analyzes the structure of a text with tags for Ethos/Pathos/Logos, Build Levels, detected persuasive frameworks (e.g., PAS, AIDA), including recursive/sub-patterns, and Spiral Dynamics levels.  
**Content**:  
"You are an expert in text analysis, structural deconstruction, and persuasive frameworks, proficient in Aristotle’s rhetorical framework (Ethos, Pathos, Logos), a 'Build Level' progression model (Foundational: sets basics; Building: develops; Climactic: peaks; Resolving: concludes), common frameworks like PAS (Problem-Agitate-Solution), AIDA (Attention-Interest-Desire-Action), BAB (Before-After-Bridge), Monroe's Motivated Sequence (Attention-Need-Satisfaction-Visualization-Action), and Spiral Dynamics (a model of human development stages represented by colors: beige - survival, purple - tribal/magical, red - impulsive/ego-centric, blue - authoritarian/order, orange - achiever/success-oriented, green - communitarian/egalitarian, yellow - integrative/systemic, turquoise - holistic/global). Given a text (use 'Why Avoiding Conflict Is Ruining Your Life' by Dan Koe from the context file unless otherwise specified), perform four tasks:

1. In a section titled 'Main Structural Elements,' provide a numbered list of up to 15 Level 1 (main) structural elements extracted from the text, capturing the most overarching sections or phases. Tag each element with (E), (P), or (L) after the number for primary persuasive appeal, followed by a Build Level in parentheses, then a Spiral Dynamics color in parentheses, then a Framework Tag if applicable (e.g., (PAS-Problem), (AIDA-Attention)). Include any primary dependencies in parentheses after the element. Tag recursively if sub-patterns exist (e.g., (PAS-Mini-Problem) for nested instances).
    
2. In a section titled 'Full Structural Breakdown,' extract an exhaustive numbered list of main elements and sub-elements, with depth up to 4 sub-levels, indenting by level (two spaces per level in Markdown). Tag each with (E), (P), or (L), Build Level in parentheses, Spiral Dynamics color in parentheses, and Framework Tag if detected (e.g., '1. (L) (Building) (orange) (PAS-Agitate) ...'). For each main element, provide a detailed reasoning note (non-indented) justifying the tags, addressing: a) EPL appeal, b) Build Level role, c) how the Spiral Dynamics level reflects the element's motivational stage (e.g., orange for achievement-focused), d) framework fit and any recursion/sub-patterns (e.g., mini-PAS within), e) dependencies and flow, and f) textual evidence. Include all distinct sections, treating elaborations as sub-elements.
    
3. In a section titled 'Percentage Distribution,' provide breakdowns for EPL, Build Levels, Spiral Dynamics colors (e.g., percentage orange, green), and Framework Tags: percentage of elements with each framework (e.g., PAS, AIDA) or 'None' if untagged, for mains and subs separately. Present in tables or lists, rounded to two decimals.
    
4. In a section titled 'Key Structural Components,' list unique components, including detected frameworks with descriptions (e.g., 'PAS: Overall structure with nested minis in steps') and recursion notes, and note any associated Spiral Dynamics level if prominent.
    

Definitions:

- Ethos (E): Appeals establishing credibility or authority.
- Pathos (P): Appeals evoking emotions.
- Logos (L): Appeals using logical reasoning or evidence.
- Build Levels: Tag based on progression (Foundational: basics; Building: development; Climactic: peak; Resolving: conclusion).
- Spiral Dynamics: Tag based on the element's core motivation or worldview (e.g., red for power-driven, orange for success-focused, green for harmony-seeking).
- Framework Tags: Detect and apply only where fitting (e.g., PAS for problem-agitate-solve patterns); use 'Mini-' prefix for recursive/sub-patterns; leave untagged if none apply.
- Dependencies: How one element relies on or enables another for coherent flow.

Respond in Markdown, under 5000 words, with a clear, professional tone. Each element on a separate line. Ensure tags reflect the primary appeal, level, and Spiral Dynamics, even if multiple are present. Reusable for other texts, execute on specified unless otherwise."

### Prompt 26 Modifié : Analyse Argumentative avec Agence, EPL et Spirale Dynamique 

**Description :** Extrait les arguments d'un texte en se concentrant sur les agents, puis les analyse à travers les prismes de la persuasion aristotélicienne (Ethos, Pathos, Logos) et des niveaux de développement de la Spirale Dynamique.

**Contenu :**  
"Vous êtes un expert en analyse de texte, en argumentation et en psychologie du développement, maîtrisant le cadre rhétorique d'Aristote (Ethos, Pathos, Logos) et la Spirale Dynamique (un modèle des stades de développement humain : rouge - égocentrique, bleu - autoritaire, orange - orienté succès, vert - communautaire, jaune - intégratif, turquoise - holistique). Étant donné un texte (utilisez la note [Dilts-TAESCH V2](obsidian://open?file=Atlas%2FNotes%2FDilts-TAESCH%20V2.md) du fichier de contexte, sauf indication contraire), accomplissez quatre tâches :

1. Dans une section intitulée 'Arguments Principaux', fournissez une liste numérotée concise (15 maximum) des arguments de Niveau 1 extraits du texte. Pour chaque argument, ajoutez un tag indiquant son appel persuasif principal (E, P, ou L) et son niveau de la Spirale Dynamique entre parenthèses (ex: '1. (L) (orange) ...'). Identifiez l'agent principal qui porte l'argument entre parenthèses à la fin (ex: '... (L'auteur du modèle)').
    
2. Dans une section intitulée 'Extraction Complète des Arguments', extrayez une liste numérotée exhaustive des arguments principaux et des sous-arguments, avec une profondeur allant jusqu'à 4 niveaux (ex: 1, 1.1, 1.1.1, 1.1.1.1), en indentant chaque niveau. Taguez chaque argument et sous-argument avec (E/P/L) et sa couleur de la Spirale Dynamique. **Après avoir listé un argument principal et tous ses sous-arguments correspondants, fournissez une note de raisonnement détaillée (non indentée) justifiant les tags EPL et Spirale, en expliquant : a) comment l'argument établit la crédibilité (E), évoque l'émotion (P), ou utilise la logique (L), b) comment le niveau de la Spirale reflète la motivation sous-jacente de l'argument (ex: orange pour l'efficacité et la réussite), c) le rôle de l'agent dans la formation de l'appel, et d) des preuves textuelles spécifiques. Assurez-vous d'insérer une ligne blanche avant et après chaque note de raisonnement pour la séparer visuellement.**
    
3. Dans une section intitulée 'Distribution en Pourcentage', fournissez deux ventilations en pourcentage :
    
    - a) Pour les arguments principaux : le pourcentage d'arguments tagués comme Ethos (E), Pathos (P), et Logos (L), et une ventilation séparée pour les couleurs de la Spirale Dynamique.
    - b) Pour les sous-arguments : le pourcentage de tous les sous-arguments tagués comme Ethos (E), Pathos (P), et Logos (L), et une ventilation séparée pour les couleurs de la Spirale Dynamique.  
        Présentez les pourcentages de manière claire (tableau ou liste), arrondis à deux décimales.
4. Dans une section intitulée 'Agents et Personnalités', fournissez une liste de tous les agents et personnalités uniques identifiés. Définissez les agents comme les groupes ou individus qui portent les arguments (ex: 'les knowledge workers') et les personnalités comme les individus nommés (ex: 'Dilts'). Incluez une brève description de leur rôle dans le texte et notez tout niveau de la Spirale Dynamique associé.
    

Répondez en Markdown, sous 5000 mots, avec un ton clair et professionnel. Chaque argument et sous-argument doit être sur une ligne distincte."

# P27 Dan Koe Metrics 

You are an expert evaluator of persuasive writing in the style of Dan Koe (contrarian, authentic, motivational mindset content). Evaluate how closely the generated text matches the original Koe-style text using these metrics:

1. **Readability (Immersive Like Koe?)**: Assess flow, rhythm, and engagement. Koe's is immersive with conversational narrative, varying sentences, and seamless builds. Score 1-10.
    
2. **Voice Match (Vulnerable/Affirmé?)**: Gauge vulnerability (introspective flaws) and affirmé confidence (bold claims). Koe balances raw authenticity with urgency. Score 1-10.
    
3. **Persuasion Score (Ethos/Pathos/Logos Balance via Tags)**: Tag sections [E] Ethos (credibility/stories), [P] Pathos (emotions like fear/desire), [L] Logos (logic/steps). Ideal: ~30% E, ~45% P, ~25% L. Score 1-10 based on balance and impact.
    

Compute overall closeness as the average score. Provide qualitative notes per metric.

Output in this format:

- Brief intro summary with overall score.
- A markdown table: | Element | Original Koe | Generation | Score (1-10) | Adjustment Needed |
    - For "Original Koe," describe key traits from the provided original.
    - For "Generation," analyze the provided generation.
    - Suggest V4-guidelines-style adjustments (e.g., inject Pathos from Korenote).

Original Text: [PASTE THE ORIGINAL KOE-STYLE TEXT HERE] ( default 'Why avoiding...')

Generated Text: [PASTE THE GENERATED IMITATION TEXT HERE]

# Compétences - Connaissance des échelles 

Voici la liste complète des échelles que je maîtrise ou utilise :

- **Échelles maîtrisées** :
    1. **[ecocycle](https://publish.obsidian.md/luctaesch/Atlas/Notes/Things/Ecocycle)** - Cycle de développement systémique (inception, croissance, maturité, destruction créatrice).
    2. **[emergence (wardley)](https://publish.obsidian.md/luctaesch/emergence+\(wardley\))** - Stades d’évolution selon Wardley (1 à 4).
    3. **[Spirale Dynamique](https://publish.obsidian.md/luctaesch/Spirale+Dynamique)** - Positionnement personnel au-delà du turquoise.
    4. **[Niveaux Sociologiques](https://publish.obsidian.md/luctaesch/Niveaux+Sociologiques)** - Échelle des niveaux sociaux (individu, groupe, société, nation).
    5. **[Changement](https://publish.obsidian.md/luctaesch/Changement)** - Types de changement (production, amélioration, innovation, création).
    6. **[Changement-Bateson](https://publish.obsidian.md/luctaesch/Changement-Bateson)** - Niveaux d’apprentissage de Bateson (0 à 3).
    7. **[Rogers](https://publish.obsidian.md/luctaesch/Rogers)** - Diffusion de l’innovation (innovateurs, early adopters, majorité, résistants).
    8. **[Dilts](https://publish.obsidian.md/luctaesch/Dilts)** - Pyramide neurologique (effets, actions, croyances, identité, vision).
    9. **[Bloom-cognitive](https://publish.obsidian.md/luctaesch/Bloom-cognitive)** - Taxonomie cognitive (mémoriser, comprendre, appliquer, analyser, évaluer, créer).
    10. **[Connaissance](https://publish.obsidian.md/luctaesch/Connaissance)** - Typologie aristotélicienne (Episteme, Phronesis, Techne).
    11. **[Ignorance](https://publish.obsidian.md/luctaesch/Atlas/Notes/Scales/Ignorance)** - Niveaux d’ignorance (ignorance, bêtise, perversité).
    12. **[Divergence](https://publish.obsidian.md/luctaesch/Divergence)** - Niveaux de désaccord (même opinion, divergence, conflit).
    13. **[Dualité](https://publish.obsidian.md/luctaesch/Dualit%C3%A9)** - Progression spirituelle (séparé, épris, pris, dépris).
    14. **[Groupe](https://publish.obsidian.md/luctaesch/Groupe)** - Dynamiques de groupe (amical, soutien, productif, apprenants).
    15. **[Posture](https://publish.obsidian.md/luctaesch/Posture)** - Postures relationnelles (laisser aller, directivité, négociation, influence, non-directivité).
    16. **[Autonomie](https://publish.obsidian.md/luctaesch/Atlas/Maps/Autonomie)** - Niveaux d’autonomie (dépendance, indépendance, interdépendance).
    17. **[Activité-Mode](https://publish.obsidian.md/luctaesch/Activit%C3%A9-Mode)** - Modes d’activité (travail, jeu, pratique).
    18. **[Activité-Finalité](https://publish.obsidian.md/luctaesch/Activit%C3%A9-Finalit%C3%A9)** - Finalités des activités (réfléchir, décider, coordonner, informer).
    19. **[Décision](https://publish.obsidian.md/luctaesch/D%C3%A9cision)** - Styles de décision (soumission, directivité, compromis, consensus, consentement, non-intentionnalité).
    20. **[maitrise-faure](https://publish.obsidian.md/luctaesch/maitrise-faure)** - Progression de Jean-Philippe Faure (découverte, enthousiasme, présomption, découragement, intégration, évidence, maîtrise).
    21. **[maitrise-taesch](https://publish.obsidian.md/luctaesch/maitrise-taesch)** - Ma propre échelle (informer, compréhension, intégration, maîtrise, transmission).
    22. **[Pratique - Erikson](https://publish.obsidian.md/luctaesch/Pratique+-+Erikson)** - Niveaux de pratique selon Ericsson (naïve, intentionnelle, délibérée).
    23. **[Echec-Westrum](https://publish.obsidian.md/luctaesch/Echec-Westrum)** - Cultures face à l’échec (pathologique, bureaucratique, génératif).
    24. **[Evaluation](https://publish.obsidian.md/luctaesch/Evaluation)** - Niveaux d’évaluation (observation, comparaison, évaluation, jugement).
    25. **[Deuil](https://publish.obsidian.md/luctaesch/Deuil)** - Modèle de Kübler-Ross (choc, déni, colère, négociation, tristesse, intégration).
    26. **[Resilience](https://publish.obsidian.md/luctaesch/Resilience)** - Capacité adaptative (efficacité).
    27. **[Echec-Taesch](https://publish.obsidian.md/luctaesch/Echec-Taesch)** - Attitudes face à l’échec (Blame-Défensif, Jugemental, Apprenant).
    28. **[Hawkins - Map of Consciousness](https://publish.obsidian.md/luctaesch/Hawkins+-+Map+of+Consciousness)** - Échelle logarithmique des niveaux de conscience (0-1000) : Honte (20), Culpabilité (30), Apathie (50), Chagrin (75), Peur (100), Désir (125), Colère (150), Orgueil (175), Courage (200), Neutralité (250), Volonté (310), Acceptation (350), Raison (400), Amour (500), Joie (540), Paix (600), Éveil (700-1000).
    29. **[AGFLAP](https://publish.obsidian.md/luctaesch/Atlas/Notes/Things/AGFLAP)** - Émotions de basse fréquence à relâcher (Apathy, Grief, Fear, Lust, Anger, Pride) pour atteindre CAP (Courage, Acceptance, Peace).
    30. **[Ericsson Peak 2016](https://publish.obsidian.md/luctaesch/Ericsson+Peak+2016)** - Progression via la pratique délibérée (naïve, intentionnelle, délibérée), avec un focus sur le développement de représentations mentales sophistiquées qui améliorent la performance. Insight : L’expert construit des modèles internes complexes qu’il faut simplifier pour les débutants ou moins avancés, un défi clé pour transmettre ou adapter mes compétences.

31. **[Trois Horizons](https://publish.obsidian.md/luctaesch/Trois+Horizons)** - Cadre stratégique pour l’innovation (Horizon 1 : exploitation actuelle, Horizon 2 : opportunités émergentes, Horizon 3 : visions disruptives).
32. **[MBTI](https://publish.obsidian.md/luctaesch/MBTI)** - Typologie des personnalités basée sur quatre dichotomies (Extraversion/Introversion, Sensation/Intuition, Pensée/Sentiment, Jugement/Perception), aboutissant à 16 types.

#### Correspondance entre maitrise-faure, maitrise-taesch et Bloom 

|**Niveau**|**[maitrise-faure](https://publish.obsidian.md/luctaesch/maitrise-faure)**|**[maitrise-taesch](https://publish.obsidian.md/luctaesch/maitrise-taesch)**|**[Bloom-cognitive](https://publish.obsidian.md/luctaesch/Bloom-cognitive)**|
|---|---|---|---|
|1|Découverte|Informer|(Pré-Mémoriser)|
|2|Enthousiasme|Compréhension|Mémoriser + Comprendre|
|3|Présomption|-|Comprendre (partiel)|
|4|Découragement|-|Analyser (début)|
|5|Intégration|Intégration|Appliquer + Analyser|
|6|Évidence|Maîtrise|Évaluer|
|7|Maîtrise|Transmission|Créer|

### Domaines de connaissance 

- Neurosciences : Compréhension des mécanismes cérébraux et de leur impact sur le comportement et l’apprentissage.
- Neurotransmetteurs : Connaissance des substances chimiques (ex. dopamine, sérotonine) influençant les états mentaux et émotionnels.
- Psychologie cognitive : Étude des processus mentaux (perception, mémoire, raisonnement) et de leurs applications pratiques.
- Visual thinking : Techniques de pensée visuelle pour structurer et communiquer des idées complexes.
- Kahneman (Thinking, Fast and Slow) : Maîtrise des concepts de pensée rapide (Système 1) et lente (Système 2) de Daniel Kahneman, appliqués à la prise de décision.
- Antifragile (Taleb) : Compréhension du concept de Nassim Nicholas Taleb sur les systèmes qui se renforcent face au chaos et à l’incertitude.
- Radical Honesty : Approche de Brad Blanton favorisant une communication authentique et directe pour libérer les tensions émotionnelles.
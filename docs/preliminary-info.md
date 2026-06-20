Below are some of our notes as well as assumptions of what an ideal assistant should do.

- The expert marketing assistant we'll be building would be implemented inside Reonic, so it's key that it works smoothly with the existing features such as CRM, calendar, sales funnel, etc.
- The assistant we're building will have a database of customer personas, specific to each country, region, demographic, etc., backed up by real evidence extracted from customer reviews, case studies, market research, etc.

Below is a concise structured summary of what we have from the founder interviews.

## 1. Customer journey

Reonic is used by renewable energy installers to manage sales around products such as solar panels and heat pumps. The relevant journey for the AI marketing assistant starts **after the final quote has been generated**.

The typical flow appears to be:

1. **Homeowner lead enters the installer’s sales process**

   * The lead may be B2C, B2B, or municipal.
   * Customer profile data may include name, address, age or birthdate, annual income, household context, and other metadata.

2. **Installer creates or receives a quote in Reonic**

   * Reonic generates the quote.
   * Quote data includes what is being sold, price, product type, and potentially competing offers.

3. **Installer communicates with the customer**

   * Channels may include email, phone calls, SMS, chat, or in-person conversations.
   * Installers may take personal notes, including voice notes that can be transcribed.
   * Communication preferences matter, for example whether the customer prefers email, calls, or SMS.

4. **Salesperson follows up**

   * Follow-up is a major pain point.
   * Installers may be managing many families or leads at once.
   * Some installers are sophisticated with structured feedback and follow-up, while others are not.
   * Salespeople may be doing follow-ups while on the go, including while driving between appointments.

5. **Customer evaluates offer**

   * Customers may compare quotes from competitors.
   * Competitors, especially larger players, often use standardized sales calls.
   * The opportunity is to help installers personalize their follow-up rather than use generic messaging.

6. **Deal closes or is lost**

   * Common closed-lost reasons should be analyzed.
   * The tool should help identify what worked in successful deals and what failed in lost deals.
   * The current feedback loop is weak: installers often do not know which marketing or sales strategies are working.

## 2. End result / demo mockup

The envisioned output is an **AI-powered expert marketing assistant for installers**, likely embedded as a follow-up feature after Reonic’s quote generation step.

The assistant should help the installer answer:

* Who is this customer?
* What persona or segment do they belong to?
* What follow-up strategy should I use?
* What message should I send next?
* What questions should I ask before pushing for a sale?
* How urgent should the follow-up be?
* What channel should I use?
* What objections or competitor risks should I expect?
* What has worked with similar customers before?

A demo mockup could show:

### Customer profile panel

A summarized view of the homeowner or lead:

* Persona category
* Product interest: heat pump, solar panel, etc.
* Quote value
* Budget sensitivity
* Communication preference
* Decision urgency
* Known objections
* Competitor mentions
* Personal preferences or constraints

### AI recommendation panel

A suggested strategy:

* Recommended next action
* Best channel
* Timing
* Tone: for example, informative, reassuring, urgency-driven, not pushy
* Suggested talking points
* Follow-up questions to ask
* Risks to address

### Message generator

Suggested email, SMS, or call script:

* Personalized to the customer
* Based on quote data, communications, notes, and customer persona
* Adjustable by the installer

### Feedback loop panel

A lightweight learning layer:

* Did this strategy work?
* Why did the deal close or get lost?
* Which messages or tactics performed best?
* What should be tried differently next time?

## 3. Solution design

The solution should act as a **personalized sales and marketing copilot** for renewable energy installers.

Core capabilities:

### 1. Persona classification

Classify homeowners or customers into high-level persona categories using:

* Customer metadata
* Quote metadata
* Emails, calls, SMS, and notes
* Sales context
* Installer observations

Example persona dimensions:

* Price-sensitive customer
* Sustainability-driven customer
* Urgency-driven customer
* Skeptical or comparison-shopping customer
* Comfort-oriented customer
* Technically informed customer
* Low-engagement customer
* High-intent customer

### 2. Follow-up strategy generation

Recommend what the installer should do next:

* Send educational material
* Address price concerns
* Create urgency
* Ask clarifying questions
* Offer a call
* Compare against competitors
* Reinforce benefits
* Avoid being too pushy

### 3. Communication personalization

Generate or suggest:

* Emails
* SMS messages
* Phone call scripts
* Follow-up reminders
* Objection-handling responses

The assistant should be creative but grounded in the available customer context.

### 4. Competitive intelligence

Check whether competitors may have better offers or pricing, where data is available. The system should help the installer understand whether they are losing because of:

* Price
* Timing
* Trust
* Product fit
* Financing
* Lack of urgency
* Poor follow-up
* Competitor positioning

### 5. Sales feedback loop

Capture outcomes and learn from them:

* What strategy was used?
* Did the customer respond?
* Did the deal close?
* What was the deciding factor?
* What was the closed-lost reason?
* Which strategies work for which personas?

This is not necessarily the core MVP, but it is a valuable extension.

## 4. Inputs available to the assistant

The assistant may use several types of input.

### Installer metadata

Information about the installer company or salesperson:

* Company size: small 2–3 person installers vs larger companies
* Sales process sophistication
* Available sales pipelines
* Follow-up habits
* Personal preferences or constraints, such as whether they can drive
* Preferred sales style
* Historical success patterns

### Customer metadata

Information about the homeowner or buyer:

* Name
* Address
* Birthdate or age
* Annual income
* Homeowner profile
* Communication preferences
* Willingness to take appointments or drive
* Persona indicators
* Product interest
* Urgency signals

### Quote metadata

Information from the Reonic quote:

* Product sold: solar panel, heat pump, etc.
* Quote price
* Configuration
* Financing or payment terms, if available
* Quote status
* Final quote timing
* Competing prices, if known

### Communications

Customer interactions across channels:

* Emails
* Phone transcripts
* SMS
* Chat messages
* Meeting notes
* Call outcomes

These are important because the product assumes “high context” customer understanding.

### Installer notes

Qualitative notes from the salesperson:

* Text notes
* Voice notes with transcription
* Personal observations
* Customer objections
* Emotional tone
* Buying signals
* Relationship context

## 5. Key pain points identified

The strongest pain points are:

1. **Installers struggle to manage many leads at once**

   * One salesperson may be speaking to many families simultaneously.

2. **Follow-up is inconsistent**

   * Some installers are sophisticated, others are not.
   * Reonic has follow-up tools, but usage and feature gaps need to be understood.

3. **Personalization is hard**

   * Larger competitors may use standardized scripts.
   * Smaller installers could win by being more personal, but need help doing this at scale.

4. **Installers do not know what works**

   * They lack structured feedback on which strategies close deals.
   * A/B testing or strategy comparison is currently underdeveloped.

5. **Closed-lost reasons are unclear**

   * The product should help identify why customers reject offers.

6. **Urgency creation is difficult**

   * The assistant should help create urgency without being pushy.

## 6. Open questions to validate

Important questions still need founder or user validation:

* Does Reonic provide all quote and customer metadata needed for the assistant?
* Are communications already stored inside Reonic, or would integrations be required?
* Which follow-up tools are currently most used in Reonic?
* Do installers already segment customers into different pipelines or personas?
* What are the most common closed-lost reasons?
* What customer personas appear most often?
* What marketing feature would Reonic most want to sell in a sales call?
* Is the assistant primarily for the installer’s marketing person, salesperson, or owner?
* Should the assistant only recommend strategy, or also send follow-ups directly?
* Can we access mock data or a demo account?
* How much competitor pricing data is realistically available?

## 7. One-sentence product summary

The product is an **AI follow-up and marketing assistant for renewable energy installers that uses quote data, customer context, communications, and installer notes to classify customer personas, recommend personalized sales strategies, generate follow-up messages, and learn which tactics help close deals.**

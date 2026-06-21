import type {
  ActionRecord,
  BootstrapPayload,
  CalendarEventRecord,
  CustomerRecord,
  NoteRecord,
  QuoteRecord,
} from "./types.js";

export const DEMO_NOW = "2026-06-21T08:30:00.000Z";
export const DEMO_QUOTE_ID = "quote_sabine";
export const DEMO_CUSTOMER_ID = "customer_sabine";

export const bootstrapSeed: BootstrapPayload = {
  installer: {
    id: "installer_theo",
    name: "Theo Tiral",
    company: "Onboarding Demo Kunde",
    initials: "TT",
  },
  quoteIdForDemo: DEMO_QUOTE_ID,
  columns: [
    {
      id: "waiting_response",
      title: "Waiting for response",
      countLabel: "8x",
      countTone: "red",
    },
    {
      id: "specialist_partner",
      title: "To specialist partner",
      countLabel: "3x",
      countTone: "gray",
    },
    {
      id: "waiting_installation",
      title: "Waiting for installation",
      countLabel: "7x",
      countTone: "gray",
    },
    {
      id: "completed",
      title: "Completed",
      countLabel: "16x",
      countTone: "green",
    },
  ],
};

export const customerSeeds: CustomerRecord[] = [
  {
    id: DEMO_CUSTOMER_ID,
    initials: "SM",
    name: "Sabine Müller",
    email: "sabine.mueller@email.de",
    phone: "+49 4105 998231",
    address: "Sonnenberg 7, 21218 Seevetal",
    system: "Heat pump + Solar 9.6 kWp",
    quoteValue: 38400,
    leadBadge: "Hot lead",
    leadBadgeTone: "yellow",
    communicationPreference: "Email first, accepts scheduled calls",
    decisionNote:
      "Asked about CO2 reduction, monthly payment, and competitor comparison. Wants a confident but calm explanation.",
    householdNote:
      "Roof faces south-west with no shading. Existing oil heating is 18 years old and due for replacement.",
    updatedAt: "2026-06-21T07:30:00.000Z",
    buyerProfile: [
      {
        id: "environmentalist",
        name: "Environmentalist",
        strength: "Strong",
        tone: "green",
        description:
          "Quoted heat pump + solar and asked about CO2 reduction — sustainability is a primary driver.",
        evidence: [
          {
            label: "Asked about CO2 reduction on the call",
            source: "Call notes",
            icon: "sparkles",
          },
          {
            label: "Requested max-coverage solar config",
            source: "Intake form",
            icon: "clipboard",
          },
        ],
      },
      {
        id: "value_conscious",
        name: "Value-conscious",
        strength: "Moderate",
        tone: "yellow",
        description:
          'Requested a competitor comparison and flagged "monthly payment" — lead with payback over price.',
        evidence: [
          {
            label: 'Flagged "monthly payment" concern',
            source: "Call notes",
            icon: "phone",
          },
          {
            label: "Requested competitor comparison",
            source: "Competitor intel",
            icon: "lock",
          },
        ],
      },
    ],
  },
  makeCustomer("customer_intersolar", "Inter Solar", "manuelschneider@reonic.de", "Ungarnstraße 7, 52070 Aachen", "Solar 8.2 kWp", 18889),
  makeCustomer("customer_quote_1", "Udo Sill", "udo.sill@reonic.de", "aLATSEESTR 12, 86162 Augsburg", "Solar 7.8 kWp", 17539),
  makeCustomer("customer_anja", "Anja Becker", "anja.becker@reonic.de", "Lindenweg 14, 80331 München", "Solar + battery", 24210),
  makeCustomer("customer_klaus", "Klaus Hoffmann", "klaus.hoffmann@reonic.de", "Bahnhofstraße 3, 70173 Stuttgart", "Heat pump", 31420),
  makeCustomer("customer_birgit", "Birgit Wagner", "birgit.wagner@reonic.de", "Gartenstraße 22, 50667 Köln", "Solar 6.4 kWp", 15760),
  makeCustomer("customer_thomas", "Thomas Fischer", "thomas.fischer@reonic.de", "Hauptstraße 88, 60311 Frankfurt", "Solar + wallbox", 22980),
  makeCustomer("customer_paul", "Paul Fleischmann", "paul.fleischmann@reonic.de", "Langweiderstraße 4a, 86462 Langweid", "Solar 10.1 kWp", 26269),
  makeCustomer("customer_lars", "Lars-Manuel Schneider", "manuel.schneider@reonic.de", "Provinostraße 52, 86153 Augsburg", "Solar + battery", 21140),
  makeCustomer("customer_udo_install_1", "Udo Sill", "manuel.schneider@reonic.de", "Am Mittleren Moos 48, 86167 Augsburg", "Solar 8.8 kWp", 19448),
  makeCustomer("customer_udo_install_2", "Udo Sill", "manuel.schneider@reonic.de", "Am Mittleren Moos 48, 86167 Augsburg", "Solar + battery", 27310),
  makeCustomer("customer_manuel_done_1", "Schneider, Manuel", "manuel.schneider@reonic.de", "Provinostraße 52, 86153 Augsburg", "Solar 5.5 kWp", 13898),
  makeCustomer("customer_manuel_done_2", "Schneider, Manuel", "manuel.schneider@reonic.de", "Odenkirchener Straße 198, 41236 Mönchengladbach", "Heat pump", 16540),
];

export const quoteSeeds: QuoteRecord[] = [
  {
    id: DEMO_QUOTE_ID,
    customerId: DEMO_CUSTOMER_ID,
    title: "Sabine Müller",
    customerName: "Sabine Müller",
    contactLine: "Sabine Müller · sabine.mueller@email.de",
    address: "Sonnenberg 7, 21218 Seevetal",
    columnId: "waiting_response",
    ownerName: "Jonas",
    ownerAvatar: "JK",
    ownerTone: "yellow",
    value: 38400,
    sentAt: "2026-06-17T09:20:00.000Z",
    lastActionAt: "2026-06-21T07:30:00.000Z",
    quoteAgeDays: 4,
    daysSinceLastAction: 0,
    productSummary: "Heat pump + Solar 9.6 kWp",
    nextAction: {
      kind: "generate_strategy",
      label: "Generate strategy",
      tone: "blue",
    },
    strategyStale: false,
  },
  quote("quote_intersolar", "customer_intersolar", "Intersolar Demo", "waiting_response", 18889, "Generate strategy", "generate_strategy", "blue", "Manuel", "MS", "green"),
  quote("quote_udo", "customer_quote_1", "Quote 1", "waiting_response", 17539, "Schedule a call", "schedule_call", "yellow", "Manuel", "MS", "green", "Signature pending"),
  quote("quote_anja", "customer_anja", "Becker, Anja", "waiting_response", 24210, "Follow up on signature", "follow_up_signature", "yellow", "Lukas", "LK", "blue", "Signature pending"),
  quote("quote_klaus", "customer_klaus", "Hoffmann, Klaus", "waiting_response", 31420, "Generate strategy", "generate_strategy", "blue", "Sophie", "SP", "yellow"),
  quote("quote_birgit", "customer_birgit", "Wagner, Birgit", "waiting_response", 15760, "Schedule a call", "schedule_call", "yellow", "Manuel", "MS", "green", "Signature pending"),
  quote("quote_thomas", "customer_thomas", "Fischer, Thomas", "waiting_response", 22980, "Generate strategy", "generate_strategy", "blue", "Lukas", "LK", "blue"),
  quote("quote_paul", "customer_paul", "Fleischmann, Paul", "specialist_partner", 26269, "", "none", "gray", "Manuel", "MS", "green", "Signed"),
  quote("quote_lars", "customer_lars", "Schneider, Lars-Manuel", "specialist_partner", 21140, "", "none", "gray", "Manuel", "MS", "green", "Signed"),
  quote("quote_udo_install_1", "customer_udo_install_1", "Sill, Udo", "waiting_installation", 19448, "", "none", "gray", "Manuel", "MS", "green", "Signed"),
  quote("quote_udo_install_2", "customer_udo_install_2", "Sill, Udo", "waiting_installation", 27310, "", "none", "gray", "Manuel", "MS", "green", "Signed"),
  quote("quote_manuel_done_1", "customer_manuel_done_1", "Schneider, Manuel", "completed", 13898, "", "none", "gray", "Manuel", "MS", "green", "Signed"),
  quote("quote_manuel_done_2", "customer_manuel_done_2", "Schneider, Manuel", "completed", 16540, "", "none", "gray", "Manuel", "MS", "green", "Signed"),
];

export const actionSeeds: ActionRecord[] = [
  {
    id: "action_sabine_generate",
    quoteId: DEMO_QUOTE_ID,
    customerId: DEMO_CUSTOMER_ID,
    taskType: "Phone Call",
    title: "Generate closing strategy",
    status: "recommended",
    logPromptTitle: "Generate strategy",
    defaultLogText: "",
  },
];

export const noteSeeds: NoteRecord[] = [
  {
    id: "note_sabine_audio",
    customerId: DEMO_CUSTOMER_ID,
    type: "audio",
    title: "Transcription",
    duration: "1:24",
    transcriptStatus: "Transcribed",
    body:
      "Sabine seemed really set on the environmental side — kept asking how much CO2 she'd actually cut. She also mentioned twice that she's comparing us with another installer and is watching the monthly cost closely. Roof faces south-west, no shading, so the 9.6 kWp config should perform well.",
    authorName: "Jonas Krüger · Installer",
    authorAvatar: "JK",
    createdAt: "2026-06-21T07:14:00.000Z",
  },
  {
    id: "note_sabine_site",
    customerId: DEMO_CUSTOMER_ID,
    type: "text",
    title: "Site visit notes",
    body:
      "Existing oil heating is 18 years old and due for replacement — strong urgency. Meter cabinet has room for the inverter. Customer asked about hold-time on the quote; said she'd decide within two weeks.",
    authorName: "Jonas Krüger · Installer",
    authorAvatar: "JK",
    createdAt: "2026-06-20T14:32:00.000Z",
  },
];

export const calendarSeeds: CalendarEventRecord[] = [
  event("cal_1", "Materiali...", "2026-06-22T06:10:00.000Z", "2026-06-22T08:15:00.000Z", "tasks", "blue"),
  event("cal_2", "Kund...", "2026-06-22T09:00:00.000Z", "2026-06-22T10:50:00.000Z", "tasks", "green"),
  event("cal_3", "Angeb...", "2026-06-22T11:00:00.000Z", "2026-06-22T12:55:00.000Z", "tasks", "blue"),
  event("cal_4", "Wartungsprotokoll", "2026-06-23T06:30:00.000Z", "2026-06-23T08:45:00.000Z", "tasks", "green"),
  event("cal_5", "Fahrt z...", "2026-06-22T06:15:00.000Z", "2026-06-22T08:50:00.000Z", "personal", "blue"),
  event("cal_6", "Einkauf...", "2026-06-22T10:45:00.000Z", "2026-06-22T12:20:00.000Z", "personal", "yellow"),
  event("cal_7", "Kundenbesu...", "2026-06-22T13:10:00.000Z", "2026-06-22T15:10:00.000Z", "personal", "blue"),
  event("cal_8", "Installati...", "2026-06-22T06:20:00.000Z", "2026-06-22T08:00:00.000Z", "theo", "green"),
  event("cal_9", "Rückfra...", "2026-06-22T09:00:00.000Z", "2026-06-22T10:10:00.000Z", "theo", "orange"),
  event("cal_10", "Besu...", "2026-06-22T12:35:00.000Z", "2026-06-22T14:00:00.000Z", "theo", "blue"),
  event("cal_11", "Wartu...", "2026-06-23T07:15:00.000Z", "2026-06-23T09:00:00.000Z", "theo", "green"),
  event("cal_12", "Lager...", "2026-06-23T10:30:00.000Z", "2026-06-23T12:05:00.000Z", "theo", "blue"),
];

function makeCustomer(
  id: string,
  name: string,
  email: string,
  address: string,
  system: string,
  quoteValue: number,
): CustomerRecord {
  const initials = name
    .split(/[\s,-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return {
    id,
    initials,
    name,
    email,
    phone: "+49 821 100200",
    address,
    system,
    quoteValue,
    communicationPreference: "Email",
    decisionNote: "Standard residential quote follow-up.",
    householdNote: "No special household note recorded.",
    updatedAt: DEMO_NOW,
    buyerProfile: [],
  };
}

function quote(
  id: string,
  customerId: string,
  title: string,
  columnId: QuoteRecord["columnId"],
  value: number,
  nextLabel: string,
  nextKind: QuoteRecord["nextAction"]["kind"],
  nextTone: QuoteRecord["nextAction"]["tone"],
  ownerName: string,
  ownerAvatar: string,
  ownerTone: QuoteRecord["ownerTone"],
  statusLabel?: string,
): QuoteRecord {
  const customer = customerSeeds.find((item) => item.id === customerId);
  if (!customer) {
    throw new Error(`Missing customer seed for ${customerId}`);
  }

  return {
    id,
    customerId,
    title,
    customerName: customer.name,
    contactLine: `${customer.name} · ${customer.email}`,
    address: customer.address,
    columnId,
    ...(statusLabel ? { statusLabel, statusTone: statusLabel === "Signed" ? "blue" : "yellow" } : {}),
    ownerName,
    ownerAvatar,
    ownerTone,
    value,
    sentAt: "2026-06-17T09:20:00.000Z",
    lastActionAt: "2026-06-19T12:10:00.000Z",
    quoteAgeDays: 4,
    daysSinceLastAction: 2,
    productSummary: customer.system,
    nextAction: {
      kind: nextKind,
      label: nextLabel,
      tone: nextTone,
    },
    strategyStale: false,
  };
}

function event(
  id: string,
  title: string,
  start: string,
  end: string,
  row: CalendarEventRecord["row"],
  color: CalendarEventRecord["color"],
): CalendarEventRecord {
  return { id, title, start, end, row, color };
}

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subsection"; title: string; blocks: LegalBlock[] };

export interface LegalSection {
  number: number;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  shortTitle: string;
  path: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
  closing?: string;
}

export interface Candidate {
  readonly login: string; // GitHub username
  readonly name: string | null;
  readonly location: string | null;
  readonly email: string | null;
  readonly company: string | null;
  readonly avatar_url: string;
  readonly html_url: string;
  readonly bio?: string | null;
}


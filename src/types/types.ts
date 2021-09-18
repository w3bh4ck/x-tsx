export interface PromotedType {}

export interface SliderTileProps {
  topic: string;
  status: string;
  startAt?: string;
  tutor: Tutor;
  subject?: { name: string };
}

interface Tutor {
  firstname: string;
  lastname: string;
}

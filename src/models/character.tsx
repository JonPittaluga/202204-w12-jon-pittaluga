export interface iCharacter {
  // basic info
  id?: number;
  name: string;
  family: string;
  image: string;
  age: number;
  emoji: string;
  // interactions
  message: string;
  isAlive: boolean;
  // based on every role
  role: eRole;
  metadata: {
    Dexterity?: number;
    Weapon?: string;
    'Years of reign'?: number;
    Knight?: string;
    'Brown nose level'?: number;
    'Counseler of'?: string;
  };
}

export type eRole = 'fighter' | 'king' | 'advisor' | 'squire';

export interface SimulatedAccount {
  id: number;
  avatar: string;
  name: string;
  friendCount: number;
  status: 'idle' | 'scanning' | 'connecting' | 'posting' | 'active' | 'checkpointed';
  successCount: number;
  trustScore: number;
}

export interface ProcessLog {
  id: string;
  time: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface SolutionsStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

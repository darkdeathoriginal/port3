import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  powerLevel: number; // 0-100
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ElementType;
  color: string;
}

export enum ChatState {
  IDLE,
  THINKING,
  RESPONDING,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
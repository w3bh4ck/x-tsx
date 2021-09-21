import { ReactNode } from 'react';
import rootReducer from '../redux/reducers/index';

export type RootState = ReturnType<typeof rootReducer>;

export interface LiveLessonDataInterface {
  promotedLessons: Record<string, unknown>[];
}

export interface allLessonsDataInterface {
  allLessons: Record<string, unknown>[];
}

export interface LessonInterface {
  topic: string;
  status: string;
  startAt?: string;
  tutor: TypeTutor;
  imageUrl: string;
  subject?: { name: string };
}

export interface EmptyStateInterface {
  title: string;
  description: string;
  children: ReactNode;
}

export interface TypeTutor {
  firstname: string;
  lastname: string;
}

export interface TypeSubject {
  name: string;
}

export interface StyleProps {
  bgImage?: string;
}

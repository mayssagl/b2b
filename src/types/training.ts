// src/types/training.ts
export type TrainingStatus = 'Pending' | 'Scheduled' | 'Active' | 'Completed' | 'Cancelled'

export interface Session {
  id: string
  title: string
}

export interface Student {
  id: string
  name: string
}

export interface Training {
  id: string
  name: string
  client: string
  country: string
  venue: string
  language: string
  studentCount: number
  startDate: string | null
  endDate: string | null
  completionThreshold: number
  status: TrainingStatus
  instructorId: string | null
  deliveryManagerId: string
  po: {
    ref: string
    value: number
    startDate: string
    endDate: string
    docUrl: string | null
  }
  modules: string[]
  sessions: Session[]
  students: Student[]
}
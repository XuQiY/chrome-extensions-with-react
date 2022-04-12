export enum ENVIRONMENT {
    DEV,
    TEST,
    RELEASE,
    MASTER
  }

export interface Account  {
    key: string | number
    name: string
    phone: string
    pwd: string
    tags: string[]
  }
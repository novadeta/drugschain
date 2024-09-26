import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const tw = (...tw: ClassValue[]) => twMerge(clsx(...tw))

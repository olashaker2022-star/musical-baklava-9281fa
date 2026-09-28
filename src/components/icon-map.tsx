import {
  BookOpen,
  ScrollText,
  Users,
  UserRound,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  CalendarDays,
  MoonStar,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '@/data/hekaya'

export const iconMap: Record<IconName, LucideIcon> = {
  'book-open': BookOpen,
  scroll: ScrollText,
  users: Users,
  'user-round': UserRound,
  'heart-handshake': HeartHandshake,
  'message-circle': MessageCircle,
  sparkles: Sparkles,
  'calendar-days': CalendarDays,
  'moon-star': MoonStar,
}

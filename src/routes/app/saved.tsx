import { createFileRoute } from '@tanstack/react-router'
import { Bookmark } from 'lucide-react'
import { ComingSoonScreen } from '@/components/app/ComingSoonScreen'

export const Route = createFileRoute('/app/saved')({
  component: () => (
    <ComingSoonScreen
      title="محفوظاتي"
      icon={Bookmark}
      message="ستقدر تحفظ آياتك وقصصك وأحاديثك المفضّلة هنا لترجع لها في أي وقت."
    />
  ),
})

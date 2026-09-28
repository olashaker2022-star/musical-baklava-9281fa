import { createFileRoute } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import { ComingSoonScreen } from '@/components/app/ComingSoonScreen'

export const Route = createFileRoute('/app/search')({
  component: () => (
    <ComingSoonScreen
      title="البحث"
      icon={Search}
      message="البحث الشامل عبر القرآن والحديث والقصص والسيرة والصحابة والصحابيات قادم في الإصدار القادم."
    />
  ),
})

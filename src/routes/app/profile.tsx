import { createFileRoute } from '@tanstack/react-router'
import { User } from 'lucide-react'
import { ComingSoonScreen } from '@/components/app/ComingSoonScreen'

export const Route = createFileRoute('/app/profile')({
  component: () => (
    <ComingSoonScreen
      title="حسابي"
      icon={User}
      message="رحلتك التعليمية، الإشعارات، الوضع الليلي، وحجم الخط — كل إعدادات حسابك ستكون هنا."
    />
  ),
})

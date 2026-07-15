import { AppLayout } from '../components/AppLayout'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'

export function Dashboard() {
  return (
    <AppLayout>
      <h1 className="mb-4 text-2xl font-semibold text-neutral-heading">Dashboard</h1>
      <Card className="flex items-center gap-3">
        <Badge variant="success">On Track</Badge>
        <Button variant="primary">Primary Action</Button>
      </Card>
    </AppLayout>
  )
}

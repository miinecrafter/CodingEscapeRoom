import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

type Props = {
  type: string
}

export function Popup({type} : Props) {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  const handleDashboard = () => {
    router.push('/dashboard')
  }

  const handlePlayAgain = () => {
    router.refresh()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900">
        <DialogHeader className="font-bold text-3xl">
            Play Again?
        </DialogHeader>
        <div className="m-5 font-bold text-1xl">
          <p >Great Job You Used the Power of {type}</p>
        </div>
        <div className="flex justify-between">
          <Button className="bg-orange-400 text-white rounded-xl hover:bg-orange-300" onClick={handleDashboard}>
            Dashboard
          </Button>
          <Button className="bg-purple-800 text-white rounded-xl hover:bg-purple-400" onClick={handlePlayAgain}>
            Play Again
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

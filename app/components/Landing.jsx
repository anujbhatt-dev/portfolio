import { redirect } from "next/navigation"

export default function Landing() {
  redirect("/v1")
  return (
    <div></div>
  )
}

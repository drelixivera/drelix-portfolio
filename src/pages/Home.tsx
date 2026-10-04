import { Container } from "../components/ui/Container"
import { SectionLabel } from "../components/ui/SectionLabel"

export default function Home() {
  return (
    <>
      <Container className="py-32">
        <SectionLabel>home</SectionLabel>
        <h1 className="font-display text-7xl mt-4">Drelix Ivera</h1>
      </Container>
    </>
  )
}
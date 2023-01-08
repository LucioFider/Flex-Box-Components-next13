import { Inter } from "@next/font/google";
import { Container } from "../components/container";
import { Clients } from "../components/sections/clients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Clients />
    </Container>
  );
}

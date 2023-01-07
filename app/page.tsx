import Image from "next/image";
import { Inter } from "@next/font/google";
import { Container } from "../components/container";
import { Clients } from "../components/clients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Clients />
    </Container>
  );
}

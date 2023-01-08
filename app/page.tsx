import { Inter } from "@next/font/google";
import { Container } from "../components/container";
import { Clients } from "../components/sections/clients";
import { StarsIllustration } from "../components/icons/stars";
import { UnlikeAnyTool } from "../components/sections/unlike-any-tool";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Clients />
      <div
        className={classNames(
          "z-[-1] mask-radial-faded pointer-events-none relative my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.5]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <UnlikeAnyTool />
    </Container>
  );
}

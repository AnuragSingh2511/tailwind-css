import { Container } from "../components/container";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative bg-blue-100">
      {/* <div className="h-40 w-full absolute inset-0 bg-radial from-white to-transparent"/> */}
      <Container> 
        <Navbar />
      </Container>
    </div>
  );
}

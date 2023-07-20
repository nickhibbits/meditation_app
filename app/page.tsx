import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="container flex flex_column flex_center">
      <Button text={"Start Session"} link={"/session_options"} />
    </main>
  );
}

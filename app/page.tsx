import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="container flex flex_column flex_center">
      <Button
        text={"Start Session"}
        url={"/session_options"}
        justifyContent="center"
      />
    </main>
  );
}

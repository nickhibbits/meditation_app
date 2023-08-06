import Background from "@/components/Background";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className={`container flex flex_column flex_center`}>
      <Background imgSrc={null} />
      <Button
        text={"Start Session"}
        url={"/session_options"}
        justifyContent="center"
        onClick={null}
      />
    </main>
  );
}

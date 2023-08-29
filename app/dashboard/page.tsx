import Background from "@/components/Background";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <main className="container container_nav flex flex_column flex_center">
        {" "}
        <Background imgSrc={null} />
        <Button
          text={"Start Session"}
          url={"/session"}
          justifyContent="center"
          onClick={null}
          type={"button"}
        />
      </main>
    </>
  );
}

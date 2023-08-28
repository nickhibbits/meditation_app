import Background from "@/components/Background";
import Button from "@/components/Button";

export default function Home() {
  // console.log(
  //   "🔴 TODO",
  //   "research how to check session on server -- getServerSideProps(context) not available in app folder, but server actions dont give access to a request or context object needed for getSession(req)"
  // );

  return (
    <main className="container flex flex_column flex_center">
      {" "}
      <Background imgSrc={null} />
      <Button
        text={"Start Session"}
        url={"/session_options"}
        justifyContent="center"
        onClick={null}
        type={"button"}
      />
    </main>
  );
}

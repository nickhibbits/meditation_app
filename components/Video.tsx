import styles from "@/styles/components/Background.module.scss";

function Video({ videoId }: { videoId: string }) {
  return (
    <iframe
      src={`https://player.cloudinary.com/embed/?public_id=${videoId}&cloud_name=doyykot3y&controls=false&muted=true&autoplay=true&loop=true`}
      className={styles.video}
      frameBorder="0"
    ></iframe>
  );
}

export default Video;

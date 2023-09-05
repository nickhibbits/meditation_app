import styles from "@/styles/components/Background.module.scss";

function Video() {
  return (
    <div className={styles.video_wrapper}>
      <iframe
        src="https://player.cloudinary.com/embed/?public_id=cfdf635nth0itruz60sd&cloud_name=doyykot3y&controls=false&muted=true&autoplay=true&loop=true"
        width="640"
        height="360"
        style={{ height: "auto", width: "100%" }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      {/* <video
        className={styles.video}
        src="/public/video/pexels-rostislav-uzunov.mp4"
      >
        <source
          src="/public/video/pexels-rostislav-uzunov.mp4"
          type="video/mp4"
        />
      </video> */}
    </div>
  );
}

export default Video;

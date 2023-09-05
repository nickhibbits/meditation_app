import { jungleId, mountainId, waterId } from "@/lib/video";

import Video from "@/components/Video";

function Background({ imgSrc }: { imgSrc: string | null }) {
  if (imgSrc === null) {
    return null;
  } else if (imgSrc === "Ocean") {
    return <Video videoId={waterId} />;
  } else if (imgSrc === "Mountains") {
    return <Video videoId={mountainId} />;
  } else {
    return <Video videoId={jungleId} />;
  }
}

export default Background;

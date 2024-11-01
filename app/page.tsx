"use client"
import { useEffect, useState } from "react"

import { getVideos, Video } from "@/app/videos"


function VideoList() {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    async function waitForVideos() {
      const videos = await getVideos()

      if (videos) {
        setVideos(videos)
      }
    }
    waitForVideos()
  },
  []
  )

  const videoElementClass = "mx-2"

  if (!videos) {
    return (
      <div>
        <p className={videoElementClass}>
          Videos loading, please wait...
        </p>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {videos.map((video: Video) => (
          <li key={video.id} className={videoElementClass}>
            {video.name}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <h1 className="text-center font-semibold text-xl my-4">
        Video List
      </h1>
      <VideoList />
    </div>
  );
}

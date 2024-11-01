"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export interface Video {
  id: number
  name: string
  url: string
  votes: number
  length: number
}


export async function getVideos() {
  const videos = await prisma.video.findMany()

  return videos
}

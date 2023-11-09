import { fetcher } from "@/app/libs/fetcher";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const getImages = async (mediaId) => {
        const img = await fetcher(`https://dealacres.com/wp-json/wp/v2/media/${mediaId}`);
        return img
    }
    try {
        const url = "https://dealacres.com/wp-json/wp/v2/posts";
        const posts = await fetcher(url);

        const postsThumbs = await Promise.all(posts.map(async (post) => {
            const img = await getImages(post.featured_media);
            return img;
        }));

        console.log(postsThumbs);
        return NextResponse.json({ posts, postsThumbs }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ err });
    }
}
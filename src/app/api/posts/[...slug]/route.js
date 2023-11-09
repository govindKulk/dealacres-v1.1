import { NextResponse } from "next/server";
import { fetcher } from "@/app/libs/fetcher";
export async function GET(req, { params }) {
    try {
        const slug = params.slug;
        const url = `https://dealacres.com/wp-json/wp/v2/posts?slug=${slug[0]}`;
        const res = await fetch(url);
        const jsonData = await res.json();
        const post = jsonData[0]; 
        console.log(params);
        const coverImage = await fetcher(`https://dealacres.com/wp-json/wp/v2/media/${post.featured_media}`)
        const formatedPost = {
            ...post,
            coverImage

        }
        return NextResponse.json({ formatedPost }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ err });
    }
}
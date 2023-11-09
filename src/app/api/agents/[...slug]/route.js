import { NextResponse } from "next/server";
import { fetcher } from "@/app/libs/fetcher";
export async function GET(req, { params }) {
    try {
        const slug = params.slug;
        const url = `https://dealacres.com/wp-json/wp/v2/agents?slug=${slug[0]}`;
        const res = await fetch(url);
        const jsonData = await res.json();
        const agent = jsonData[0]; 
        console.log(params);
        const coverImage = await fetcher(`https://dealacres.com/wp-json/wp/v2/media/${agent.featured_media}`)
        const formatedAgent = {
            ...agent,
            coverImage

        }
        return NextResponse.json({ formatedAgent }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ err });
    }
}
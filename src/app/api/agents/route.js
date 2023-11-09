import { fetcher } from "@/app/libs/fetcher";
import { NextResponse } from "next/server";

export async function GET (req) {
    const getImages = async (mediaId) => {
        const img = await fetcher(`https://dealacres.com/wp-json/wp/v2/media/${mediaId}`);
        return img
    }
   
    try{
    const url = `https://dealacres.com/wp-json/wp/v2/agents`;

    const agents = await fetcher(url);
    
    
    const agentsThumbs = await Promise.all(agents.map(async (agent) => {
        const img = await getImages(agent.featured_media);
        return img;
    }));

    console.log(agentsThumbs);
    return NextResponse.json({ agents, agentsThumbs }, { status: 200 })
   }catch(error){
    console.log(error)
    return NextResponse.json({error})
   }


}
import {ragChat} from "@/lib/rag-chat";
import {redis} from "@/lib/redis";
import ChatWrapper from "@/components/ChatWrapper";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

interface PageProps {
    params : Promise<{ url? : string[]}>
}


function reconstructUrl(url : string[]){

    const decodedComponent = url.map((x) => decodeURIComponent(x))
    return decodedComponent.join("/")
}


export default async function Page({ params } : PageProps) {

    const resolvedParams = await params;

    if(!(resolvedParams.url)?.includes("http") || !resolvedParams.url.includes("https") ){
            redirect("/")
    }

    const cookieStore = await cookies();

  const reconstructedUrl =  reconstructUrl(resolvedParams.url as string[]);
    const sessionCookie = cookieStore.get("sessionId")?.value;


    const sessionId = ( reconstructedUrl + "---" + sessionCookie ).replace(/\//g,"");

  const isAlreadyIndexed = await redis.sismember("indexed-url", reconstructedUrl);


  const initialMessages = await ragChat.history.getMessages({
      amount : 10,
      sessionId : sessionId,
  })
    if (!isAlreadyIndexed) {
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: { chunkOverlap: 50, chunkSize: 200 },
        });

        await redis.sadd("indexed-url", reconstructedUrl);
    }





    return (
        <div>

            <ChatWrapper sessionId={sessionId} initialMessages={initialMessages}  />
        </div>
    )
}
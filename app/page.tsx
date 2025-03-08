

export default function Home() {
  return (
   <div className="flex flex-col justify-center items-center w-full h-full">
       <div className="max-w-7xl">
           <h1 className="text-5xl mb-2 font-medium">To Use this Product!</h1>
           <p>1) Just Copy a url,for example a random topic from wikipedia.</p>

           <p>2) After that just paste that url after the base url of the page for  exmaple: <code className="bg-white text-black p-2 rounded-lg mr-2">http://localhost:3000/thecopiedurl</code>
               and add only simple non protected websites for this process.
           </p>

           <p>3) After that a chat interface will be open and you can ask the question based on the provided website.</p>

           <p>4) Don't try to many times.This built on top of free tier from upstash.</p>

           <p>5) Only for project showcasing.</p>
       </div>

   </div>
  );
}

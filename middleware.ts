import {NextRequest, NextResponse} from "next/server";

export function middleware(req : NextRequest){
    const res = NextResponse.next();

    const cookie = req.cookies.get("sessionId");

    if(!cookie){
        req.cookies.set("sessionId",crypto.randomUUID())
    }

    return res
}
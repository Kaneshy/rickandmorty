import Products from "@/lib/models/Episodes";
import { connectToDB } from "@/lib/mongoose"
import { NextResponse } from "next/server"


export async function GET(req, {params}) {
    connectToDB();
    try {
        console.log('runinng get')
        const product = await Products.findById(params.id)
        return NextResponse.json(product)
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/products', err.message)
    }
};
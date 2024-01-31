import Products from "@/lib/models/Episodes";
import { connectToDB } from "@/lib/mongoose"
import { NextResponse } from "next/server"

export async function POST(req, res) {
    const body = await req.json();
    connectToDB();
    const newProduct = new Products({ ...body });
    try {
        const savedProduct = await newProduct.save();
        return NextResponse.json(savedProduct)

    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/products', err.message)
    }
};
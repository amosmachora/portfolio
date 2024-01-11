import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  console.log(body);

  revalidatePath("/portfolio");
  revalidatePath("/portfolio/[slug]");

  //rerender the pages somehow

  return NextResponse.json({ message: "success" });
};

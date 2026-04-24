export async function POST(req) {
    try {
        const body = await req.json();

        console.log("📩 Lead Received:", body);

        return Response.json({
            success: true,
            message: "Lead captured successfully",
        });
    } catch (error) {
        return Response.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        );
    }
}
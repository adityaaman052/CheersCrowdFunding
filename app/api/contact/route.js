import connectDB from "../../../db/connectDb"; // Adjust path as needed
import Contact from "../../../models/contactModel"; // Adjust path as needed

// Handler for POST request to store the contact information in the DB
export async function POST(req) {
  await connectDB();

  try {
    const { name, email, message } = await req.json();

    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    return new Response(JSON.stringify({ success: true, message: "Contact saved successfully!" }), { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to save contact." }), { status: 500 });
  }
}

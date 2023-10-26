import { supabase } from "../config/supabase.js";
import { createClient } from "@supabase/supabase-js";

export const getQuestions = async (req, res) => {
  try {
    let { data, error } = await supabase
      .from("Questions")
      .select("*, Options(*)");
      
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json(error, { message: "Error" });
  }
};

export const createQuestion = async (req, res) => {
  try {
    // let id = req.body.id;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json("Title is required");
    }
    // Insert the question into the database
    let { data, error } = await supabase
      .from("Questions")
      .insert({ title: title });

    // Send a success response with a 200 status code
    return res.status(200).json(data);
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error:", error);
    return res.status(500).json(error, { message: "Error" });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.body;
  const { error } = await supabase.from("Questions").delete().eq("id", id);

  if (error) {
    res.status(500).json(error);
  } else {
    res.json({ message: "Question deleted successfully" });
  }
};

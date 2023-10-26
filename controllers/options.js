import { supabase } from "../config/supabase.js";
import { createClient } from "@supabase/supabase-js";

export const createOptions = async (req, res) => {
  try {
    const { text, questions_id } = req.body;

    console.log(req.body, "createOptions!!");

    if (!text) {
      return res.status(400).json({ message: "Text is required" });
    }

    if (!questions_id) {
      return res.status(400).json({ message: "Question ID is required" });
    }

    // Retrieve the question ID from the Questions table
    const { data: question, error: questionError } = await supabase
      .from("Questions")
      .select("id")
      .eq("id", questions_id)
      .single();

    if (questionError) {
      console.error(questionError);
      return res.status(500).json({ message: "questionError" });
    }

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Insert the new option with the retrieved question ID
    const { data, error } = await supabase
      .from("Options")
      .insert({ text: text, questions_id: question.id });

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "insert error" });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const add_vote = async (req, res) => {
  try {
    const { id } = req.params;

    // console.log("id:", id);

    const { data: option, error } = await supabase
      .from("Options")
      .update({ votes: 100 })
      .eq("id", id)
      .select();

    console.log("error:", error);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "update error" });
    }

    if (!option) {
      return res.status(404).json({ message: "Option not found" });
    }
    await Vote_link(id);
    return res.status(200).json(option);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export async function Vote_link(id) {
  try {
    const { data: option, error } = await supabase
      .from("Options")
      .insert({ Link_to_vote: `http://localhost:3000/api/options/${id}/votes` })
      .eq("id", id)
      .select();

      if (error) {
        console.error(error);
        return { message: "update error" };
      }
  
      if (!option) {
        return { message: "Option not found" };
      }
  
      console.log(`Successfully added vote for option ${id}. Vote URL: ${option.Link_to_vote}`);
  
      return option;
    } catch (error) {
      console.error(error);
      return { message: "Server error" };
    }
}

export const deleteOpt = async (req, res) => {
  const { id } = req.body;
  const { error } = await supabase.from("Options").delete().eq("id", id);
  if (error) {
    res.status(500).json(error);
  } else {
    res.json({ message: "Question deleted successfully" });
  }
};

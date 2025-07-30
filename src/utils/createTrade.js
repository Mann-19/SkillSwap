import supabase from "../db/supabase";

async function createTrade(formData) {
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return { data: null, error: authError };
  }

  const payload = {
    ...formData,
    user_id: user.id,
  }

  try {
    console.log("Insert payload: ", payload);

    const { data, error } = await supabase
      .from("offers")
      .insert(payload)
      .select()
      .single();

    return { data, error };
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default createTrade;

export const saveUserToDB = async (userData) => {
  try {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
export const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`Http error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error occured, ", error.message);
    throw error;
  }
};

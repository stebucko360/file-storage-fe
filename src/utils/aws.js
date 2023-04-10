import axios from "axios";

const fileStorageBE = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
});

export const fetchAllS3Objects = async () => {
  try {
    const response = await fileStorageBE.get(`/api/s3`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

import { useState, useEffect } from "react";
import { fetchAllS3Objects } from "../../src/utils/aws";

export default function Table() {
  const [s3Objects, setS3Objects] = useState([]);

  useEffect(() => {
    const fetchS3 = async () => {
      try {
        const s3 = await fetchAllS3Objects();
        setS3Objects(s3.objects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchS3();
  }, []);

  return (
    <>
      {s3Objects.length > 0 ? (
        <table>
          <tr>
            <th>File Name</th>
            <th>Size</th>
            <th>URL</th>
          </tr>
          {s3Objects.map((s3Object) => (
            <tr key={s3Object.key}>
              <td>{s3Object.key}</td>
              <td>{s3Object.size}</td>
              <td>{s3Object.url}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

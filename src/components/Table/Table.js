import { useState, useEffect } from "react";
import { fetchAllS3Objects } from "../../utils/aws";
import styles from "./Table.module.css";

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

  const setBackgroundForCell = (index) => {
    if (index % 2 === 0) {
      return styles.tableCellEven;
    } else return styles.tableCellOdd;
  };
  return (
    <>
      {s3Objects.length > 0 ? (
        <table>
          <tr>
            <th className={styles.tableHeader}>File Name</th>
            <th className={styles.tableHeader}>Size</th>
            <th className={styles.tableHeader}>URL</th>
          </tr>
          {s3Objects.map((s3Object, index) => (
            <tr key={s3Object.key}>
              <td className={setBackgroundForCell(index)}>{s3Object.key}</td>
              <td className={setBackgroundForCell(index)}>{s3Object.size}</td>
              <td className={setBackgroundForCell(index)}>{s3Object.url}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

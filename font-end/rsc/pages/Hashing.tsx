import { useEffect, useState } from "react";
import { getHashingData } from "../apiService/apiService";

const Hashing = () => {
  const [hashTable, setHashTable] = useState(null);

  useEffect(() => {
    getHashingData().then((data) => setHashTable(data));
  }, []);
  
  return (
    <div>
      <h1>Visualização de Hashing</h1>
      <pre>{JSON.stringify(hashTable, null, 2)}</pre>
    </div>
  );
};

export default Hashing;

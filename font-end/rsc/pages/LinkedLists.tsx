import { useEffect, useState } from "react";
import { getLinkedListData } from "../apiService/apiService";

const LinkedLists = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    getLinkedListData().then((data) => setList(data));
  }, []);

  return (
    <div>
      <h1>Visualização de Lista Encadeada</h1>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};

export default LinkedLists;

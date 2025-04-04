import { useEffect, useState } from "react";
import { getBenchmarkData } from "../apiService/apiService";

const Benchmark = () => {
  const [benchmark, setBenchmark] = useState(null);

  useEffect(() => {
    getBenchmarkData().then((data) => setBenchmark(data));
  }, []);

  return (
    <div>
      <h1>Benchmark de Estruturas de Dados</h1>
      {benchmark ? (
        <div>
          <h2>{benchmark.testCase}</h2>
          <ul>
            {benchmark.results.map((result, i) => (
              <li key={i}>
                <strong>{result.structure}</strong> - Tempo: {result.timeMs}ms, Memória: {result.memoryKb}kb
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Benchmark;

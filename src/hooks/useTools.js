import { useEffect, useState } from 'react';

const useTools = (_id) => {
  const [tools, setTools] = useState([]);
  let url = 'http://localhost:4000/tools';

  useEffect(() => {
    if (_id) {
      url = `http://localhost:4000/tools/${_id}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [_id]);

  return tools;
};

export default useTools;
